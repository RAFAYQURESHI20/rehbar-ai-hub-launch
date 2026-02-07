import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Users, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { courses } from "@/data/courses";

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

// 3D Tilt Card Component
function TiltCard({ 
  children, 
  className = "",
  tiltStrength = 10 
}: { 
  children: React.ReactNode; 
  className?: string;
  tiltStrength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const xSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 30 });
  
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [`${tiltStrength}deg`, `-${tiltStrength}deg`]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [`-${tiltStrength}deg`, `${tiltStrength}deg`]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        x: xSpring,
        y: ySpring,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ duration: 0.2 }}
    >
      <div style={{ transform: "translateZ(20px)" }} className="h-full">
        {children}
      </div>
    </motion.div>
  );
}

// Glow Button for Course Cards
function GlowButton({ children, className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <motion.button
      className={cn(
        "inline-flex items-center gap-2 text-primary font-medium group/link relative overflow-hidden cursor-pointer",
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children || "View Course"}
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowRight className="w-4 h-4" />
        </motion.span>
      </span>
      <motion.div
        className="absolute inset-0 bg-primary/10 rounded-lg"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
        style={{ transformOrigin: "left" }}
      />
    </motion.button>
  );
}

export function CoursesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  return (
    <section ref={ref} className="py-16 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-50" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: isInView ? [1, 1.2, 1] : 1,
          opacity: isInView ? [0.3, 0.5, 0.3] : 0.3,
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.9 }}
            transition={{ delay: 0.1 }}
          >
            Our Courses
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Industry-Leading <span className="text-white">Tech Courses</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Build real-world projects and grow your professional portfolio with our 
            hands-on training designed by industry experts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course, index) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.5) }}
                className="perspective-1000"
              >
                <TiltCard
                  className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 h-full cursor-pointer"
                  tiltStrength={8}
                >
                  <div className={cn("h-1 w-full bg-gradient-to-r", course.gradient)} />
                  
                  <div className="p-5">
                    <motion.div
                      className={cn(
                        "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3",
                        course.gradient
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <h3 className="font-display font-bold text-lg text-foreground mb-1 group-hover:text-primary transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {course.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Code2 className="w-3.5 h-3.5" />
                        {course.handsOnProjects.length} Projects
                      </span>
                    </div>

                    <div className="mb-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1.5">
                        You'll Build:
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {course.handsOnProjects.slice(0, 2).map((project) => (
                          <span
                            key={project.title}
                            className="inline-flex items-center px-2 py-0.5 rounded bg-primary/10 text-primary text-xs"
                          >
                            {project.title.split(' ').slice(1).join(' ').substring(0, 15)}
                          </span>
                        ))}
                      </div>
                    </div>

                    <GlowButton />
                  </div>

                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-primary/5 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                    style={{ transform: "translateZ(-1px)" }}
                  />
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link to="/courses">
              <ArrowRight className="w-5 h-5" />
              View All Courses
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

