import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projectsData';
import ProjectCarousel from '@/components/ProjectCarousel';
import Reveal from '@/components/Reveal';
import type { Metadata } from 'next';

// Generate static params for all project slugs
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Wei Giap`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Back Navigation */}
      <div className="fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 md:py-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-foreground transition-colors duration-300 group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform duration-300"
          />
          Back to works
        </Link>
      </div>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Category & Year */}
          <Reveal>
            <div className="flex justify-between items-center mb-6 md:mb-8">
              <span className="text-[10px] md:text-xs text-neutral-500 font-mono uppercase tracking-widest">
                {project.category}
              </span>
              <span className="text-[10px] md:text-xs text-neutral-500 font-mono">
                {project.year}
              </span>
            </div>
          </Reveal>

          {/* Title */}
          <Reveal delay={0.1}>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 md:mb-8">
              {project.title}
            </h1>
          </Reveal>

          {/* Short description */}
          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed mb-8 md:mb-12">
              {project.description}
            </p>
          </Reveal>

          {/* Hero Image / Carousel */}
          <Reveal delay={0.3}>
            <ProjectCarousel 
              images={project.images && project.images.length > 0 ? project.images : [project.thumbnail]} 
              title={project.title} 
            />
          </Reveal>
        </div>
      </section>

      {/* Details Grid */}
      <section className="py-12 md:py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
            {/* Left Column — Metadata */}
            <div className="md:col-span-4 lg:col-span-3">
              <Reveal>
                <div className="flex flex-col gap-8 md:sticky md:top-24">
                  {/* Role */}
                  <div>
                    <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                      Role
                    </h3>
                    <p className="text-sm md:text-base font-medium">{project.role}</p>
                  </div>

                  {/* Year */}
                  <div>
                    <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                      Year
                    </h3>
                    <p className="text-sm md:text-base font-medium">{project.year}</p>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 mb-3">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="flex flex-col gap-3 pt-4 border-t dark:border-neutral-800 border-neutral-200">
                      {project.liveUrl && project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-500 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Live Site
                        </a>
                      )}
                      {project.githubUrl && project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium hover:text-neutral-500 transition-colors"
                        >
                          <ExternalLink size={14} />
                          Source Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Right Column — Long Description */}
            <div className="md:col-span-8 lg:col-span-9">
              <Reveal delay={0.2}>
                <h3 className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
                  About the Project
                </h3>
              </Reveal>
              <div className="prose-custom flex flex-col gap-6">
                {project.longDescription.split(/\n\s*\n/).filter(Boolean).map((paragraph, i) => (
                  <Reveal key={i} delay={0.3 + (i * 0.1)}>
                    <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Next Project Teaser */}
      <Reveal>
        <section className="border-t dark:border-neutral-800 border-neutral-200">
          <Link
            href={`/work/${nextProject.slug}`}
            className="group block py-16 md:py-24 px-6 md:px-16 hover:bg-neutral-50 dark:hover:bg-neutral-950 transition-colors duration-500"
          >
            <div className="max-w-7xl mx-auto">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-widest text-neutral-500 mb-4 block">
                Next Project
              </span>
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter group-hover:translate-x-2 transition-transform duration-500">
                  {nextProject.title}
                </h2>
                <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full border dark:border-neutral-800 border-neutral-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-all duration-500 shrink-0">
                  <ArrowUpRight
                    size={24}
                    className="group-hover:rotate-45 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </Link>
        </section>
      </Reveal>
    </main>
  );
}
