import React, { useEffect, useRef, useState } from 'react';

interface ImageRevealProps {
  src: string;
  alt: string;
  caption?: string;
  badge?: string;
  className?: string;
  aspectRatio?: string; // default aspect-[16/10]
  overlayGradient?: boolean;
  priority?: boolean;
}

/**
 * ImageReveal Component:
 * Cinematic scroll-driven image container that animates in both when scrolling
 * down and scrolling up. Features subtle scale zoom, gold sheen beam, and executive framing.
 */
export const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt,
  caption,
  badge,
  className = '',
  aspectRatio = 'aspect-[16/10]',
  overlayGradient = true,
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDir, setScrollDir] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setScrollDir('down');
      } else if (currentScrollY < lastScrollY.current) {
        setScrollDir('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Re-triggers on scroll back up / down
          setIsVisible(false);
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-900 shadow-md transition-all duration-700 image-reveal-container ${
        isVisible ? 'is-visible' : ''
      } ${scrollDir === 'down' ? 'from-down' : 'from-up'} ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${aspectRatio}`}>
        {/* Main Image */}
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          className="h-full w-full object-cover object-center transition-all duration-1000 ease-out group-hover:scale-105 image-reveal-img"
        />

        {/* Ambient Dark Gradient Vignette for Readability */}
        {overlayGradient && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#050B14]/85 via-[#050B14]/30 to-transparent pointer-events-none" />
        )}

        {/* Dynamic Sweeping Light Beam when Visible */}
        <div className="image-reveal-shine pointer-events-none" />

        {/* Optional Badge */}
        {badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050B14]/80 backdrop-blur-md border border-[#C5A869]/40 text-[10px] uppercase tracking-widest font-mono font-semibold text-[#E9D6A4]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A869] animate-pulse" />
              {badge}
            </span>
          </div>
        )}

        {/* Optional Caption at bottom */}
        {caption && (
          <div className="absolute inset-x-0 bottom-0 p-4 z-10 flex items-center justify-between text-xs text-white">
            <span className="font-medium text-slate-200 drop-shadow-sm font-sans">{caption}</span>
            <span className="text-[#C5A869] text-[10px] tracking-wider uppercase font-mono">MACK · 2026</span>
          </div>
        )}
      </div>
    </div>
  );
};
