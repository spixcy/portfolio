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
    // --- INTERFACE PROJECTS ---
    {
      id: 'kinetic-vfx',
      number: '01',
      title: 'KINETIC VFX',
      category: 'interface',
      categoryLabel: 'Interface',
      tagline: 'UI controls that react with physical elasticity, drawn impact frames, and comic sound-effect typography.',
      tags: ['UI Library', 'Animation', 'Open Source'],
      thumbnail: 'procedural:kinetic-vfx',
      heroImage: 'procedural:kinetic-vfx',
      featured: true,
      featuredOrder: 1,
      details: {
        overview: 'A high-octane UI interaction library providing tactile button rebounds, squash-and-stretch deformations, and stylized 2D impact bursts for standard web controls.',
        problem: 'Modern web interfaces often feel sterile and uniform. Traditional UI micro-interactions lack physical weight and expressive personality.',
        solution: 'Engineered a lightweight physics and spring animation system built on requestAnimationFrame and CSS transform matrices, executing zero-dependency manga-style action lines and spring dynamics.',
        features: [
          'Sub-millisecond input response with spring-mass-damper physics',
          'Dynamic SVG speed lines and custom particle burst renderer',
          'Full keyboard accessibility and WAI-ARIA compliance',
          'Configurable impact intensity and reduced-motion fallbacks',
        ],
        techStack: ['TypeScript', 'Canvas API', 'Web Animations API', 'Tailwind CSS'],
        links: [
          { label: 'View Documentation', url: '#', type: 'live' },
          { label: 'Source Repository', url: '#', type: 'repo' },
        ],
      },
    },
    {
      id: 'pixel-console',
      number: '02',
      title: 'PIXEL CONSOLE',
      category: 'interface',
      categoryLabel: 'Interface',
      tagline: 'Living pixel-art interface components driven by user input states, audio spectrum, and live data.',
      tags: ['Design System', 'Pixel Art', 'CSS Grid'],
      thumbnail: 'procedural:pixel-console',
      heroImage: 'procedural:pixel-console',
      featured: true,
      featuredOrder: 2,
      details: {
        overview: 'A retro computer terminal and component toolkit where every button, slider, and input box lives as an interactive 8-bit animated artifact.',
        problem: 'Retro-themed portfolios often paste static pixel art as background images, breaking responsive layouts and interactive fidelity.',
        solution: 'Constructed an adaptive 9-slice SVG and CSS grid scaling system that preserves crisp integer pixel scaling on 4K and retina monitors.',
        features: [
          'Crisp pixel scaling using image-rendering: pixelated and SVG vectors',
          'Interactive sound synthesis via Web Audio API oscillators',
          'Custom bitmap font rendering with sub-pixel alignment',
          'Zero external asset dependencies — 100% procedural graphics',
        ],
        techStack: ['React', 'TypeScript', 'Web Audio API', 'SVG'],
        links: [
          { label: 'Interactive Sandbox', url: '#', type: 'live' },
          { label: 'Component Library', url: '#', type: 'repo' },
        ],
      },
    },
    {
      id: 'rubber-hose-ui',
      number: '03',
      title: 'RUBBER HOSE UI',
      category: 'interface',
      categoryLabel: 'Interface',
      tagline: 'Twelve dependency-free web controls drawn as 1930s rubber-hose cartoon characters with accessible controls underneath.',
      tags: ['SVG Animation', 'Motion Design', 'Accessible'],
      thumbnail: 'procedural:rubber-hose-ui',
      heroImage: 'procedural:rubber-hose-ui',
      featured: true,
      featuredOrder: 3,
      details: {
        overview: 'An experimental design system inspired by vintage animation techniques from the 1930s, featuring bendy limbs, eye blinks, and animated squash.',
        problem: 'Creative UI experiments frequently sacrifice accessibility for visual novelty.',
        solution: 'Every animated cartoon character wraps a native HTML form control (<input>, <button>, <select>) with transparent overlays and full screen-reader support.',
        features: [
          'Hand-crafted SVG path animations driven by cubic-bezier springs',
          'Autonomous idle breathing and reaction upon mouse proximity',
          'Complete screen reader support and keyboard focus indicators',
          'Dark and sepia parchment theme modes',
        ],
        techStack: ['SVG', 'CSS Keyframes', 'TypeScript', 'a11y'],
        links: [
          { label: 'Interactive Parade', url: '#', type: 'live' },
          { label: 'GitHub Repository', url: '#', type: 'repo' },
        ],
      },
    },
    {
      id: 'dot-bloom',
      number: '04',
      title: 'DOT BLOOM',
      category: 'interface',
      categoryLabel: 'Interface',
      tagline: 'Real-time halftoning and phosphor pointillism engine for rich media feeds and interactive dashboards.',
      tags: ['Graphics', 'Halftone', 'Performance'],
      thumbnail: 'procedural:dot-bloom',
      heroImage: 'procedural:dot-bloom',
      featured: false,
      details: {
        overview: 'A high-performance dot-matrix visual processor converting image and video streams into kinetic phosphor dot lattices.',
        problem: 'Rendering thousands of interactive canvas particles in browser viewports without dropping 60fps frame rates.',
        solution: 'Leveraged instanced WebGL mesh rendering and compute shaders to process pixel luminance into variable-radius phosphor discs.',
        features: [
          'Processes 1080p video at steady 60fps on modern mobile GPUs',
          'Custom amber, green, and monochrome color palettes',
          'Interactive mouse distortion field and ripple shockwaves',
        ],
        techStack: ['WebGL', 'GLSL', 'TypeScript', 'Web Workers'],
        links: [
          { label: 'Live Demo', url: '#', type: 'live' },
        ],
      },
    },

    // --- SYSTEMS PROJECTS ---
    {
      id: 'neural-cockpit',
      number: '05',
      title: 'NEURAL COCKPIT',
      category: 'systems',
      categoryLabel: 'Systems',
      tagline: 'High-density telemetry dashboard and agent orchestration console for autonomous AI pipelines.',
      tags: ['Agent Ops', 'Telemetry', 'WebSockets'],
      thumbnail: 'procedural:neural-cockpit',
      heroImage: 'procedural:neural-cockpit',
      featured: false,
      details: {
        overview: 'A real-time command console monitoring multi-agent token workflows, latency spikes, and execution traces across distributed models.',
        problem: 'Monitoring complex agentic workflows with standard text logs is tedious and makes bottlenecks hard to diagnose.',
        solution: 'Created a spatial timeline and graph canvas visualizing subagent hierarchy, tool call arguments, and context memory usage in real time.',
        features: [
          'Real-time streaming telemetry via WebSockets and SSE',
          'Dynamic directed acyclic graph (DAG) visualization of agent invocations',
          'Token cost breakdown and latency flame graphs',
          'Reversible state timeline with step-by-step playback',
        ],
        techStack: ['React', 'TypeScript', 'D3.js', 'WebSockets', 'Tailwind CSS'],
        links: [
          { label: 'Architecture Overview', url: '#', type: 'case-study' },
          { label: 'GitHub Repository', url: '#', type: 'repo' },
        ],
      },
    },
    {
      id: 'synth-forge',
      number: '06',
      title: 'SYNTH FORGE',
      category: 'systems',
      categoryLabel: 'Systems',
      tagline: 'Modular software synthesizer and audio node graph compiler running entirely in the browser.',
      tags: ['Web Audio', 'DSP', 'Node Graph'],
      thumbnail: 'procedural:synth-forge',
      heroImage: 'procedural:synth-forge',
      featured: false,
      details: {
        overview: 'A browser-based modular synthesizer supporting visual cable patching, wavetable synthesis, and real-time audio analysis.',
        problem: 'Real-time audio processing in JavaScript can cause glitches and audio dropouts when sharing the main thread.',
        solution: 'Offloaded DSP routines to dedicated AudioWorklet nodes compiled to WebAssembly, ensuring artifact-free audio playback.',
        features: [
          'Zero-latency polyphonic synthesis engine via AudioWorklets',
          'Visual patch cord routing with Bezier cable physics',
          'MIDI hardware keyboard plug-and-play support',
          'Preset export and import via JSON patch definitions',
        ],
        techStack: ['Web Audio API', 'AudioWorklet', 'WebAssembly', 'TypeScript'],
        links: [
          { label: 'Play Synthesizer', url: '#', type: 'live' },
          { label: 'Audio Engine Core', url: '#', type: 'repo' },
        ],
      },
    },

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
      featuredOrder: 4,
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
      number: '09',
      title: 'THE AUTIS',
      category: 'games',
      categoryLabel: 'Games',
      tagline: 'A Unity game built with C#. Play it on itch.io.',
      tags: ['Unity', 'C#', 'Game'],
      thumbnail: '/the-autis.jpeg',
      heroImage: '/the-autis.jpeg',
      featured: false,
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
