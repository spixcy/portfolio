import React, { useState } from 'react';
import { soundEffects } from '../../utils/soundEffects';

interface SystemFooterProps {
  manufacturer: string;
  modelNumber: string;
  onOpenPrint: () => void;
  isPoweredOn: boolean;
}

export const SystemFooter: React.FC<SystemFooterProps> = ({
  manufacturer,
  modelNumber,
  onOpenPrint,
  isPoweredOn,
}) => {
  const [isMuted, setIsMuted] = useState(soundEffects.getMuted());

  const handlePrintClick = () => {
    soundEffects.playPrinterStep();
    onOpenPrint();
  };

  const handleToggleSound = () => {
    const muted = soundEffects.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundEffects.playButtonClick();
    }
  };

  return (
    <footer className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-[#5a554a] select-none text-[10px] sm:text-[11px] font-mono">
      {/* Manufacturer & Model info (debossed look) */}
      <div className="flex items-center gap-3">
        <span className="font-bold tracking-widest uppercase text-[#474238] drop-shadow-[0_1px_0_rgba(255,255,255,0.25)]">
          {manufacturer}
        </span>
        <span className="text-[#696356]">•</span>
        <span className="tracking-wider text-[#696356]">{modelNumber}</span>
      </div>

      {/* Controls & Speaker Grille */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Audio Mute / Unmute Button */}
        <button
          onClick={handleToggleSound}
          className="flex items-center gap-1.5 px-2 py-0.5 rounded border border-[#787163]/40 bg-[#948e80]/30 hover:bg-[#948e80]/50 text-[#3d382f] active:scale-95 transition-all"
          title={isMuted ? 'Unmute mechanical audio fx' : 'Mute mechanical audio fx'}
        >
          <span>{isMuted ? '🔇 AUDIO OFF' : '🔊 AUDIO ON'}</span>
        </button>

        {/* PRINT ALL WORK trigger button */}
        <button
          onClick={handlePrintClick}
          disabled={!isPoweredOn}
          className={`flex items-center gap-1.5 font-bold tracking-widest py-1 px-2 rounded border border-[#787163]/50 shadow-sm transition-all ${
            isPoweredOn
              ? 'text-[#3a352c] hover:text-[#1c1a16] bg-[#9e988a]/40 hover:bg-[#9e988a]/60 active:translate-y-0.5 cursor-pointer'
              : 'text-[#615c51] bg-[#7a7467]/20 opacity-50 cursor-not-allowed'
          }`}
          title={isPoweredOn ? 'Print all work on continuous dot-matrix computer stationery' : 'Power system ON to print'}
        >
          <span>▼ PRINT ALL WORK</span>
        </button>

        {/* Speaker / Cooling Vent Slits */}
        <div className="flex items-center gap-1 h-4" title="Internal speaker vent">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-full bg-[#24221f] rounded-[0.5px] shadow-[inset_0.5px_0.5px_1px_rgba(0,0,0,0.8),0_0.5px_0_rgba(255,255,255,0.2)]"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};
