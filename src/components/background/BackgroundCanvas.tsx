import { useEffect, useRef, useCallback } from 'react';

/**
 * Particle class representing a node in the neural network
 */
class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseX: number;
  baseY: number;
  color: string;
  opacity: number;

  constructor(canvasWidth: number, canvasHeight: number) {
    this.x = Math.random() * canvasWidth;
    this.y = Math.random() * canvasHeight;
    this.baseX = this.x;
    this.baseY = this.y;
    // Slightly faster velocity for more noticeable motion
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.radius = Math.random() * 2 + 2;
    
    // Colors: electric blue and cyan with higher visibility and glow
    const colors = [
      'hsla(210, 100%, 65%,',  // Electric blue - brighter
      'hsla(190, 100%, 60%,',  // Cyan - brighter
      'hsla(215, 100%, 65%,',  // Light blue - brighter
      'hsla(200, 100%, 70%,',  // Sky blue
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    this.opacity = Math.random() * 0.3 + 0.7; // 0.7-1.0 for high visibility
  }

  update(canvasWidth: number, canvasHeight: number) {
    this.x += this.vx;
    this.y += this.vy;

    // Gentle oscillation for floating effect
    this.x += Math.sin(Date.now() * 0.001 + this.baseX) * 0.15;
    this.y += Math.cos(Date.now() * 0.0008 + this.baseY) * 0.1;

    // Wrap around edges smoothly
    if (this.x < -50) this.x = canvasWidth + 50;
    if (this.x > canvasWidth + 50) this.x = -50;
    if (this.y < -50) this.y = canvasHeight + 50;
    if (this.y > canvasHeight + 50) this.y = -50;
  }

  draw(ctx: CanvasRenderingContext2D) {
    // Glow effect
    const glowRadius = this.radius * 3;
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, glowRadius
    );
    gradient.addColorStop(0, `${this.color}${this.opacity * 0.6})`);
    gradient.addColorStop(1, `${this.color}0)`);
    
    ctx.beginPath();
    ctx.arc(this.x, this.y, glowRadius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // Main particle
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `${this.color}${this.opacity})`;
    ctx.fill();
  }
}

/**
 * BackgroundCanvas Component
 * 
 * Creates a canvas-based neural network particle animation with:
 * - Floating nodes (particles) that drift with noticeable motion
 * - Connecting lines between nearby nodes with higher visibility
 * - Subtle pulsing glow effects
 * - Blue/cyan color scheme matching the brand
 * - Enhanced visibility and depth
 */
interface BackgroundCanvasProps {
  particleCount?: number;
  connectionDistance?: number;
}

export function BackgroundCanvas({ 
  particleCount = 60,
  connectionDistance = 180 
}: BackgroundCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  const initParticles = useCallback((width: number, height: number) => {
    particlesRef.current = [];
    for (let i = 0; i < particleCount; i++) {
      particlesRef.current.push(new Particle(width, height));
    }
  }, [particleCount]);

  const drawConnections = useCallback((ctx: CanvasRenderingContext2D, particles: Particle[]) => {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          // Higher opacity for better visibility
          const opacity = (1 - distance / connectionDistance) * 0.5;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `hsla(210, 100%, 65%, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }
    }
  }, [connectionDistance]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      initParticles(width, height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const animate = () => {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext('2d');
      if (!canvas || !ctx) return;

      // Clear with transparency so particles show against dark page background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        particle.update(canvas.width, canvas.height);
        particle.draw(ctx);
      });

      // Draw connections
      drawConnections(ctx, particlesRef.current);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [initParticles, drawConnections]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  );
}

