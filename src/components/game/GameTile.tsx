import { cn } from '@/lib/utils';

interface GameTileProps {
  term: string;
  isSelected: boolean;
  isShaking: boolean;
  onClick: () => void;
}

export function GameTile({ term, isSelected, isShaking, onClick }: GameTileProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'flex items-center justify-center rounded-lg px-2 py-4 text-center text-sm font-semibold font-body uppercase tracking-wide transition-all duration-150 select-none',
        'min-h-[60px] md:min-h-[72px]',
        isSelected
          ? 'bg-primary text-primary-foreground scale-[0.97]'
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        isShaking && 'animate-shake'
      )}
    >
      {term}
    </button>
  );
}
