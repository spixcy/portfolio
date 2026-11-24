import React from 'react';
import { soundEffects } from '../../utils/soundEffects';

interface SideControlsProps {
  systemName?: string;
  currentView: string;
  isPoweredOn: boolean;
  onNavigate: (view: string) => void;
  onTogglePower: () => void;
}

const NAV_BUTTONS: {
  id: 'work' | 'about' | 'contact';
  label: string;
  target: string;
}[] = [
  { id: 'work', label: 'WORK', target: 'work/interface' },
  { id: 'about', label: 'ABOUT', target: 'about' },
  { id: 'contact', label: 'CONTACT', target: 'contact' },
];

export const SideControls: React.FC<SideControlsProps> = ({
  systemName = 'PORTFOLIO/OS',
  currentView,
  isPoweredOn,
  onNavigate,
  onTogglePower,
}) => {
  const isNavActive = (id: 'work' | 'about' | 'contact') => {
    if (!isPoweredOn) return false;
    if (id === 'work') {
      return currentView.startsWith('work') || currentView === 'home' || currentView.startsWith('project');
    }
    return currentView === id;
  };

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
    <div className="keys-panel-area select-none">
      {/* Debossed System Badge stamped into chassis metal */}
      <div className="debossed-badge-wrapper">
        <div className="debossed-badge-box">
          {systemName}
        </div>
      </div>

      {/* Tactile Photographic Navigation Switches (WORK / ABOUT / CONTACT) */}
      <div className="keys-stack-group">
        {NAV_BUTTONS.map((btn) => {
          const active = isNavActive(btn.id);
          return (
            <div key={btn.id} className="key-socket-well">
              <button
                onClick={() => handleNavClick(btn.target)}
                disabled={!isPoweredOn}
                aria-label={`Navigate to ${btn.label} section`}
                aria-pressed={active}
                className={`key-photo-btn ${active ? 'is-active' : ''} ${
                  !isPoweredOn ? 'opacity-65 cursor-not-allowed' : ''
                }`}
              >
                <img
                  src={`/buttons/switch-${btn.id}-${active ? 'on' : 'off'}.png`}
                  alt={btn.label}
                  className="key-photo-img"
                  draggable={false}
                />
              </button>
            </div>
          );
        })}
      </div>

      {/* Illuminated Red Power Rocker Switch */}
      <div className="power-rocker-wrapper">
        <button
          onClick={handlePowerClick}
          aria-label={isPoweredOn ? 'Switch computer power OFF' : 'Switch computer power ON'}
          title={isPoweredOn ? 'Power OFF' : 'Power ON'}
          className={`power-photo-btn ${isPoweredOn ? 'is-on' : 'is-off'}`}
        >
          <img
            src={isPoweredOn ? '/buttons/power-on.png' : '/buttons/power-off.png'}
            alt={isPoweredOn ? 'Power ON' : 'Power OFF'}
            className="power-photo-img"
            draggable={false}
          />
        </button>
      </div>
    </div>
  );
};
