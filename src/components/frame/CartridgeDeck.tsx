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
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <div className="w-full">
      {/* Upper seam separation */}
      <div className="chassis-seam mb-4" />

      {/* Cartridge Slots Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 select-none">
        {CARTRIDGES.map((c) => {
          const isActive = activeCategory === c.id && isPoweredOn;
          return (
            <div
              key={c.id}
              className={`cartridge-slot-well transition-all duration-200 ${
                isActive ? 'ring-2 ring-amber-500/50' : ''
              }`}
            >
              <button
                onClick={() => handleCartridgeClick(c.id)}
                disabled={!isPoweredOn}
                aria-label={`Insert ${c.label} cartridge`}
                className={`w-full cartridge-body p-2 sm:p-2.5 flex flex-col justify-between gap-2 text-left ${
                  isActive ? 'active' : ''
                } ${!isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''}`}
              >
                {/* Cartridge Label Plate */}
                <div className="bg-[#ede7db] text-[#1c1a17] rounded-[4px] px-2 py-1.5 flex items-center justify-between border border-[#c4beaf] shadow-inner">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <span className="text-[#d9660b]">{c.iconSvg}</span>
                    <span className="text-[10px] sm:text-[11px] font-bold tracking-wider font-mono">
                      {c.label}
                    </span>
                  </div>
                  {/* Amber/Orange accent hazard stripes */}
                  <div className="flex items-center gap-0.5">
                    <div className="w-1.5 h-3 bg-[#d9660b] -skew-x-12" />
                    <div className="w-1.5 h-3 bg-[#38332b] -skew-x-12" />
                  </div>
                </div>

                {/* Tactile Lower Grip Ribs */}
                <div className="cartridge-grip px-3 py-1">
                  <div className="cartridge-grip-line" />
                  <div className="cartridge-grip-line" />
                  <div className="cartridge-grip-line" />
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
