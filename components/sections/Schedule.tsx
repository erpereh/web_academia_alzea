'use client';

import { motion } from 'framer-motion';
import { Clock, MapPin, Phone, Smartphone, ExternalLink } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';
import clsx from 'clsx';

const SCHEDULE = [
  { day: 'Lunes', hours: '16:00 – 21:00', open: true },
  { day: 'Martes', hours: '16:00 – 21:00', open: true },
  { day: 'Miércoles', hours: '16:00 – 21:00', open: true },
  { day: 'Jueves', hours: '16:00 – 21:00', open: true },
  { day: 'Viernes', hours: '16:00 – 21:00', open: true },
  { day: 'Sábado', hours: 'Cerrado', open: false },
  { day: 'Domingo', hours: 'Cerrado', open: false },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
};

export function Schedule() {
  return (
    <section id="horarios" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Horario y ubicación"
          highlight="ubicación"
          subtitle="Te pillamos cerquita. Ven a conocernos."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left - Schedule */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-sun-yellow/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-sun-yellow" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-display">Nuestro horario</h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2"
            >
              {SCHEDULE.map((item, i) => (
                <motion.div
                  key={item.day}
                  variants={rowVariants}
                  whileHover={{ x: 4 }}
                  className={clsx(
                    'flex items-center justify-between px-4 py-3 rounded-xl transition-colors',
                    i % 2 === 0 ? 'bg-snow-white' : 'bg-transparent',
                    item.open ? 'hover:bg-friendly-green/5' : 'hover:bg-drop-pink/5'
                  )}
                >
                  <span className="font-medium text-gray-700">{item.day}</span>
                  <span className={clsx(
                    'text-sm font-semibold',
                    item.open ? 'text-friendly-green' : 'text-gray-400'
                  )}>
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            <p className="mt-4 text-sm text-gray-400 italic">
              Septiembre a junio. En julio, cursos intensivos.
            </p>
          </motion.div>

          {/* Right - Location */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-drop-pink/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-drop-pink" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-display">Dónde estamos</h3>
            </div>

            {/* Map Placeholder */}
            <motion.a
              href="https://maps.google.com/?q=Calle+Castrillo+de+Aza+32+28031+Madrid"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block relative rounded-2xl overflow-hidden mb-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/25 transition-colors group"
            >
              <div className="flex flex-col items-center justify-center py-12 px-6 text-center">
                <MapPin className="w-10 h-10 text-primary/50 mb-3 group-hover:text-primary transition-colors" />
                <p className="text-lg font-semibold text-gray-800 mb-1">
                  C/ Castrillo de Aza, 32
                </p>
                <p className="text-gray-500 mb-3">
                  28031 Madrid · Santa Eugenia / Villa de Vallecas
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                  Ver en Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>

            {/* Phone Numbers */}
            <div className="space-y-3">
              <motion.a
                href="tel:913318375"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-snow-white hover:bg-friendly-green/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-friendly-green/10 flex items-center justify-center">
                  <Phone className="w-4 h-4 text-friendly-green" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 group-hover:text-friendly-green transition-colors">
                    913 318 375
                  </p>
                  <p className="text-xs text-gray-400">Teléfono fijo</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:639070419"
                whileHover={{ x: 4 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-snow-white hover:bg-friendly-green/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-friendly-green/10 flex items-center justify-center">
                  <Smartphone className="w-4 h-4 text-friendly-green" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800 group-hover:text-friendly-green transition-colors">
                    639 070 419
                  </p>
                  <p className="text-xs text-gray-400">Móvil / WhatsApp</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
