import React from 'react';
import type { ProjectCategory } from '../../types/portfolio';
import { soundEffects } from '../../utils/soundEffects';

interface CartridgeDeckProps {
  activeCategory: ProjectCategory;
  isPoweredOn: boolean;
  onSelectCategory: (category: ProjectCategory) => void;
}

const CARTRIDGES: {
  id: ProjectCategory;
  lane: number;
  label: string;
  iconSvg: React.ReactNode;
}[] = [
  {
    id: 'interface',
    lane: 1,
    label: 'INTERFACE',
    iconSvg: (
      <svg className="w-4 h-4 text-[#d9660b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'systems',
    lane: 2,
    label: 'SYSTEMS',
    iconSvg: (
      <svg className="w-4 h-4 text-[#d9660b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="15" x2="8" y2="15.01" strokeWidth="3" />
        <line x1="16" y1="15" x2="16" y2="15.01" strokeWidth="3" />
      </svg>
    ),
  },
  {
    id: 'worlds',
    lane: 3,
    label: '3D WORLDS',
    iconSvg: (
      <svg className="w-4 h-4 text-[#d9660b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    id: 'games',
    lane: 4,
    label: 'GAMES',
    iconSvg: (
      <svg className="w-4 h-4 text-[#d9660b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="6" y1="12" x2="10" y2="12" />
        <line x1="8" y1="10" x2="8" y2="14" />
        <line x1="15" y1="13" x2="15.01" y2="13" strokeWidth="3" />
        <line x1="18" y1="11" x2="18.01" y2="11" strokeWidth="3" />
        <rect x="2" y="6" width="20" height="12" rx="4" />
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
    <div className="cartridge-strip-area select-none">
      {CARTRIDGES.map((c) => {
        const isActive = activeCategory === c.id && isPoweredOn;
        return (
          <div
            key={c.id}
            className={`cartridge-bay ${isActive ? 'ring-2 ring-amber-500/80 shadow-[0_0_20px_rgba(255,145,0,0.6)]' : ''}`}
          >
            <button
              onClick={() => handleCartridgeClick(c.id)}
              disabled={!isPoweredOn}
              aria-label={`Insert ${c.label} cartridge`}
              className={`cartridge-module ${isActive ? 'active' : ''} ${
                !isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              {/* Cartridge Label Plate */}
              <div className="bg-[#ede7db] text-[#1c1a17] rounded-[4px] px-2 py-1.5 flex items-center justify-between border border-[#c4beaf] shadow-inner">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span>{c.iconSvg}</span>
                  <span className="text-[10px] sm:text-[11px] font-bold tracking-wider font-mono uppercase">
                    {c.label}
                  </span>
                </div>
                {/* Amber/Orange hazard accent stripes */}
                <div className="flex items-center gap-0.5">
                  <div className="w-1.5 h-3 bg-[#d9660b] -skew-x-12" />
                  <div className="w-1.5 h-3 bg-[#38332b] -skew-x-12" />
                </div>
              </div>

              {/* Lower Section with Ribbed Grips and Inverted Triangle */}
              <div className="flex flex-col items-center justify-end gap-1.5 pt-1.5 pb-0.5">
                <div className="text-[9px] text-[#5c5447] font-bold">▼</div>
                <div className="w-full flex flex-col gap-1 px-2">
                  <div className="cart-grip-line" />
                  <div className="cart-grip-line" />
                  <div className="cart-grip-line" />
                </div>
              </div>
            </button>
          </div>
        );
      })}
    </div>
  );
};
