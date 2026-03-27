import { useState } from 'react';
import { getDailyPuzzle } from '@/lib/gameData';
import { ConnectionsGrid } from '@/components/game/ConnectionsGrid';
import { cn } from '@/lib/utils';

const Index = () => {
  const [subject, setSubject] = useState<'apush' | 'apworld'>('apush');
  const puzzle = getDailyPuzzle(subject);

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

        <ConnectionsGrid key={`${subject}-${puzzle.id}`} puzzle={puzzle} />
      </div>
    </div>
  );
};

export default Index;
