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
  // Responsive image dimensions based on size prop
  // sm: Header / Navbar
  // md: Footer / Cards
  // lg: Hero / Standalone displays
  const sizeClasses = {
    sm: 'h-9 sm:h-10 md:h-11 w-auto max-w-[210px] sm:max-w-[240px]',
    md: 'h-11 sm:h-13 md:h-14 w-auto max-w-[260px] sm:max-w-[300px]',
    lg: 'h-16 sm:h-20 w-auto max-w-[360px]',
  }[size];

  const subTextColor = variant === 'dark' ? 'text-slate-600' : 'text-slate-300';

  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-center">
        <img
          src="/assets/brand-logo.jpeg"
          onError={(e) => {
            // Fallback to the uploaded file path if needed
            const target = e.currentTarget;
            if (target.src.indexOf('WhatsApp_Image') === -1) {
              target.src = '/assets/aistudio/WhatsApp_Image_2026-10-27_at_09.57.32_fba1ea16.jpeg';
            }
          }}
          alt="MACK Estratégias e Negócios"
          className={`${sizeClasses} object-contain object-left transition-transform duration-300 group-hover:scale-[1.02]`}
          loading="eager"
        />
      </div>

      {showDescriptor && (
        <span className={`text-[10px] sm:text-[11px] font-medium tracking-wider uppercase mt-2 ${subTextColor}`}>
          Originação <span className="text-[#C5A869]">•</span> Crédito <span className="text-[#C5A869]">•</span> Soluções Corporativas
        </span>
      )}
    </div>
  );
};
