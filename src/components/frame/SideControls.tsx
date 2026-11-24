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
    <div className="keys-panel-area">
      {/* 1. WORK Button */}
      <div className="key-socket-well">
        <button
          onClick={() => handleNavClick('work/interface')}
          disabled={!isPoweredOn}
          aria-label="Navigate to Work section"
          className={`key-cap-btn ${isWorkActive && isPoweredOn ? 'is-active' : ''} ${
            !isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ded6c8]">WORK</span>
          <div
            className={`amber-led-jewel ${isWorkActive && isPoweredOn ? 'active' : 'inactive'}`}
            title={isWorkActive ? 'Work mode active' : 'Work mode inactive'}
          />
        </button>
      </div>

      {/* 2. ABOUT Button */}
      <div className="key-socket-well">
        <button
          onClick={() => handleNavClick('about')}
          disabled={!isPoweredOn}
          aria-label="Navigate to About section"
          className={`key-cap-btn ${isAboutActive && isPoweredOn ? 'is-active' : ''} ${
            !isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ded6c8]">ABOUT</span>
          <div
            className={`amber-led-jewel ${isAboutActive && isPoweredOn ? 'active' : 'inactive'}`}
            title={isAboutActive ? 'About mode active' : 'About mode inactive'}
          />
        </button>
      </div>

      {/* 3. CONTACT Button */}
      <div className="key-socket-well">
        <button
          onClick={() => handleNavClick('contact')}
          disabled={!isPoweredOn}
          aria-label="Navigate to Contact section"
          className={`key-cap-btn ${isContactActive && isPoweredOn ? 'is-active' : ''} ${
            !isPoweredOn ? 'opacity-40 cursor-not-allowed' : ''
          }`}
        >
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#ded6c8]">CONTACT</span>
          <div
            className={`amber-led-jewel ${isContactActive && isPoweredOn ? 'active' : 'inactive'}`}
            title={isContactActive ? 'Contact mode active' : 'Contact mode inactive'}
          />
        </button>
      </div>

      {/* 4. RED POWER ROCKER SWITCH */}
      <div className="power-rocker-wrapper key-socket-well">
        <button
          onClick={handlePowerClick}
          aria-label={isPoweredOn ? 'Switch computer power OFF' : 'Switch computer power ON'}
          title={isPoweredOn ? 'Power OFF' : 'Power ON'}
          className={`power-rocker-btn ${isPoweredOn ? 'on' : 'off'}`}
        >
          <svg
            className={`w-7 h-7 transition-all ${
              isPoweredOn
                ? 'text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.95)] scale-105'
                : 'text-red-950/70 scale-95'
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
        </button>
      </div>
    </div>
  );
};
