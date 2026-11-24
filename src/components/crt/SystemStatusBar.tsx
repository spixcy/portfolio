import React from 'react';

interface SystemStatusBarProps {
  systemCode: string;
  version: string;
  pathText?: string;
  rightStatus?: string;
}

export const SystemStatusBar: React.FC<SystemStatusBarProps> = ({
  systemCode,
  version,
  pathText,
  rightStatus = 'READY',
}) => {
  return (
    <header className="w-full flex items-center justify-between text-xs sm:text-sm md:text-[16px] lg:text-[17px] font-mono select-none text-[#ff9100] pb-2">
      <div className="flex items-center">
        <span className="font-bold tracking-wider uppercase ph-glow-text">
          {pathText || `${systemCode} ${version}`}
        </span>
      </div>
      <div className="tracking-widest uppercase font-bold text-[#ff9100]/90 ph-glow-text">
        {rightStatus}
      </div>
    </header>
  );
};
