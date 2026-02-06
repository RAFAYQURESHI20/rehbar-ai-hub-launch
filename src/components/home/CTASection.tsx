import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-12 relative overflow-hidden">
      {/* Transparent background to show animation */}
      <div className="absolute inset-0 bg-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      {/* Animated background orbs */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 rounded-full bg-blue-500/20 blur-2xl"
        animate={{
          scale: inView ? [1, 1.5, 1] : 1,
          x: inView ? [0, 20, 0] : 0,
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-56 h-56 rounded-full bg-cyan-500/20 blur-2xl"
        animate={{
          scale: inView ? [1, 1.3, 1] : 1,
          x: inView ? [0, -20, 0] : 0,
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30 mb-5"
            animate={{ opacity: inView ? 1 : 0 }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-blue-200 text-xs font-medium">
              Limited Seats Available
            </span>
          </motion.div>

          <motion.h2
            className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.1 }}
          >
            Ready to Start Your{" "}
            <motion.span
              className="text-white inline-block"
              animate={{
                textShadow: inView ? ["0 0 10px rgba(34, 211, 238, 0.3)", "0 0 20px rgba(34, 211, 238, 0.5)", "0 0 10px rgba(34, 211, 238, 0.3)"] : "none",
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Tech Journey?
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-slate-300 text-sm mb-6 max-w-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.2 }}
          >
            Join thousands of successful graduates and transform your career with 
            our industry-leading training programs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ delay: 0.3 }}
          >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button variant="hero" size="lg" asChild>
                <Link to="/enroll">
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.span>
                  Enroll Now
                </Link>
              </Button>
            </motion.div>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/courses">
                Browse Courses
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-6 mt-8 pt-6 border-t border-white/10"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{ delay: 0.6 }}
            >
              <motion.p
                className="font-display text-xl font-bold text-white"
                animate={{ scale: inView ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                10,000+
              </motion.p>
              <p className="text-slate-400 text-xs">Students</p>
            </motion.div>
            <motion.div
              className="w-px h-8 bg-white/20 hidden sm:block"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ delay: 0.7 }}
            />
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{ delay: 0.7 }}
            >
              <motion.p
                className="font-display text-xl font-bold text-white"
                animate={{ scale: inView ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                95%
              </motion.p>
              <p className="text-slate-400 text-xs">Job Placement</p>
            </motion.div>
            <motion.div
              className="w-px h-8 bg-white/20 hidden sm:block"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: inView ? 1 : 0 }}
              transition={{ delay: 0.8 }}
            />
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 10 }}
              transition={{ delay: 0.8 }}
            >
              <motion.p
                className="font-display text-xl font-bold text-white"
                animate={{ scale: inView ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                4.9/5
              </motion.p>
              <p className="text-slate-400 text-xs">Rating</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

