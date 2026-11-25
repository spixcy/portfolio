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
    location: 'BHUBANESWAR, INDIA',
    // [EDITABLE]: Replace with your local timezone
    timezone: 'UTC+5:30',
    // [EDITABLE]: Replace with your expected response time
    responseWindow: 'REPLIES WITHIN 24-48H',
    // [EDITABLE]: Replace with your availability status
    statusNote: 'OPEN TO INTERNSHIPS & COLLABORATIONS',
  },

  about: {
    heading: 'About',
    bioIntro: 'Computer Science undergraduate and software developer interested in building useful products, exploring emerging technologies, and creating digital experiences that bring together engineering and creativity.',
    bioParagraphs: [
      "I'm Swatha, a Computer Science undergraduate at KIIT University. I enjoy turning ideas into working software, experimenting with unfamiliar technologies, and understanding how things work beyond the surface.",
      "My interests span full-stack development, application engineering, interactive 3D experiences, computer vision, and creative interfaces. I like working across different parts of a product, from designing an interface and building its backend to figuring out how everything fits together.",
      "I believe the best way to learn engineering is to build things. That's why most of my learning happens through projects, experiments, debugging, and occasionally breaking things just to understand how they work.",
      "Some of the things I've worked on include Code Fox, a productivity-focused desktop application; BoneVista, an interactive 3D anatomy and biomechanics workspace; KIMS-Care, a healthcare platform; and The Autis, an independently published game.",
      "I don't want to limit myself to one particular area of development. I'm interested in understanding the entire process of building software, from the initial idea to the final experience.",
    ],
    skills: [
      {
        category: 'Programming & Computer Science',
        items: ['C / C++', 'Java', 'Python', 'JavaScript', 'TypeScript', 'C#', 'Data Structures & Algorithms', 'Object-Oriented Programming'],
      },
      {
        category: 'Interface & Application Development',
        items: ['React', 'Next.js', 'HTML & CSS', 'Flutter / Dart', 'Responsive Web Development', 'Desktop Application Development', 'UI Implementation', 'Interactive Interfaces'],
      },
      {
        category: 'Backend & Data Systems',
        items: ['Java Spring Boot', 'REST APIs', 'PostgreSQL', 'Supabase', 'DBMS & Database Design', 'Authentication', 'Vite', 'State Management'],
      },
      {
        category: 'Creative & Experimental Development',
        items: ['Three.js', 'React Three Fiber', 'Unity', 'Blender', 'Computer Vision', 'OpenCV', '3D Visualization', 'Interactive Animation', 'AI / ML Experimentation'],
      },
      {
        category: 'Tools & Workflow',
        items: ['Git & GitHub', 'VS Code', 'IntelliJ IDEA', 'Android Studio', 'Linux / Ubuntu', 'Figma', 'Postman', 'Docker (Exploring)', 'Kafka (Exploring)'],
      },
    ],
    highlights: [
      { label: 'EDUCATION', value: 'B.TECH COMPUTER SCIENCE · KIIT UNIVERSITY' },
      { label: 'DISCIPLINE', value: 'SOFTWARE ENGINEERING & PRODUCT DEVELOPMENT' },
      { label: 'PRIMARY STACK', value: 'C++ / JAVA / PYTHON / REACT / SPRING BOOT / UNITY / BLENDER / FLUTTER / C# / POSTGRESQL' },
      { label: 'LOCATION', value: 'BHUBANESWAR, INDIA' },
    ],
    statusStatement: 'SYSTEM STATUS: ACTIVE • CURRENT MODE: BUILDING & EXPERIMENTING • AVAILABILITY: OPEN TO INTERNSHIPS & COLLABORATIONS',
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
      tagline: 'An independently published game built with Unity and C#. A personal project exploring game development, storytelling, and interactive design from scratch.',
      tags: ['Unity', 'C#', 'Game Dev', 'Indie'],
      thumbnail: '/the-autis.jpeg',
      heroImage: '/the-autis.jpeg',
      featured: true,
      featuredOrder: 2,
      actionLabel: 'PLAY ON ITCH.IO',
      details: {
        overview: 'The Autis is an independently published game built entirely with Unity and C#. It was designed, developed, and shipped as a solo project — covering everything from game mechanics and level design to art direction and publishing on itch.io.',
        features: [
          'Solo-developed from concept to release using Unity and C#.',
          'Covers core game mechanics, level design, and scene management.',
          'Published independently on itch.io.',
          'An exploration of game development as a creative and technical discipline.',
        ],
        techStack: ['Unity', 'C#', 'Game Development', 'itch.io'],
        links: [
          { label: 'Play The Autis on itch.io', url: 'https://spixcy.itch.io/the-autis', type: 'live' },
          { label: 'View source on GitHub', url: 'https://github.com/spixcy/Auti-the-game', type: 'repo' },
        ],
      },
    },
  ],
};
