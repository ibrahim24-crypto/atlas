'use client';

import { useEffect, useState, createContext, useContext, useCallback } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface TransitionContextType {
  navigate: (href: string) => void;
}

const TransitionContext = createContext<TransitionContextType>({ navigate: () => {} });

export const useTransitionNavigation = () => useContext(TransitionContext);

// Navigation order for determining direction
const navOrder = ['/', '/collections', '/journal', '/atelier', '/heritage'];

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');

  const navigate = useCallback((href: string) => {
    const currentIndex = navOrder.indexOf(pathname);
    const targetIndex = navOrder.indexOf(href);
    
    // Determine slide direction based on navigation order
    const direction = targetIndex > currentIndex ? 'right' : 'left';
    setSlideDirection(direction);
    setIsTransitioning(true);

    // Wait for exit animation, then navigate
    setTimeout(() => {
      router.push(href);
    }, 400);
  }, [pathname, router]);

  // Reset transition state when page loads
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [pathname, isTransitioning]);

  return (
    <TransitionContext.Provider value={{ navigate }}>
      {/* Page Transition Overlay */}
      {isTransitioning && (
        <div
          className="page-transition-overlay"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: '#0a0a0a',
            pointerEvents: 'none',
            animation: slideDirection === 'right'
              ? 'slideOutRight 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards'
              : 'slideOutLeft 0.4s cubic-bezier(0.77, 0, 0.175, 1) forwards',
          }}
        />
      )}
      
      {/* Page Content with Enter Animation */}
      <div
        key={pathname}
        style={{
          animation: isTransitioning
            ? slideDirection === 'right'
              ? 'slideInFromRight 0.8s cubic-bezier(0.77, 0, 0.175, 1)'
              : 'slideInFromLeft 0.8s cubic-bezier(0.77, 0, 0.175, 1)'
            : 'none',
        }}
      >
        {children}
      </div>
    </TransitionContext.Provider>
  );
}
