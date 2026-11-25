import React from 'react';
import type { PortfolioData } from '../../types/portfolio';

interface AboutViewProps {
  aboutData: PortfolioData['about'];
  identity: PortfolioData['identity'];
}

export const AboutView: React.FC<AboutViewProps> = ({
  aboutData,
  identity,
}) => {
  return (
    <article className="space-y-10 select-text">
      {/* Main Hero Heading */}
      <header className="space-y-3">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ff8a1f] tracking-tight">
          About
        </h1>
        <div className="font-mono text-xs sm:text-sm text-[#ff8a1f]/70 tracking-[0.2em] uppercase">
          {identity.location} • 2026 • {identity.name.toUpperCase()}
        </div>
        <p className="pt-3 text-xl sm:text-2xl text-[#f5ece0] font-normal leading-relaxed">
          {aboutData.bioIntro}
        </p>
      </header>

      {/* Highlights Stat Row */}
      <section className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        {aboutData.highlights.map((h, i) => (
          <div
            key={i}
            className="border border-[#ff8a1f]/25 rounded-md p-4 bg-[#1a1008]/75"
          >
            <span className="font-mono text-[11px] text-[#ff8a1f]/75 uppercase tracking-widest block font-bold">
              {h.label}
            </span>
            <span className="font-mono text-sm sm:text-base font-bold text-[#ffbe6b] mt-1.5 block">
              {h.value}
            </span>
          </div>
        ))}
      </section>

      {/* Story / Bio Paragraphs */}
      <section className="space-y-5">
        <h2 className="text-xl sm:text-2xl font-bold text-[#ff8a1f] tracking-tight">
          The story
        </h2>
        <div className="space-y-4 text-base sm:text-[17px] text-[#e8ddd0] leading-[1.75]">
          {aboutData.bioParagraphs.map((para, pIdx) => (
            <p key={pIdx}>{para}</p>
          ))}
        </div>
      </section>

      {/* Technical Disciplines & Tooling */}
      <section className="space-y-4">
        <h2 className="text-xl sm:text-2xl font-bold text-[#ff8a1f] tracking-tight">
          Disciplines & tooling
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.skills.map((group, gIdx) => (
            <div
              key={gIdx}
              className="border border-[#ff8a1f]/25 rounded-md p-4 bg-[#1a1008]/70 space-y-3"
            >
              <span className="font-mono text-xs font-bold text-[#ff8a1f] uppercase tracking-wider block">
                ● {group.category}
              </span>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item, iIdx) => (
                  <span
                    key={iIdx}
                    className="font-mono text-xs px-2.5 py-1 rounded border border-[#ff8a1f]/25 bg-[#ff8a1f]/10 text-[#ffbe6b]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Status Footer Note */}
      <footer className="pt-6 border-t border-[#ff8a1f]/20 font-mono text-xs text-[#ff8a1f]/65 tracking-widest uppercase">
        {aboutData.statusStatement}
      </footer>
    </article>
  );
};
