'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const works = [
  {
    title: 'AI-Powered Pet Adoption Platform',
    category: 'FINAL YEAR PROJECT',
    year: '2025'
  },
  {
    title: 'Product Portfolio',
    category: 'INTERNSHIP PROJECT',
    year: '2025'
  },
  {
    title: 'Ethereal OS',
    category: 'HACKATHON WINNER',
    year: '2024'
  }
];

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="work" ref={containerRef} className="py-20 md:py-32 px-6 md:px-16 bg-background text-foreground relative z-20">
      <div className="max-w-7xl mx-auto border-t dark:border-neutral-800 border-neutral-200 pt-16">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-4 md:gap-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected Works</h2>
          <span className="text-neutral-500 font-mono text-xs md:text-sm">(03)</span>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {works.map((work, idx) => (
            <motion.div
              key={idx}
              style={{ y: idx % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="group relative flex flex-col md:flex-row justify-between md:items-center py-8 md:py-12 border-b dark:border-neutral-900 border-neutral-200 dark:md:border-neutral-800 md:border-neutral-300 hover:border-foreground dark:hover:border-white transition-colors cursor-pointer"
            >
              <div className="flex flex-col gap-2 relative z-10 w-full mb-4 md:mb-0">
                <span className="text-[10px] md:text-xs text-neutral-500 font-mono uppercase tracking-widest">{work.category}</span>
                <h3 className="text-4xl md:text-7xl font-bold tracking-tighter md:mix-blend-difference z-20 pr-4">{work.title}</h3>
              </div>

              <div className="font-mono text-neutral-500 text-xs md:text-sm">{work.year}</div>

              {/* Hover Image Overlay effect (abstract representation) */}
              <div className="absolute inset-0 dark:bg-neutral-900 bg-neutral-100 opacity-0 md:group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
