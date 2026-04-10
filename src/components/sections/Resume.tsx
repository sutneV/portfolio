'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

// Animation variants
import { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function Resume() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="resume" ref={containerRef} className="py-20 md:py-32 px-6 md:px-16 bg-background text-foreground relative z-20">
      <div className="max-w-7xl mx-auto border-t dark:border-neutral-800 border-neutral-200 pt-16">

        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between md:items-end mb-16 gap-6 md:gap-4 border-b dark:border-neutral-900 border-neutral-200 pb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 w-full md:w-auto">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Resume
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: "left" }}
              className="hidden md:block flex-1 h-[1px] bg-neutral-300 dark:bg-neutral-800 w-[100px] lg:w-[200px]"
            />
            <span className="text-xl md:text-2xl font-medium tracking-tight text-neutral-500">
              简历/jiǎnlì/
            </span>
          </div>
          <p className="text-sm md:text-base text-neutral-500 font-sans tracking-tight hover:text-foreground transition-colors duration-300 cursor-default">
            Please email me for the full version - limwg021018@gmail.com
          </p>
        </motion.div>

        {/* Multi-column Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8"
        >

          {/* Column 1: Education */}
          <div className="flex flex-col gap-6">
            <motion.h3 variants={itemVariants} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500">
              Education
            </motion.h3>

            <div className="flex flex-col gap-12">
              <motion.div variants={itemVariants} className="flex flex-col gap-4 text-sm group cursor-default">
                <div className="flex flex-col gap-0.5 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="font-bold text-lg md:text-xl text-foreground tracking-tight transition-colors">Coventry University</h4>
                  <span className="font-mono text-xs text-neutral-500 transition-colors group-hover:text-neutral-400">2023-2026</span>
                </div>

                <div className="flex flex-col gap-1 text-sm text-neutral-400 transition-colors group-hover:text-neutral-300 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-1">
                  <p className="font-medium text-foreground transition-colors">Bachelor of Science (Honors)</p>
                  <p>Computer Science</p>
                </div>

                <div className="font-medium text-[13px] uppercase tracking-wider text-neutral-500 mt-1 transition-colors group-hover:text-foreground pt-2">
                  First Class Honours
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex flex-col gap-4 text-sm group cursor-default">
                <div className="flex flex-col gap-0.5 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="font-bold text-lg md:text-xl text-foreground tracking-tight transition-colors leading-tight">Tunku Abdul Rahman University of Management and Technology (TARUMT)</h4>
                  <span className="font-mono text-xs text-neutral-500 mt-1 transition-colors group-hover:text-neutral-400">2020-2023</span>
                </div>

                <div className="flex flex-col gap-1 text-sm text-neutral-400 transition-colors group-hover:text-neutral-300 border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-1">
                  <p className="font-medium text-foreground transition-colors">Diploma</p>
                  <p>Mechatronics Engineering</p>
                </div>

                <div className="font-medium text-[13px] uppercase tracking-wider text-neutral-500 mt-1 transition-colors group-hover:text-foreground pt-2">
                  CGPA: 3.4/4.0
                </div>
              </motion.div>
            </div>
          </div>

          {/* Column 2: Experience */}
          <div className="flex flex-col gap-6">
            <motion.h3 variants={itemVariants} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500">
              Experience
            </motion.h3>

            <div className="flex flex-col gap-12">
              {[
                { title: "Product Engineer Intern", company: "Keysight Technologies", date: "Dec 2025 - Apr 2026" },
                { title: "Industrial Engineer Intern", company: "Analog Devices", date: "Feb 2023 - Jun 2023" },
              ].map((exp, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col gap-3 group cursor-default">
                  <div className="flex flex-col gap-0.5 transition-transform duration-300 group-hover:translate-x-1">
                    <h4 className="font-bold text-lg md:text-xl text-foreground tracking-tight">
                      {exp.title}
                    </h4>
                    <span className="font-mono text-xs text-neutral-500 transition-colors group-hover:text-neutral-400">
                      {exp.date}
                    </span>
                  </div>
                  <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-1">
                    <p className="text-sm font-medium text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                      {exp.company}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 3: Skills & Tools */}
          <div className="flex flex-col gap-12">
            
            <div className="flex flex-col gap-6">
              <motion.h3 variants={itemVariants} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500">
                Skills
              </motion.h3>
              <motion.ul variants={itemVariants} className="flex flex-col gap-3 text-sm">
                {[
                  "Cross-func. collaboration", "Presenting & storytelling", "Design system integration",
                  "AI tools", "Dashboard & portal design", "UX, UI, product design", "Mobile & desktop design",
                  "User research", "Usability testing", "Layout & typography", "Information architecture",
                  "User flow mapping", "Prototyping & wireframing", "Frontend programming", "Python, C++ programming"
                ].map((skill, i) => (
                  <li key={i} className="text-neutral-400 font-medium hover:text-foreground transition-all duration-300 hover:translate-x-1 cursor-default">
                    {skill}
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div variants={itemVariants} className="flex flex-col gap-6 pt-6 border-t dark:border-neutral-900 border-neutral-200">
               <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500">
                 Tools
               </h3>
               <ul className="flex flex-col gap-3 text-sm">
                 {[
                   "Figma", "Microsoft Office Suite",
                   "CSS, HTML, Javascript/Typescript, Python", "PyCharm, CLion, VS Code, Antigravity", "Microsoft Power Platform (Power Apps, Power Automate)"
                 ].map((tool, i) => (
                   <li key={i} className="text-neutral-400 font-medium hover:text-foreground transition-all duration-300 hover:translate-x-1 cursor-default leading-relaxed text-balance">
                     {tool}
                   </li>
                 ))}
               </ul>
            </motion.div>

          </div>

          {/* Column 4: Awards */}
          <div className="flex flex-col gap-6">
            <motion.h3 variants={itemVariants} className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-neutral-500">
              Awards
            </motion.h3>

            <div className="flex flex-col gap-12">
              <motion.div variants={itemVariants} className="flex flex-col gap-3 group cursor-default">
                <div className="flex flex-col gap-0.5 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="font-bold text-lg md:text-xl text-foreground tracking-tight transition-colors">
                    Participants
                  </h4>
                  <span className="font-mono text-xs text-neutral-500 transition-colors group-hover:text-neutral-400">
                    2023
                  </span>
                </div>
                <div className="border-l-2 border-neutral-200 dark:border-neutral-800 pl-4 py-1">
                  <p className="text-sm font-medium text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
                    Huawei Intelligent World 2030
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
