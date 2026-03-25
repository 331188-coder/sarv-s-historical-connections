import { useState, useCallback, useEffect, useRef } from 'react';
import { GameState, GameCategory, DailyPuzzle, PrestigeScore } from '@/lib/gameData';

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function useConnectionsGame(puzzle: DailyPuzzle) {
  const allTerms = puzzle.categories.flatMap(c => c.terms);
  const [shuffledTerms, setShuffledTerms] = useState<string[]>(() => shuffleArray(allTerms));
  const [state, setState] = useState<GameState>({
    selected: [],
    solved: [],
    mistakes: 0,
    maxMistakes: 4,
    timeRemaining: 120,
    isComplete: false,
    isPerfect: true,
  });
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const [isStarted, setIsStarted] = useState(false);
  const [shakeTerms, setShakeTerms] = useState(false);

  const startGame = useCallback(() => {
    setIsStarted(true);
  }, []);

  useEffect(() => {
    if (!isStarted || state.isComplete) return;
    timerRef.current = setInterval(() => {
      setState(prev => {
        if (prev.timeRemaining <= 1) {
          clearInterval(timerRef.current);
          return { ...prev, timeRemaining: 0, isComplete: true };
        }
        return { ...prev, timeRemaining: prev.timeRemaining - 1 };
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [isStarted, state.isComplete]);

  const toggleSelect = useCallback((term: string) => {
    setState(prev => {
      if (prev.isComplete) return prev;
      if (prev.solved.some(c => c.terms.includes(term))) return prev;
      if (prev.selected.includes(term)) {
        return { ...prev, selected: prev.selected.filter(t => t !== term) };
      }
      if (prev.selected.length >= 4) return prev;
      return { ...prev, selected: [...prev.selected, term] };
    });
  }, []);

  const submitGuess = useCallback(() => {
    if (state.selected.length !== 4) return;

    const match = puzzle.categories.find(cat =>
      cat.terms.every(t => state.selected.includes(t))
    );

    if (match) {
      const newSolved = [...state.solved, match];
      const remaining = shuffledTerms.filter(t => !match.terms.includes(t));
      setShuffledTerms(remaining);
      setState(prev => ({
        ...prev,
        selected: [],
        solved: newSolved,
        isComplete: newSolved.length === 4,
      }));
    } else {
      setShakeTerms(true);
      setTimeout(() => setShakeTerms(false), 400);
      setState(prev => {
        const newMistakes = prev.mistakes + 1;
        return {
          ...prev,
          selected: [],
          mistakes: newMistakes,
          isPerfect: false,
          isComplete: newMistakes >= prev.maxMistakes,
        };
      });
    }
  }, [state.selected, state.solved, puzzle.categories, shuffledTerms]);

  const deselectAll = useCallback(() => {
    setState(prev => ({ ...prev, selected: [] }));
  }, []);

  const shuffleGrid = useCallback(() => {
    setShuffledTerms(prev => shuffleArray(prev));
  }, []);

  const calculateScore = useCallback((): PrestigeScore => {
    const won = state.solved.length === 4;
    const base = won ? 100 : 0;
    const perfectBonus = state.isPerfect && won ? 50 : 0;
    const speedBonus = won ? state.timeRemaining : 0;
    const streakMultiplier = 1; // placeholder
    const total = Math.round((base + perfectBonus + speedBonus) * streakMultiplier);
    return { base, perfectBonus, speedBonus, streakMultiplier, total };
  }, [state]);

  return {
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
  };
}
