import React from 'react';

interface MetallicCasingProps {
  children: React.ReactNode;
}

export const MetallicCasing: React.FC<MetallicCasingProps> = ({
  children,
}) => {
  return (
    <div className="computer-chassis-shell">
      {/* Precision Machined Perimeter Groove */}
      <div className="chassis-outer-groove" />

      {/* Weathered Chipped Paint Layer along Perimeter */}
      <div className="chassis-edge-wear" />

      {/* Direct Children render into CSS Grid areas: screen, keys, strip, rail */}
      {children}
    </div>
  );
};
