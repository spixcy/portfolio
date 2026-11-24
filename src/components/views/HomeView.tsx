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
    <div className="flex flex-col flex-1 justify-between pt-2">
      {/* Hero Header Section */}
      <div className="mb-4 sm:mb-6">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-mono font-bold tracking-tight text-[#ff9100] phosphor-glow-lg uppercase">
          {name}
        </h1>
        <p className="mt-2 text-xs sm:text-sm lg:text-base text-[#ffdfb8]/90 font-mono max-w-2xl leading-relaxed">
          {tagline}
        </p>
      </div>

      {/* 4-Across Featured Project Cards */}
      <div className="w-full my-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-3.5">
          {featuredProjects.slice(0, 4).map((project) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.id)}
              className="group cursor-pointer rounded-lg border border-[#ff9100]/30 hover:border-[#ff9100] bg-[#14100b]/70 hover:bg-[#1a140d] p-2.5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:phosphor-box-glow"
              tabIndex={0}
              role="button"
              aria-label={`Open case study for ${project.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleProjectClick(project.id);
              }}
            >
              {/* Project Thumbnail with high visual fidelity */}
              <div className="w-full aspect-[16/10] rounded overflow-hidden border border-[#ff9100]/20 group-hover:border-[#ff9100]/60 bg-black/50 mb-2">
                <OptimizedImage
                  src={project.thumbnail}
                  alt={project.title}
                  aspectRatio="16/9"
                  fit="cover"
                />
              </div>

              {/* Title & Category Info */}
              <div className="pt-1">
                <h3 className="text-xs sm:text-sm font-mono font-bold tracking-wider text-[#ffb042] group-hover:text-[#ff9100] group-hover:phosphor-glow-sm truncate uppercase">
                  {project.title}
                </h3>
                <span className="text-[10px] font-mono text-[#ff9100]/60 uppercase tracking-widest block mt-0.5">
                  {project.categoryLabel}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CRT Status & Keyboard Navigation Hints */}
      <div className="pt-4 border-t border-[#ff9100]/20 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#ff9100]/70 select-none">
        <div className="flex items-center gap-2 sm:gap-4">
          <span>1-4 LOAD A LANE</span>
          <span className="opacity-40">•</span>
          <span>CLICK CARD TO INSPECT</span>
        </div>
        <div className="hidden sm:block text-[#ffb042]/80">
          SYS STATUS: NOMINAL
        </div>
      </div>
    </div>
  );
};
