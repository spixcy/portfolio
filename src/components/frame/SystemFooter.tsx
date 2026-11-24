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
    <footer className="chassis-rail-footer select-none">
      {/* 1. Left Debossed Brand */}
      <div className="chassis-brand-text">
        {manufacturer}
      </div>

      {/* 2. Center Ridges / Heat-sink Grooved Line */}
      <div className="chassis-heatsink-ridges" />

      {/* 3. Audio Toggle */}
      <button
        onClick={handleToggleSound}
        className="text-[10px] tracking-wider text-[#3d362c] hover:text-[#000] font-mono px-1.5 py-0.5 rounded cursor-pointer transition-all"
        title={isMuted ? 'Audio Muted — Click to unmute' : 'Audio Active — Click to mute'}
      >
        {isMuted ? '🔇 AUDIO' : '🔊 AUDIO'}
      </button>

      {/* 4. PRINT ALL WORK Button */}
      <button
        onClick={handlePrintClick}
        disabled={!isPoweredOn}
        className={`chassis-print-feed-btn ${
          isPoweredOn ? '' : 'opacity-40 cursor-not-allowed'
        }`}
        title="Print complete work index on continuous dot-matrix computer stationery"
      >
        ▼ PRINT ALL WORK
      </button>

      {/* 5. Far Right Slotted Exhaust Vent */}
      <div className="chassis-cooling-vent" title="Cooling vent" />
    </footer>
  );
};
