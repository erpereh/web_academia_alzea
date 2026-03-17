'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import clsx from 'clsx';

const NAV_ITEMS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Horarios', href: '#horarios' },
  { label: 'Contacto', href: '#contacto' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setPastHero(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          'px-4 sm:px-6 lg:px-8 py-3',
          scrolled
            ? pastHero
              ? 'bg-white/85 backdrop-blur-xl border-b border-gray-200/50 shadow-sm'
              : 'bg-white/10 backdrop-blur-xl border-b border-white/20'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between relative">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2"
          >
            <Sparkles className={clsx(
              'w-5 h-5 transition-colors duration-500',
              pastHero ? 'text-sun-yellow' : 'text-sun-yellow'
            )} />
            <span className={clsx(
              'text-xl font-bold font-display transition-colors duration-500',
              pastHero ? 'text-gray-900' : 'text-white'
            )}>
              Academia{' '}
              <span className="bg-gradient-to-r from-sun-yellow to-drop-pink bg-clip-text text-transparent">
                Alzea
              </span>
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <motion.button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={clsx(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all duration-500',
                  pastHero
                    ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                )}
              >
                {item.label}
              </motion.button>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={clsx(
              'md:hidden p-2 rounded-xl transition-colors duration-500',
              pastHero
                ? 'text-gray-700 hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
            )}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />

            {/* Panel */}
            <motion.nav
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white/90 backdrop-blur-2xl shadow-2xl p-8 pt-20 flex flex-col gap-2"
            >
              {/* Close button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileOpen(false)}
                className="absolute top-5 right-5 p-2 text-gray-500 hover:text-gray-800 rounded-xl hover:bg-gray-100"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {NAV_ITEMS.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  onClick={() => handleNavClick(item.href)}
                  className="text-left px-4 py-3 text-lg font-medium text-gray-700 hover:text-primary hover:bg-primary/5 rounded-xl transition-colors"
                >
                  {item.label}
                </motion.button>
              ))}

            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
