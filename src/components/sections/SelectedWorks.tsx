'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/data/projectsData';

export default function SelectedWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  // Hover image state
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-20 md:py-32 px-6 md:px-16 bg-background text-foreground relative z-20"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto border-t dark:border-neutral-800 border-neutral-200 pt-16">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-4 md:gap-0"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Past Works
          </h2>
          <span className="text-neutral-500 font-mono text-xs md:text-sm">
            ({String(projects.length).padStart(2, '0')})
          </span>
        </motion.div>

        {/* Project List */}
        <div className="flex flex-col">
          {projects.map((project, idx) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="block group"
              >
                <motion.div
                  style={{ y: idx % 2 === 0 ? y1 : y2 }}
                  className="relative py-8 md:py-12 border-b dark:border-neutral-900 border-neutral-200 dark:md:border-neutral-800 md:border-neutral-300 hover:border-foreground dark:hover:border-white transition-colors duration-500"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                >
                  {/* Top row: Category + Year */}
                  <div className="flex justify-between items-center mb-3 md:mb-4">
                    <span className="text-[10px] md:text-xs text-neutral-500 font-mono uppercase tracking-widest">
                      {project.category}
                    </span>
                    <span className="font-mono text-neutral-500 text-[10px] md:text-xs">
                      {project.year}
                    </span>
                  </div>

                  {/* Title row with arrow */}
                  <div className="flex items-center justify-between gap-4 mb-4 md:mb-6">
                    <h3 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter md:mix-blend-difference z-20 group-hover:translate-x-2 transition-transform duration-500">
                      {project.title}
                    </h3>
                    <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border dark:border-neutral-800 border-neutral-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 shrink-0">
                      <ArrowUpRight
                        size={20}
                        className="group-hover:rotate-45 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Description + Tech Stack */}
                  <div className="flex flex-col md:flex-row justify-between md:items-end gap-4">
                    <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 md:justify-end shrink-0">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="tech-tag"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="tech-tag">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Mobile thumbnail preview */}
                  <div className="mt-6 md:hidden overflow-hidden rounded-lg">
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={800}
                      height={450}
                      className="w-full h-auto object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Cursor-following hover image (desktop only) */}
      <AnimatePresence>
        {hoveredIdx !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
            style={{
              x: mousePos.x - 160,
              y: mousePos.y - 100,
            }}
          >
            <div className="w-[320px] h-[200px] rounded-xl overflow-hidden shadow-2xl ring-1 dark:ring-white/10 ring-black/10">
              <Image
                src={projects[hoveredIdx].thumbnail}
                alt={projects[hoveredIdx].title}
                width={640}
                height={400}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
