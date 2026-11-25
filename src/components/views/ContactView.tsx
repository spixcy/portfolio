import React, { useState } from 'react';
import type { PortfolioData } from '../../types/portfolio';
import { soundEffects } from '../../utils/soundEffects';

interface ContactViewProps {
  contactData: PortfolioData['contact'];
  identity: PortfolioData['identity'];
  onExit: () => void;
}

export const ContactView: React.FC<ContactViewProps> = ({
  contactData,
  identity,
  onExit,
}) => {
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const handleCopyOrOpen = (channel: string, handle: string, url: string) => {
    soundEffects.playButtonClick();
    if (channel === 'EMAIL') {
      navigator.clipboard?.writeText(handle);
      setCopiedChannel(channel);
      setTimeout(() => setCopiedChannel(null), 2500);
    } else {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="flex flex-col flex-1 justify-between pt-1 font-mono select-text">
      {/* Top Bar with EXIT button */}
      <div className="flex items-center justify-between pb-3 border-b border-[#ff9100]/25 select-none">
        <button
          onClick={() => {
            soundEffects.playButtonClick();
            onExit();
          }}
          className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#ff9100]/60 bg-[#ff9100]/10 hover:bg-[#ff9100]/25 text-[#ff9100] text-xs font-bold tracking-wider transition-all cursor-pointer"
        >
          <span>◄ EXIT</span>
        </button>
        <span className="text-[11px] text-[#ff9100]/70 font-bold">100% DISPATCH</span>
      </div>

      {/* Main Contact Container */}
      <div className="py-4 my-auto space-y-4 max-w-2xl mx-auto w-full">
        {/* Main Heading & Subhead */}
        <div>
          <div className="flex items-baseline gap-3">
            <h1 className="text-3xl sm:text-5xl font-bold text-[#ff9100] ph-glow-hero tracking-tight">
              {contactData.heading}
            </h1>
          </div>
          <div className="text-xs sm:text-sm text-[#ff9100]/90 tracking-widest uppercase mt-1 font-bold">
            {identity.location} • {identity.timezone} • {identity.responseWindow}
          </div>
          <p className="mt-3 text-sm sm:text-base text-[#faebda] leading-relaxed">
            {contactData.subheading}
          </p>
        </div>

        {/* 4 Large Rounded Channel Rows */}
        <div className="space-y-3 pt-2">
          {contactData.links.map((link) => (
            <div
              key={link.channel}
              onClick={() => handleCopyOrOpen(link.channel, link.handle, link.url)}
              className="group cursor-pointer rounded-xs border border-[#ff9100]/50 hover:border-[#ff9100] bg-[#120e0a]/80 hover:bg-[#1a140d] px-4 py-3 flex items-center justify-between gap-4 transition-all duration-150 hover:shadow-[0_0_14px_rgba(255,145,0,0.3)]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleCopyOrOpen(link.channel, link.handle, link.url);
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm sm:text-base font-bold text-[#ff9100] uppercase tracking-wider ph-glow-text">
                  {link.channel}
                </span>
                {copiedChannel === link.channel && (
                  <span className="text-xs text-green-400 bg-green-950/80 px-2 py-0.5 rounded border border-green-800 font-bold">
                    COPIED TO CLIPBOARD
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#faebda] group-hover:text-white font-mono truncate">
                <span className="truncate">{link.handle}</span>
                <span className="text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform">
                  ↗
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Note */}
        {contactData.disclaimer && (
          <p className="text-[11px] sm:text-xs text-[#ffdfb8]/60 italic pt-2 leading-relaxed">
            {contactData.disclaimer}
          </p>
        )}
      </div>

      {/* Bottom Hint Strip */}
      <div className="pt-2 border-t border-[#ff9100]/20 text-[10px] sm:text-[11px] text-[#ff9100]/60 flex items-center justify-between select-none">
        <span>CLICK CHANNEL TO DISPATCH / COPY</span>
        <span>ESC TO RETURN</span>
      </div>
    </div>
  );
};
