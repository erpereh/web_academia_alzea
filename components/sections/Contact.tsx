'use client';

import { motion } from 'framer-motion';
import { Phone, Smartphone, MapPin } from 'lucide-react';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';

const phoneVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const phoneItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-blue-900" />

      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-sun-yellow/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-drop-pink/10 rounded-full blur-3xl" />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display mb-4 leading-tight">
            La primera clase es{' '}
            <span className="text-sun-yellow">gratis</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 font-light max-w-xl mx-auto">
            Trae a tu hijo a probar sin compromiso. Si le gusta, hablamos.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <WhatsAppButton
            text="Reservar clase gratis"
            size="lg"
            className="animate-pulse-glow"
          />
        </motion.div>

        {/* Divider */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-white/50 text-sm mb-6"
        >
          O si prefieres, llámanos:
        </motion.p>

        {/* Phone Numbers */}
        <motion.div
          variants={phoneVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
        >
          <motion.a
            variants={phoneItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:913318375"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-medium">913 318 375</span>
          </motion.a>

          <motion.a
            variants={phoneItemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="tel:639070419"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/15 transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            <span className="font-medium">639 070 419</span>
          </motion.a>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 text-white/40 text-sm"
        >
          <MapPin className="w-4 h-4" />
          <span>C/ Castrillo de Aza, 32 · Santa Eugenia, Madrid</span>
        </motion.div>
      </div>
    </section>
  );
}
