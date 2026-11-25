import React, { useState } from 'react';
import type { PortfolioData } from '../../types/portfolio';
import { soundEffects } from '../../utils/soundEffects';

interface ContactViewProps {
  contactData: PortfolioData['contact'];
  identity: PortfolioData['identity'];
}

export const ContactView: React.FC<ContactViewProps> = ({
  contactData,
  identity,
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
    <article className="space-y-10 select-text">
      {/* Main Heading & Subhead */}
      <header className="space-y-3">
        <h1 className="text-4xl sm:text-6xl font-bold text-[#ff8a1f] tracking-tight">
          {contactData.heading}
        </h1>
        <div className="font-mono text-xs sm:text-sm text-[#ff8a1f]/70 tracking-[0.2em] uppercase">
          {identity.location} • {identity.timezone} • {identity.responseWindow}
        </div>
        <p className="pt-3 text-lg sm:text-xl text-[#f5ece0] leading-relaxed max-w-2xl">
          {contactData.subheading}
        </p>
      </header>

      {/* Channel Rows */}
      <section className="space-y-3.5">
        {contactData.links.map((link) => (
          <div
            key={link.channel}
            onClick={() => handleCopyOrOpen(link.channel, link.handle, link.url)}
            className="group cursor-pointer rounded-md border border-[#ff8a1f]/35 hover:border-[#ff8a1f] bg-[#1a1008]/80 hover:bg-[#24150a] px-5 py-4 flex items-center justify-between gap-4 transition-all duration-150 hover:shadow-[0_0_20px_rgba(255,138,31,0.2)]"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCopyOrOpen(link.channel, link.handle, link.url);
            }}
          >
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm sm:text-base font-bold text-[#ff8a1f] uppercase tracking-wider">
                {link.channel}
              </span>
              {copiedChannel === link.channel && (
                <span className="font-mono text-xs text-green-400 bg-green-950/80 px-2.5 py-0.5 rounded border border-green-800 font-bold">
                  COPIED TO CLIPBOARD
                </span>
              )}
            </div>

            <div className="flex items-center gap-2.5 text-sm sm:text-base text-[#f5ece0] group-hover:text-white font-mono truncate">
              <span className="truncate">{link.handle}</span>
              <span className="text-sm opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform">
                ↗
              </span>
            </div>
          </div>
        ))}
      </section>

      {contactData.disclaimer && (
        <p className="text-xs sm:text-sm text-[#e8ddd0]/60 italic leading-relaxed">
          {contactData.disclaimer}
        </p>
      )}
    </article>
  );
};
