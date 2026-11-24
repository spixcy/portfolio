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
    <header className="w-full flex items-center justify-between text-xs sm:text-[13px] font-mono select-none text-[#ff9100]/80 pb-2 mb-0.5 shrink-0">
      <div className="flex items-center">
        <span className="font-bold tracking-[0.18em] uppercase ph-glow-text">
          {pathText || `${systemCode} ${version}`}
        </span>
      </div>
      <div className="tracking-[0.2em] uppercase font-bold text-[#ff9100]/80 ph-glow-text">
        {rightStatus}
      </div>
    </header>
  );
};
