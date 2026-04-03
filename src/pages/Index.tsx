import { useState, useEffect } from 'react';
import { getDailyPuzzle } from '@/lib/gameData';
import { ConnectionsGrid } from '@/components/game/ConnectionsGrid';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SolvedRow } from '@/components/game/SolvedRow';

function getTodayKey(subject: string) {
  return `nexus_played_${subject}_${new Date().toISOString().split('T')[0]}`;
}

function getResultKey(subject: string) {
  return `nexus_result_${subject}_${new Date().toISOString().split('T')[0]}`;
}

const colorBlock: Record<string, string> = {
  yellow: 'bg-cat-yellow',
  green: 'bg-cat-green',
  blue: 'bg-cat-blue',
  purple: 'bg-cat-purple',
};

const Index = () => {
  const [subject, setSubject] = useState<'apush' | 'apworld'>('apush');
  const puzzle = getDailyPuzzle(subject);
  const { user } = useAuth();

  const [hasPlayedToday, setHasPlayedToday] = useState(() => {
    return localStorage.getItem(getTodayKey(subject)) === 'true';
  });

  useEffect(() => {
    setHasPlayedToday(localStorage.getItem(getTodayKey(subject)) === 'true');
  }, [subject]);

  const handleGameComplete = (won: boolean, mistakes: number, score: number) => {
    localStorage.setItem(getTodayKey(subject), 'true');
    localStorage.setItem(getResultKey(subject), JSON.stringify({ won, mistakes, score }));
    setHasPlayedToday(true);
  };

  const savedResult = hasPlayedToday
    ? (() => {
        try {
          return JSON.parse(localStorage.getItem(getResultKey(subject)) || 'null');
        } catch { return null; }
      })()
    : null;

  return (
    <div className="min-h-[calc(100vh-3.5rem)]">
      <div className="container max-w-5xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            The Nexus
          </h1>
          <p className="text-muted-foreground font-body mt-2 text-sm">
            Group 16 historical terms into four thematic categories — new puzzle every day!
          </p>

          <div className="inline-flex items-center bg-secondary rounded-lg p-0.5 mt-4">
            {(['apush', 'apworld'] as const).map(s => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={cn(
                  'px-4 py-1.5 rounded-md text-sm font-body font-medium transition-all',
                  subject === s
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {s === 'apush' ? 'APUSH' : 'AP World'}
              </button>
            ))}
          </div>
        </div>

        {hasPlayedToday ? (
          <div className="flex flex-col items-center gap-4 py-12 text-center max-w-xl mx-auto">
            <Lock className="h-10 w-10 text-muted-foreground" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Daily Challenge Complete
            </h2>
            <p className="text-muted-foreground font-body text-sm max-w-md">
              {"You've already completed today's"} {subject === 'apush' ? 'APUSH' : 'AP World'} Nexus.
              Come back tomorrow for a new puzzle.
            </p>

            {savedResult && (
              <div className="bg-card border border-border rounded-lg p-5 w-full mt-2">
                <h3 className="font-display text-lg font-bold text-center mb-1 text-foreground">
                  {savedResult.won ? 'Nexus Cleared' : 'Challenge Failed'}
                </h3>
                {savedResult.won && (
                  <p className="font-display text-2xl font-bold text-primary text-center mb-3">
                    {savedResult.score} PP
                  </p>
                )}
                {savedResult.mistakes > 0 && (
                  <p className="text-sm text-muted-foreground font-body text-center mb-3">
                    {savedResult.mistakes} mistake{savedResult.mistakes !== 1 ? 's' : ''}
                  </p>
                )}
              </div>
            )}

            <div className="w-full mt-2">
              <h3 className="font-display text-sm font-semibold text-foreground mb-3 text-left">
                {"Today's"} Answers — {puzzle.period}
              </h3>
              <div className="flex flex-col items-center gap-1 mb-4">
                {puzzle.categories.map(cat => (
                  <div key={cat.name} className="flex gap-1">
                    {[0, 1, 2, 3].map(i => (
                      <span key={i} className={`${colorBlock[cat.color]} h-6 w-6 rounded-sm`} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-2">
                {puzzle.categories.map((cat, i) => (
                  <SolvedRow key={cat.name} category={cat} index={i} />
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-5 w-full mt-4">
              <h3 className="font-display text-sm font-semibold text-foreground mb-3">Keep practicing</h3>
              <div className="flex flex-col gap-2">
                <Link
                  to={`/questions?period=${encodeURIComponent(puzzle.period)}`}
                  className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-sm font-body text-foreground">Questions — {puzzle.period}</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link
                  to="/talon"
                  className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-sm font-body text-foreground">Play The Talon</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
                <Link
                  to="/notes"
                  className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-sm font-body text-foreground">Review Notes</span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <ConnectionsGrid
            key={`${subject}-${puzzle.id}`}
            puzzle={puzzle}
            onComplete={handleGameComplete}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
