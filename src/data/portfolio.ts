import type { PortfolioData } from '../types/portfolio';

/**
 * CENTRALIZED PORTFOLIO DATA
 * 
 * Edit this file to customize your personal identity, contact details,
 * categories, and projects without touching any layout code.
 * 
 * All placeholders are clearly indicated with [EDITABLE: ...] tags.
 */
export const portfolioData: PortfolioData = {
  system: {
    name: 'PORTFOLIO/OS',
    code: 'SYS-2026',
    version: 'V2.6.4',
    manufacturer: 'RETRO DYNAMICS CORP.',
    status: 'READY',
    modelNumber: 'RD-8088',
  },

  identity: {
    // [EDITABLE]: Replace with your full name
    name: 'Swatha',
    // [EDITABLE]: Replace with your professional title
    title: 'Creative Frontend Engineer & Interaction Designer',
    // [EDITABLE]: Replace with your short one-line introduction
    tagline: 'I build interfaces that move, tools for creative workflows, and interactive digital experiences.',
    // [EDITABLE]: Replace with your city / base location
    location: 'GLOBAL',
    // [EDITABLE]: Replace with your local timezone
    timezone: 'UTC+5:30',
    // [EDITABLE]: Replace with your expected response time
    responseWindow: 'REPLIES WITHIN 24-48H',
    // [EDITABLE]: Replace with your availability status
    statusNote: 'AVAILABLE FOR SELECT ROLES & CREATIVE COLLABORATIONS',
  },

  about: {
    heading: 'About The Engineer',
    bioIntro: 'Creative engineer working at the intersection of tactile UI design, high-performance web systems, and playful human-computer interaction.',
    bioParagraphs: [
      '[EDITABLE: Add your background story here. For example: Specializing in designing and building expressive web interfaces, bespoke design systems, and rich graphics. Focused on making software feel physical, responsive, and delightful to operate.]',
      '[EDITABLE: Add details about your engineering philosophy here. For example: Bridging the gap between engineering rigor and interaction craftsmanship. Believing that every interaction should offer tangible feedback, thoughtful typography, and rock-solid performance.]',
      '[EDITABLE: Add your current pursuits or learning interests here. For example: Exploring WebGPU, agentic interfaces, spatial computing, and next-generation developer tooling.]',
    ],
    skills: [
      {
        category: 'Interface & Frontend',
        items: ['React', 'TypeScript', 'Next.js', 'Tailwind / Custom CSS', 'Framer Motion', 'Web Animations API', 'Design Systems', 'Accessibility (a11y)'],
      },
      {
        category: 'Systems & Architecture',
        items: ['Node.js', 'Vite', 'GraphQL / REST APIs', 'State Machines', 'Performance Profiling', 'Web Workers', 'CI/CD Pipelines'],
      },
      {
        category: '3D & Creative Media',
        items: ['Three.js', 'WebGL / WebGPU', 'Shaders (GLSL)', 'Blender', 'SVG Animation', 'Canvas 2D API', 'Generative UI'],
      },
      {
        category: 'Tools & Workflows',
        items: ['Git', 'Figma', 'Linux', 'Vim / Neovim', 'Browser DevTools', 'Audio Synthesis (Web Audio)'],
      },
    ],
    highlights: [
      { label: 'EXPERIENCE', value: '5+ YEARS' },
      { label: 'DISCIPLINE', value: 'UI/UX & FRONTEND' },
      { label: 'STACK', value: 'REACT / TS / WEBGL' },
      { label: 'LOCATION', value: 'REMOTE / HYBRID' },
    ],
    statusStatement: 'SYSTEM ACTIVE • ALL SUBSYSTEMS NOMINAL • OPEN TO OPPORTUNITIES',
  },

  contact: {
    heading: 'Contact',
    locationMeta: 'GLOBAL • UTC+5:30 • REPLIES WITHIN 24-48H',
    subheading: 'Pick a channel. I read everything that lands. The clearer the ask, the faster the reply.',
    links: [
      {
        channel: 'EMAIL',
        handle: 'swathasingh123@gmail.com',
        url: 'mailto:swathasingh123@gmail.com',
      },
      {
        channel: 'LINKEDIN',
        handle: 'linkedin.com/in/swatha-ba1721385',
        url: 'https://www.linkedin.com/in/swatha-ba1721385/',
      },
      {
        channel: 'GITHUB',
        handle: 'github.com/spixcy',
        url: 'https://github.com/spixcy',
      },
      {
        channel: 'INSTAGRAM',
        handle: 'instagram.com/____maxin',
        url: 'https://www.instagram.com/____maxin/',
      },
    ],
    disclaimer: '',
  },

  categories: [
    {
      id: 'interface',
      lane: 1,
      title: 'INTERFACE',
      code: 'INTF',
      icon: 'monitor',
      description: 'Tactile UI components, expressive animation libraries, and design systems.',
    },
    {
      id: 'systems',
      lane: 2,
      title: 'SYSTEMS',
      code: 'SYST',
      icon: 'bot',
      description: 'Developer tooling, agent consoles, and high-performance software architectures.',
    },
    {
      id: 'worlds',
      lane: 3,
      title: '3D WORKS',
      code: 'WRLD',
      icon: 'box',
      description: 'Interactive WebGL simulations, 3D generative scenes, and spatial shaders.',
    },
    {
      id: 'games',
      lane: 4,
      title: 'GAMES',
      code: 'GAME',
      icon: 'gamepad',
      description: 'Browser games, retro mechanics, and physics-driven interactive playgrounds.',
    },
  ],

  projects: [
    // --- 3D WORKS PROJECTS ---
    {
      id: 'bonevista',
      number: '01',
      title: 'BONEVISTA',
      category: 'worlds',
      categoryLabel: '3D Works',
      tagline: '3D anatomy, made explorable. A browser-based anatomy and biomechanics workspace for learning by seeing, moving, and testing ideas.',
      tags: ['React', 'Three.js', 'TypeScript'],
      thumbnail: 'https://raw.githubusercontent.com/spixcy/BoneVista/main/public/branding/bonevista-hero-banner.png',
      heroImage: 'https://raw.githubusercontent.com/spixcy/BoneVista/main/public/branding/bonevista-hero-banner.png',
      featured: true,
      featuredOrder: 1,
      actionLabel: 'EXPLORE PROJECT',
      details: {
        overview: 'BoneVista brings interactive anatomy models, guided study, physiology revision, radiograph viewing, and an educational biomechanics model into one browser workspace.',
        features: [
          'Explore and select structures across skeletal, muscle, brain, and nerve atlases.',
          'Study with guided anatomy paths and animated physiology revision.',
          'Use browser-based radiograph viewing and an educational axial stress model.',
          'For education and exploration; not for diagnosis or treatment decisions.',
        ],
        techStack: ['React', 'TypeScript', 'Three.js', 'React Three Fiber', 'Vite'],
        links: [
          { label: 'Open BoneVista', url: 'https://bonevista.vercel.app/', type: 'live' },
          { label: 'View GitHub repository', url: 'https://github.com/spixcy/BoneVista', type: 'repo' },
          { label: 'Open Live App', url: 'https://bonevista.vercel.app/', type: 'live' },
        ],
      },
    },

    // --- GAMES PROJECTS ---
    {
      id: 'the-autis',
      number: '02',
      title: 'THE AUTIS',
      category: 'games',
      categoryLabel: 'Games',
      tagline: 'A Unity game built with C#. Play it on itch.io.',
      tags: ['Unity', 'C#', 'Game'],
      thumbnail: '/the-autis.jpeg',
      heroImage: '/the-autis.jpeg',
      featured: true,
      featuredOrder: 2,
      actionLabel: 'VIEW GAME',
      details: {
        overview: 'The Autis is a game project built with Unity and C#.',
        features: [],
        techStack: ['Unity', 'C#'],
        links: [
          { label: 'Play The Autis on itch.io', url: 'https://spixcy.itch.io/the-autis', type: 'live' },
          { label: 'View source on GitHub', url: 'https://github.com/spixcy/Auti-the-game', type: 'repo' },
        ],
      },
    },
  ],
};
