import React from 'react';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  showDescriptor?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  showDescriptor = false,
  className = '',
  size = 'md',
}) => {
  const isDark = variant === 'dark';
  const textColor = isDark ? 'text-[#0B1728]' : 'text-white';
  const subTextColor = isDark ? 'text-slate-500' : 'text-slate-300';
  const goldColor = '#C5A869';

  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2.5">
        {/* Emblem */}
        <div className="emblem-gold w-9 h-9 rounded-lg flex items-center justify-center shrink-0">
          <svg viewBox="0 0 32 32" fill="none" className="relative w-5 h-5">
            <defs>
              <linearGradient id="mack-gold" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#F4E4BC" />
                <stop offset="55%" stopColor={goldColor} />
                <stop offset="100%" stopColor="#9C7F43" />
              </linearGradient>
            </defs>
            {/* Geometric M with subtle gold pillar */}
            <path
              d="M6 24V8L16 17L26 8V24"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 17V24"
              stroke="url(#mack-gold)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Wordmark */}
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1.5">
            <span className={`text-xl font-bold tracking-[0.12em] font-serif ${textColor}`}>
              MACK
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-[#C5A869] uppercase font-sans">
              Estratégias & Negócios
            </span>
          </div>
          {showDescriptor && (
            <span className={`text-[9px] tracking-wider uppercase mt-1 ${subTextColor}`}>
              Originação <span className="text-[#C5A869]">•</span> Crédito <span className="text-[#C5A869]">•</span> Soluções Corporativas
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
