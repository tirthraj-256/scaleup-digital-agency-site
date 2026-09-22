import React from 'react';
import scaleupLogoAsset from '../assets/images/scaleup_logo_dark_1789982280052.jpg';
import { AGENCY_INFO } from '../data/agencyData';

export interface ScaleupLogoProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
  showText?: boolean;
  textClassName?: string;
  subtextClassName?: string;
  interactive?: boolean;
}

const sizeClasses = {
  xs: 'w-7 h-7',
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
  '2xl': 'w-24 h-24',
};

export const ScaleupLogo: React.FC<ScaleupLogoProps> = ({
  size = 'md',
  className = '',
  showText = false,
  textClassName = '',
  subtextClassName = '',
  interactive = true,
}) => {
  const dimensionClass = sizeClasses[size] || sizeClasses.md;

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Emblem Badge */}
      <div
        className={`relative shrink-0 rounded-full overflow-hidden p-0.5 bg-gradient-to-br from-[#84CC16] via-[#22C55E] to-[#15803D] shadow-lg shadow-[#22C55E]/25 ring-1 ring-[#86EFAC]/30 ${dimensionClass} ${
          interactive ? 'group-hover:scale-105 group-hover:shadow-[#84CC16]/40 group-hover:ring-[#84CC16]/60 transition-all duration-300' : ''
        }`}
      >
        <img
          src={scaleupLogoAsset}
          alt="Scaleup Digital Marketing Agency Logo"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-full bg-[#071912]"
          onError={(e) => {
            // Fallback to static public path if asset bundle loader fails
            const target = e.currentTarget;
            if (target.src !== window.location.origin + '/scaleup-logo.jpg') {
              target.src = '/scaleup-logo.jpg';
            }
          }}
        />
        {/* Subtle radial sheen */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
      </div>

      {/* Optional Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center text-left">
          <span
            className={`text-xl font-extrabold tracking-tight text-white leading-tight transition-colors ${textClassName}`}
          >
            {AGENCY_INFO.shortName}
          </span>
          <span
            className={`text-[10px] tracking-wider uppercase font-semibold text-[#86EFAC]/90 ${subtextClassName}`}
          >
            Digital Marketing Agency
          </span>
        </div>
      )}
    </div>
  );
};
