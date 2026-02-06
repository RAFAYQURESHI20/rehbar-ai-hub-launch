import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

/**
 * Tech symbol shapes that float in the background
 */
const techSymbols = [
  '{}',
  '</>',
  '[]',
  '#',
  '</',
  '/>',
  '=>',
  '&&',
  '||',
  '!=',
  '==',
  '++',
  '--',
  '**',
  '//',
  '/*',
  '*/',
  ':::',
  '::',
  'AI',
  'ML',
  'API',
  'CPU',
  'GPU',
  'IoT',
  'UX',
  'UI',
  'SaaS',
  'PaaS',
  'IaaS',
  'Dev',
  'Ops',
  'Sec',
  'Net',
  'Sys',
  'Data',
  'Cloud',
  'Stack',
  'Code',
  'Git',
  'SQL',
  'NoSQL',
  'REST',
  'JSON',
  'XML',
  'HTML',
  'CSS',
  'JS',
  'TS',
  'Py',
  'Go',
  'Rust',
  'C++',
  '>>',
  '<<',
  '?:',
  '{}',
  '</>',
  '=>',
];

/**
 * FloatingElement component representing a single floating tech symbol
 */
interface FloatingElementProps {
  symbol: string;
  initialX: number;
  initialY: number;
  size: number;
  duration: number;
  delay: number;
  isMobile: boolean;
}

function FloatingElement({
  symbol,
  initialX,
  initialY,
  size,
  duration,
  delay,
  isMobile
}: FloatingElementProps) {
  // Constrain floating range based on screen size to prevent overflow
  const rangeMultiplier = isMobile ? 0.6 : 1;
  const moveX = Math.random() * 20 * rangeMultiplier;
  const moveY = Math.random() * 30 * rangeMultiplier;

  return (
    <motion.div
      className="absolute select-none pointer-events-none"
      style={{
        left: `${initialX}%`,
        top: `${initialY}%`,
        fontSize: `${size}px`,
        fontFamily: 'monospace',
        color: 'hsl(210, 100%, 60%)',
        opacity: 0.5,
        fontWeight: 300,
        whiteSpace: 'nowrap',
      }}
      initial={{
        x: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        x: [0, moveX, moveX * 0.7, 0],
        y: [0, moveY, moveY * 0.8, 0],
        opacity: [0, 0.5, 0.4, 0.5],
        rotate: [0, Math.random() * 4 - 2, Math.random() * 3 - 1.5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: [0.25, 0.1, 0.25, 1],
        times: [0, 0.3, 0.7, 1],
      }}
    >
      {symbol}
    </motion.div>
  );
}

/**
 * Geometric shape components
 */
function GeometricShapes({ isMobile }: { isMobile: boolean }) {
  // Scale down shapes on mobile
  const scale = isMobile ? 0.5 : 1;
  const padding = isMobile ? 8 : 0; // Add padding to keep shapes away from edges on mobile

  const shapes = [
    { type: 'circle', initialX: 10, initialY: 20, size: 60, duration: 25, delay: 0 },
    { type: 'circle', initialX: 85, initialY: 15, size: 40, duration: 30, delay: 2 },
    { type: 'circle', initialX: 70, initialY: 80, size: 80, duration: 35, delay: 4 },
    { type: 'rect', initialX: 15, initialY: 70, size: 50, duration: 28, delay: 1 },
    { type: 'rect', initialX: 90, initialY: 60, size: 35, duration: 32, delay: 3 },
    { type: 'diamond', initialX: 50, initialY: 10, size: 45, duration: 27, delay: 5 },
    { type: 'hexagon', initialX: 25, initialY: 40, size: 55, duration: 33, delay: 6 },
    { type: 'circle', initialX: 75, initialY: 45, size: 30, duration: 29, delay: 7 },
    { type: 'rect', initialX: 5, initialY: 50, size: 45, duration: 31, delay: 8 },
    { type: 'circle', initialX: 45, initialY: 85, size: 65, duration: 34, delay: 9 },
    { type: 'diamond', initialX: 60, initialY: 25, size: 40, duration: 26, delay: 10 },
    { type: 'hexagon', initialX: 30, initialY: 75, size: 50, duration: 32, delay: 11 },
  ];

  const renderShape = (type: string, size: number) => {
    const scaledSize = size * scale;
    const baseStyle: React.CSSProperties = {
      width: scaledSize,
      height: scaledSize,
      border: '1px solid hsl(210, 100%, 60%)',
      opacity: 0.35,
      position: 'absolute',
    };

    switch (type) {
      case 'circle':
        return <motion.div style={{ ...baseStyle, borderRadius: '50%' }} />;
      case 'rect':
        return <motion.div style={{ ...baseStyle, borderRadius: 4 }} />;
      case 'diamond':
        return (
          <motion.div
            style={{
              ...baseStyle,
              transform: 'rotate(45deg)',
              borderRadius: 4,
            }}
          />
        );
      case 'hexagon':
        return (
          <motion.div
            style={{
              width: scaledSize,
              height: scaledSize * 0.866,
              position: 'absolute',
              border: '1px solid hsl(210, 100%, 50%)',
              opacity: 0.12,
              borderRadius: 4,
              transform: 'rotate(30deg)',
            }}
          />
        );
      default:
        return <motion.div style={baseStyle} />;
    }
  };

  // Constrain movement on mobile to prevent overflow
  const rangeMultiplier = isMobile ? 0.6 : 1;

  return (
    <>
      {shapes.map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          className="absolute"
          style={{
            left: `${shape.initialX}%`,
            top: `${shape.initialY}%`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            x: [0, Math.random() * 30 * rangeMultiplier, Math.random() * 25 * rangeMultiplier, 0],
            y: [0, Math.random() * 35 * rangeMultiplier, Math.random() * 30 * rangeMultiplier, 0],
            opacity: [0, 0.35, 0.28, 0.35],
            rotate: [0, Math.random() * 5 - 2.5, Math.random() * 4 - 2, 0],
            scale: [1, 1.03, 0.97, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: [0.25, 0.1, 0.25, 1],
            times: [0, 0.3, 0.7, 1],
          }}
        >
          {renderShape(shape.type, shape.size)}
        </motion.div>
      ))}
    </>
  );
}

/**
 * FloatingElements Component
 *
 * Uses Framer Motion to create floating tech symbols and geometric shapes
 * that drift slowly across the background. These elements:
 * - Move with noticeable but still calm animations
 * - Have higher opacity for better visibility
 * - Use tech-related symbols to reinforce the AI/Training theme
 * - Include geometric shapes for visual variety
 * - Enhanced density and richness
 * - Responsive sizing and constrained movement for all screen sizes
 */
export function FloatingElements() {
  const [isMobile, setIsMobile] = useState(false);
  const [symbolCount, setSymbolCount] = useState(25);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      // Reduce symbol count on smaller screens
      setSymbolCount(width < 640 ? 15 : width < 1024 ? 20 : 25);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate random floating symbols
  const generateSymbols = (count: number) => {
    const symbols: ReactNode[] = [];
    const usedIndices = new Set<number>();

    for (let i = 0; i < count; i++) {
      let symbolIndex: number;
      do {
        symbolIndex = Math.floor(Math.random() * techSymbols.length);
      } while (usedIndices.has(symbolIndex) && usedIndices.size < techSymbols.length);

      usedIndices.add(symbolIndex);

      // Scale font size based on screen
      const baseSize = isMobile ? 10 : 12;
      const sizeRange = isMobile ? 8 : 16;

      symbols.push(
        <FloatingElement
          key={`symbol-${i}`}
          symbol={techSymbols[symbolIndex]}
          initialX={Math.random() * 100}
          initialY={Math.random() * 100}
          size={Math.random() * sizeRange + baseSize}
          duration={Math.random() * 25 + 35}
          delay={Math.random() * 5}
          isMobile={isMobile}
        />
      );
    }

    return symbols;
  };

  const symbols = generateSymbols(symbolCount);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Safe area padding container */}
      <div className="absolute inset-0 p-4 sm:p-8 lg:p-12">
        {/* Tech symbols */}
        {symbols}

        {/* Geometric shapes */}
        <GeometricShapes isMobile={isMobile} />
      </div>
    </div>
  );
}

