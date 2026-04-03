export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  techStack: string[];
  role: string;
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    slug: 'ai-pet-adoption',
    title: 'AI-Powered Pet Adoption Platform',
    category: 'FINAL YEAR PROJECT',
    year: '2025',
    description:
      'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet consectetur adipiscing elit quisque faucibus ex. Adipiscing elit quisque faucibus ex sapien vitae pellentesque.',
    longDescription: ` `,
    techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui', 'TypeScript', 'Drizzle ORM', 'REST API', 'Open AI'],
    role: 'Full-Stack Developer',
    thumbnail: '/assets/projects/general-img-landscape.png',
    liveUrl: '#',
    githubUrl: 'https://github.com/sutneV/6001CEM-FYP',
  },
  {
    slug: 'product-portfolio',
    title: 'Product Portfolio',
    category: 'INTERNSHIP PROJECT',
    year: '2025',
    description:
      'A comprehensive product showcase platform built during my internship at Keysight Technologies, streamlining how engineers discover test solutions.',
    longDescription: `During my internship at Keysight Technologies, I designed and developed an internal product portfolio platform that consolidates the company's extensive range of test and measurement solutions into a searchable, filterable interface.

The platform replaced a fragmented system of spreadsheets and documents, providing engineers with instant access to product specifications, comparison tools, and integration guides. Built with a focus on performance and usability, it features advanced filtering, real-time search, and responsive data visualizations.

Working within the product engineering team gave me deep exposure to enterprise UX challenges, cross-functional collaboration, and the importance of designing for highly technical users.`,
    techStack: ['Power Apps', 'SharePoint', 'Power Automate', 'Figma'],
    role: 'Product Engineer Intern',
    thumbnail: '/assets/projects/general-img-landscape.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    slug: 'ethereal-os',
    title: 'Ethereal OS',
    category: 'HACKATHON WINNER',
    year: '2024',
    description:
      'A nostalgic virtual desktop environment reimagined with modern web technologies — winner of the best UI/UX award.',
    longDescription: `Ethereal OS is a browser-based virtual desktop environment that blends retro computing aesthetics with cutting-edge web technologies. Built during a 48-hour hackathon, it features draggable windows, a functional taskbar, custom themes, and interactive mini-applications — all rendered entirely in the browser.

The project showcases advanced CSS techniques including glassmorphism, custom animations, and pixel-perfect retro UI recreation. Under the hood, it uses React for state management, Framer Motion for fluid interactions, and a custom window manager that handles z-indexing, resizing, and snapping.

Ethereal OS won the Best UI/UX award at the hackathon, praised for its attention to detail, smooth interactions, and the creative fusion of nostalgic and modern design languages.`,
    techStack: ['React', 'Framer Motion', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    role: 'UI/UX Developer',
    thumbnail: '/assets/projects/general-img-landscape.png',
    liveUrl: '#',
    githubUrl: '#',
  },
];
