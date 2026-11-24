import React from 'react';
import { soundEffects } from '../../utils/soundEffects';

interface SideControlsProps {
  currentView: string;
  isPoweredOn: boolean;
  onNavigate: (view: string) => void;
  onTogglePower: () => void;
}

export const SideControls: React.FC<SideControlsProps> = ({
  currentView,
  isPoweredOn,
  onNavigate,
  onTogglePower,
}) => {
  const isWorkActive = currentView.startsWith('work') || currentView === 'home' || currentView.startsWith('project');
  const isAboutActive = currentView === 'about';
  const isContactActive = currentView === 'contact';

  const handleNavClick = (view: string) => {
    if (!isPoweredOn) return;
    soundEffects.playButtonClick();
    onNavigate(view);
  };

  const handlePowerClick = () => {
    if (isPoweredOn) {
      soundEffects.playPowerOff();
    } else {
      soundEffects.playPowerOn();
    }
    onTogglePower();
  };

  return (
    <div className="flex flex-row lg:flex-col justify-between lg:justify-start gap-3 sm:gap-4 lg:w-44 select-none">
      {/* WORK Physical Button */}
      <div className="socket-well flex-1 lg:flex-none">
        <button
          onClick={() => handleNavClick('work/interface')}
          disabled={!isPoweredOn}
          aria-label="Navigate to Work section"
          className={`w-full py-3 sm:py-4 px-3 sm:px-4 physical-btn flex items-center justify-between gap-2 transition-all ${
            isWorkActive && isPoweredOn ? 'is-active' : ''
          } ${!isPoweredOn ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className="text-xs sm:text-sm tracking-wider font-mono">WORK</span>
          <div
            className={`led-jewel ${isWorkActive && isPoweredOn ? 'active' : 'inactive'}`}
            title={isWorkActive ? 'Work mode active' : 'Work mode inactive'}
          />
        </button>
      </div>

      {/* ABOUT Physical Button */}
      <div className="socket-well flex-1 lg:flex-none">
        <button
          onClick={() => handleNavClick('about')}
          disabled={!isPoweredOn}
          aria-label="Navigate to About section"
          className={`w-full py-3 sm:py-4 px-3 sm:px-4 physical-btn flex items-center justify-between gap-2 transition-all ${
            isAboutActive && isPoweredOn ? 'is-active' : ''
          } ${!isPoweredOn ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className="text-xs sm:text-sm tracking-wider font-mono">ABOUT</span>
          <div
            className={`led-jewel ${isAboutActive && isPoweredOn ? 'active' : 'inactive'}`}
            title={isAboutActive ? 'About mode active' : 'About mode inactive'}
          />
        </button>
      </div>

      {/* CONTACT Physical Button */}
      <div className="socket-well flex-1 lg:flex-none">
        <button
          onClick={() => handleNavClick('contact')}
          disabled={!isPoweredOn}
          aria-label="Navigate to Contact section"
          className={`w-full py-3 sm:py-4 px-3 sm:px-4 physical-btn flex items-center justify-between gap-2 transition-all ${
            isContactActive && isPoweredOn ? 'is-active' : ''
          } ${!isPoweredOn ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          <span className="text-xs sm:text-sm tracking-wider font-mono">CONTACT</span>
          <div
            className={`led-jewel ${isContactActive && isPoweredOn ? 'active' : 'inactive'}`}
            title={isContactActive ? 'Contact mode active' : 'Contact mode inactive'}
          />
        </button>
      </div>

      {/* Spacer for desktop vertical panel */}
      <div className="hidden lg:block lg:flex-1 min-h-[40px]" />

      {/* RED ILLUMINATED POWER BUTTON */}
      <div className="socket-well flex-none lg:w-full">
        <button
          onClick={handlePowerClick}
          aria-label={isPoweredOn ? 'Switch computer power OFF' : 'Switch computer power ON'}
          title={isPoweredOn ? 'Power OFF' : 'Power ON'}
          className={`w-14 sm:w-16 lg:w-full h-11 sm:h-12 lg:h-14 power-rocker flex items-center justify-center transition-all ${
            isPoweredOn ? 'on' : 'off'
          }`}
        >
          <div className="flex items-center gap-2">
            <svg
              className={`w-5 h-5 sm:w-6 sm:h-6 transition-all ${
                isPoweredOn
                  ? 'text-white drop-shadow-[0_0_6px_rgba(255,255,255,0.9)] scale-105'
                  : 'text-red-950/80 scale-95'
              }`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18.36 6.64a9 9 0 1 1-12.73 0" />
              <line x1="12" y1="2" x2="12" y2="12" />
            </svg>
            <span
              className={`hidden lg:inline text-xs font-mono font-bold tracking-widest ${
                isPoweredOn
                  ? 'text-white/90 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]'
                  : 'text-red-950/70'
              }`}
            >
              {isPoweredOn ? 'POWER' : 'OFF'}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};
