
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Users2, 
  Briefcase, 
  Trophy, 
  Clock, 
  Headphones,
  CheckCircle2
} from "lucide-react";

// Simple useInView hook
function useInView(ref: React.RefObject<HTMLElement>, once = true) {
  const [inView, setInView] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, once]);
  
  return inView;
}

// Animated Counter Component
function AnimatedCounter({ 
  value, 
  suffix = "",
  duration = 2000 
}: { 
  value: string; 
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (!inView) return;

    const numValue = parseInt(value.replace(/[^0-9]/g, ""));
    const startTime = performance.now();
    const startValue = 0;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(startValue + (numValue - startValue) * easeOutQuart);
      
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

const features = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience.",
  },
  {
    icon: Users2,
    title: "Small Batch Sizes",
    description: "Personalized attention with limited students per batch.",
  },
  {
    icon: Briefcase,
    title: "Career Support",
    description: "Job placement assistance, resume building, and interview prep.",
  },
  {
    icon: Trophy,
    title: "Industry Certifications",
    description: "Earn recognized certificates for your professional profile.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Weekday, weekend, or self-paced learning options.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help whenever you need it from our support team.",
  },
];

const achievements = [
  "95% Job Placement Rate",
  "50+ Industry Partners",
  "10,000+ Graduates",
  "4.8/5 Student Rating",
];

export function WhyChooseUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-12 bg-slate-900 relative overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 grid-pattern opacity-5" />
      
      <motion.div
        className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-3xl"
        animate={{
          scale: inView ? [1, 1.2, 1] : 1,
          x: inView ? [0, 30, 0] : 0,
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -30 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-3"
              animate={{ opacity: inView ? 1 : 0 }}
            >
              Why Choose Us
            </motion.span>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Your Success is Our <span className="text-white">Priority</span>
            </h2>
            <p className="text-slate-300 text-base mb-6">
              At Rehbar AI Training Hub, we're committed to providing world-class 
              education that transforms careers. Our comprehensive approach ensures 
              you're job-ready from day one.
            </p>

            {/* Achievement Pills */}
            <div className="flex flex-wrap gap-2 mb-6">
              {achievements.map((achievement, index) => (
                <motion.span
                  key={achievement}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 text-slate-200 text-xs border border-white/10"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  {achievement}
                </motion.span>
              ))}
            </div>

            {/* Stats Row with Animated Counters */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="text-center bg-white/5 rounded-xl p-3 border border-white/10"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-white mb-0.5">
                  <AnimatedCounter value="5+" duration={1500} />
                </p>
                <p className="text-slate-400 text-xs">Years Experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="text-center bg-white/5 rounded-xl p-3 border border-white/10"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-white mb-0.5">
                  <AnimatedCounter value="50+" duration={1500} />
                </p>
                <p className="text-slate-400 text-xs">Expert Trainers</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-center bg-white/5 rounded-xl p-3 border border-white/10"
              >
                <p className="font-display text-2xl md:text-3xl font-bold text-white mb-0.5">
                  <AnimatedCounter value="100+" duration={1500} />
                </p>
                <p className="text-slate-400 text-xs">Projects Built</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                className="group p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
              >
                <motion.div
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-2.5"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="font-display font-semibold text-white text-sm mb-1">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

