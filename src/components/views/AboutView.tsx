import React from 'react';
import type { PortfolioData } from '../../types/portfolio';
import { soundEffects } from '../../utils/soundEffects';

interface AboutViewProps {
  aboutData: PortfolioData['about'];
  identity: PortfolioData['identity'];
  onBackToWork: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  aboutData,
  identity,
  onBackToWork,
}) => {
  return (
    <div className="flex flex-col flex-1 justify-between pt-1 overflow-y-auto pr-1 select-text font-mono">
      {/* Top Header */}
      <div className="flex items-center justify-between pb-2 border-b border-[#ff9100]/25 select-none">
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs text-[#ff9100]/70 uppercase tracking-widest">
            SYS:ABOUT // {identity.name}
          </span>
        </div>
        <button
          onClick={() => {
            soundEffects.playButtonClick();
            onBackToWork();
          }}
          className="text-xs px-2 py-0.5 rounded border border-[#ff9100]/40 text-[#ffbe6b] hover:bg-[#ff9100]/20 transition-all cursor-pointer"
        >
          ◄ EXIT ABOUT
        </button>
      </div>

      {/* Main Content Body */}
      <div className="py-4 space-y-5 flex-1">
        {/* Heading & Intro Statement */}
        <div>
          <h1 className="text-xl sm:text-3xl font-bold text-[#ff9100] phosphor-glow-sm tracking-tight uppercase">
            {aboutData.heading}
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-[#ffdfb8] leading-relaxed border-l-2 border-[#ff9100] pl-3 py-0.5 bg-[#ff9100]/5">
            {aboutData.bioIntro}
          </p>
        </div>

        {/* Highlights Stat Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {aboutData.highlights.map((h, i) => (
            <div key={i} className="border border-[#ff9100]/30 rounded p-2.5 bg-[#14100b]/80">
              <span className="text-[9px] sm:text-[10px] text-[#ff9100]/70 uppercase tracking-widest block">
                {h.label}
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#ffbe6b] mt-0.5 block">
                {h.value}
              </span>
            </div>
          ))}
        </div>

        {/* Biography Paragraphs */}
        <div className="space-y-2.5 text-xs sm:text-[13px] text-[#ffdfb8]/90 leading-relaxed border border-[#ff9100]/20 rounded p-3.5 bg-[#120e0a]/50">
          <div className="text-[10px] text-[#ff9100]/70 uppercase tracking-widest pb-1 border-b border-[#ff9100]/15">
            PROFILE LOG & PHILOSOPHY
          </div>
          {aboutData.bioParagraphs.map((para, pIdx) => (
            <p key={pIdx}>{para}</p>
          ))}
        </div>

        {/* Skills & Technologies */}
        <div>
          <h3 className="text-xs font-bold text-[#ff9100] tracking-wider uppercase mb-2">
            TECHNICAL DISCIPLINES & TOOLING
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {aboutData.skills.map((group, gIdx) => (
              <div key={gIdx} className="border border-[#ff9100]/25 rounded p-2.5 bg-[#14100b]/60">
                <span className="text-[10px] font-bold text-[#ff9100] uppercase tracking-wider block mb-1.5">
                  ● {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item, iIdx) => (
                    <span
                      key={iIdx}
                      className="text-[10px] px-2 py-0.5 rounded border border-[#ff9100]/20 bg-[#ff9100]/10 text-[#ffbe6b]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Status Statement */}
        <div className="text-[10px] text-[#ff9100]/80 tracking-widest uppercase p-2 border border-[#ff9100]/30 bg-[#ff9100]/5 text-center rounded">
          {aboutData.statusStatement}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-[#ff9100]/20 text-[10px] sm:text-[11px] text-[#ff9100]/70 flex items-center justify-between select-none">
        <span>PRESS ESC OR CLICK EXIT TO RETURN</span>
        <span>ID: {identity.title.toUpperCase()}</span>
      </div>
    </div>
  );
};
