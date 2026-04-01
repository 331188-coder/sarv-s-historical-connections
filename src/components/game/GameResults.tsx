import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GameState, DailyPuzzle, PrestigeScore } from '@/lib/gameData';
import { SolvedRow } from './SolvedRow';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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
  const { user } = useAuth();
  const { toast } = useToast();
  const savedRef = useRef(false);

  useEffect(() => {
    if (!won || !user || savedRef.current) return;
    savedRef.current = true;

    supabase
      .from('game_scores')
      .upsert({
        user_id: user.id,
        subject: puzzle.subject,
        puzzle_date: puzzle.date,
        score: score.total,
        mistakes: state.mistakes,
        time_remaining: state.timeRemaining,
        is_perfect: state.isPerfect,
      }, { onConflict: 'user_id,subject,puzzle_date' })
      .then(({ error }) => {
        if (error) console.error('Failed to save score:', error);
        else toast({ title: 'Score saved!', description: `${score.total} PP added to the leaderboard.` });
      });
  }, [won, user]);

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
          Studious Sarv #{puzzle.id} — {puzzle.period}
        </p>
      </div>

      {won && (
        <div className="flex flex-col items-center gap-1 mb-6">
          {puzzle.categories.map(cat => (
            <div key={cat.name} className="flex gap-1">
              {[0, 1, 2, 3].map(i => (
                <span key={i} className={`${colorBlock[cat.color]} h-6 w-6 rounded-sm`} />
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2 mb-6">
        {puzzle.categories.map((cat, i) => (
          <SolvedRow key={cat.name} category={cat} index={i} />
        ))}
      </div>

      {won && (
        <div className="bg-card border border-border rounded-lg p-5 mb-6">
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
          {!user && (
            <p className="text-xs text-muted-foreground font-body text-center mt-3">
              Sign in with Google on the Leaderboard page to save your score.
            </p>
          )}
        </div>
      )}

      <div className="bg-card border border-border rounded-lg p-5">
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
            to="/notes"
            className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
          >
            <span className="text-sm font-body text-foreground">Review Notes</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
