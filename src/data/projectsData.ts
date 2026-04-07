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
  images?: string[];
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
      'Developed a full-stack web application connecting pet owners with adoptable animals across Penang, enabling real-time listings, search.',
    longDescription: `This project introduces a Penangite Pet Enthusiast and Adoption Platform, a comprehensive web application designed to streamline the adoption process while supporting first-time adopters with AI-powered educational assistance.

    The system integrates Retrieval-Augmented Generation (RAG) to deliver accurate, contextually relevant, and real-time responses to user queries on pet care, vaccination, and behavioural management. Developed using Next.js, Tailwind CSS, and Supabase for backend management, the platform also features community interaction tools such as discussion forums, event organization modules, and messaging systems to foster collaboration  `,
    techStack: ['Next.js', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Framer Motion', 'shadcn/ui', 'TypeScript', 'Drizzle ORM', 'REST API', 'Open AI'],
    role: 'Full-Stack Developer',
    thumbnail: '/assets/projects/FYP-1.png',
    images: [
      '/assets/projects/FYP-1.png',
      '/assets/projects/FYP-2.png',
      '/assets/projects/FYP-3.png',
      '/assets/projects/FYP-4.png',
      '/assets/projects/FYP-5.png'
    ],
    liveUrl: '#',
    githubUrl: 'https://github.com/sutneV/6001CEM-FYP',
  },
  {
    slug: 'product-portfolio',
    title: 'Product Portfolio',
    category: 'INTERNSHIP PROJECT',
    year: '2025',
    description:
      'A comprehensive product showcase platform built during my internship at Keysight Technologies',
    longDescription: `During my internship at Keysight Technologies, I designed and developed an internal product portfolio platform that consolidates the company's extensive range of test and measurement solutions into a searchable, filterable interface.

The platform replaced a fragmented system of spreadsheets and documents, providing engineers with instant access to product specifications, comparison tools, and integration guides. Built with a focus on performance and usability, it features advanced filtering, real-time search, and responsive data visualizations.

Working within the product engineering team gave me deep exposure to enterprise UX challenges, cross-functional collaboration, and the importance of designing for highly technical users.`,
    techStack: ['Power Apps', 'SharePoint', 'Power Automate', 'Figma'],
    role: 'Product Engineer Intern',
    thumbnail: '/assets/projects/PP-1.png',
    images: [
      '/assets/projects/PP-1.png',
      '/assets/projects/PP-2.png',
      '/assets/projects/PP-3.png',
      '/assets/projects/PP-4.png',
      '/assets/projects/PP-5.png',
      '/assets/projects/PP-7.png',
      '/assets/projects/PP-8.png'
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
];
