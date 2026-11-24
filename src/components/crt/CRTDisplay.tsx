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
    <div className="crt-bezel-frame w-full flex-1 min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] flex flex-col justify-between">
      {/* Screen cavity */}
      <div className="crt-screen-cavity w-full h-full flex-1 flex flex-col relative min-h-[440px] sm:min-h-[500px]">
        {/* Glass reflection highlight */}
        <div className="crt-glass-glare" />

        {/* Scanlines overlay */}
        <div className="crt-scanlines" />

        {/* Radial vignette */}
        <div className="crt-vignette" />

        {/* Content area: either live CRT interface or dark powered-down screen */}
        {isPoweredOn ? (
          <div
            className={`relative z-10 w-full h-full flex flex-col flex-1 p-3.5 sm:p-5 lg:p-6 text-[#ffbe6b] ${
              powerTransitioning ? 'crt-powered-on-anim' : 'crt-flicker-active'
            }`}
          >
            {children}
          </div>
        ) : (
          <div
            className={`relative z-10 w-full h-full flex flex-col flex-1 items-center justify-center bg-[#070605] ${
              powerTransitioning ? 'crt-powered-off-anim' : ''
            }`}
          >
            {/* Very faint, powered-down tube reflection */}
            <div className="text-neutral-800/40 text-xs font-mono tracking-widest uppercase select-none">
              [SYSTEM STANDBY • SWITCH POWER ON]
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
