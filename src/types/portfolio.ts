export type ProjectCategory = 'interface' | 'systems' | 'worlds' | 'games';

export interface ProjectDetailSection {
  overview: string;
  problem?: string;
  solution?: string;
  features: string[];
  techStack: string[];
  gallery?: {
    caption: string;
    image: string;
    aspectRatio?: '16/9' | '4/3' | '1/1';
  }[];
  links?: {
    label: string;
    url: string;
    type: 'live' | 'repo' | 'case-study';
  }[];
}

export interface Project {
  id: string;
  number: string; // e.g. "01", "02"
  title: string;
  category: ProjectCategory;
  categoryLabel: string;
  tagline: string;
  tags: string[];
  thumbnail: string;
  heroImage?: string;
  featured?: boolean;
  featuredOrder?: number;
  details: ProjectDetailSection;
}

export interface SocialLink {
  channel: string;
  handle: string;
  url: string;
}

export interface PortfolioData {
  system: {
    name: string;
    code: string;
    version: string;
    manufacturer: string;
    status: string;
    modelNumber: string;
  };
  identity: {
    name: string;
    title: string;
    tagline: string;
    location: string;
    timezone: string;
    responseWindow: string;
    statusNote: string;
  };
  about: {
    heading: string;
    bioIntro: string;
    bioParagraphs: string[];
    skills: {
      category: string;
      items: string[];
    }[];
    highlights: {
      label: string;
      value: string;
    }[];
    statusStatement: string;
  };
  contact: {
    heading: string;
    locationMeta: string;
    subheading: string;
    links: SocialLink[];
    disclaimer: string;
  };
  categories: {
    id: ProjectCategory;
    lane: number;
    title: string;
    code: string;
    icon: string;
    description: string;
  }[];
  projects: Project[];
}
