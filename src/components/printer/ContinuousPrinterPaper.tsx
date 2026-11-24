import React from 'react';
import type { Project, ProjectCategory } from '../../types/portfolio';
import { OptimizedImage } from '../common/OptimizedImage';
import { soundEffects } from '../../utils/soundEffects';

interface ContinuousPrinterPaperProps {
  projects: Project[];
  categories: { id: ProjectCategory; title: string }[];
  systemName: string;
  onSelectProject: (projectId: string) => void;
  onScrollToTop: () => void;
}

export const ContinuousPrinterPaper: React.FC<ContinuousPrinterPaperProps> = ({
  projects,
  categories,
  systemName,
  onSelectProject,
  onScrollToTop,
}) => {
  const handlePrint = () => {
    soundEffects.playPrinterStep();
    window.print();
  };

  const handleProjectClick = (projectId: string) => {
    soundEffects.playButtonClick();
    onSelectProject(projectId);
    onScrollToTop();
  };

  return (
    <div id="print-feed-section" className="w-full max-w-[1400px] mx-auto mt-[-8px] relative z-20 select-text font-mono">
      {/* Printer Slot Ejection Shadow & Edge */}
      <div className="w-full h-3 bg-gradient-to-b from-[#14120f] to-transparent opacity-80" />

      {/* Main Continuous Paper Roll */}
      <div className="relative flex w-full bg-[#fdfcf9] rounded-b-md shadow-2xl border-x-2 border-b-2 border-[#b8b3a4] overflow-hidden">
        {/* Left Tractor Feed Pin-Holes */}
        <div className="w-9 sm:w-12 py-6 flex flex-col items-center gap-7 bg-[#f4f1e6] border-r-2 border-dashed border-[#b8b3a4] select-none flex-none">
          {[...Array(45)].map((_, i) => (
            <div key={i} className="tractor-sprocket-hole" />
          ))}
        </div>

        {/* Central Green-Bar Continuous Paper Body */}
        <div className="flex-1 p-5 sm:p-10 text-[#1a1917]">
          {/* Paper Header */}
          <div className="pb-5 mb-8 border-b-2 border-dashed border-[#8c8879]">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-base sm:text-xl font-bold tracking-widest text-[#24221f]">
                {systemName} • INDEX OF WORK
              </h2>
              <span className="text-xs sm:text-sm font-bold tracking-wider text-[#575246]">
                {projects.length} ENTRIES
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-[#575246] leading-relaxed max-w-2xl">
              Everything in the machine, printed out. For people with eleven seconds and no interest in cartridges.
            </p>

            {/* Quick Actions Bar */}
            <div className="no-print mt-4 pt-3 border-t border-[#c4beaf] flex items-center justify-between text-xs">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded font-bold bg-[#ff8a1f] hover:bg-[#ff9e3d] text-black shadow-sm transition-all flex items-center gap-1.5 cursor-pointer"
                title="Print on actual printer or export PDF"
              >
                <span>🖨️ SEND TO PRINTER (PDF)</span>
              </button>
              <button
                onClick={onScrollToTop}
                className="px-3 py-1.5 rounded font-bold bg-[#3b362c] hover:bg-[#524b3d] text-[#faebda] transition-all cursor-pointer"
              >
                ▲ RETURN TO TERMINAL
              </button>
            </div>
          </div>

          {/* Categorized Project Listings */}
          <div className="space-y-10">
            {categories.map((cat, cIdx) => {
              const catProjects = projects.filter((p) => p.category === cat.id);
              if (catProjects.length === 0) return null;

              return (
                <div key={cat.id} className="space-y-3">
                  {/* Category Header */}
                  <div className="text-xs sm:text-sm font-bold tracking-widest text-[#1c1a17] border-b-2 border-[#9e9888] pb-1 uppercase flex items-center gap-2">
                    <span>{String(cIdx + 1).padStart(2, '0')}</span>
                    <span>•</span>
                    <span>{cat.title}</span>
                  </div>

                  {/* Alternating Green-Bar Rows */}
                  <div className="border border-[#c4beaf] rounded overflow-hidden divide-y divide-[#c4beaf]">
                    {catProjects.map((project, pIdx) => (
                      <div
                        key={project.id}
                        onClick={() => handleProjectClick(project.id)}
                        className={`group cursor-pointer p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-colors ${
                          pIdx % 2 === 0 ? 'greenbar-row-even' : 'greenbar-row-odd'
                        } hover:bg-[#ffe6cc]`}
                      >
                        {/* 16:9 Thumbnail Preview */}
                        <div className="w-28 sm:w-36 aspect-[16/10] rounded overflow-hidden border border-[#8a8475] bg-black/70 flex-none shadow-sm">
                          <OptimizedImage
                            src={project.thumbnail}
                            alt={project.title}
                            aspectRatio="16/9"
                            fit="cover"
                          />
                        </div>

                        {/* Title, Tagline, & Meta */}
                        <div className="flex-1">
                          <div className="flex items-baseline justify-between gap-2">
                            <h3 className="text-sm sm:text-base font-bold text-[#141311] group-hover:text-[#b35900] tracking-wide uppercase">
                              {project.title}
                            </h3>
                            <span className="text-xs text-[#706a5b] font-bold">
                              {project.number}
                            </span>
                          </div>
                          <p className="mt-1 text-xs sm:text-[13px] text-[#474338] leading-relaxed line-clamp-2">
                            {project.tagline}
                          </p>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {project.tags.map((t, ti) => (
                              <span
                                key={ti}
                                className="text-[10px] px-2 py-0.5 rounded border border-[#a39d8e] text-[#4d483c] bg-black/5"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Feed Perforation & End Run Markings */}
          <div className="mt-12 pt-6 border-t-2 border-dashed border-[#8c8879] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6e685a]">
            <span>*** END OF PORTFOLIO RUN // ALL ENTRIES VERIFIED ***</span>
            <button
              onClick={onScrollToTop}
              className="text-[#b35900] hover:underline font-bold cursor-pointer"
            >
              ▲ SCROLL TO TOP OF MACHINE
            </button>
          </div>
        </div>

        {/* Right Tractor Feed Pin-Holes */}
        <div className="w-9 sm:w-12 py-6 flex flex-col items-center gap-7 bg-[#f4f1e6] border-l-2 border-dashed border-[#b8b3a4] select-none flex-none">
          {[...Array(45)].map((_, i) => (
            <div key={i} className="tractor-sprocket-hole" />
          ))}
        </div>
      </div>
    </div>
  );
};
