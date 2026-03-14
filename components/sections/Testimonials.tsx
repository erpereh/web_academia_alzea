'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { SectionHeading } from '@/components/ui/SectionHeading';

const TESTIMONIALS = [
  {
    quote: 'Mi hija pasó de suspender mates a sacar un 7. En tres meses.',
    author: 'Marta G.',
    detail: 'Madre de alumna de 3º ESO',
    stars: 5,
  },
  {
    quote: 'Lo mejor es que les enseñan a estudiar, no solo les hacen los deberes.',
    author: 'Carlos R.',
    detail: 'Padre de alumno de 6º Primaria',
    stars: 5,
  },
  {
    quote: 'Llevamos 4 años y ya es como de la familia. Mi hijo va encantado.',
    author: 'Laura P.',
    detail: 'Madre de dos alumnos',
    stars: 5,
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

export function Testimonials() {
  return (
    <section id="opiniones" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-snow-white to-blue-50/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Lo que dicen las familias"
          highlight="familias"
          subtitle="No lo decimos nosotros, lo dicen ellos"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Decorative Quote */}
              <Quote className="absolute top-4 right-4 w-10 h-10 text-sun-yellow/20 group-hover:text-sun-yellow/40 transition-colors duration-300" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: 0.3 + i * 0.1,
                      type: 'spring',
                      stiffness: 500,
                      damping: 15,
                    }}
                    viewport={{ once: true }}
                  >
                    <Star className="w-5 h-5 fill-sun-yellow text-sun-yellow" />
                  </motion.div>
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-semibold text-gray-900 font-display">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-400">
                  {testimonial.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
