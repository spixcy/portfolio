import React from 'react';
import type { Project, ProjectCategory } from '../../types/portfolio';
import { OptimizedImage } from '../common/OptimizedImage';
import { soundEffects } from '../../utils/soundEffects';

interface WorkLaneViewProps {
  category: ProjectCategory;
  categoryTitle: string;
  projects: Project[];
  selectedProjectId: string;
  onSelectProjectIndex: (index: number) => void;
  onOpenCaseStudy: (projectId: string) => void;
}

export const WorkLaneView: React.FC<WorkLaneViewProps> = ({
  categoryTitle,
  projects,
  selectedProjectId,
  onSelectProjectIndex,
  onOpenCaseStudy,
}) => {
  const selectedIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === selectedProjectId)
  );
  const activeProject = projects[selectedIndex] || projects[0];

  const handleItemClick = (idx: number) => {
    soundEffects.playButtonClick();
    onSelectProjectIndex(idx);
  };

  const handleOpenStudy = () => {
    if (!activeProject) return;
    soundEffects.playButtonClick();
    onOpenCaseStudy(activeProject.id);
  };

  if (!projects || projects.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center p-8 font-mono">
        <p className="text-amber-500/80 text-sm">NO PROJECTS LOGGED IN THIS LANE</p>
      </div>
    );
  }

  return (
    <div
      className="flex flex-col flex-1 justify-between gap-2 h-full min-h-0"
      aria-label={`Work lane: ${categoryTitle}`}
    >
      {/* Split Work View: Left Project List (35%) + Right Detail Box (65%) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-5 flex-1 items-stretch min-h-0">
        {/* Left Column: Numbered Project Index List (Reference Image 1) */}
        <div className="md:col-span-5 flex flex-col justify-between gap-1 font-mono select-none py-1">
          {projects.map((project, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={project.id}
                onClick={() => handleItemClick(idx)}
                className={`w-full text-left px-3.5 py-2 transition-all duration-100 flex items-center font-bold tracking-wider text-base sm:text-lg md:text-[19px] lg:text-[20px] rounded-xs cursor-pointer ${
                  isSelected
                    ? 'bg-[#ff9100] text-black shadow-[0_0_14px_rgba(255,145,0,0.6)]'
                    : 'text-[#ff9100]/80 hover:text-[#ffaa22] hover:bg-[#ff9100]/10'
                }`}
              >
                <span
                  className={`w-10 shrink-0 font-bold ${
                    isSelected ? 'text-black' : 'text-[#ff9100]/70'
                  }`}
                >
                  {project.number}
                </span>
                <span className="truncate uppercase">{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Card Preview Box (Reference Image 1) */}
        <div className="md:col-span-7 flex flex-col justify-between border-[1.5px] border-[#ff9100] bg-black/40 p-4 sm:p-5 shadow-[0_0_18px_rgba(255,145,0,0.18)] min-h-0">
          {/* Card Box Header: Selected Title + Index with Amber Divider */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b-[1.5px] border-[#ff9100] font-mono">
            <span className="text-base sm:text-lg md:text-[20px] lg:text-[22px] font-bold tracking-wider text-[#ff9100] uppercase truncate ph-glow-text">
              {activeProject.title}
            </span>
            <span className="text-sm sm:text-base md:text-[18px] text-[#ffbe6b]/80 font-bold tracking-widest shrink-0 ml-2">
              {String(selectedIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Centered Image Preview Box */}
          <div className="w-full flex-1 min-h-[180px] max-h-[260px] rounded-xs overflow-hidden border border-[#ff9100]/40 bg-black/50 my-2 flex items-center justify-center p-1.5 shadow-inner">
            <OptimizedImage
              src={activeProject.thumbnail}
              alt={activeProject.title}
              aspectRatio="16/9"
              fit="contain"
            />
          </div>

          {/* Metadata & Tag Pills */}
          <div className="flex flex-wrap gap-2 pt-2.5">
            {activeProject.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-xs sm:text-[13px] font-mono px-2.5 py-0.5 border border-[#ff9100] bg-[#1a0f05]/60 text-[#ffbe6b] font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description Text */}
          <p className="text-xs sm:text-sm md:text-[15px] lg:text-[16px] font-mono text-[#faebda] leading-relaxed pt-2 pb-3">
            {activeProject.tagline}
          </p>

          {/* Open Case Study Action Button */}
          <button
            onClick={handleOpenStudy}
            className="self-start px-5 py-1.5 font-mono text-xs sm:text-sm font-bold tracking-wider bg-[#ff9100] hover:bg-[#ffaa22] active:bg-[#e68200] text-black shadow-[0_0_14px_rgba(255,145,0,0.5)] transition-all flex items-center gap-2 cursor-pointer uppercase rounded-xs"
          >
            <span>▶ OPEN CASE STUDY</span>
          </button>
        </div>
      </div>

      {/* Bottom Keyboard Shortcuts Strip */}
      <div className="pt-2 text-[11px] sm:text-xs font-mono text-[#ff9100]/80 select-none">
        <div className="flex flex-wrap items-center gap-3 sm:gap-5">
          <span>↑ ↓ SELECT</span>
          <span className="opacity-40">•</span>
          <span>↵ OPEN</span>
          <span className="opacity-40">•</span>
          <span>1-4 LANE</span>
          <span className="opacity-40">•</span>
          <span>ESC HOME</span>
        </div>
      </div>
    </div>
  );
};
