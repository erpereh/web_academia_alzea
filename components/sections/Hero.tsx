'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Clock } from 'lucide-react';
import clsx from 'clsx';

export function Hero() {
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
        delay: 0.2,
      },
    },
  };

  const buttonContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.6,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' as const },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Video Background - Full Bleed */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Radial Gradient - Subtle */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient opacity-40 pointer-events-none" style={{
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.4) 100%)',
      }} />

      {/* Content - Centered */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          animate="visible"
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <div className="w-2 h-2 rounded-full bg-sun-yellow animate-pulse" />
            <span className="text-sm font-medium text-white/90">
              Más de 30 años acompañando familias
            </span>
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          className="mb-8 sm:mb-10 max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
            Donde el{' '}
            <span className="inline-block bg-gradient-to-r from-sun-yellow via-drop-pink to-friendly-green bg-clip-text text-transparent">
              aprendizaje
            </span>
            {' '}cobra
            <br />
            <span className="bg-gradient-to-r from-friendly-green to-sun-yellow bg-clip-text text-transparent">
              vida
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl mx-auto">
            Refuerzo académico, clases particulares y escuela de idiomas con un toque familiar en Santa Eugenia
          </p>
        </motion.div>

        {/* Buttons Container */}
        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
          {/* Primary CTA Button - WhatsApp */}
          <motion.a
            variants={buttonVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/34639070419?text=Hola%20Academia%20Alzea%2C%20me%20gustaría%20información%20sobre%20vuestros%20servicios"
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              'flex items-center justify-center gap-2 px-8 py-4 rounded-full',
              'bg-gradient-to-r from-friendly-green to-emerald-500',
              'text-white font-semibold text-lg',
              'shadow-lg shadow-friendly-green/40',
              'transition-all duration-300',
              'hover:shadow-xl hover:shadow-friendly-green/60',
              'active:shadow-md'
            )}
          >
            <MessageCircle className="w-5 h-5" />
            <span>Preguntar por WhatsApp</span>
          </motion.a>

          {/* Secondary Button - Glassmorphism */}
          <motion.a
            variants={buttonVariants}
            whileHover={{ scale: 1.05, backdropFilter: 'blur(12px)' }}
            whileTap={{ scale: 0.95 }}
            href="#horarios"
            className={clsx(
              'flex items-center justify-center gap-2 px-8 py-4 rounded-full',
              'bg-white/10 backdrop-blur-md border border-white/30',
              'text-white font-semibold text-lg',
              'transition-all duration-300',
              'hover:bg-white/15 hover:border-white/50',
              'active:bg-white/20'
            )}
          >
            <Clock className="w-5 h-5" />
            <span>Ver horarios</span>
          </motion.a>
        </motion.div>

        {/* Floating Animation - Subtle Pulse at Bottom */}
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-none"
        >
          <div className="text-white/60 text-xs font-light">
            ↓ Scroll para explorar
          </div>
        </motion.div>
      </div>
    </section>
  );
}
