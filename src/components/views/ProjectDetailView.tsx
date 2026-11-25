import React from 'react';
import type { Project } from '../../types/portfolio';
import { OptimizedImage } from '../common/OptimizedImage';
import { TheAutisCaseStudy } from './TheAutisCaseStudy';
import { BoneVistaCaseStudy } from './BoneVistaCaseStudy';

interface ProjectDetailViewProps {
  project: Project;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
}) => {
  if (project.id === 'the-autis') return <TheAutisCaseStudy />;
  if (project.id === 'bonevista') return <BoneVistaCaseStudy />;

  return (
    <article className="space-y-8 select-text">
      {/* Title & Tagline */}
      <header className="space-y-3">
        <div className="font-mono text-xs sm:text-sm text-[#ff8a1f]/75 uppercase tracking-[0.2em] font-bold">
          {project.categoryLabel.toUpperCase()} • PROJECT {project.number}
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ff8a1f] tracking-tight uppercase">
          {project.title}
        </h1>
        <p className="text-lg sm:text-xl text-[#f5ece0] leading-relaxed">
          {project.tagline}
        </p>
      </header>

      {/* Hero Artwork / Screenshot */}
      <div className="w-full aspect-video max-h-[420px] rounded-lg overflow-hidden border border-[#ff8a1f]/40 bg-black/75 shadow-2xl p-2">
        <OptimizedImage
          src={project.heroImage || project.thumbnail}
          alt={project.title}
          aspectRatio="16/9"
          fit="contain"
          priority={true}
        />
      </div>

      {/* Action Links */}
      {project.details.links && project.details.links.length > 0 && (
        <div className="flex flex-wrap gap-3">
          {project.details.links.map((link, lIdx) => (
            <a
              key={lIdx}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-mono text-xs sm:text-sm font-bold tracking-wider uppercase transition-all ${
                lIdx === 0
                  ? 'bg-[#ff8a1f] hover:bg-[#ffa03a] text-[#120b06] shadow-[0_0_18px_rgba(255,138,31,0.35)]'
                  : 'border border-[#ff8a1f]/45 bg-[#1a1008]/80 hover:bg-[#ff8a1f]/15 text-[#ffbe6b]'
              }`}
            >
              <span>{link.label}</span>
              <span>↗</span>
            </a>
          ))}
        </div>
      )}

      {/* Overview */}
      <section className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-[#ff8a1f] tracking-tight">
          Overview
        </h2>
        <p className="text-base sm:text-[17px] text-[#e8ddd0] leading-[1.75]">
          {project.details.overview}
        </p>
      </section>

      {/* Problem & Solution if present */}
      {(project.details.problem || project.details.solution) && (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.details.problem && (
            <div className="border border-[#ff8a1f]/25 rounded-md p-5 bg-[#1a1008]/70 space-y-2">
              <h3 className="font-mono text-xs sm:text-sm font-bold text-[#ff8a1f] tracking-wider uppercase">
                ● Motivation & Problem
              </h3>
              <p className="text-sm sm:text-base text-[#e8ddd0] leading-relaxed">
                {project.details.problem}
              </p>
            </div>
          )}
          {project.details.solution && (
            <div className="border border-[#ff8a1f]/25 rounded-md p-5 bg-[#1a1008]/70 space-y-2">
              <h3 className="font-mono text-xs sm:text-sm font-bold text-[#ff8a1f] tracking-wider uppercase">
                ● Architectural Solution
              </h3>
              <p className="text-sm sm:text-base text-[#e8ddd0] leading-relaxed">
                {project.details.solution}
              </p>
            </div>
          )}
        </section>
      )}

      {/* Key Features */}
      {project.details.features.length > 0 && (
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-[#ff8a1f] tracking-tight">
            Capabilities & highlights
          </h2>
          <ul className="space-y-2.5 text-base text-[#e8ddd0]">
            {project.details.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-3">
                <span className="text-[#ff8a1f] mt-1 font-mono text-sm">►</span>
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Tech Stack Pills */}
      <section className="space-y-3 pt-2 border-t border-[#ff8a1f]/20">
        <h3 className="font-mono text-xs font-bold text-[#ff8a1f]/80 tracking-widest uppercase">
          Technology stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.details.techStack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="font-mono text-xs sm:text-sm px-3.5 py-1 border border-[#ff8a1f]/40 bg-[#ff8a1f]/10 text-[#ffbe6b] font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </article>
  );
};
