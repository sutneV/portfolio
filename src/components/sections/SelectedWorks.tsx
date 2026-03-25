'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const works = [
  {
    title: 'Ethereal OS',
    category: 'SYSTEM ARCHITECTURE',
    year: '2025'
  },
  {
    title: 'Nexus Platform',
    category: 'WebGL EXPERIMENT',
    year: '2024'
  },
  {
    title: 'Vanguard',
    category: 'E-COMMERCE',
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
    <section id="work" ref={containerRef} className="py-20 md:py-32 px-6 md:px-16 bg-black text-white relative z-20">
      <div className="max-w-7xl mx-auto border-t border-neutral-800 pt-16">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-4 md:gap-0">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Selected Works</h2>
          <span className="text-neutral-500 font-mono text-xs md:text-sm">(03)</span>
        </div>

        <div className="flex flex-col gap-8 md:gap-12">
          {works.map((work, idx) => (
            <motion.div 
              key={idx}
              style={{ y: idx % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [50, -50]) }}
              className="group relative flex flex-col md:flex-row justify-between md:items-center py-8 md:py-12 border-b border-neutral-900 md:border-neutral-800 hover:border-white transition-colors cursor-pointer"
            >
              <div className="flex flex-col gap-2 relative z-10 w-full mb-4 md:mb-0">
                <span className="text-[10px] md:text-xs text-neutral-500 font-mono uppercase tracking-widest">{work.category}</span>
                <h3 className="text-4xl md:text-7xl font-bold tracking-tighter md:mix-blend-difference z-20 pr-4">{work.title}</h3>
              </div>
              
              <div className="font-mono text-neutral-500 text-xs md:text-sm">{work.year}</div>

              {/* Hover Image Overlay effect (abstract representation) */}
              <div className="absolute inset-0 bg-neutral-900 opacity-0 md:group-hover:opacity-10 transition-opacity duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
