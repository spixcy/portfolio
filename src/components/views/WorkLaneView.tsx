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
    <div className="flex flex-col flex-1 justify-between pt-2">
      {/* Split Work View: Left List + Right Detail Preview */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 flex-1 items-stretch my-auto">
        {/* Left Column: Numbered Project Index List */}
        <div className="md:col-span-5 flex flex-col justify-start gap-1 font-mono text-xs sm:text-sm select-none">
          <div className="text-[10px] text-[#ff9100]/60 uppercase tracking-widest mb-1 pb-1 border-b border-[#ff9100]/20">
            LANE: {categoryTitle} ({projects.length} ENTRIES)
          </div>

          {projects.map((project, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={project.id}
                onClick={() => handleItemClick(idx)}
                className={`w-full text-left px-2.5 py-1.5 rounded transition-all duration-100 flex items-center gap-2.5 font-bold tracking-wider ${
                  isSelected
                    ? 'bg-[#ff9100] text-black shadow-[0_0_10px_rgba(255,145,0,0.5)] translate-x-1'
                    : 'text-[#ffbe6b]/80 hover:text-[#ff9100] hover:bg-[#ff9100]/10'
                }`}
              >
                <span className={`text-[10px] ${isSelected ? 'text-black' : 'text-[#ff9100]/60'}`}>
                  {project.number}
                </span>
                <span className="truncate uppercase">{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Card Preview Box */}
        <div className="md:col-span-7 flex flex-col justify-between border border-[#ff9100]/50 rounded-lg bg-[#110e0a]/80 p-3 sm:p-4 shadow-[0_0_15px_rgba(255,145,0,0.15)]">
          {/* Card Box Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#ff9100]/25 font-mono text-xs">
            <span className="font-bold tracking-wider text-[#ff9100] uppercase truncate">
              {activeProject.title}
            </span>
            <span className="text-[#ffbe6b]/70 font-bold tracking-widest">
              {String(selectedIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
            </span>
          </div>

          {/* Centered Image Preview Box */}
          <div className="w-full aspect-[16/9] max-h-[170px] sm:max-h-[190px] rounded overflow-hidden border border-[#ff9100]/30 bg-black/60 my-auto shadow-inner">
            <OptimizedImage
              src={activeProject.thumbnail}
              alt={activeProject.title}
              aspectRatio="16/9"
              fit="cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {activeProject.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-mono px-2 py-0.5 rounded border border-[#ff9100]/40 bg-[#ff9100]/10 text-[#ffbe6b]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-[13px] font-mono text-[#ffdfb8]/90 leading-relaxed pt-2 pb-3">
            {activeProject.tagline}
          </p>

          {/* Open Case Study Button */}
          <button
            onClick={handleOpenStudy}
            className="w-full sm:w-auto self-start px-4 py-1.5 rounded font-mono text-xs font-bold tracking-wider bg-[#ff9100] hover:bg-[#ffaa22] active:bg-[#e68200] text-black shadow-[0_0_12px_rgba(255,145,0,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer uppercase"
          >
            <span>▶ OPEN CASE STUDY</span>
          </button>
        </div>
      </div>

      {/* Bottom Keyboard Shortcuts Strip */}
      <div className="pt-3 border-t border-[#ff9100]/20 flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-[#ff9100]/70 select-none">
        <div className="flex flex-wrap items-center gap-2 sm:gap-4">
          <span>↑↓ SELECT</span>
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
