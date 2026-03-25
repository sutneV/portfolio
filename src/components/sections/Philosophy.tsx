'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center']
  });

  // Calculate an opacity mask that reveals the text as you scroll
  const maskImage = useTransform(
    scrollYProgress,
    [0, 0.8],
    ['linear-gradient(to right, white 0%, transparent 0%)', 'linear-gradient(to right, white 100%, transparent 100%)']
  );

  return (
    <section id="philosophy" ref={ref} className="min-h-screen py-20 md:py-32 px-6 md:px-16 flex items-center bg-background text-foreground relative z-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[10px] md:text-sm font-mono uppercase tracking-widest text-neutral-500 mb-8 md:mb-12">
          — Philosophy
        </h2>
        
        <div className="relative">
          {/* Base inactive text layer */}
          <p className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] md:leading-tight text-neutral-300 dark:text-neutral-800">
            A developer's portfolio shouldn't be a resume. It should be a beautifully engineered digital instrument. We craft experiences that demand to be interacted with.
          </p>

          {/* Active text layer that gets revealed */}
          <motion.p 
            style={{ maskImage, WebkitMaskImage: maskImage }}
            className="absolute top-0 left-0 w-full h-full text-3xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.1] md:leading-tight text-foreground"
          >
            A developer's portfolio shouldn't be a resume. It should be a beautifully engineered digital instrument. We craft experiences that demand to be interacted with.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
