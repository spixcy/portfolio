import React from 'react';

interface CRTDisplayProps {
  children: React.ReactNode;
  isPoweredOn: boolean;
  powerTransitioning: boolean;
  channelSwitching?: boolean;
  switchKey?: number;
}

export const CRTDisplay: React.FC<CRTDisplayProps> = ({
  children,
  isPoweredOn,
  powerTransitioning,
  channelSwitching = false,
  switchKey = 0,
}) => {
  return (
    <div className="molded-tv-bezel">
      {/* Real Photographic Worn CRT Bezel Frame Overlay */}
      <div className="molded-bezel-photo-frame" aria-hidden="true" />

      {/* Deep Sunken TV Housing Cavity (creates separation between bezel & curved glass tube) */}
      <div className="sunken-gasket-well">
        {/* Convex Curved Glass CRT Tube Lens */}
        <div className="crt-tube-glass">
          {/* Curved Glass Rim & Top-Left Specular Arc Reflection */}
          <svg
            className="crt-glass-arc-glare"
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="crtTopGlare" x1="0" y1="0" x2="0.45" y2="0.65">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
                <stop offset="32%" stopColor="#fff8ef" stopOpacity="0.07" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="crtEdgeSheen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
                <stop offset="35%" stopColor="#ffffff" stopOpacity="0.1" />
                <stop offset="70%" stopColor="#ffffff" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.14" />
              </linearGradient>
            </defs>
            {/* Upper-left spherical glass specular sheen */}
            <path
              d="M 18 140 Q 22 20 160 16 L 840 16 Q 978 20 982 140 L 982 110 Q 940 38 780 34 L 220 34 Q 55 38 18 155 Z"
              fill="url(#crtTopGlare)"
            />
            {/* Crisp convex glass bevel perimeter highlight */}
            <rect
              x="2"
              y="2"
              width="996"
              height="596"
              rx="52"
              ry="44"
              fill="none"
              stroke="url(#crtEdgeSheen)"
              strokeWidth="2.5"
            />
          </svg>

          {/* Subtle Spherical Dome Reflection */}
          <div className="crt-reflection-glare" aria-hidden="true" />

          {/* Scanlines Mesh */}
          <div className="crt-scanlines-pattern" aria-hidden="true" />

          {/* Radial Edge Vignette */}
          <div className="crt-vignette-layer" aria-hidden="true" />

          {/* TV Channel-Switch Static & Sync Tear Overlay */}
          {isPoweredOn && channelSwitching && (
            <div key={`static-${switchKey}`} className="crt-channel-switch-fx" aria-hidden="true">
              <div className="crt-static-snow" />
              <div className="crt-sync-bar" />
            </div>
          )}

          {/* Dynamic Display Content (Safe inset padding inside curved CRT tube) */}
          {isPoweredOn ? (
            <div
              key={`screen-${switchKey}`}
              className={`relative z-10 w-full h-full flex flex-col flex-1 px-7 sm:px-9 md:px-11 py-4 sm:py-5 text-[#ffbe6b] overflow-hidden ${
                powerTransitioning
                  ? 'crt-powered-on-anim'
                  : channelSwitching
                    ? 'crt-channel-content-snap'
                    : 'screen-flicker'
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
              {powerTransitioning && <div className="crt-collapse-beam" aria-hidden="true" />}
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
