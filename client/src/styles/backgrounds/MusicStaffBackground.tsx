import React from 'react';
import { useReducedMotion } from '../../hooks/useDarkMode';

const MusicStaffBackground = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02] dark:opacity-[0.03]">
      <svg
        className="w-full h-full"
        viewBox="0 0 800 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="staff-lines"
            x="0"
            y="0"
            width="800"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            {/* Staff lines */}
            <g stroke="currentColor" strokeWidth="0.5" opacity="0.6">
              <line x1="0" y1="10" x2="800" y2="10" />
              <line x1="0" y1="20" x2="800" y2="20" />
              <line x1="0" y1="30" x2="800" y2="30" />
              <line x1="0" y1="40" x2="800" y2="40" />
              <line x1="0" y1="50" x2="800" y2="50" />
            </g>
          </pattern>
          
          {/* Animated waveform pattern */}
          <pattern
            id="waveform"
            x="0"
            y="0"
            width="100"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0,20 Q10,10 20,20 T40,20 Q50,30 60,20 T80,20 Q90,10 100,20"
              stroke="currentColor"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            >
              {!prefersReducedMotion && (
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  values="0,0; 20,0; 0,0"
                  dur="8s"
                  repeatCount="indefinite"
                />
              )}
            </path>
          </pattern>
        </defs>

        {/* Staff background */}
        <rect width="100%" height="100%" fill="url(#staff-lines)" />
        
        {/* Waveform overlay */}
        <rect 
          width="100%" 
          height="100%" 
          fill="url(#waveform)" 
          opacity="0.4"
        />

        {/* Musical notes scattered throughout */}
        <g stroke="currentColor" fill="currentColor" opacity="0.15">
          {/* Treble clef */}
          <g transform="translate(100, 100)">
            <path d="M2,14 C2,8 6,4 12,4 C16,4 20,6 20,10 C20,14 16,16 12,16 C8,16 4,14 4,10 M12,8 C14,8 16,10 16,12 C16,14 14,16 12,16" strokeWidth="0.5" />
          </g>
          
          {/* Quarter notes */}
          <circle cx="300" cy="180" r="2" />
          <line x1="304" y1="180" x2="304" y2="160" strokeWidth="0.5" />
          
          <circle cx="500" cy="220" r="2" />
          <line x1="504" y1="220" x2="504" y2="200" strokeWidth="0.5" />
          
          <circle cx="700" cy="160" r="2" />
          <line x1="704" y1="160" x2="704" y2="140" strokeWidth="0.5" />

          {/* Eighth notes */}
          <g transform="translate(150, 320)">
            <circle cx="0" cy="0" r="2" fill="currentColor" />
            <line x1="4" y1="0" x2="4" y2="-20" strokeWidth="0.5" />
            <circle cx="15" cy="-5" r="2" fill="currentColor" />
            <line x1="19" y1="-5" x2="19" y2="-25" strokeWidth="0.5" />
            <path d="M4,-20 Q15,-15 19,-25" strokeWidth="0.5" fill="none" />
          </g>

          {/* More scattered notes */}
          <circle cx="600" cy="400" r="2" />
          <line x1="604" y1="400" x2="604" y2="380" strokeWidth="0.5" />
          
          <circle cx="250" cy="450" r="2" />
          <line x1="254" y1="450" x2="254" y2="430" strokeWidth="0.5" />
        </g>
      </svg>
    </div>
  );
};

export default MusicStaffBackground;