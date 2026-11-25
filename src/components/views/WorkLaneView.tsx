import React, { useState } from 'react';
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
  const [twitchTick, setTwitchTick] = useState(0);

  const selectedIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === selectedProjectId)
  );
  const activeProject = projects[selectedIndex] || projects[0];

  const handleProjectSelect = (idx: number, playSound = true) => {
    if (idx === selectedIndex) return;
    if (playSound) soundEffects.playButtonClick();
    setTwitchTick((t) => t + 1);
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

  const progressRatio = projects.length > 0 ? ((selectedIndex + 1) / projects.length) * 100 : 100;

  return (
    <div
      className="flex flex-col flex-1 justify-between gap-2 h-full min-h-0"
      aria-label={`Work lane: ${categoryTitle}`}
    >
      {/* Split Work View: Left Project List (~42%) + Right Bounded Preview (~58%) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 lg:gap-6 flex-1 items-center min-h-0 py-1">
        {/* Left Column: Numbered Project Index List with Hover-to-Twitch */}
        <div className="md:col-span-5 h-full flex flex-col justify-start gap-2.5 sm:gap-3 font-mono select-none md:border-r md:border-[#ff8a1f]/20 pl-2 sm:pl-3 md:pr-4 lg:pr-6 pt-4 pb-3">
          {projects.map((project, idx) => {
            const isSelected = idx === selectedIndex;
            return (
              <button
                key={project.id}
                onMouseEnter={() => handleProjectSelect(idx, true)}
                onClick={() => {
                  if (isSelected) {
                    handleOpenStudy();
                  } else {
                    handleProjectSelect(idx, true);
                  }
                }}
                className={`w-full text-left px-4 py-2 rounded-[3px] transition-all duration-100 flex items-center font-bold tracking-[0.09em] text-[15px] sm:text-[16.5px] lg:text-[18px] cursor-pointer ${
                  isSelected
                    ? 'bg-gradient-to-r from-[#ff9614] via-[#ff8800] to-[#d96200] text-[#140a02] shadow-[0_0_18px_rgba(255,145,0,0.55)] font-extrabold'
                    : 'text-[#e07e19] hover:text-[#ffa83e] hover:bg-[#ff8a1f]/10 ph-glow-text'
                }`}
              >
                <span
                  className={`w-9 shrink-0 text-[12px] sm:text-[13px] font-bold ${
                    isSelected ? 'text-[#140a02]/80 font-extrabold' : 'text-[#e07e19]/65'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="uppercase leading-tight min-w-0">{project.title}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Glowing Rounded Bounded Preview + Metadata + Description */}
        <div className="md:col-span-7 h-full flex flex-col justify-center min-h-0 md:pl-2 lg:pl-3 md:pr-1 lg:pr-2 py-1">
          {/* Glowing Rounded Orange Preview Box */}
          <div
            key={`${activeProject.id}-${twitchTick}`}
            className="flex-1 flex flex-col rounded-[6px] border-[1.5px] border-[#ff8a1f]/80 bg-[#080401]/70 shadow-[0_0_16px_rgba(255,138,31,0.18),inset_0_0_18px_rgba(255,138,31,0.06)] min-h-[195px] max-h-[295px] crt-hover-twitch overflow-hidden"
          >
            {/* Card Box Header */}
            <div className="flex items-center justify-between px-5 py-2 border-b border-[#ff8a1f]/65 font-mono shrink-0 bg-[#140902]/40">
              <span className="text-[16px] sm:text-[17.5px] lg:text-[19px] font-bold tracking-[0.12em] text-[#ff9100] uppercase ph-glow-text leading-tight min-w-0">
                {activeProject.title}
              </span>
              <span className="text-sm sm:text-[15.5px] text-[#ff9100]/85 font-bold tracking-widest shrink-0 ml-3">
                {String(selectedIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
              </span>
            </div>

            {/* Centered Preview Viewport */}
            <div className="flex-1 px-5 py-3 flex items-center justify-center bg-[radial-gradient(ellipse_at_center,rgba(255,138,31,0.06)_0%,rgba(4,2,1,0.85)_72%)] min-h-0">
              <div className="w-full h-full max-w-[380px] max-h-[205px] aspect-[16/10] flex items-center justify-center overflow-hidden">
                <OptimizedImage
                  src={activeProject.thumbnail}
                  alt={activeProject.title}
                  aspectRatio="16/9"
                  fit="contain"
                />
              </div>
            </div>
          </div>

          {/* Lower Metadata + Description + Action block */}
          <div className="shrink-0 pt-3.5">
            {/* Metadata Tag Pills */}
            <div className="flex flex-wrap gap-2">
              {activeProject.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-[12.5px] sm:text-[13px] font-mono px-3 py-0.5 rounded-[3px] border border-[#ff8a1f]/45 bg-[#1a0d04]/50 text-[#ffbe6b]/95 font-medium tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description Text */}
            <p className="text-[14.5px] sm:text-[15.5px] lg:text-[16px] font-mono text-[#efe6d8] leading-[1.6] mt-2.5 max-w-2xl">
              {activeProject.tagline}
            </p>

            {/* Open Case Study Action Button */}
            <div className="flex items-center justify-between gap-4 mt-3">
              <button
                onClick={handleOpenStudy}
                className="px-5 py-2 rounded-[3px] font-mono text-[12.5px] sm:text-[13px] font-extrabold tracking-[0.12em] bg-[#ff9100] hover:bg-[#ffaa22] active:bg-[#e68200] text-black shadow-[0_0_12px_rgba(255,145,0,0.45)] transition-all inline-flex items-center gap-2 cursor-pointer uppercase"
              >
                <span>▶ {activeProject.actionLabel || 'OPEN CASE STUDY'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Keyboard Shortcuts + Interactive Glowing Scroll/Progress Track */}
      <div className="pt-1 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono text-[#ff8a1f]/65 tracking-[0.14em] select-none shrink-0">
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-4">
          <span>↑ ↓ SELECT</span>
          <span className="opacity-45">·</span>
          <span>↵ OPEN</span>
          <span className="opacity-45">·</span>
          <span>1-4 LANE</span>
          <span className="opacity-45">·</span>
          <span>ESC HOME</span>
        </div>

        {/* Interactive Glowing Phosphor Lane Scrubber / Scrollbar Indicator */}
        <div
          className="flex items-center gap-2.5 pr-2"
          title="Click a segment to scrub through projects"
        >
          <div className="relative w-36 sm:w-44 h-[5px] rounded-full bg-[#ff8a1f]/18 overflow-hidden border border-[#ff8a1f]/25 flex">
            <div
              className="h-full bg-gradient-to-r from-[#ff7a00] to-[#ffb347] rounded-full shadow-[0_0_10px_rgba(255,145,0,0.9)] transition-all duration-200 ease-out"
              style={{ width: `${progressRatio}%` }}
            />
            {/* Clickable interactive zones per project */}
            <div className="absolute inset-0 flex">
              {projects.map((p, idx) => (
                <button
                  key={p.id}
                  type="button"
                  onMouseEnter={() => handleProjectSelect(idx, false)}
                  onClick={() => handleProjectSelect(idx, true)}
                  aria-label={`Select ${p.title}`}
                  className="flex-1 h-full cursor-pointer bg-transparent border-0"
                />
              ))}
            </div>
          </div>
          <span className="text-[10px] text-[#ff8a1f]/60 font-bold tracking-widest">
            {String(selectedIndex + 1).padStart(2, '0')}/{String(projects.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
};
