'use client';

import { motion } from 'framer-motion';
import { Users, Heart, GraduationCap, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhatsAppButton } from '@/components/ui/WhatsAppButton';
import clsx from 'clsx';

const TRUST_ITEMS = [
  {
    icon: Users,
    value: '30+',
    label: 'Años de experiencia',
    color: 'text-sun-yellow',
    bg: 'bg-sun-yellow/10',
  },
  {
    icon: Heart,
    value: '500+',
    label: 'Familias acompañadas',
    color: 'text-drop-pink',
    bg: 'bg-drop-pink/10',
  },
  {
    icon: GraduationCap,
    value: '8 máx',
    label: 'Alumnos por grupo',
    color: 'text-friendly-green',
    bg: 'bg-friendly-green/10',
  },
  {
    icon: MapPin,
    value: '100m',
    label: 'De tu casa en Santa Eugenia',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
];

const trustContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const trustItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 20 },
  },
};

export function WhyUs() {
  return (
    <section id="nosotros" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Por qué las familias del barrio confían en nosotros"
          highlight="confían"
          subtitle="No somos una franquicia. Somos tus vecinos de toda la vida."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Desde hace más de 30 años, las familias de Santa Eugenia, Villa de Vallecas
              y La Gavia nos eligen para acompañar a sus hijos. Conocemos el colegio de tu
              hijo, conocemos los temarios, y sobre todo, conocemos lo que funciona.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              En Alzea, cada alumno tiene nombre, no número. Grupos reducidos, trato directo
              con los padres y mucha, mucha paciencia.
            </p>
            <WhatsAppButton text="Conócenos sin compromiso" size="md" />
          </motion.div>

          {/* Right - Trust Grid */}
          <motion.div
            variants={trustContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {TRUST_ITEMS.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  variants={trustItemVariants}
                  whileHover={{
                    y: -6,
                    transition: { type: 'spring', stiffness: 300, damping: 20 },
                  }}
                  className={clsx(
                    'flex flex-col items-center text-center p-5 sm:p-6',
                    'bg-snow-white rounded-2xl',
                    'shadow-sm hover:shadow-lg transition-shadow duration-300'
                  )}
                >
                  <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center mb-3', item.bg)}>
                    <Icon className={clsx('w-6 h-6', item.color)} />
                  </div>
                  <span className="text-2xl sm:text-3xl font-bold text-gray-900 font-display">
                    {item.value}
                  </span>
                  <span className="text-sm text-gray-500 mt-1">
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
