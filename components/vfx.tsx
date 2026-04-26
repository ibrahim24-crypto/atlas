'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

/* ── Grain Overlay ── */
export function GrainOverlay() {
  return <div className="grain-overlay pointer-events-none fixed inset-0 z-[9999]" />;
}

/* ── Custom Gold Cursor ── */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (ringRef.current) {
        ringRef.current.style.left = `${e.clientX}px`;
        ringRef.current.style.top = `${e.clientY}px`;
      }
    };
    document.addEventListener('mousemove', move);
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}

/* ── 3D Parallax Tilt Container ── */
export function ParallaxTilt({
  children,
  intensity = 25,
  className = '',
}: {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (centerX - e.clientX) / intensity;
      const y = (centerY - e.clientY) / intensity;
      ref.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    },
    [intensity]
  );

  const handleReset = useCallback(() => {
    if (ref.current) ref.current.style.transform = 'rotateY(0) rotateX(0)';
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    return () => {
      document.removeEventListener('mousemove', handleMove);
      handleReset();
    };
  }, [handleMove, handleReset]);

  return (
    <div ref={ref} className={`parallax-tilt ${className}`} style={{ perspective: '1000px' }}>
      {children}
    </div>
  );
}

/* ── Fluid Shutter Transition ── */
export function FluidShutter({ active }: { active: boolean }) {
  return (
    <div
      className="fluid-shutter"
      style={{
        clipPath: active ? 'circle(150% at 50% 50%)' : 'circle(0% at 50% 50%)',
      }}
    />
  );
}

/* ── Dynamic Ambient Light ── */
export function AmbientLight({ color }: { color?: string }) {
  return (
    <div
      className="ambient-light"
      style={{
        background: color
          ? `radial-gradient(circle at 50% 50%, ${color} 0%, #000 100%)`
          : 'radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%)',
      }}
    />
  );
}

/* ── Collection Scrubber ── */
export function CollectionScrubber({
  items,
  activeIndex,
  onSelect,
}: {
  items: { label: string; color?: string }[];
  activeIndex: number;
  onSelect: (i: number) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const activeEl = scrollRef.current?.children[activeIndex] as HTMLElement;
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [activeIndex]);

  return (
    <div className="scrubber-label">THE ARCHIVE SELECTION</div>
  );
}

/* ── Scroll-driven clip-path reveal ── */
export function RevealSection({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal-container ${isVisible ? 'active' : ''} ${className}`}>
      {children}
    </div>
  );
}

/* ── Animated gold line separator ── */
export function SectionSeparator() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className={`section-separator ${isVisible ? 'active' : ''}`} />;
}

/* ── Letter-by-letter hero title ── */
export function AnimatedHeroTitle({
  title,
  className = '',
}: {
  title: string;
  className?: string;
}) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <h1 className={className}>
      {title.split('').map((letter, i) => (
        <span
          key={i}
          className={`hero-letter ${isActive ? 'active' : ''}`}
          style={{ transitionDelay: `${i * 0.08}s` }}
        >
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
}
