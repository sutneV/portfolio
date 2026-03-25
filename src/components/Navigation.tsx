'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 flex justify-between items-center px-6 md:px-12 py-5 md:py-6 ${scrolled || mobileMenuOpen ? 'dark:bg-black/80 bg-white/80 backdrop-blur-lg border-b dark:border-white/10 border-black/10 py-4 shadow-xl' : 'bg-transparent'
          }`}
      >
        <div className="text-lg md:text-xl font-medium tracking-tight flex items-center gap-2 z-50 transition-colors duration-500 text-foreground">
          <span className="w-2 h-2 rounded-full bg-foreground animate-pulse" />
          林
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 z-50 text-foreground">
          <nav className="flex gap-8 text-sm font-medium tracking-wide transition-colors duration-500">
            <a href="#work" className="hover:opacity-70 transition-opacity">WORK</a>
            <a href="#philosophy" className="hover:opacity-70 transition-opacity">PHILOSOPHY</a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">CONTACT</a>
          </nav>
          <div>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50 text-foreground">
          <div>
            <ThemeToggle />
          </div>
          <button
            className="p-2 transition-colors duration-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[90] dark:bg-black/95 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12"
          >
            <a href="#work" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter text-foreground hover:text-neutral-400 transition-colors">WORK</a>
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter text-foreground hover:text-neutral-400 transition-colors">PHILOSOPHY</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-4xl font-bold tracking-tighter text-foreground hover:text-neutral-400 transition-colors">CONTACT</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
