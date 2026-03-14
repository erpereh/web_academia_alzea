'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import clsx from 'clsx';

interface WhatsAppButtonProps {
  text?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const WA_URL = 'https://wa.me/34639070419?text=Hola%20Academia%20Alzea%2C%20me%20gustaría%20información%20sobre%20vuestros%20servicios';

const sizeClasses = {
  sm: 'px-5 py-2.5 text-sm gap-1.5',
  md: 'px-8 py-4 text-lg gap-2',
  lg: 'px-10 py-5 text-xl gap-3',
};

const iconSizes = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export function WhatsAppButton({ text = 'Preguntar por WhatsApp', size = 'md', className }: WhatsAppButtonProps) {
  return (
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        'inline-flex items-center justify-center rounded-full',
        'bg-gradient-to-r from-friendly-green to-emerald-500',
        'text-white font-semibold',
        'shadow-lg shadow-friendly-green/40',
        'hover:shadow-xl hover:shadow-friendly-green/60',
        'transition-shadow duration-300',
        sizeClasses[size],
        className
      )}
    >
      <MessageCircle className={iconSizes[size]} />
      <span>{text}</span>
    </motion.a>
  );
}
