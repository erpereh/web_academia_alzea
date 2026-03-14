'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle: string;
  light?: boolean;
  className?: string;
}

export function SectionHeading({ title, highlight, subtitle, light = false, className }: SectionHeadingProps) {
  const renderTitle = () => {
    if (!highlight) return title;

    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="bg-gradient-to-r from-sun-yellow via-drop-pink to-friendly-green bg-clip-text text-transparent">
          {highlight}
        </span>
        {parts[1] ?? ''}
      </>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className={clsx('text-center mb-12 sm:mb-16', className)}
    >
      <h2
        className={clsx(
          'text-3xl sm:text-4xl lg:text-5xl font-bold font-display mb-4 leading-tight',
          light ? 'text-white' : 'text-gray-900'
        )}
      >
        {renderTitle()}
      </h2>
      <p
        className={clsx(
          'text-lg sm:text-xl max-w-2xl mx-auto font-light',
          light ? 'text-white/80' : 'text-gray-500'
        )}
      >
        {subtitle}
      </p>
    </motion.div>
  );
}
