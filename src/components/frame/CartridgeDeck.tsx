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
  label: string;
}[] = [
  { id: 'interface', label: 'INTERFACE' },
  { id: 'systems',   label: 'SYSTEMS'   },
  { id: 'worlds',    label: '3D WORKS' },
  { id: 'games',     label: 'GAMES'     },
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
            className={`cartridge-outer-well ${isActive ? 'cartridge-active-halo' : ''}`}
          >
            <button
              onClick={() => handleCartridgeClick(c.id)}
              disabled={!isPoweredOn}
              aria-label={`Insert ${c.label} cartridge`}
              className={`cartridge-photo-unit ${isActive ? 'is-engaged' : ''} ${
                !isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''
              }`}
            >
              <img
                src={`/buttons/cartridge-${c.id}.png`}
                alt={`${c.label} cartridge`}
                className="cartridge-photo-img"
                draggable={false}
              />
            </button>
          </div>
        );
      })}
    </div>
  );
};
