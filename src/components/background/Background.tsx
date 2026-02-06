import { useState, useEffect } from 'react';
import { BackgroundCanvas } from './BackgroundCanvas';
import { FloatingElements } from './FloatingElements';

/**
 * Main Background component that combines Canvas-based particle network
 * with floating tech symbols for a complete AI/Tech Training Hub experience.
 * 
 * Features:
 * - Neural network-style particle connections
 * - Floating code symbols and AI-related shapes
 * - Respects prefers-reduced-motion accessibility setting
 * - Fully responsive and performance-optimized
 * - Animation positioned from header-bottom to footer-top with fade-off
 */
export function Background() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // If reduced motion is preferred, show a subtle static version
  if (reducedMotion) {
    return (
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, #000000 0%, transparent 50%),
              radial-gradient(circle at 80% 50%, #000000 0%, transparent 50%)
            `
          }}
        />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Canvas-based particle network */}
      <BackgroundCanvas />
      
      {/* Floating tech symbols overlay */}
      <FloatingElements />
      
      {/* Subtle gradient overlay for depth and fade-off at bottom */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          background: `
            radial-gradient(ellipse at 20% 20%, #000000 0%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, #000000 0%, transparent 50%),
            radial-gradient(ellipse at 50% 50%, #000000 0%, transparent 100%)
          `,
          // Gradient mask to fade animation toward footer
          maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
        }}
      />
    </div>
  );
}

