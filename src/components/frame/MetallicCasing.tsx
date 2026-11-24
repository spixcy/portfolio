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
    <div className="relative w-full max-w-[1240px] mx-auto p-4 sm:p-7 chassis-outer transition-all duration-300">
      {/* 4 Corner Industrial Phillips Screws */}
      <div className="absolute top-3 left-3">
        <div className="screw-head" title="Chassis screw" />
      </div>
      <div className="absolute top-3 right-3">
        <div className="screw-head" title="Chassis screw" />
      </div>
      <div className="absolute bottom-3 left-3">
        <div className="screw-head" title="Chassis screw" />
      </div>
      <div className="absolute bottom-3 right-3">
        <div className="screw-head" title="Chassis screw" />
      </div>

      {/* Top Brand Debossed Badge */}
      <div className="absolute top-3 right-10 flex items-center gap-2 select-none opacity-80 pointer-events-none">
        <div className="debossed-badge text-[11px] sm:text-[13px] font-bold tracking-widest px-2 py-0.5 border border-[#857f72]/40 rounded">
          {systemName}
        </div>
      </div>

      {/* Main Inner Computer Content */}
      <div className="relative z-10 flex flex-col gap-5 sm:gap-6 pt-2">
        {children}
      </div>
    </div>
  );
};
