'use client';

import { motion, Variants } from 'framer-motion';
import Lanyard from '../canvas/Lanyard';

export default function Hero() {
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
    <section className="relative w-full min-h-[100dvh] flex flex-col justify-end md:justify-center overflow-hidden bg-black pb-24 md:pb-0">
      {/* 3D Lanyard Background/Centerpiece (rendered over text with mix-blend-difference to avoid CSS bounding box clipping) */}
      <div className="absolute inset-0 z-30 pointer-events-none translate-y-[-10%] md:translate-y-0 md:translate-x-1/3 lg:translate-x-1/3 opacity-50 md:opacity-100 mix-blend-difference">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Text block (rendered under the Lanyard now) */}
      <div className="z-10 px-6 md:px-16 w-full md:w-2/3 pointer-events-none">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-3 md:gap-4 text-white"
        >
          <motion.p variants={itemVariants} className="text-xs md:text-base font-medium uppercase tracking-widest text-neutral-400">
            Computer Science Student
          </motion.p>
          <motion.h1 variants={itemVariants} className="text-[14vw] leading-[0.85] md:text-[8vw] font-bold tracking-tighter">
            LIM
            <br />
            <span className="text-neutral-500">WEI GIAP.</span>
            <br />
          </motion.h1>
          <motion.p variants={itemVariants} className="text-base md:text-xl text-neutral-300 mt-4 md:mt-6 max-w-xl text-balance">
            Passionate about building scalable applications and solving complex problems through innovative software solutions.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 left-6 md:left-16 z-20 mix-blend-difference"
      >
        <p className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-400">
          Scroll to explore ↓
        </p>
      </motion.div>
    </section>
  );
}
