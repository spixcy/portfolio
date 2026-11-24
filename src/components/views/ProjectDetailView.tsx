import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../../types/portfolio';
import { OptimizedImage } from '../common/OptimizedImage';
import { soundEffects } from '../../utils/soundEffects';

interface ProjectDetailViewProps {
  project: Project;
  onBackToWork: () => void;
  onPrevProject: () => void;
  onNextProject: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({
  project,
  onBackToWork,
  onPrevProject,
  onNextProject,
  hasPrev,
  hasNext,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    if (scrollHeight <= clientHeight) {
      setScrollPercent(100);
      return;
    }
    const percent = Math.min(100, Math.max(0, Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)));
    setScrollPercent(percent);
  };

  useEffect(() => {
    setScrollPercent(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [project.id]);

  const handleBack = () => {
    soundEffects.playButtonClick();
    onBackToWork();
  };

  const handlePrev = () => {
    soundEffects.playButtonClick();
    onPrevProject();
  };

  const handleNext = () => {
    soundEffects.playButtonClick();
    onNextProject();
  };

  return (
    <div
      ref={scrollContainerRef}
      onScroll={handleScroll}
      className="flex flex-col flex-1 justify-between pt-1 overflow-y-auto pr-1 select-text"
    >
      {/* Top Navigation Row */}
      <div className="flex items-center justify-between pb-2 border-b border-[#ff9100]/25 select-none sticky top-0 bg-[#0e0a07]/90 backdrop-blur z-20">
        <button
          onClick={handleBack}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#ff9100]/60 bg-[#ff9100]/10 hover:bg-[#ff9100]/25 text-[#ffbe6b] font-mono text-xs font-bold tracking-wider transition-all cursor-pointer shadow-sm"
        >
          <span>◄ EXIT TO {project.categoryLabel.toUpperCase()}</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className={`px-2 py-1 rounded border font-mono text-xs ${
                hasPrev
                  ? 'border-[#ff9100]/40 text-[#ffbe6b] hover:bg-[#ff9100]/20 cursor-pointer'
                  : 'border-neutral-800 text-neutral-600 cursor-not-allowed'
              }`}
              title="Previous project"
            >
              ◄ PREV
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`px-2 py-1 rounded border font-mono text-xs ${
                hasNext
                  ? 'border-[#ff9100]/40 text-[#ffbe6b] hover:bg-[#ff9100]/20 cursor-pointer'
                  : 'border-neutral-800 text-neutral-600 cursor-not-allowed'
              }`}
              title="Next project"
            >
              NEXT ►
            </button>
          </div>
          {/* Scroll progress % */}
          <span className="text-[11px] font-mono font-bold text-[#ff9100]/80 min-w-[36px] text-right">
            {scrollPercent}%
          </span>
        </div>
      </div>

      {/* Main Case Study Scrollable Content */}
      <div className="py-4 space-y-5 flex-1 font-mono">
        {/* Title & Tagline */}
        <div>
          <div className="text-[10px] text-[#ff9100]/70 uppercase tracking-widest">
            CATEGORY // {project.categoryLabel.toUpperCase()}
          </div>
          <h1 className="text-xl sm:text-3xl font-bold text-[#ff9100] phosphor-glow-sm tracking-tight mt-1 uppercase">
            {project.title}
          </h1>
          <p className="mt-1 text-xs sm:text-sm text-[#ffdfb8]/90 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Hero Artwork / Screenshot */}
        <div className="w-full aspect-video max-h-[260px] sm:max-h-[300px] rounded-lg overflow-hidden border border-[#ff9100]/40 bg-black/70 shadow-lg">
          <OptimizedImage
            src={project.heroImage || project.thumbnail}
            alt={project.title}
            aspectRatio="16/9"
            fit="cover"
            priority={true}
          />
        </div>

        {/* Overview & Problem / Solution Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border border-[#ff9100]/25 rounded p-3 bg-[#130f0a]/60">
            <h3 className="text-xs font-bold text-[#ff9100] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
              <span>●</span> OVERVIEW
            </h3>
            <p className="text-xs text-[#ffbe6b]/90 leading-relaxed">
              {project.details.overview}
            </p>
          </div>

          <div className="border border-[#ff9100]/25 rounded p-3 bg-[#130f0a]/60">
            <h3 className="text-xs font-bold text-[#ff9100] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
              <span>●</span> MOTIVATION & PROBLEM
            </h3>
            <p className="text-xs text-[#ffbe6b]/90 leading-relaxed">
              {project.details.problem || 'Addressing performance friction and interactive aesthetics in production.'}
            </p>
          </div>
        </div>

        {/* Solution */}
        {project.details.solution && (
          <div className="border border-[#ff9100]/25 rounded p-3 bg-[#130f0a]/60">
            <h3 className="text-xs font-bold text-[#ff9100] tracking-wider uppercase mb-1.5 flex items-center gap-1.5">
              <span>●</span> ARCHITECTURAL SOLUTION
            </h3>
            <p className="text-xs text-[#ffbe6b]/90 leading-relaxed">
              {project.details.solution}
            </p>
          </div>
        )}

        {/* Key Features */}
        <div className="border border-[#ff9100]/25 rounded p-3 bg-[#130f0a]/60">
          <h3 className="text-xs font-bold text-[#ff9100] tracking-wider uppercase mb-2">
            KEY CAPABILITIES & FEATURES
          </h3>
          <ul className="space-y-1.5 text-xs text-[#ffdfb8]/90">
            {project.details.features.map((feature, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2">
                <span className="text-[#ff9100] mt-0.5">►</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div>
          <h4 className="text-[11px] font-bold text-[#ff9100]/70 tracking-widest uppercase mb-1.5">
            TECHNOLOGY STACK
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {project.details.techStack.map((tech, tIdx) => (
              <span
                key={tIdx}
                className="text-[11px] px-2.5 py-0.5 rounded border border-[#ff9100]/30 bg-[#ff9100]/10 text-[#ffbe6b]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* External Links */}
        {project.details.links && project.details.links.length > 0 && (
          <div className="pt-2 border-t border-[#ff9100]/20 flex flex-wrap gap-3">
            {project.details.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded font-mono text-xs font-bold bg-[#ff9100] hover:bg-[#ffaa22] text-black shadow-sm transition-all"
              >
                <span>{link.label}</span>
                <span className="text-[10px]">↗</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Footer Action */}
      <div className="pt-2 border-t border-[#ff9100]/20 flex items-center justify-between text-[11px] font-mono text-[#ff9100]/70 select-none">
        <span>ESC RETURN HOME</span>
        <button
          onClick={handleBack}
          className="text-[#ffbe6b] hover:text-[#ff9100] font-bold cursor-pointer"
        >
          ▲ TOP / RETURN TO LANE
        </button>
      </div>
    </div>
  );
};
