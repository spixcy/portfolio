import React from 'react';

interface MetallicCasingProps {
  children: React.ReactNode;
}

export const MetallicCasing: React.FC<MetallicCasingProps> = ({
  children,
}) => {
  return (
    <div className="computer-chassis-shell">
      {/* Real Photographic Weathered & Chipped Perimeter Rim */}
      <div className="chassis-rim-overlay" aria-hidden="true" />

      {/* Precision Machined Perimeter Groove */}
      <div className="chassis-outer-groove" aria-hidden="true" />

      {/* Direct Children render into CSS Grid areas: screen, keys, strip, rail */}
      {children}
    </div>
  );
};
