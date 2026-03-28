import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { cn } from '@/lib/utils';
import { getDailyTalonCards, SPRITE_CATEGORIES, SpriteCategory, TalonCard } from '@/lib/talonData';
import { WinAnimation } from '@/components/game/WinAnimation';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const HEX_SEGMENTS: { name: SpriteCategory; angle: number; color: string; icon: string }[] = SPRITE_CATEGORIES.map((c, i) => ({
  ...c,
  angle: i * 60 - 90, // Start from top
}));

function getSegmentFromAngle(angleDeg: number): SpriteCategory {
  // Normalize to 0-360
  let a = ((angleDeg % 360) + 360) % 360;
  const idx = Math.floor((a + 30) / 60) % 6;
  const order: SpriteCategory[] = ['Social', 'Political', 'Religious', 'Intellectual', 'Technological', 'Economic'];
  return order[idx];
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
  const [hoveredSegment, setHoveredSegment] = useState<SpriteCategory | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    setCards(getDailyTalonCards(subject));
    setCurrentIndex(0);
    setScore(0);
    setStreak(0);
    setMultiplier(1);
    setShowExplanation(null);
    setIsStarted(false);
    setIsComplete(false);
    setIsPerfect(true);
    setTotalCorrect(0);
  }, [subject]);

  const startGame = () => {
    setIsStarted(true);
    setCardStartTime(Date.now());
  };

  const currentCard = cards[currentIndex];

  const handleCategorize = useCallback((category: SpriteCategory) => {
    if (!currentCard || showExplanation) return;

    const elapsed = (Date.now() - cardStartTime) / 1000;
    const isCorrect = category === currentCard.category;

    if (isCorrect) {
      let points = 100;
      // Instant Kill bonus (under 5 seconds)
      if (elapsed < 5) points += Math.round((5 - elapsed) * 20);
      // Streak multiplier
      const newStreak = streak + 1;
      const newMult = Math.min(2, 1 + newStreak * 0.1);
      points = Math.round(points * newMult);

      setScore(s => s + points);
      setStreak(newStreak);
      setMultiplier(newMult);
      setTotalCorrect(c => c + 1);

      // Flash feedback
      toast({ title: `+${points} PP`, description: elapsed < 5 ? '⚡ Instant Kill!' : 'Correct!' });

      // Next card
      if (currentIndex + 1 >= cards.length) {
        setIsComplete(true);
        if (isPerfect) setShowWinAnimation(true);
      } else {
        setCurrentIndex(i => i + 1);
        setCardStartTime(Date.now());
      }
    } else {
      setStreak(0);
      setMultiplier(1);
      setIsPerfect(false);
      setShowExplanation(currentCard.explanation);
    }
  }, [currentCard, cardStartTime, streak, currentIndex, cards.length, isPerfect, showExplanation, toast]);

  const handleDragEnd = useCallback((_: any, info: PanInfo) => {
    const { offset } = info;
    const dist = Math.sqrt(offset.x ** 2 + offset.y ** 2);
    if (dist < 80) return; // Not dragged far enough

    const angle = Math.atan2(offset.y, offset.x) * (180 / Math.PI);
    // Map angle to SPRITE category
    // 0° = right, -90° = up, 90° = down, 180° = left
    const normalizedAngle = ((angle + 360) % 360);
    const category = getSegmentFromAngle(normalizedAngle);
    handleCategorize(category);
  }, [handleCategorize]);

  const confirmExplanation = () => {
    setShowExplanation(null);
    if (currentIndex + 1 >= cards.length) {
      setIsComplete(true);
    } else {
      setCurrentIndex(i => i + 1);
      setCardStartTime(Date.now());
    }
  };

  if (showWinAnimation) {
    return <WinAnimation subject={subject} onComplete={() => setShowWinAnimation(false)} />;
  }

  if (!isStarted) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)]">
        <div className="container max-w-3xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
              The Talon
            </h1>
            <p className="text-muted-foreground font-body text-sm mb-4">
              High-Speed SPRITE Analysis — Categorize historical events into the correct theme
            </p>

            <div className="inline-flex items-center bg-secondary rounded-lg p-0.5 mb-6">
              {(['apush', 'apworld'] as const).map(s => (
                <button
                  key={s}
                  onClick={() => setSubject(s)}
                  className={cn(
                    'px-4 py-1.5 rounded-md text-sm font-body font-medium transition-all',
                    subject === s ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {s === 'apush' ? 'APUSH' : 'AP World'}
                </button>
              ))}
            </div>

            <div className="bg-card border border-border rounded-lg p-6 max-w-lg mx-auto mb-6 text-left">
              <h3 className="font-display text-lg font-semibold text-foreground mb-3">How to Play</h3>
              <ul className="space-y-2 text-sm font-body text-muted-foreground">
                <li className="flex gap-2"><span className="text-primary">•</span>A historical event card appears in the center</li>
                <li className="flex gap-2"><span className="text-primary">•</span>Drag or click to categorize it: <strong className="text-foreground">S-P-R-I-T-E</strong></li>
                <li className="flex gap-2"><span className="text-primary">•</span>Correct = <strong className="text-foreground">100 PP</strong>. Under 5s = speed bonus</li>
                <li className="flex gap-2"><span className="text-primary">•</span>Streaks build a multiplier up to <strong className="text-foreground">2.0x Apex</strong></li>
                <li className="flex gap-2"><span className="text-primary">•</span>Wrong answer resets streak and shows an explanation</li>
              </ul>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {SPRITE_CATEGORIES.map(c => (
                <span key={c.name} className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-secondary text-xs font-body font-medium text-foreground">
                  {c.icon} {c.name}
                </span>
              ))}
            </div>

            <button
              onClick={startGame}
              className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Begin Hunt
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="min-h-[calc(100vh-3.5rem)]">
        <div className="container max-w-2xl mx-auto px-4 py-12 text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Hunt Complete</h2>
          <p className="text-muted-foreground font-body mb-6">{subject === 'apush' ? 'APUSH' : 'AP World'} SPRITE Analysis</p>

          <div className="my-8">
            <span className="font-display text-5xl font-bold text-primary">{score} PP</span>
            <p className="text-muted-foreground font-body mt-2 text-sm">
              {totalCorrect}/{cards.length} correct {isPerfect && '— Perfect Run!'}
            </p>
          </div>

          <button
            onClick={() => { setIsStarted(false); setCards(getDailyTalonCards(subject)); }}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  // Active game - Hexagonal HUD
  const hexRadius = 160;

  return (
    <div className="min-h-[calc(100vh-3.5rem)] flex flex-col items-center">
      <div className="container max-w-3xl mx-auto px-4 py-4">
        {/* Stats bar */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-4">
            <span className="font-display text-lg font-bold text-primary">{score} PP</span>
            <span className="text-sm font-body text-muted-foreground">
              {currentIndex + 1}/{cards.length}
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className={cn(
              'text-sm font-body font-semibold',
              multiplier >= 2 ? 'text-cat-yellow' : streak > 0 ? 'text-primary' : 'text-muted-foreground'
            )}>
              {multiplier >= 2 ? '🦅 APEX' : `${multiplier.toFixed(1)}x`}
            </span>
            <span className="text-sm font-body text-muted-foreground">
              🔥 {streak}
            </span>
          </div>
        </div>

        {/* Hexagonal HUD */}
        <div className="relative flex items-center justify-center" style={{ height: hexRadius * 2 + 120 }}>
          {/* Category segments */}
          {HEX_SEGMENTS.map((seg, i) => {
            const rad = (seg.angle * Math.PI) / 180;
            const x = Math.cos(rad) * (hexRadius + 40);
            const y = Math.sin(rad) * (hexRadius + 40);
            return (
              <motion.button
                key={seg.name}
                className={cn(
                  'absolute flex flex-col items-center justify-center rounded-xl border-2 transition-all',
                  hoveredSegment === seg.name
                    ? 'border-primary bg-primary/20 scale-110'
                    : 'border-border bg-card/80 hover:border-primary/50'
                )}
                style={{
                  left: `calc(50% + ${x}px - 42px)`,
                  top: `calc(50% + ${y}px - 32px)`,
                  width: 84,
                  height: 64,
                }}
                onClick={() => handleCategorize(seg.name)}
                onHoverStart={() => setHoveredSegment(seg.name)}
                onHoverEnd={() => setHoveredSegment(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-lg">{seg.icon}</span>
                <span className="text-[10px] font-body font-semibold text-foreground mt-0.5">{seg.name}</span>
              </motion.button>
            );
          })}

          {/* Center card */}
          <AnimatePresence mode="wait">
            {currentCard && !showExplanation && (
              <motion.div
                key={currentCard.event}
                className="absolute cursor-grab active:cursor-grabbing"
                style={{
                  left: 'calc(50% - 70px)',
                  top: 'calc(50% - 40px)',
                  width: 140,
                  height: 80,
                  touchAction: 'none',
                }}
                drag
                dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                dragElastic={0.8}
                onDragEnd={handleDragEnd}
                initial={{ scale: 0, rotate: -10 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 10 }}
                transition={{ type: 'spring', bounce: 0.4 }}
              >
                <div className="w-full h-full bg-card border-2 border-primary rounded-xl flex flex-col items-center justify-center p-2 shadow-lg shadow-primary/20">
                  <span className="text-xs font-body text-muted-foreground">{currentCard.period}</span>
                  <span className="text-sm font-display font-bold text-foreground text-center leading-tight mt-1">
                    {currentCard.event}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Explanation overlay */}
          <AnimatePresence>
            {showExplanation && (
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="bg-card border border-destructive/50 rounded-xl p-5 max-w-xs text-center shadow-xl">
                  <p className="text-xs font-body font-semibold text-destructive mb-2">
                    ❌ Incorrect — The answer was: {currentCard?.category}
                  </p>
                  <p className="text-sm font-body text-muted-foreground mb-4">
                    {showExplanation}
                  </p>
                  <button
                    onClick={confirmExplanation}
                    className="px-4 py-2 rounded-lg bg-primary text-primary-foreground font-body font-semibold text-sm hover:opacity-90"
                  >
                    Got it — Continue
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
