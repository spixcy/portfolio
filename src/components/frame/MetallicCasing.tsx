import React from 'react';

interface MetallicCasingProps {
  children: React.ReactNode;
  systemName?: string;
}

export const MetallicCasing: React.FC<MetallicCasingProps> = ({
  children,
  systemName = 'PORTFOLIO/OS',
}) => {
  return (
    <div className="computer-chassis-shell">
      {/* Decorative Outer Perimeter Inset Groove Line */}
      <div className="chassis-outer-groove" />

      {/* 4 Corner Industrial Screws */}
      <div className="absolute top-3 left-3 z-20">
        <div className="chassis-screw" title="Chassis screw" />
      </div>
      <div className="absolute top-3 right-3 z-20">
        <div className="chassis-screw" title="Chassis screw" />
      </div>
      <div className="absolute bottom-3 left-3 z-20">
        <div className="chassis-screw" title="Chassis screw" />
      </div>
      <div className="absolute bottom-3 right-3 z-20">
        <div className="chassis-screw" title="Chassis screw" />
      </div>

      {/* Top Right Debossed Brand Badge */}
      <div className="absolute top-3 right-12 z-20 select-none">
        <div className="debossed-badge-box">
          {systemName}
        </div>
      </div>

      {/* Direct Children render into the CSS Grid areas: screen, keys, strip, rail */}
      {children}
    </div>
  );
};
