import { useState, useEffect } from 'react';
import { getDailyPuzzle } from '@/lib/gameData';
import { ConnectionsGrid } from '@/components/game/ConnectionsGrid';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { Lock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function getTodayKey(subject: string) {
  return `nexus_played_${subject}_${new Date().toISOString().split('T')[0]}`;
}

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

  const handleGameComplete = () => {
    localStorage.setItem(getTodayKey(subject), 'true');
    setHasPlayedToday(true);
  };

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
          <div className="flex flex-col items-center gap-4 py-12 text-center">
            <Lock className="h-12 w-12 text-muted-foreground" />
            <h2 className="font-display text-2xl font-bold text-foreground">
              Daily Challenge Complete
            </h2>
            <p className="text-muted-foreground font-body text-sm max-w-md">
              You've already completed today's {subject === 'apush' ? 'APUSH' : 'AP World'} Nexus.
              Come back tomorrow for a new puzzle! In the meantime, try The Talon, review Notes, or practice Questions.
            </p>
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
