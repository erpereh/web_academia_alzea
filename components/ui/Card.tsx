'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  accentColor?: string;
}

export function Card({ children, className, accentColor = 'border-b-drop-pink' }: CardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      className={clsx(
        'bg-white rounded-2xl p-6 sm:p-8',
        'shadow-md hover:shadow-xl',
        'border-b-4 border-b-transparent hover:' + accentColor,
        'transition-shadow duration-300',
        'cursor-default',
        className
      )}
    >
      {children}
    </motion.div>
  );
}
