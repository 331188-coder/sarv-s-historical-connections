import { useState } from 'react';
import { useConnectionsGame } from '@/hooks/useConnectionsGame';
import { DailyPuzzle } from '@/lib/gameData';
import { GameTile } from './GameTile';
import { SolvedRow } from './SolvedRow';
import { GameResults } from './GameResults';
import { WinAnimation } from './WinAnimation';
import { Button } from '@/components/ui/button';
import { Shuffle } from 'lucide-react';

interface ConnectionsGridProps {
  puzzle: DailyPuzzle;
  onComplete?: () => void;
}

export function ConnectionsGrid({ puzzle, onComplete }: ConnectionsGridProps) {
  const {
    state,
    shuffledTerms,
    isStarted,
    shakeTerms,
    startGame,
    toggleSelect,
    submitGuess,
    deselectAll,
    shuffleGrid,
    calculateScore,
  } = useConnectionsGame(puzzle);

  const [showWinAnimation, setShowWinAnimation] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Detect game complete
  if (state.isComplete && !showResults && !showWinAnimation) {
    const won = state.solved.length === 4;
    if (won && state.isPerfect) {
      // Trigger win animation for perfect clears
      setTimeout(() => setShowWinAnimation(true), 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
        onComplete?.();
      }, 300);
    }
  }

  if (showWinAnimation) {
    return (
      <WinAnimation
        subject={puzzle.subject}
        onComplete={() => {
          setShowWinAnimation(false);
          setShowResults(true);
          onComplete?.();
        }}
      />
    );
  }

  if (!isStarted) {
    return (
      <div className="flex flex-col items-center gap-6 py-12">
        <h2 className="font-display text-2xl font-bold text-foreground">
          {puzzle.period}
        </h2>
        <p className="text-muted-foreground text-center max-w-md font-body">
          Group the 16 terms into four hidden thematic categories.
          You have 4 mistakes and 3 minutes.
        </p>
        <Button onClick={startGame} size="lg" className="font-body font-semibold">
          Start Challenge
        </Button>
      </div>
    );
  }

  if (showResults) {
    return (
      <GameResults
        puzzle={puzzle}
        state={state}
        score={calculateScore()}
      />
    );
  }

  const mistakeDots = Array.from({ length: state.maxMistakes }, (_, i) => (
    <span
      key={i}
      className={`inline-block h-2.5 w-2.5 rounded-full transition-colors ${
        i < state.maxMistakes - state.mistakes
          ? 'bg-primary'
          : 'bg-muted'
      }`}
    />
  ));

  const minutes = Math.floor(state.timeRemaining / 60);
  const seconds = state.timeRemaining % 60;

  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-4 px-1">
        <div className="flex items-center gap-1.5">{mistakeDots}</div>
        <span className="font-body text-sm text-muted-foreground tabular-nums">
          {minutes}:{seconds.toString().padStart(2, '0')}
        </span>
      </div>

      <div className="flex flex-col gap-2 mb-2">
        {state.solved.map((cat, i) => (
          <SolvedRow key={cat.name} category={cat} index={i} />
        ))}
      </div>

      <div className="grid grid-cols-4 gap-2">
        {shuffledTerms.map(term => (
          <GameTile
            key={term}
            term={term}
            isSelected={state.selected.includes(term)}
            isShaking={shakeTerms && state.selected.includes(term)}
            onClick={() => toggleSelect(term)}
          />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-5">
        <Button variant="outline" size="sm" onClick={shuffleGrid} className="font-body">
          <Shuffle className="h-4 w-4 mr-1.5" />
          Shuffle
        </Button>
        <Button variant="outline" size="sm" onClick={deselectAll} className="font-body">
          Deselect All
        </Button>
        <Button
          size="sm"
          onClick={submitGuess}
          disabled={state.selected.length !== 4}
          className="font-body font-semibold"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}
