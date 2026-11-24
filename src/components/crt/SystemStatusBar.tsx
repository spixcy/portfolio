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
    <header className="w-full flex items-center justify-between text-sm sm:text-base md:text-[18px] font-mono select-none text-[#ff9900] pb-3 mb-1">
      <div className="flex items-center">
        <span className="font-bold tracking-wider uppercase ph-glow-text text-[#ff9900]">
          {pathText || `${systemCode} ${version}`}
        </span>
      </div>
      <div className="tracking-widest uppercase font-bold text-[#ff9900]/90 ph-glow-text">
        {rightStatus}
      </div>
    </header>
  );
};
