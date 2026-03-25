import { motion } from 'framer-motion';
import { GameCategory } from '@/lib/gameData';

const colorMap = {
  yellow: 'bg-cat-yellow text-cat-yellow-fg',
  green: 'bg-cat-green text-cat-green-fg',
  blue: 'bg-cat-blue text-cat-blue-fg',
  purple: 'bg-cat-purple text-cat-purple-fg',
};

interface SolvedRowProps {
  category: GameCategory;
  index: number;
}

export function SolvedRow({ category, index }: SolvedRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`${colorMap[category.color]} rounded-lg p-4 text-center`}
    >
      <p className="font-display text-sm font-bold uppercase tracking-wider">
        {category.name}
      </p>
      <p className="mt-1 text-xs font-body opacity-80">
        {category.terms.join(', ')}
      </p>
    </motion.div>
  );
}
