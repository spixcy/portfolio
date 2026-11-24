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
      {/* 1. Left Stamped Brand */}
      <div className="chassis-brand-text">
        {manufacturer}
      </div>

      {/* 2. Center Engraved Seam Line */}
      <div className="chassis-heatsink-ridges" />

      {/* 3. Audio Toggle */}
      <button
        onClick={handleToggleSound}
        className="chassis-audio-btn"
        title={isMuted ? 'Audio Muted — Click to unmute' : 'Audio Active — Click to mute'}
      >
        {isMuted ? '✕ AUDIO' : '♪ AUDIO'}
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

      {/* 5. Far Right Slotted Exhaust Vent (Real Photographic Vent) */}
      <div className="chassis-cooling-vent" title="Cooling vent">
        <img
          src="/textures/cooling-vents.png"
          alt="Cooling vents"
          className="w-full h-full object-contain pointer-events-none select-none"
          draggable={false}
        />
      </div>
    </footer>
  );
};
