import React from 'react';
import type { Project, ProjectCategory } from '../../types/portfolio';
import { OptimizedImage } from '../common/OptimizedImage';
import { soundEffects } from '../../utils/soundEffects';

interface PrinterPaperModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  categories: { id: ProjectCategory; title: string }[];
  systemName: string;
  onSelectProject: (projectId: string) => void;
}

export const PrinterPaperModal: React.FC<PrinterPaperModalProps> = ({
  isOpen,
  onClose,
  projects,
  categories,
  systemName,
  onSelectProject,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    soundEffects.playPrinterStep();
    window.print();
  };

  const handleProjectClick = (projectId: string) => {
    soundEffects.playButtonClick();
    onClose();
    onSelectProject(projectId);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      {/* Container simulating tractor-feed paper roll */}
      <div className="relative w-full max-w-4xl my-auto printer-paper-modal rounded-sm shadow-2xl overflow-hidden border border-[#b5b1a2]">
        {/* Floating Print Action Strip */}
        <div className="no-print bg-[#2b2721] text-[#ede7db] px-4 py-2.5 flex items-center justify-between border-b border-[#474035] select-none">
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-bold tracking-wider">DOT-MATRIX CONTINUOUS FEED OUTPUT</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="px-3 py-1 rounded bg-[#ff9100] hover:bg-[#ffaa22] text-black font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
              title="Print to actual printer or save as PDF"
            >
              <span>🖨️ SEND TO PRINTER</span>
            </button>
            <button
              onClick={() => {
                soundEffects.playButtonClick();
                onClose();
              }}
              className="px-3 py-1 rounded bg-[#4a4338] hover:bg-[#5e5548] text-white font-mono text-xs font-bold tracking-wider transition-all cursor-pointer"
            >
              ▲ CLOSE FEED
            </button>
          </div>
        </div>

        {/* Paper Sheet with Tractor-feed perforated margins */}
        <div className="relative flex w-full min-h-[500px] max-h-[80vh] overflow-y-auto select-text font-mono">
          {/* Left Tractor Feed Pin-Holes */}
          <div className="hidden sm:flex flex-col items-center py-4 gap-6 tractor-border-left select-none bg-[#f2efe4]">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="tractor-hole" />
            ))}
          </div>

          {/* Central Green-Bar Continuous Paper Content */}
          <div className="flex-1 p-4 sm:p-8 bg-[#fdfcf9] text-[#1a1917]">
            {/* Header */}
            <div className="pb-4 mb-6 border-b-2 border-dashed border-[#8c8879]">
              <div className="flex items-baseline justify-between">
                <h2 className="text-sm sm:text-base font-bold tracking-widest text-[#24221f]">
                  {systemName} • INDEX OF WORK
                </h2>
                <span className="text-xs sm:text-sm font-bold tracking-wider text-[#4d493e]">
                  {projects.length} ENTRIES
                </span>
              </div>
              <p className="mt-2 text-xs text-[#524d42] leading-relaxed">
                Everything in the machine, printed out. For people with eleven seconds and no interest in cartridges.
              </p>
            </div>

            {/* Work Grouped by Categories */}
            <div className="space-y-8">
              {categories.map((cat, cIdx) => {
                const categoryProjects = projects.filter((p) => p.category === cat.id);
                if (categoryProjects.length === 0) return null;

                return (
                  <div key={cat.id} className="space-y-3">
                    {/* Category Header */}
                    <div className="text-xs sm:text-sm font-bold tracking-wider text-[#1a1917] border-b border-[#a8a394] pb-1 uppercase flex items-center gap-2">
                      <span>{String(cIdx + 1).padStart(2, '0')}</span>
                      <span>•</span>
                      <span>{cat.title}</span>
                    </div>

                    {/* Category Project Rows (Alternating green-bar bands) */}
                    <div className="border border-[#c2bdae] rounded overflow-hidden divide-y divide-[#c2bdae]">
                      {categoryProjects.map((project, pIdx) => (
                        <div
                          key={project.id}
                          onClick={() => handleProjectClick(project.id)}
                          className={`group cursor-pointer p-3 sm:p-4 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 transition-colors ${
                            pIdx % 2 === 0 ? 'greenbar-band-even' : 'greenbar-band-odd'
                          } hover:bg-[#ffe8cc]`}
                        >
                          {/* Thumbnail */}
                          <div className="w-24 sm:w-28 aspect-[16/10] rounded overflow-hidden border border-[#8c8879] bg-black/60 flex-none shadow-sm">
                            <OptimizedImage
                              src={project.thumbnail}
                              alt={project.title}
                              aspectRatio="16/9"
                              fit="cover"
                            />
                          </div>

                          {/* Details */}
                          <div className="flex-1">
                            <div className="flex items-baseline justify-between gap-2">
                              <h3 className="text-xs sm:text-sm font-bold text-[#141312] group-hover:text-[#a84e05] tracking-wide uppercase">
                                {project.title}
                              </h3>
                              <span className="text-[10px] text-[#696356] font-bold">
                                {project.number}
                              </span>
                            </div>
                            <p className="mt-1 text-xs text-[#454137] leading-relaxed line-clamp-2">
                              {project.tagline}
                            </p>
                            <div className="mt-1.5 flex flex-wrap gap-1">
                              {project.tags.map((t, ti) => (
                                <span
                                  key={ti}
                                  className="text-[9px] px-1.5 py-0.2 rounded border border-[#a8a394] text-[#4d493e] bg-black/5"
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

            {/* Paper End Markings */}
            <div className="mt-8 pt-4 border-t-2 border-dashed border-[#8c8879] text-center text-[10px] text-[#6e685a] uppercase tracking-widest">
              *** END OF DATA RUN // ALL ARCHIVES VERIFIED ***
            </div>
          </div>

          {/* Right Tractor Feed Pin-Holes */}
          <div className="hidden sm:flex flex-col items-center py-4 gap-6 tractor-border-right select-none bg-[#f2efe4]">
            {[...Array(40)].map((_, i) => (
              <div key={i} className="tractor-hole" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
