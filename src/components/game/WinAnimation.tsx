import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe2, ShieldCheck } from 'lucide-react';

interface WinAnimationProps {
  subject: 'apush' | 'apworld';
  onComplete: () => void;
}

export function WinAnimation({ subject, onComplete }: WinAnimationProps) {
  useEffect(() => {
    const timer = window.setTimeout(onComplete, 2200);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  const isApush = subject === 'apush';
  const Icon = isApush ? ShieldCheck : Globe2;
  const eyebrow = isApush ? 'APUSH' : 'AP World';
  const title = isApush ? 'Perfect Clear' : 'World Mastery';
  const description = isApush
    ? "You completed today's APUSH challenge with a clean run."
    : "You completed today's AP World challenge with a clean run.";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 px-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="relative w-full max-w-md overflow-hidden rounded-3xl border border-border bg-card shadow-2xl"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-16 h-44 w-44 rounded-full bg-secondary blur-3xl" />

        <div className="relative p-8 text-center">
          <motion.div
            className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary"
            initial={{ scale: 0.8, rotate: -8 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.05, duration: 0.3 }}
          >
            <Icon className="h-8 w-8" />
          </motion.div>

          <motion.div
            className="mb-2 text-xs font-body font-semibold uppercase tracking-[0.3em] text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.25 }}
          >
            {eyebrow}
          </motion.div>

          <motion.h2
            className="font-display text-3xl font-bold text-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.28 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="mx-auto mt-3 max-w-sm text-sm font-body leading-relaxed text-muted-foreground"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.28 }}
          >
            {description}
          </motion.p>

          <motion.div
            className="mt-6 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.28, duration: 0.25 }}
          >
            <svg viewBox="0 0 240 40" className="h-10 w-44 text-primary" fill="none" aria-hidden="true">
              <path d="M8 20H92" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
              <circle cx="120" cy="20" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M148 20H232" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.35" />
              <path d="M120 10V30" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
