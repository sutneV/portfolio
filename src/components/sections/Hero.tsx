'use client';

import { motion, Variants } from 'framer-motion';
import { useTheme } from 'next-themes';
import Lanyard from '../canvas/Lanyard';
import { useEffect, useState } from 'react';

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-end md:justify-center overflow-hidden bg-background pb-16 md:pb-0">
      {/* 3D Lanyard Background/Centerpiece */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-30 pointer-events-none translate-y-[-32%] md:translate-y-0 md:translate-x-1/3 lg:translate-x-1/3 opacity-100 dark:mix-blend-difference">
        {mounted && <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} theme={resolvedTheme} />}
      </div>

      {/* Text block */}
      <div className="z-10 px-6 md:px-16 w-full md:w-2/3 pointer-events-none relative pb-6 md:pb-0">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-5 md:gap-8 text-foreground"
        >
          <motion.h1 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
            Hi, I'm Wei Giap - 林伟业 /línwěiyè/
          </motion.h1>
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-2xl leading-relaxed font-sans">
            Currently pursuing a degree in Computer Science at <span className="font-bold text-neutral-900 dark:text-neutral-100">Coventry University</span>, passionate about UI/UX.
          </motion.p>
          <motion.ul variants={itemVariants} className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl leading-relaxed font-sans flex flex-col gap-2 mt-2">
            <li className="flex items-start gap-3">
              <span className="text-[10px] mt-2 text-neutral-400 dark:text-neutral-500">✦</span>
              <span>Previously Product Engineer Intern at <span className="font-medium text-neutral-900 dark:text-neutral-100">Keysight Technologies</span></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[10px] mt-2 text-neutral-400 dark:text-neutral-500">✦</span>
              <span>Previously Industrial Engineer at <span className="font-medium text-neutral-900 dark:text-neutral-100">Analog Devices</span></span>
            </li>
          </motion.ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-12 left-6 md:left-16 z-20 dark:mix-blend-difference"
      >
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          Scroll to explore ↓
        </p>
      </motion.div>
    </section>
  );
}
