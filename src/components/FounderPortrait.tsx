import React from 'react';

interface FounderPortraitProps {
  className?: string;
  showPlaque?: boolean;
}

// Founder photo with rotating gold frame, vignette and engraved name plaque.
export const FounderPortrait: React.FC<FounderPortraitProps> = ({
  className = '',
  showPlaque = true,
}) => {
  return (
    <div className={`relative ${className}`}>
      {/* Ambient gold halo */}
      <div className="absolute -inset-10 bg-[radial-gradient(closest-side,rgba(197,168,105,0.28),transparent)] blur-2xl pointer-events-none" />

      {/* Offset outline for depth */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] border border-[#C5A869]/25 pointer-events-none" />

      <div className="portrait-frame shadow-[0_40px_80px_-30px_rgba(0,0,0,0.9)]">
        <div className="relative rounded-[1.65rem] overflow-hidden bg-black aspect-[4/5]">
          <picture>
            <source srcSet="/assets/team/marcos-aguiar.webp" type="image/webp" />
            <img
              src="/assets/team/marcos-aguiar.jpg"
              alt="Marcos Aguiar, fundador e diretor da MACK Estratégias e Negócios"
              className="w-full h-full object-cover object-top scale-[1.02] transition-transform duration-[1.6s] ease-out hover:scale-[1.06]"
              loading="eager"
              decoding="async"
            />
          </picture>

          {/* Cinematic vignette and bottom fade */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,transparent_45%,rgba(0,0,0,0.55))] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#050B14] via-[#050B14]/70 to-transparent pointer-events-none" />

          {/* Corner marks */}
          <span className="absolute top-4 left-4 w-6 h-6 border-t border-l border-[#C5A869]/70" />
          <span className="absolute top-4 right-4 w-6 h-6 border-t border-r border-[#C5A869]/70" />

          {showPlaque && (
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
              <div className="gold-hairline mb-4" />
              <div className="font-serif text-2xl sm:text-3xl text-white leading-none">
                Marcos Aguiar
              </div>
              <div className="mt-2 text-[10px] uppercase tracking-[0.22em] text-[#C5A869] font-semibold leading-relaxed">
                Fundador & Diretor · Advogado · Eng. Florestal
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
