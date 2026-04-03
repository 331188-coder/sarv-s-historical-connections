import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { AnimatePresence, motion, PanInfo } from 'framer-motion';
import { BookOpen, Briefcase, Church, Cpu, Landmark, Users, Lock, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import {
  getDailyTalonCards,
  SPRITE_CATEGORIES,
  SpriteCategory,
  SpriteIconKey,
  TalonCard,
} from '@/lib/talonData';
import { WinAnimation } from '@/components/game/WinAnimation';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

function SpriteIcon({ icon }: { icon: SpriteIconKey }) {
  const className = 'h-4 w-4';
  switch (icon) {
    case 'social': return <Users className={className} />;
    case 'political': return <Landmark className={className} />;
    case 'religious': return <Church className={className} />;
    case 'intellectual': return <BookOpen className={className} />;
    case 'technological': return <Cpu className={className} />;
    case 'economic': return <Briefcase className={className} />;
    default: return <BookOpen className={className} />;
  }
}

function getTodayKey(subject: string) {
  return `talon_played_${subject}_${new Date().toISOString().split('T')[0]}`;
}

function getUniquePeriods(cards: TalonCard[]): string[] {
  return [...new Set(cards.map(c => c.period))];
}

const TalonPage = () => {
  const [subject, setSubject] = useState<'apush' | 'apworld'>('apush');
  const [cards, setCards] = useState<TalonCard[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const [showExplanation, setShowExplanation] = useState<string | null>(null);
  const [isStarted, setIsStarted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isPerfect, setIsPerfect] = useState(true);
  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [cardStartTime, setCardStartTime] = useState(0);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<{ event: string; guessed: SpriteCategory; correct: SpriteCategory }[]>([]);
  const [hoveredSegment, setHoveredSegment] = useState<SpriteCategory | null>(null);
  const [activeSegment, setActiveSegment] = useState<SpriteCategory | null>(null);
  const [hexRadius, setHexRadius] = useState(148);
  const [hasPlayedToday, setHasPlayedToday] = useState(() =>
    localStorage.getItem(getTodayKey('apush')) === 'true'
  );

  const { user } = useAuth();
  const { toast } = useToast();
  const savedRef = useRef(false);

  const segments = useMemo(
    () => SPRITE_CATEGORIES.map((category, index) => ({ ...category, angle: index * 60 - 90 })),
    []
  );

  useEffect(() => {
    setCards(getDailyTalonCards(subject));
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    setMistakes(0);
    setShowExplanation(null);
    setIsStarted(false);
    setIsComplete(false);
    setIsPerfect(true);
    setShowWinAnimation(false);
    setTotalCorrect(0);
    setActiveSegment(null);
    savedRef.current = false;
    setHasPlayedToday(localStorage.getItem(getTodayKey(subject)) === 'true');
  }, [subject]);

  useEffect(() => {
    const handleResize = () => setHexRadius(window.innerWidth < 640 ? 106 : 148);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentCard = cards[currentIndex];

  const getClosestCategory = useCallback(
    (angleDeg: number) => {
      const normalized = ((angleDeg % 360) + 360) % 360;
      return segments.reduce(
        (closest, segment) => {
          const segmentAngle = ((segment.angle % 360) + 360) % 360;
          const rawDiff = Math.abs(segmentAngle - normalized);
          const diff = Math.min(rawDiff, 360 - rawDiff);
          return diff < closest.diff ? { name: segment.name, diff } : closest;
        },
        { name: segments[0].name, diff: Number.POSITIVE_INFINITY }
      ).name;
    },
    [segments]
  );

  const getCategoryFromOffset = useCallback(
    (x: number, y: number) => getClosestCategory(Math.atan2(y, x) * (180 / Math.PI)),
    [getClosestCategory]
  );

  const saveScore = useCallback((finalScore: number, finalMistakes: number, perfect: boolean) => {
    if (!user || savedRef.current) return;
    savedRef.current = true;
    const today = new Date().toISOString().split('T')[0];

    supabase
      .from('game_scores')
      .upsert({
        user_id: user.id,
        subject: subject,
        puzzle_date: today,
        score: finalScore,
        mistakes: finalMistakes,
        time_remaining: 0,
        is_perfect: perfect,
      }, { onConflict: 'user_id,subject,puzzle_date' })
      .then(({ error }) => {
        if (error) console.error('Failed to save Talon score:', error);
        else toast({ title: 'Score saved!', description: `${finalScore} PP added to the leaderboard.` });
      });
  }, [user, subject, toast]);

  const completeGame = useCallback((finalScore: number, finalMistakes: number, perfect: boolean) => {
    localStorage.setItem(getTodayKey(subject), 'true');
    setHasPlayedToday(true);
    setIsComplete(true);
    saveScore(finalScore, finalMistakes, perfect);
    if (perfect) setShowWinAnimation(true);
  }, [subject, saveScore]);

  const startGame = () => {
    setIsStarted(true);
    setCardStartTime(Date.now());
  };

  const handleCategorize = useCallback(
    (category: SpriteCategory) => {
      if (!currentCard || showExplanation) return;
      const elapsed = (Date.now() - cardStartTime) / 1000;
      const isCorrect = category === currentCard.category;

      if (isCorrect) {
        let points = 100;
        if (elapsed < 5) points += Math.round((5 - elapsed) * 20);
        const newStreak = streak + 1;
        const newMultiplier = Math.min(2, 1 + newStreak * 0.1);
        points = Math.round(points * newMultiplier);

        const newScore = score + points;
        setScore(newScore);
        setStreak(newStreak);
        setMultiplier(newMultiplier);
        setTotalCorrect(v => v + 1);

        if (currentIndex + 1 >= cards.length) {
          completeGame(newScore, mistakes, isPerfect);
        } else {
          setCurrentIndex(v => v + 1);
          setCardStartTime(Date.now());
        }
      } else {
        const newMistakes = mistakes + 1;
        setMistakes(newMistakes);
        setStreak(0);
        setMultiplier(1);
        setIsPerfect(false);
        setShowExplanation(currentCard.explanation);
      }
    },
    [cardStartTime, cards.length, currentCard, currentIndex, isPerfect, showExplanation, streak, score, mistakes, completeGame]
  );

  const handleDrag = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      const distance = Math.hypot(info.offset.x, info.offset.y);
      setActiveSegment(distance < 36 ? null : getCategoryFromOffset(info.offset.x, info.offset.y));
    },
    [getCategoryFromOffset]
  );

  const handleDragEnd = useCallback(
    (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
      setActiveSegment(null);
      if (Math.hypot(info.offset.x, info.offset.y) < 56) return;
      handleCategorize(getCategoryFromOffset(info.offset.x, info.offset.y));
    },
    [getCategoryFromOffset, handleCategorize]
  );

  const confirmExplanation = () => {
    setShowExplanation(null);
    if (currentIndex + 1 >= cards.length) {
      completeGame(score, mistakes, false);
      return;
    }
    setCurrentIndex(v => v + 1);
    setCardStartTime(Date.now());
  };

  if (showWinAnimation) {
    return <WinAnimation subject={subject} onComplete={() => setShowWinAnimation(false)} />;
  }

  // Locked screen
  if (hasPlayedToday && !isStarted) {
    const periods = getUniquePeriods(getDailyTalonCards(subject));
    return (
      <div className="min-h-[calc(100vh-3.5rem)]">
        <div className="container max-w-2xl mx-auto px-4 py-12 text-center">
          <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold text-foreground">Daily Talon Complete</h2>
          <p className="text-muted-foreground font-body text-sm max-w-md mx-auto mt-2 mb-8">
            {"You have already completed today's"} {subject === 'apush' ? 'APUSH' : 'AP World'} Talon round. Come back tomorrow for a new set of cards.
          </p>
          <div className="bg-card border border-border rounded-lg p-5 max-w-sm mx-auto">
            <h3 className="font-display text-sm font-semibold text-foreground mb-3">Keep practicing</h3>
            <div className="flex flex-col gap-2">
              {periods.map(period => (
                <Link
                  key={period}
                  to={`/questions?period=${encodeURIComponent(period)}`}
                  className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-sm font-body text-foreground">{period}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isStarted) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)]">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
              The Talon
            </h1>
            <p className="text-muted-foreground font-body text-sm mb-4">
              SPRITE analysis drill for rapid, accurate historical categorization.
            </p>

            <div className="inline-flex items-center bg-secondary rounded-lg p-0.5 mb-6">
              {(['apush', 'apworld'] as const).map(v => (
                <button
                  key={v}
                  onClick={() => setSubject(v)}
                  className={cn(
                    'px-4 py-1.5 rounded-md text-sm font-body font-medium transition-all',
                    subject === v ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {v === 'apush' ? 'APUSH' : 'AP World'}
                </button>
              ))}
            </div>

            <div className="bg-card border border-border rounded-2xl p-6 max-w-2xl mx-auto mb-6 text-left shadow-sm">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">How to Play</h3>
              <ul className="space-y-2 text-sm font-body text-muted-foreground">
                <li className="flex gap-3"><span className="text-primary font-semibold">01</span><span>A historical event appears in the center of the board.</span></li>
                <li className="flex gap-3"><span className="text-primary font-semibold">02</span><span>Drag the card toward a SPRITE zone or select a category panel.</span></li>
                <li className="flex gap-3"><span className="text-primary font-semibold">03</span><span>Each correct answer earns <strong className="text-foreground">100 PP</strong>, with an added speed bonus under five seconds.</span></li>
                <li className="flex gap-3"><span className="text-primary font-semibold">04</span><span>Your streak raises the multiplier up to <strong className="text-foreground">2.0x</strong>.</span></li>
                <li className="flex gap-3"><span className="text-primary font-semibold">05</span><span>If you miss, the round pauses for a brief explanation before continuing.</span></li>
              </ul>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {SPRITE_CATEGORIES.map(category => (
                <span key={category.name} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-xs font-body font-medium text-foreground">
                  <SpriteIcon icon={category.icon} />
                  {category.name}
                </span>
              ))}
            </div>

            <button onClick={startGame} className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity">
              Start Round
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Complete screen
  if (isComplete) {
    const periods = getUniquePeriods(cards);
    return (
      <div className="min-h-[calc(100vh-3.5rem)]">
        <div className="container max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Round Complete</h2>
          <p className="text-muted-foreground font-body mb-6">{subject === 'apush' ? 'APUSH' : 'AP World'} SPRITE analysis</p>

          <div className="my-8">
            <span className="font-display text-5xl font-bold text-primary">{score} PP</span>
            <p className="text-muted-foreground font-body mt-2 text-sm">
              {totalCorrect}/{cards.length} correct{isPerfect ? ' — Perfect run' : ''}
            </p>
          </div>

          {!user && (
            <p className="text-xs text-muted-foreground font-body mb-6">
              Sign in with Google on the Leaderboard page to save your score.
            </p>
          )}

          <div className="bg-card border border-border rounded-lg p-5 max-w-sm mx-auto">
            <h3 className="font-display text-sm font-semibold text-foreground mb-3">Keep practicing</h3>
            <div className="flex flex-col gap-2">
              {periods.map(period => (
                <Link
                  key={period}
                  to={`/questions?period=${encodeURIComponent(period)}`}
                  className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-sm font-body text-foreground">{period}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentCard) return null;

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center">
      <div className="container max-w-3xl mx-auto px-4 py-4">
        <div className="grid gap-3 md:grid-cols-3 mb-5">
          <div className="rounded-2xl border border-border bg-card px-4 py-3">
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground">Score</p>
            <p className="mt-1 font-display text-2xl font-bold text-primary">{score} PP</p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-4 py-3">
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground">Progress</p>
            <p className="mt-1 font-display text-2xl font-bold text-foreground">
              {currentIndex + 1}<span className="text-base text-muted-foreground">/{cards.length}</span>
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card px-4 py-3">
            <p className="text-[11px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground">Streak</p>
            <div className="mt-1 flex items-baseline gap-3">
              <p className="font-display text-2xl font-bold text-foreground">{streak}</p>
              <span className={cn('text-sm font-body font-semibold', streak > 0 ? 'text-primary' : 'text-muted-foreground')}>
                {multiplier.toFixed(1)}x multiplier
              </span>
            </div>
          </div>
        </div>

        <div className="mb-4 text-center">
          <p className="text-sm font-body text-muted-foreground">
            Drag the card toward a zone or use the category panels around the board.
          </p>
        </div>

        <div className="relative flex items-center justify-center" style={{ height: hexRadius * 2 + 136 }}>
          {segments.map(segment => {
            const radians = (segment.angle * Math.PI) / 180;
            const x = Math.cos(radians) * (hexRadius + 40);
            const y = Math.sin(radians) * (hexRadius + 40);
            const isHighlighted = hoveredSegment === segment.name || activeSegment === segment.name;

            return (
              <motion.button
                key={segment.name}
                className={cn(
                  'absolute flex flex-col items-center justify-center rounded-2xl border transition-all duration-150',
                  isHighlighted
                    ? 'border-primary bg-primary/15 shadow-lg shadow-primary/10 scale-[1.04]'
                    : 'border-border bg-card/90 hover:border-primary/50'
                )}
                style={{
                  left: `calc(50% + ${x}px - 42px)`,
                  top: `calc(50% + ${y}px - 36px)`,
                  width: 84,
                  height: 72,
                }}
                onClick={() => handleCategorize(segment.name)}
                onHoverStart={() => setHoveredSegment(segment.name)}
                onHoverEnd={() => setHoveredSegment(null)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground">
                  <SpriteIcon icon={segment.icon} />
                </span>
                <span className="mt-1 text-[10px] font-body font-semibold uppercase tracking-[0.12em] text-foreground">
                  {segment.name}
                </span>
              </motion.button>
            );
          })}

          <AnimatePresence mode="wait">
            {!showExplanation && (
              <motion.div
                key={currentCard.event}
                className="absolute cursor-grab active:cursor-grabbing"
                style={{
                  left: 'calc(50% - 74px)',
                  top: 'calc(50% - 46px)',
                  width: 148,
                  height: 92,
                  touchAction: 'none',
                }}
                drag
                dragSnapToOrigin
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.16}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                initial={{ scale: 0.94, opacity: 0, rotate: -6 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.94, opacity: 0, rotate: 6 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              >
                <div className="w-full h-full bg-card border-2 border-primary rounded-2xl flex flex-col items-center justify-center p-3 shadow-lg shadow-primary/10">
                  <span className="text-[11px] font-body uppercase tracking-[0.2em] text-muted-foreground">{currentCard.period}</span>
                  <span className="text-sm font-display font-bold text-foreground text-center leading-tight mt-1">
                    {currentCard.event}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {showExplanation && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="bg-card border border-border rounded-2xl p-5 max-w-sm text-center shadow-xl">
                  <p className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-destructive mb-2">Review</p>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    Best fit: {currentCard.category}
                  </h3>
                  <p className="text-sm font-body text-muted-foreground mb-4 leading-relaxed">{showExplanation}</p>
                  <button onClick={confirmExplanation} className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90">
                    Continue
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TalonPage;
