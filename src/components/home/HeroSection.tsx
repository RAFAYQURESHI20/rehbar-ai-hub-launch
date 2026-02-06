import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Users, BookOpen, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCounter, useInView } from "@/hooks/useAnimations";

const stats = [
  { icon: Users, value: "10,000+", label: "Students Trained" },
  { icon: BookOpen, value: "50+", label: "Expert Courses" },
  { icon: Award, value: "95%", label: "Success Rate" },
];

// Animated Counter Component
function AnimatedCounter({ value, duration = 2000 }: { value: string; duration?: number }) {
  const isPercentage = value.includes("%");
  const isPlus = value.includes("+");
  const numberValue = parseInt(value.replace(/[^0-9]/g, ""));
  
  const count = useCounter(numberValue, duration);
  
  return (
    <span>
      {count}
      {isPercentage ? "%" : ""}
      {isPlus ? "+" : ""}
    </span>
  );
}

// Text Reveal Component
function TextReveal({ 
  children, 
  delay = 0,
  className = "" 
}: { 
  children: React.ReactNode; 
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ 
        duration: 0.6, 
        delay, 
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
    >
      {children}
    </motion.div>
  );
}

// Magnetic Card Component
function MagneticCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) / rect.width);
    y.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: xSpring, y: ySpring }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Black background for better text visibility */}
      <div className="absolute inset-0 bg-black" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated Spotlight */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute top-32 right-20 hidden lg:block z-10"
      >
        <MagneticCard className="bg-slate-800/80 backdrop-blur-xl p-4 rounded-2xl animate-float cursor-default border border-white/10">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
            <div>
              <p className="text-white font-semibold text-sm">AI Powered</p>
              <p className="text-slate-400 text-xs">Learning Experience</p>
            </div>
          </div>
        </MagneticCard>
      </motion.div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge with stagger */}
          <TextReveal delay={0} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-cyan-500/20 backdrop-blur-sm border border-blue-500/30 mb-6">
            <motion.span
              className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.8, 1, 0.8],
                boxShadow: [
                  "0 0 8px rgba(34, 211, 238, 0.6)",
                  "0 0 12px rgba(34, 211, 238, 0.8)",
                  "0 0 8px rgba(34, 211, 238, 0.6)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-blue-200 text-sm font-medium">
              Admissions Open for 2025 Batch
            </span>
          </TextReveal>

          {/* Heading with word reveal */}
          <TextReveal delay={0.1} className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 leading-tight">
            Master the Future with{" "}
            <motion.span
              className="text-white inline-block"
              animate={{
                textShadow: ["0 0 10px rgba(34, 211, 238, 0.3)", "0 0 20px rgba(34, 211, 238, 0.5)", "0 0 10px rgba(34, 211, 238, 0.3)"],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              AI & Tech
            </motion.span>{" "}
            Training
          </TextReveal>

          {/* Description */}
          <TextReveal delay={0.2} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Transform your career with industry-leading courses in AI, Data Science, 
            Web Development, and more. Learn from experts and build real-world projects.
          </TextReveal>

          {/* CTA Buttons */}
          <TextReveal delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/enroll">
                  Explore Courses
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
            <Button variant="hero" size="xl" asChild className="group">
              <Link to="/courses">
                <motion.span
                  className="relative"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="w-5 h-5" />
                </motion.span>
                Watch Introduction
              </Link>
            </Button>
          </TextReveal>

          {/* Stats with animated counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/60 backdrop-blur-xl p-5 rounded-xl text-center cursor-default border border-white/10"
              >
                <motion.div
                  className="flex justify-center mb-2"
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <stat.icon className="w-7 h-7 text-cyan-400" />
                </motion.div>
                <p className="font-display text-2xl md:text-3xl font-bold text-white">
                  <AnimatedCounter value={stat.value} />
                </p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient - Less space */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      />
    </section>
  );
}

