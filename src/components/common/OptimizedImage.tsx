import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | 'auto';
  fit?: 'cover' | 'contain';
  priority?: boolean;
}

/**
 * Procedural retro vector artwork generator for crisp, infinite-resolution
 * project previews that match the physical CRT aesthetic without any blur or compression artifacts.
 */
function ProceduralArtwork({ id, alt }: { id: string; alt: string }) {
  switch (id) {
    case 'procedural:kinetic-vfx':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mangaBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f111a" />
              <stop offset="100%" stopColor="#1a1c2e" />
            </linearGradient>
            <radialGradient id="impactGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff9d00" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ff5500" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" fill="url(#mangaBg)" />
          {/* Action lines */}
          <g stroke="#ff9d00" strokeWidth="1" opacity="0.35">
            <line x1="200" y1="120" x2="20" y2="20" strokeWidth="2" />
            <line x1="200" y1="120" x2="60" y2="10" />
            <line x1="200" y1="120" x2="360" y2="15" strokeWidth="2.5" />
            <line x1="200" y1="120" x2="380" y2="70" />
            <line x1="200" y1="120" x2="390" y2="180" strokeWidth="2" />
            <line x1="200" y1="120" x2="30" y2="210" strokeWidth="2" />
            <line x1="200" y1="120" x2="100" y2="230" />
            <line x1="200" y1="120" x2="280" y2="235" />
          </g>
          {/* Glow center */}
          <circle cx="200" cy="120" r="90" fill="url(#impactGlow)" />
          {/* Elastic button in center */}
          <g transform="translate(100, 75)">
            {/* Manga impact dust clouds */}
            <path d="M-10,35 Q-25,10 5,5 Q15,-15 35,-5 Q55,-20 75,-5 Q95,-20 120,-5 Q150,-10 160,10 Q190,5 180,35 Q205,45 190,65 Q205,85 175,90 Q150,110 120,95 Q90,110 60,95 Q30,105 10,85 Q-15,80 -10,55 Z" 
                  fill="#ffffff" stroke="#222" strokeWidth="2.5" />
            {/* Manga Japanese SFX characters: ドン! */}
            <text x="140" y="32" fontFamily="monospace, sans-serif" fontWeight="900" fontSize="38" fill="#111" transform="rotate(8 140 32)">ドン!</text>
            {/* The bouncy button */}
            <rect x="25" y="28" width="140" height="46" rx="14" fill="#ffffff" stroke="#2d42ff" strokeWidth="3.5" />
            <text x="95" y="58" fontFamily="sans-serif" fontWeight="bold" fontSize="16" fill="#111" textAnchor="middle">Primary</text>
            {/* Speed lines on button */}
            <line x1="38" y1="36" x2="52" y2="36" stroke="#2d42ff" strokeWidth="2" strokeLinecap="round" />
            <line x1="34" y1="42" x2="44" y2="42" stroke="#2d42ff" strokeWidth="1.5" strokeLinecap="round" />
          </g>
          <text x="16" y="222" fontFamily="monospace" fontSize="11" fill="#ff9d00" opacity="0.8">KINETIC SPRING VFX v1.2</text>
        </svg>
      );

    case 'procedural:pixel-console':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
          {/* Sky */}
          <rect width="400" height="150" fill="#4ea5f7" />
          {/* Pixel clouds */}
          <rect x="50" y="30" width="60" height="20" fill="#ffffff" />
          <rect x="65" y="20" width="30" height="10" fill="#ffffff" />
          <rect x="260" y="45" width="80" height="24" fill="#ffffff" />
          <rect x="280" y="33" width="40" height="12" fill="#ffffff" />
          {/* Hills */}
          <rect x="20" y="110" width="90" height="40" fill="#3fa34d" />
          <rect x="180" y="100" width="120" height="50" fill="#2e853a" />
          {/* Castle / Temple */}
          <rect x="145" y="70" width="110" height="80" fill="#9c9c9c" stroke="#222" strokeWidth="2" />
          <rect x="135" y="55" width="25" height="35" fill="#787878" stroke="#222" strokeWidth="2" />
          <rect x="240" y="55" width="25" height="35" fill="#787878" stroke="#222" strokeWidth="2" />
          <rect x="185" y="105" width="30" height="45" fill="#2b231b" />
          {/* Ground */}
          <rect y="150" width="400" height="90" fill="#4d9b35" />
          <rect y="165" width="400" height="75" fill="#8b5a2b" />
          {/* Pixel UI Input box */}
          <rect x="60" y="180" width="280" height="34" fill="#fdfae8" stroke="#222" strokeWidth="3" rx="2" />
          <text x="80" y="202" fontFamily="monospace" fontSize="13" fill="#333" letterSpacing="3">•••••••••••••</text>
          <rect x="205" y="186" width="2" height="20" fill="#ff7700" />
          <rect x="270" y="184" width="60" height="24" fill="#ff9900" stroke="#222" strokeWidth="2" />
          <text x="300" y="200" fontFamily="monospace" fontSize="10" fontWeight="bold" fill="#000" textAnchor="middle">KEEP</text>
        </svg>
      );

    case 'procedural:rubber-hose-ui':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#2b1a13" />
          <rect x="10" y="10" width="380" height="220" fill="#e8d5b5" stroke="#4a2e1b" strokeWidth="4" rx="8" />
          {/* Vintage border filigree */}
          <rect x="16" y="16" width="368" height="208" fill="none" stroke="#6b4629" strokeWidth="1.5" strokeDasharray="4 2" />
          <text x="200" y="52" fontFamily="serif" fontStyle="italic" fontSize="13" fill="#6b4629" textAnchor="middle">~ A JELLY INTERFACE ~</text>
          <text x="200" y="80" fontFamily="'Impact', 'Arial Black', sans-serif" fontSize="28" fill="#d9381e" textAnchor="middle" letterSpacing="1">RUBBER HOSE UI</text>
          <text x="200" y="100" fontFamily="serif" fontStyle="italic" fontSize="12" fill="#3a2517" textAnchor="middle">Controls on Parade</text>
          
          {/* Cartoon Character 1 (Bendy Toggle) */}
          <g transform="translate(100, 150)">
            <ellipse cx="0" cy="0" rx="24" ry="24" fill="#fff" stroke="#111" strokeWidth="3" />
            {/* Pie eyes */}
            <circle cx="-8" cy="-5" r="5" fill="#111" />
            <path d="M-8,-5 L-4,-9 L-3,-4 Z" fill="#fff" />
            <circle cx="8" cy="-5" r="5" fill="#111" />
            <path d="M8,-5 L12,-9 L13,-4 Z" fill="#fff" />
            {/* Smile */}
            <path d="M-12,5 Q0,18 12,5" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Bendy legs */}
            <path d="M-8,24 Q-14,40 -20,44" stroke="#111" strokeWidth="3" fill="none" />
            <ellipse cx="-24" cy="44" rx="8" ry="4" fill="#111" />
            <path d="M8,24 Q14,40 20,44" stroke="#111" strokeWidth="3" fill="none" />
            <ellipse cx="24" cy="44" rx="8" ry="4" fill="#111" />
          </g>

          {/* Cartoon Character 2 (Slider Boy) */}
          <g transform="translate(200, 145)">
            <rect x="-20" y="-20" width="40" height="40" rx="8" fill="#ffe066" stroke="#111" strokeWidth="3" />
            <circle cx="-6" cy="-6" r="4" fill="#111" />
            <circle cx="6" cy="-6" r="4" fill="#111" />
            <path d="M-8,6 Q0,14 8,6" stroke="#111" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* Four-finger cartoon white glove hand waving */}
            <path d="M-20,-5 Q-38,-20 -40,-35" stroke="#111" strokeWidth="3" fill="none" />
            <circle cx="-42" cy="-38" r="9" fill="#fff" stroke="#111" strokeWidth="2" />
          </g>

          {/* Cartoon Character 3 (Radio Dial) */}
          <g transform="translate(300, 150)">
            <ellipse cx="0" cy="0" rx="22" ry="22" fill="#5bc0be" stroke="#111" strokeWidth="3" />
            <circle cx="-7" cy="-5" r="4" fill="#111" />
            <circle cx="7" cy="-5" r="4" fill="#111" />
            <ellipse cx="0" cy="7" rx="6" ry="4" fill="#d9381e" stroke="#111" strokeWidth="1.5" />
            <path d="M-6,22 Q-10,38 -15,42" stroke="#111" strokeWidth="3" fill="none" />
            <path d="M6,22 Q10,38 15,42" stroke="#111" strokeWidth="3" fill="none" />
          </g>
        </svg>
      );

    case 'procedural:dot-bloom':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#090a0f" />
          <g transform="translate(200, 120)">
            {/* Concentric halftone dot rings */}
            {[18, 32, 48, 64, 82, 102].map((radius, rIdx) => {
              const count = Math.floor(radius * 0.45);
              const dots = [];
              for (let i = 0; i < count; i++) {
                const angle = (i / count) * Math.PI * 2;
                const x = Math.cos(angle) * radius * 1.5;
                const y = Math.sin(angle) * radius * 0.65;
                const dotSize = Math.max(1, 3.5 - rIdx * 0.4);
                const opacity = 0.35 + (rIdx % 2 === 0 ? 0.5 : 0.2);
                dots.push(
                  <circle
                    key={`${rIdx}-${i}`}
                    cx={x}
                    cy={y}
                    r={dotSize}
                    fill={rIdx < 3 ? '#ff9d00' : '#4dc3ff'}
                    opacity={opacity}
                  />
                );
              }
              return <g key={rIdx}>{dots}</g>;
            })}
            {/* Central sphere */}
            <circle cx="0" cy="0" r="28" fill="#1c160c" stroke="#ff9d00" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="16" fill="#ff7700" opacity="0.8" />
            <circle cx="-6" cy="-6" r="6" fill="#fff" opacity="0.6" />
          </g>
          <text x="20" y="220" fontFamily="monospace" fontSize="10" fill="#ff9d00" opacity="0.7">HALOFRAME DENSITY // 60FPS COMPOSITOR</text>
        </svg>
      );

    case 'procedural:neural-cockpit':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#0d1117" />
          {/* Grid lines */}
          <g stroke="#30363d" strokeWidth="0.8" opacity="0.4">
            <line x1="0" y1="60" x2="400" y2="60" />
            <line x1="0" y1="120" x2="400" y2="120" />
            <line x1="0" y1="180" x2="400" y2="180" />
            <line x1="100" y1="0" x2="100" y2="240" />
            <line x1="200" y1="0" x2="200" y2="240" />
            <line x1="300" y1="0" x2="300" y2="240" />
          </g>
          {/* Telemetry Waveform */}
          <path d="M 20,140 Q 60,60 100,130 T 180,100 T 250,160 T 320,70 T 380,110" 
                fill="none" stroke="#38ef7d" strokeWidth="2.5" />
          <path d="M 20,160 Q 70,180 120,130 T 200,150 T 280,120 T 350,170 T 380,140" 
                fill="none" stroke="#ff9d00" strokeWidth="1.5" strokeDasharray="3 3" />
          {/* Agent Nodes */}
          <g transform="translate(140, 70)">
            <circle cx="0" cy="0" r="14" fill="#1f6feb" stroke="#58a6ff" strokeWidth="2" />
            <text x="0" y="4" fontFamily="monospace" fontSize="9" fill="#fff" textAnchor="middle">COORD</text>
          </g>
          <line x1="140" y1="84" x2="80" y2="135" stroke="#58a6ff" strokeWidth="1.5" />
          <line x1="140" y1="84" x2="200" y2="135" stroke="#58a6ff" strokeWidth="1.5" />
          <g transform="translate(80, 145)">
            <circle cx="0" cy="0" r="12" fill="#238636" stroke="#3fb950" strokeWidth="1.5" />
            <text x="0" y="3" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">W-1</text>
          </g>
          <g transform="translate(200, 145)">
            <circle cx="0" cy="0" r="12" fill="#8957e5" stroke="#a371f7" strokeWidth="1.5" />
            <text x="0" y="3" fontFamily="monospace" fontSize="8" fill="#fff" textAnchor="middle">W-2</text>
          </g>
          {/* Header */}
          <rect x="20" y="16" width="120" height="22" rx="3" fill="#161b22" stroke="#30363d" />
          <text x="30" y="31" fontFamily="monospace" fontSize="10" fill="#58a6ff">● AGENTS: ONLINE</text>
        </svg>
      );

    case 'procedural:synth-forge':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#1e1e24" />
          {/* Eurorack panels */}
          <rect x="15" y="15" width="115" height="210" fill="#2b2d42" stroke="#4a4e69" strokeWidth="2" rx="4" />
          <rect x="140" y="15" width="115" height="210" fill="#2b2d42" stroke="#4a4e69" strokeWidth="2" rx="4" />
          <rect x="265" y="15" width="120" height="210" fill="#2b2d42" stroke="#4a4e69" strokeWidth="2" rx="4" />
          {/* Knobs on rack 1 */}
          <circle cx="50" cy="60" r="16" fill="#111" stroke="#ff9d00" strokeWidth="3" />
          <line x1="50" y1="60" x2="60" y2="50" stroke="#ff9d00" strokeWidth="3" strokeLinecap="round" />
          <circle cx="95" cy="60" r="16" fill="#111" stroke="#ff9d00" strokeWidth="3" />
          <line x1="95" y1="60" x2="88" y2="48" stroke="#ff9d00" strokeWidth="3" strokeLinecap="round" />
          <circle cx="72" cy="110" r="20" fill="#111" stroke="#ff3366" strokeWidth="3" />
          {/* Oscilloscope screen on rack 2 */}
          <rect x="152" y="35" width="90" height="70" fill="#081c15" stroke="#2d6a4f" strokeWidth="2" rx="3" />
          <path d="M 155,70 Q 170,45 185,70 T 215,70 T 240,70" fill="none" stroke="#52b788" strokeWidth="2" />
          {/* Patch cables */}
          <path d="M 50,170 C 50,220 180,220 180,150" fill="none" stroke="#ff3838" strokeWidth="3.5" strokeLinecap="round" />
          <path d="M 95,170 C 95,240 310,230 310,160" fill="none" stroke="#ffb703" strokeWidth="3.5" strokeLinecap="round" />
          {/* Jacks */}
          <circle cx="50" cy="170" r="6" fill="#ffd166" stroke="#222" strokeWidth="2" />
          <circle cx="180" cy="150" r="6" fill="#ffd166" stroke="#222" strokeWidth="2" />
          <circle cx="310" cy="160" r="6" fill="#ffd166" stroke="#222" strokeWidth="2" />
        </svg>
      );

    case 'procedural:splat-paintings':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="vortex" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffee55" />
              <stop offset="40%" stopColor="#ff9900" />
              <stop offset="80%" stopColor="#0a225c" />
              <stop offset="100%" stopColor="#040b1e" />
            </radialGradient>
          </defs>
          <rect width="400" height="240" fill="url(#vortex)" />
          {/* Swirling strokes mimicking Starry Night / Gaussian splats */}
          <g opacity="0.8">
            <path d="M 40,80 Q 120,30 200,70 T 360,50" fill="none" stroke="#70d6ff" strokeWidth="12" strokeLinecap="round" opacity="0.6" strokeDasharray="14 10" />
            <path d="M 20,110 Q 100,60 180,100 T 340,90" fill="none" stroke="#ffd166" strokeWidth="10" strokeLinecap="round" opacity="0.7" strokeDasharray="16 12" />
            <path d="M 60,140 Q 140,90 220,130 T 380,110" fill="none" stroke="#06d6a0" strokeWidth="9" strokeLinecap="round" opacity="0.5" strokeDasharray="12 8" />
          </g>
          {/* Golden luminous crescent moon */}
          <circle cx="320" cy="65" r="28" fill="#ffee55" opacity="0.9" filter="drop-shadow(0 0 10px #ffbb00)" />
          <circle cx="310" cy="60" r="23" fill="#102554" />
          {/* Cypress silhouette in foreground */}
          <path d="M 80,240 C 70,180 85,120 100,70 C 108,120 120,170 125,240 Z" fill="#03191e" />
          <text x="16" y="222" fontFamily="monospace" fontSize="10" fill="#ffee55">GAUSSIAN SPLAT RADIANCE FIELD</text>
        </svg>
      );

    case 'procedural:cyber-diorama':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#080811" />
          {/* Isometric grid base */}
          <g transform="translate(200, 130)">
            {/* Ground tile */}
            <polygon points="0,-70 140,0 0,70 -140,0" fill="#151525" stroke="#ff007f" strokeWidth="1.5" />
            {/* Building 1 */}
            <polygon points="-60,-10 -10,15 -10,-75 -60,-100" fill="#2d2d44" stroke="#00f0ff" strokeWidth="1" />
            <polygon points="-10,15 40,-10 40,-100 -10,-75" fill="#1f1f33" stroke="#00f0ff" strokeWidth="1" />
            <polygon points="-60,-100 -10,-75 40,-100 -10,-125" fill="#3d3d5c" stroke="#00f0ff" strokeWidth="1" />
            {/* Neon sign */}
            <rect x="-45" y="-60" width="25" height="10" fill="#ff007f" opacity="0.9" />
            {/* Building 2 */}
            <polygon points="50,10 90,30 90,-40 50,-60" fill="#252538" stroke="#ff007f" strokeWidth="1" />
            <polygon points="90,30 130,10 130,-60 90,-40" fill="#181824" stroke="#ff007f" strokeWidth="1" />
          </g>
          <text x="20" y="30" fontFamily="monospace" fontSize="11" fill="#00f0ff">ISOMETRIC DIORAMA // WEBGL SHADERS</text>
        </svg>
      );

    case 'procedural:vector-drift':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#000000" />
          {/* Vector perspective grid */}
          <line x1="200" y1="90" x2="-20" y2="240" stroke="#00ff66" strokeWidth="1.5" />
          <line x1="200" y1="90" x2="60" y2="240" stroke="#00ff66" strokeWidth="1.5" />
          <line x1="200" y1="90" x2="140" y2="240" stroke="#00ff66" strokeWidth="1.5" />
          <line x1="200" y1="90" x2="260" y2="240" stroke="#00ff66" strokeWidth="1.5" />
          <line x1="200" y1="90" x2="340" y2="240" stroke="#00ff66" strokeWidth="1.5" />
          <line x1="200" y1="90" x2="420" y2="240" stroke="#00ff66" strokeWidth="1.5" />
          {/* Horizontal grid bands */}
          <line x1="120" y1="130" x2="280" y2="130" stroke="#00ff66" strokeWidth="1" />
          <line x1="80" y1="160" x2="320" y2="160" stroke="#00ff66" strokeWidth="1.2" />
          <line x1="30" y1="200" x2="370" y2="200" stroke="#00ff66" strokeWidth="1.5" />
          {/* Wireframe Vector Racer Car */}
          <g transform="translate(200, 175)">
            <polygon points="0,-25 35,5 30,18 -30,18 -35,5" fill="none" stroke="#00ffff" strokeWidth="2.5" />
            <line x1="-18" y1="-8" x2="18" y2="-8" stroke="#00ffff" strokeWidth="2" />
            <polygon points="-12,-20 12,-20 18,-8 -18,-8" fill="none" stroke="#ff00ff" strokeWidth="2" />
            {/* Wheels */}
            <rect x="-38" y="2" width="10" height="18" fill="none" stroke="#ffff00" strokeWidth="2" />
            <rect x="28" y="2" width="10" height="18" fill="none" stroke="#ffff00" strokeWidth="2" />
          </g>
          <text x="20" y="40" fontFamily="monospace" fontSize="13" fill="#00ffff" letterSpacing="2">VECTOR DRIFT // OSCILLOSCOPE BEAM</text>
        </svg>
      );

    case 'procedural:dungeon-byte':
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          {/* Monochrome LCD olive green background */}
          <rect width="400" height="240" fill="#8b956d" />
          {/* Subtle LCD pixel mesh */}
          <rect x="20" y="20" width="360" height="200" fill="none" stroke="#2d3319" strokeWidth="3" rx="4" />
          {/* 3 mini cards */}
          <g transform="translate(60, 50)">
            <rect width="70" height="110" rx="4" fill="#758256" stroke="#2d3319" strokeWidth="2.5" />
            {/* Sword icon */}
            <line x1="35" y1="25" x2="35" y2="65" stroke="#2d3319" strokeWidth="3" />
            <line x1="25" y1="55" x2="45" y2="55" stroke="#2d3319" strokeWidth="3" />
            <text x="35" y="95" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#2d3319" textAnchor="middle">+4 ATK</text>
          </g>
          <g transform="translate(165, 50)">
            <rect width="70" height="110" rx="4" fill="#758256" stroke="#2d3319" strokeWidth="2.5" />
            {/* Monster skull */}
            <circle cx="35" cy="45" r="14" fill="#2d3319" />
            <circle cx="30" cy="42" r="3" fill="#8b956d" />
            <circle cx="40" cy="42" r="3" fill="#8b956d" />
            <text x="35" y="95" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#2d3319" textAnchor="middle">LVL 3</text>
          </g>
          <g transform="translate(270, 50)">
            <rect width="70" height="110" rx="4" fill="#758256" stroke="#2d3319" strokeWidth="2.5" />
            {/* Potion vial */}
            <rect x="28" y="30" width="14" height="8" fill="#2d3319" />
            <circle cx="35" cy="55" r="16" fill="#2d3319" />
            <text x="35" y="95" fontFamily="monospace" fontSize="12" fontWeight="bold" fill="#2d3319" textAnchor="middle">+8 HP</text>
          </g>
          <text x="200" y="195" fontFamily="monospace" fontSize="11" fontWeight="bold" fill="#2d3319" textAnchor="middle">DUNGEON BYTE // FLOOR B-04</text>
        </svg>
      );

    default:
      // Generic high-tech retro vector placeholder
      return (
        <svg viewBox="0 0 400 240" className="w-full h-full select-none" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="240" fill="#12100d" />
          <rect x="10" y="10" width="380" height="220" fill="none" stroke="#ff9d00" strokeWidth="1.5" strokeDasharray="6 4" rx="4" />
          <circle cx="200" cy="110" r="40" fill="none" stroke="#ff7700" strokeWidth="2" />
          <path d="M 180,110 L 220,110 M 200,90 L 200,130" stroke="#ff9d00" strokeWidth="2" />
          <text x="200" y="180" fontFamily="monospace" fontSize="12" fill="#ffbe6b" textAnchor="middle">
            {alt.toUpperCase()}
          </text>
        </svg>
      );
  }
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatio = '16/9',
  fit = 'cover',
  priority = false,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // If this is a procedural vector preview, render the SVG generator
  if (src.startsWith('procedural:') || hasError) {
    return (
      <div className={`relative overflow-hidden w-full h-full flex items-center justify-center bg-black/40 ${className}`}>
        <ProceduralArtwork id={hasError ? 'default' : src} alt={alt} />
      </div>
    );
  }

  const aspectClass =
    aspectRatio === '16/9' ? 'aspect-video' :
    aspectRatio === '4/3' ? 'aspect-[4/3]' :
    aspectRatio === '1/1' ? 'aspect-square' : '';

  return (
    <div className={`relative overflow-hidden w-full ${aspectClass} ${className} bg-neutral-900/60`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-neutral-950/80 animate-pulse flex items-center justify-center">
          <span className="text-[10px] font-mono text-amber-500/60 uppercase tracking-widest">
            LOADING ASSET...
          </span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full transition-opacity duration-300 ${
          fit === 'cover' ? 'object-cover' : 'object-contain'
        } ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ imageRendering: 'auto' }}
      />
    </div>
  );
};
