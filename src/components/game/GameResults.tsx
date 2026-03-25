import { motion } from 'framer-motion';
import { GameState, DailyPuzzle, PrestigeScore } from '@/lib/gameData';
import { SolvedRow } from './SolvedRow';

const colorBlock: Record<string, string> = {
  yellow: 'bg-cat-yellow',
  green: 'bg-cat-green',
  blue: 'bg-cat-blue',
  purple: 'bg-cat-purple',
};

interface GameResultsProps {
  puzzle: DailyPuzzle;
  state: GameState;
  score: PrestigeScore;
}

export function GameResults({ puzzle, state, score }: GameResultsProps) {
  const won = state.solved.length === 4;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-xl mx-auto"
    >
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">
          {won ? 'Nexus Cleared' : 'Challenge Failed'}
        </h2>
        <p className="text-muted-foreground font-body text-sm">
          Studious Sarv #{puzzle.id} -- {puzzle.period}
        </p>
      </div>

      {/* Share grid */}
      {won && (
        <div className="flex flex-col items-center gap-1 mb-6">
          {puzzle.categories.map(cat => (
            <div key={cat.name} className="flex gap-1">
              {[0, 1, 2, 3].map(i => (
                <span
                  key={i}
                  className={`${colorBlock[cat.color]} h-6 w-6 rounded-sm`}
                />
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Solved categories detail */}
      <div className="flex flex-col gap-2 mb-6">
        {puzzle.categories.map((cat, i) => (
          <SolvedRow key={cat.name} category={cat} index={i} />
        ))}
      </div>

      {/* Score */}
      {won && (
        <div className="bg-card border border-border rounded-lg p-5">
          <h3 className="font-display text-lg font-bold text-center text-primary mb-3">
            {score.total} PP
          </h3>
          <div className="grid grid-cols-2 gap-3 text-sm font-body">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Base Clear</span>
              <span className="text-foreground">+{score.base}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Perfect Bonus</span>
              <span className="text-foreground">+{score.perfectBonus}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Speed Bonus</span>
              <span className="text-foreground">+{score.speedBonus}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Streak</span>
              <span className="text-foreground">{score.streakMultiplier}x</span>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
