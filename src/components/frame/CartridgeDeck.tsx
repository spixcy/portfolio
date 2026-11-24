import React from 'react';
import type { ProjectCategory } from '../../types/portfolio';
import { soundEffects } from '../../utils/soundEffects';

interface CartridgeDeckProps {
  activeCategory: ProjectCategory;
  isPoweredOn: boolean;
  onSelectCategory: (category: ProjectCategory) => void;
}

// Pixel icons crafted to match the closeup photos (media_1795520681788_381a2cc2.png etc.)
const CARTRIDGES: {
  id: ProjectCategory;
  label: string;
  iconSvg: React.ReactNode;
}[] = [
  {
    id: 'interface',
    label: 'INTERFACE',
    iconSvg: (
      <svg className="w-6 h-6 select-none flex-none" viewBox="0 0 24 24" fill="none">
        {/* Retro Orange Monitor */}
        <rect x="3" y="4" width="18" height="13" rx="2" fill="#d97716" stroke="#1c1914" strokeWidth="1.8" />
        <rect x="5.5" y="6" width="13" height="8" rx="1" fill="#38332b" />
        <polygon points="6,6 10,6 6,12" fill="#d97716" opacity="0.6" />
        {/* Base */}
        <rect x="9" y="17" width="6" height="3" fill="#d97716" stroke="#1c1914" strokeWidth="1.5" />
        <line x1="7" y1="20" x2="17" y2="20" stroke="#1c1914" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'systems',
    label: 'SYSTEMS',
    iconSvg: (
      <svg className="w-6 h-6 select-none flex-none" viewBox="0 0 24 24" fill="none">
        {/* Antenna */}
        <circle cx="12" cy="3.5" r="1.5" fill="#d97716" stroke="#1c1914" strokeWidth="1.2" />
        <line x1="12" y1="5" x2="12" y2="7.5" stroke="#1c1914" strokeWidth="1.8" />
        {/* Ears */}
        <rect x="2" y="11" width="2" height="4" rx="0.5" fill="#d97716" stroke="#1c1914" strokeWidth="1.2" />
        <rect x="20" y="11" width="2" height="4" rx="0.5" fill="#d97716" stroke="#1c1914" strokeWidth="1.2" />
        {/* Robot Head */}
        <rect x="4" y="7.5" width="16" height="12" rx="3" fill="#d97716" stroke="#1c1914" strokeWidth="1.8" />
        {/* Face */}
        <circle cx="8.5" cy="12.5" r="1.5" fill="#1c1914" />
        <circle cx="15.5" cy="12.5" r="1.5" fill="#1c1914" />
        <line x1="9" y1="16" x2="15" y2="16" stroke="#1c1914" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'worlds',
    label: '3D WORLDS',
    iconSvg: (
      <svg className="w-6 h-6 select-none flex-none" viewBox="0 0 24 24" fill="none">
        {/* Isometric 3D Cube */}
        <path d="M12 2.5 L20.5 7.5 L12 12.5 L3.5 7.5 Z" fill="#f59e0b" stroke="#1c1914" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M3.5 7.5 L12 12.5 L12 21.5 L3.5 16.5 Z" fill="#d97716" stroke="#1c1914" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M12 12.5 L20.5 7.5 L20.5 16.5 L12 21.5 Z" fill="#b45309" stroke="#1c1914" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'games',
    label: 'GAMES',
    iconSvg: (
      <svg className="w-6 h-6 select-none flex-none" viewBox="0 0 24 24" fill="none">
        {/* Gamepad body */}
        <rect x="3" y="6" width="18" height="12" rx="5" fill="#d97716" stroke="#1c1914" strokeWidth="1.8" />
        {/* D-Pad */}
        <path d="M7 10h2v-2h1v2h2v1h-2v2h-1v-2h-2z" fill="#1c1914" />
        {/* Action Buttons */}
        <circle cx="15.5" cy="10" r="1" fill="#1c1914" />
        <circle cx="17.5" cy="12" r="1" fill="#1c1914" />
      </svg>
    ),
  },
];

export const CartridgeDeck: React.FC<CartridgeDeckProps> = ({
  activeCategory,
  isPoweredOn,
  onSelectCategory,
}) => {
  const handleCartridgeClick = (cat: ProjectCategory) => {
    if (!isPoweredOn) return;
    soundEffects.playCartridgeInsert();
    onSelectCategory(cat);
  };

  return (
    <div className="cartridge-strip-deck select-none">
      {CARTRIDGES.map((c) => {
        const isActive = activeCategory === c.id && isPoweredOn;
        return (
          <div
            key={c.id}
            className={`cartridge-outer-well ${
              isActive ? 'cartridge-active-halo' : ''
            }`}
          >
            <button
              onClick={() => handleCartridgeClick(c.id)}
              disabled={!isPoweredOn}
              aria-label={`Insert ${c.label} cartridge`}
              className={`cartridge-chunky-unit ${isActive ? 'is-engaged' : ''} ${
                !isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              {/* Inserted Aged Cream Label Plate (matches media_1795520681788_381a2cc2.png) */}
              <div className="cartridge-label-plate">
                <div className="flex items-center gap-2">
                  {c.iconSvg}
                  <span className="text-[11px] sm:text-[12px] font-bold tracking-wider font-mono text-[#1a1815] uppercase">
                    {c.label}
                  </span>
                </div>
                {/* Two Diagonal Orange Hazard Stripes */}
                <div className="cartridge-hazard-stripes" />
              </div>

              {/* Lower Section: Molded Downward Triangle & Ribbed Finger Grips */}
              <div className="flex flex-col items-center justify-end pt-2 pb-1 gap-1">
                {/* Debossed Triangle with 3 Horizontal Inner Ridges */}
                <div className="debossed-grip-triangle">
                  <div className="triangle-ridge" />
                  <div className="triangle-ridge" />
                  <div className="triangle-ridge" />
                </div>
                {/* Lower Horizontal Grip Notches on Left and Right */}
                <div className="w-full flex justify-between px-2 pt-1">
                  <div className="w-4 h-[3px] bg-[#12110f] border-t border-white/10 border-b border-[#474238] rounded-sm" />
                  <div className="w-4 h-[3px] bg-[#12110f] border-t border-white/10 border-b border-[#474238] rounded-sm" />
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};
