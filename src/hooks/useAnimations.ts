import { useRef, useEffect, useState, useCallback } from "react";

// Text reveal character-by-character animation helper
export const revealText = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.02,
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// Word reveal animation helper
export const revealWord = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

// Counter animation hook
export function useCounter(
  endValue: number,
  duration: number = 2000,
  startValue: number = 0,
  delay: number = 0
): number {
  const [count, setCount] = useState(startValue);
  const startTimeRef = useRef<number | null>(null);
  const animationRef = useRef<number | null>(null);

  const animate = useCallback((timestamp: number) => {
    if (startTimeRef.current === null) {
      startTimeRef.current = timestamp;
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    
    // Easing function for smooth counting
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const currentCount = Math.floor(startValue + (endValue - startValue) * easeOutQuart);
    
    setCount(currentCount);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [endValue, duration, startValue]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, delay]);

  return count;
}

// Magnetic button effect hook
export function useMagnetic(
  ref: React.RefObject<HTMLElement>,
  strength: number = 20
) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isHovered) return;

      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;

      setPosition({
        x: x * strength,
        y: y * strength,
      });
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);
    element.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
      element.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [ref, isHovered, strength]);

  return position;
}

// Scroll progress hook
export function useScrollProgress(ref: React.RefObject<HTMLElement>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementHeight = rect.height;
      const elementTop = rect.top;

      // Calculate progress based on element visibility
      const start = -elementHeight;
      const end = windowHeight;
      const current = elementTop;

      const rawProgress = (current - start) / (end - start);
      const clampedProgress = Math.max(0, Math.min(1, rawProgress));
      
      setProgress(clampedProgress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}

// Intersection observer hook for in-view animations
export function useInView(
  ref: React.RefObject<HTMLElement>,
  options: { once?: boolean; threshold?: number | number[] } = {}
): boolean {
  const [inView, setInView] = useState(false);
  const { once = false } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (once && entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      } else {
        setInView(entry.isIntersecting);
      }
    }, {
      threshold: options.threshold || 0.1,
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, [ref, once, options.threshold]);

  return inView;
}

// Parallax scroll hook
export function useParallax(
  ref: React.RefObject<HTMLElement>,
  speed: number = 0.5
) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const elementTop = element.offsetTop;
      const offsetValue = (scrolled - elementTop) * speed;
      setOffset(offsetValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref, speed]);

  return offset;
}

// Mouse parallax hook for cards
export function useMouseParallax(ref: React.RefObject<HTMLElement>) {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const x = (e.clientX - centerX) / rect.width;
      const y = (e.clientY - centerY) / rect.height;

      setParallax({
        x: x * 10,
        y: y * 10,
      });
    };

    const handleMouseLeave = () => {
      setParallax({ x: 0, y: 0 });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref]);

  return parallax;
}

// Framer Motion variants for common animations
export const variants = {
  // Fade up with stagger
  fadeUpStagger: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  // Fade up single
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  // Scale in
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  // Text reveal
  textReveal: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  // Card hover effect
  cardHover: {
    scale: 1.02,
    y: -5,
    transition: {
      duration: 0.3,
      ease: [0.34, 1.56, 0.64, 1],
    },
  },

  // Button press
  buttonPress: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },

  // Page transition
  pageIn: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },
};

