import React from 'react';

interface CRTDisplayProps {
  children: React.ReactNode;
  isPoweredOn: boolean;
  powerTransitioning: boolean;
}

export const CRTDisplay: React.FC<CRTDisplayProps> = ({
  children,
  isPoweredOn,
  powerTransitioning,
}) => {
  return (
    <div className="molded-tv-bezel">
      {/* Deep Sunken Rubberized Gasket Ring */}
      <div className="sunken-gasket-well">
        {/* Curved Glass CRT Tube Cavity */}
        <div className="crt-tube-glass">
          {/* Curved Glass Reflection Glare */}
          <div className="crt-reflection-glare" />

          {/* Scanlines Mesh */}
          <div className="crt-scanlines-pattern" />

          {/* Radial Edge Vignette */}
          <div className="crt-vignette-layer" />

          {/* Dynamic Display Content */}
          {isPoweredOn ? (
            <div
              className={`relative z-10 w-full h-full flex flex-col flex-1 p-3 sm:p-4 md:p-5 text-[#ffbe6b] overflow-hidden ${
                powerTransitioning ? 'crt-powered-on-anim' : 'screen-flicker'
              }`}
            >
              {children}
            </div>
          ) : (
            <div
              className={`relative z-10 w-full h-full flex flex-col flex-1 items-center justify-center bg-[#060504] ${
                powerTransitioning ? 'crt-powered-off-anim' : ''
              }`}
            >
              <div className="text-neutral-800/60 text-xs font-mono tracking-widest uppercase select-none">
                [SYSTEM STANDBY • SWITCH POWER ON]
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
