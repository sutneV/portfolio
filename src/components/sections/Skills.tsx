'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2, Terminal, Coffee, FileCode, Triangle, Atom, Palette,
  Zap, Map as MapIcon, Database, BarChart, Layers, Server,
  CloudRain, Leaf, Box, Bot, Sparkles, Brain, GitBranch,
  RefreshCw, Shield, Layout, Target
} from 'lucide-react';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "TypeScript/JavaScript", progress: 95, icon: FileCode },
      { name: "Python", progress: 90, icon: Terminal },
      { name: "Java", progress: 85, icon: Coffee },
      { name: "C++", progress: 80, icon: Code2 }
    ]
  },
  {
    title: "Frontend Technologies",
    skills: [
      { name: "Next.js", progress: 95, icon: Triangle },
      { name: "React", progress: 95, icon: Atom },
      { name: "TailwindCSS", progress: 90, icon: Palette },
      { name: "Vite", progress: 90, icon: Zap },
      { name: "MapboxGL", progress: 85, icon: MapIcon },
      { name: "React Query", progress: 85, icon: Database },
      { name: "Recharts", progress: 85, icon: BarChart },
      { name: "Redux", progress: 80, icon: Layers }
    ]
  },
  {
    title: "Backend Technologies",
    skills: [
      { name: "Node.js", progress: 90, icon: Server },
      { name: "Supabase", progress: 90, icon: Database },
      { name: "SQL", progress: 90, icon: Database },
      { name: "PostgreSQL", progress: 85, icon: Database },
      { name: "FastAPI", progress: 85, icon: Zap },
      { name: "Prisma", progress: 85, icon: Database },
      { name: "Drizzle", progress: 85, icon: CloudRain },
      { name: "MongoDB", progress: 80, icon: Leaf }
    ]
  },
  {
    title: "Cloud & Deployment",
    skills: [
      { name: "Vercel", progress: 95, icon: Triangle },
      { name: "Supabase", progress: 90, icon: Database },
      { name: "Docker", progress: 75, icon: Box }
    ]
  },
  {
    title: "AI Infrastructure",
    skills: [
      { name: "Vercel AI SDK", progress: 90, icon: Bot },
      { name: "OpenAI", progress: 85, icon: Sparkles },
      { name: "Anthropic", progress: 85, icon: Brain },
      { name: "Gemini", progress: 80, icon: Sparkles },
      { name: "Vector Databases (pgvector)", progress: 80, icon: Database }
    ]
  },
  {
    title: "Software Engineering",
    skills: [
      { name: "Git", progress: 90, icon: GitBranch },
      { name: "Agile", progress: 85, icon: RefreshCw },
      { name: "SSDLC", progress: 85, icon: Shield },
      { name: "Trello", progress: 80, icon: Layout },
      { name: "Jira", progress: 80, icon: Target }
    ]
  }
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="py-20 md:py-32 px-6 md:px-16 bg-background text-foreground relative z-20"
    >
      <div className="max-w-7xl mx-auto border-t dark:border-neutral-800 border-neutral-200 pt-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 md:mb-24 gap-4 md:gap-0">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
              Technical Skills
            </h2>
          </div>
          <span className="text-neutral-500 font-mono text-xs md:text-sm shrink-0">
            ({String(skillCategories.length).padStart(2, '0')})
          </span>
        </div>

        {/* Skills Grid */}
        <div className="flex flex-col">
          {skillCategories.map((category, idx) => (
            <div
              key={category.title}
              className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 py-8 md:py-12 border-b dark:border-neutral-900 border-neutral-200 last:border-0"
            >
              {/* Category Title */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tighter text-foreground/90">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col gap-3 group">
                    <div className="flex justify-between items-end">
                      <div className="flex items-center gap-2.5">
                        <skill.icon className="w-4 h-4 md:w-[18px] md:h-[18px] text-neutral-500 group-hover:text-foreground transition-colors" />
                        <span className="text-sm md:text-base font-medium tracking-tight text-foreground transition-colors group-hover:text-neutral-500">
                          {skill.name}
                        </span>
                      </div>
                      <span className="font-mono text-neutral-500 text-[10px] md:text-xs">
                        {skill.progress}%
                      </span>
                    </div>
                    <div className="w-full h-[1px] md:h-[2px] bg-neutral-200 dark:bg-neutral-800 relative overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.progress}%` }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // smooth ease out curve
                        className="absolute top-0 left-0 h-full bg-foreground"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
