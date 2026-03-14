'use client';

import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Globe } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import clsx from 'clsx';

const SERVICES = [
  {
    icon: BookOpen,
    title: 'Apoyo Escolar',
    description: 'Le echamos una mano con los deberes y le enseñamos a estudiar de verdad. Primaria y ESO, todas las asignaturas.',
    badges: ['Primaria', 'ESO', 'Todas las asignaturas'],
    accent: 'sun-yellow',
    accentBg: 'bg-sun-yellow/10',
    accentText: 'text-sun-yellow',
    accentBorder: 'border-sun-yellow/30',
    accentBadge: 'bg-sun-yellow/15 text-yellow-700',
  },
  {
    icon: TrendingUp,
    title: 'Refuerzo Académico',
    description: 'Grupos reducidos para que tu hijo reciba la atención que necesita. Preparación de exámenes y recuperación de asignaturas.',
    badges: ['Grupos reducidos', 'Exámenes', 'Recuperaciones'],
    accent: 'drop-pink',
    accentBg: 'bg-drop-pink/10',
    accentText: 'text-drop-pink',
    accentBorder: 'border-drop-pink/30',
    accentBadge: 'bg-drop-pink/15 text-pink-700',
  },
  {
    icon: Globe,
    title: 'Escuela de Idiomas',
    description: 'Inglés y francés desde cero o para mejorar nota. Método comunicativo que les hace perder el miedo a hablar.',
    badges: ['Inglés', 'Francés', 'Método comunicativo'],
    accent: 'friendly-green',
    accentBg: 'bg-friendly-green/10',
    accentText: 'text-friendly-green',
    accentBorder: 'border-friendly-green/30',
    accentBadge: 'bg-friendly-green/15 text-green-700',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const },
  },
};

export function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-snow-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Lo que hacemos (y se nos da muy bien)"
          highlight="muy bien"
          subtitle="Tres caminos, un mismo objetivo: que tu hijo disfrute aprendiendo"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                className={clsx(
                  'bg-white rounded-2xl p-6 sm:p-8',
                  'shadow-md hover:shadow-xl',
                  'border-b-4 border-b-transparent',
                  `hover:border-b-${service.accent}`,
                  'transition-shadow duration-300',
                  'group'
                )}
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 8 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                  className={clsx(
                    'w-14 h-14 rounded-2xl flex items-center justify-center mb-5',
                    service.accentBg
                  )}
                >
                  <Icon className={clsx('w-7 h-7', service.accentText)} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-display">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 mb-5 leading-relaxed">
                  {service.description}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {service.badges.map((badge) => (
                    <motion.span
                      key={badge}
                      whileHover={{ scale: 1.05 }}
                      className={clsx(
                        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
                        service.accentBadge
                      )}
                    >
                      {badge}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
