import React, { useEffect, useRef, useState } from 'react';
import { soundEffects } from '../../utils/soundEffects';

interface FullPageIrisModalProps {
  isClosing: boolean;
  originX?: string;
  originY?: string;
  exitLabel?: string;
  onClose: () => void;
  rightHeaderSlot?: React.ReactNode;
  wide?: boolean;
  children: React.ReactNode;
}

export const FullPageIrisModal: React.FC<FullPageIrisModalProps> = ({
  isClosing,
  originX = '92%',
  originY = '35%',
  exitLabel = 'EXIT',
  onClose,
  rightHeaderSlot,
  wide = false,
  children,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
    if (scrollHeight <= clientHeight) {
      setScrollPercent(0);
      return;
    }
    const pct = Math.min(100, Math.max(0, Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)));
    setScrollPercent(pct);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
      setScrollPercent(0);
    }
  }, [children]);

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      style={
        {
          '--iris-x': originX,
          '--iris-y': originY,
        } as React.CSSProperties
      }
      className={`fixed inset-0 z-50 bg-[#120b06] text-[#f5ece0] overflow-y-auto select-text ${
        isClosing ? 'iris-overlay-close' : 'iris-overlay-open'
      }`}
    >
      {/* Top Sticky Navigation Header matching Reference */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#120b06]/90 backdrop-blur-sm select-none">
        <button
          type="button"
          onClick={() => {
            soundEffects.playButtonClick();
            onClose();
          }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#ff8a1f]/45 bg-[#1d1108]/80 hover:bg-[#ff8a1f]/15 hover:border-[#ff8a1f] text-[#ff8a1f] font-mono text-xs font-bold tracking-[0.14em] uppercase transition-all cursor-pointer"
        >
          <span>◄</span>
          <span>{exitLabel}</span>
        </button>

        <div className="flex items-center gap-4 font-mono text-xs text-[#ff8a1f]/65 tracking-widest">
          {rightHeaderSlot}
          <span>{scrollPercent}%</span>
        </div>
      </header>

      {/* Main Centered Editorial Container */}
      <main className={`${wide ? 'max-w-6xl' : 'max-w-3xl'} mx-auto px-6 sm:px-10 pt-4 pb-24`}>
        {children}
      </main>
    </div>
  );
};
