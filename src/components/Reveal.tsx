import React, { useEffect, useRef, useState } from 'react';

export type RevealVariant = 'fade-up' | 'fade-down' | 'scale' | 'slide-left' | 'slide-right' | 'image';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  variant?: RevealVariant;
  /**
   * If true, keeps re-triggering the animation whenever scrolling up and down into view.
   * Defaults to true as requested.
   */
  reTrigger?: boolean;
}

/**
 * Reveal Component with Bidirectional Scroll Tracking:
 * Dynamically detects scroll direction (scrolling down or scrolling up)
 * and animates elements and images into view in both directions.
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = '',
  variant = 'fade-up',
  reTrigger = true,
}) => {
  const ref = useRef<HTMLDivElement>(null);
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
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!reTrigger) {
            observer.disconnect();
          }
        } else if (reTrigger) {
          const rect = entry.boundingClientRect;
          if (rect.bottom < -100 || rect.top > window.innerHeight + 100) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold: 0.04,
        rootMargin: '60px 0px 60px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reTrigger]);

  const variantClass = `reveal-${variant}`;
  const directionClass = scrollDir === 'down' ? 'from-down' : 'from-up';

  return (
    <div
      ref={ref}
      className={`reveal ${variantClass} ${directionClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
};
