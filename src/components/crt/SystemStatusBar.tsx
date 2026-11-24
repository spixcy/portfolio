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
    <div className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono pb-3 border-b border-[#ff9100]/25 select-none text-[#ff9100]/90">
      <div className="flex items-center gap-2">
        <span className="font-bold tracking-wider">{pathText || `${systemCode} ${version}`}</span>
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#ff9100] animate-pulse" />
      </div>
      <div className="tracking-widest uppercase font-bold text-[#ffb042]">
        {rightStatus}
      </div>
    </div>
  );
};
