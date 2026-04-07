'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectCarouselProps {
  images: string[];
  title: string;
}

export default function ProjectCarousel({ images, title }: ProjectCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full rounded-xl md:rounded-2xl overflow-hidden ring-1 dark:ring-white/10 ring-black/10 group bg-neutral-100 dark:bg-neutral-900/50">
      
      {/* Cross-fade container */}
      <div className="relative w-full">
        {images.map((img, idx) => (
          <div 
            key={idx} 
            className={`w-full transition-opacity duration-500 ease-in-out ${
              currentIndex === idx 
                ? 'relative opacity-100 z-10' 
                : 'absolute top-0 left-0 opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={img}
              alt={`${title} - image ${idx + 1}`}
              width={1920}
              height={1080}
              className="w-full h-auto"
              priority={idx === 0}
              sizes="(max-width: 768px) 100vw, 1280px"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {images.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <div className="absolute inset-0 flex items-center justify-between p-2 md:p-4 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              onClick={prevSlide}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all transform hover:scale-105 active:scale-95"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="pointer-events-auto p-2 md:p-3 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-md transition-all transform hover:scale-105 active:scale-95"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Indicators */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-6 h-1.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)]'
                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80 shadow-[0_0_4px_rgba(0,0,0,0.5)]'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none z-10" />
    </div>
  );
}
