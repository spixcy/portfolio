import React from 'react';
import type { Project, ProjectCategory } from '../../types/portfolio';
import { OptimizedImage } from '../common/OptimizedImage';
import { soundEffects } from '../../utils/soundEffects';

interface HomeViewProps {
  name: string;
  tagline: string;
  featuredProjects: Project[];
  onSelectProject: (projectId: string) => void;
  onSelectCategory: (category: ProjectCategory) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  name,
  tagline,
  featuredProjects,
  onSelectProject,
}) => {
  const handleProjectClick = (projectId: string) => {
    soundEffects.playButtonClick();
    onSelectProject(projectId);
  };

  return (
    <div className="flex flex-col flex-1 justify-between h-full py-1">
      {/* Hero Header Section */}
      <div className="mb-2">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-[#ff8a1f] ph-glow-hero uppercase">
          {name}
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm lg:text-[15px] text-[#faebda]/90 font-mono max-w-3xl leading-relaxed">
          {tagline}
        </p>
      </div>

      {/* 4-Across Featured Project Cards */}
      <div className="w-full my-auto py-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {featuredProjects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group cursor-pointer rounded-lg border border-[#ff8a1f]/35 hover:border-[#ff8a1f] bg-[#140e09]/80 hover:bg-[#1a120b] p-2 sm:p-2.5 flex flex-col justify-between transition-all duration-150 hover:-translate-y-1 hover:shadow-[0_0_16px_rgba(255,138,31,0.35)]"
              tabIndex={0}
              role="button"
              aria-label={`Open case study for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleProjectClick(project.id);
              }}
            >
              {/* Project Thumbnail */}
              <div className="w-full aspect-[16/10] rounded overflow-hidden border border-[#ff8a1f]/25 group-hover:border-[#ff8a1f]/70 bg-black/60 mb-2">
                <OptimizedImage
                  src={project.thumbnail}
                  alt={project.title}
                  aspectRatio="16/9"
                  fit="cover"
                />
              </div>

              {/* Title & Category Info */}
              <div className="pt-0.5">
                <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#ffbe6b] group-hover:text-[#ff8a1f] ph-glow-text truncate uppercase">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono text-[#ff8a1f]/70 uppercase tracking-widest block mt-0.5">
                  {project.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CRT Status & Keyboard Navigation Hints */}
      <div className="pt-2 border-t border-[#ff8a1f]/20 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#ff8a1f]/80 select-none">
        <div className="flex items-center gap-2 sm:gap-4">
          <span>1-4 LOAD A LANE</span>
          <span className="opacity-40">•</span>
          <span>CLICK CARD TO INSPECT</span>
        </div>
        <div className="hidden sm:block text-[#ffbe6b]/80">
          SYS STATUS: READY
        </div>
      </div>
    </div>
  );
};
