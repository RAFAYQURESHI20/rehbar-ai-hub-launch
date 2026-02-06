import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "AI Engineer at Google",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Rehbar AI's machine learning course completely transformed my career. The hands-on projects helped me land my dream job at Google.",
    rating: 5,
    course: "AI & Machine Learning",
  },
  {
    id: 2,
    name: "Fatima Zahra",
    role: "Full Stack Developer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    content: "The web development bootcamp was intense but incredibly rewarding. I went from basic HTML to full-stack in just 4 months!",
    rating: 5,
    course: "Web Development",
  },
  {
    id: 3,
    name: "Muhammad Ali",
    role: "Data Scientist at Microsoft",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "The data science curriculum is top-notch. Real datasets, practical projects, and amazing mentors who genuinely care.",
    rating: 5,
    course: "Data Science",
  },
  {
    id: 4,
    name: "Sara Malik",
    role: "UX Designer at Figma",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The UI/UX course gave me the perfect foundation. The instructors' industry experience made all the difference.",
    rating: 5,
    course: "UI/UX Design",
  },
];

export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section ref={ref} className="py-12 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <motion.span
            className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2"
            animate={{ opacity: inView ? 1 : 0 }}
          >
            Testimonials
          </motion.span>
          <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            What Our <span className="text-white">Students Say</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Hear from our graduates who have successfully transformed their careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.5) }}
              className="group relative bg-card rounded-xl border border-border p-5 hover:shadow-md transition-all cursor-default"
            >
              <motion.div
                className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity"
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Quote className="w-12 h-12 text-primary" />
              </motion.div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
                    transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                  >
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <p className="text-foreground/80 mb-4 relative z-10 text-sm line-clamp-3">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                <div>
                  <motion.p
                    className="font-semibold text-foreground text-sm"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {testimonial.name}
                  </motion.p>
                  <motion.p
                    className="text-xs text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -10 }}
                    transition={{ delay: 0.55 + index * 0.1 }}
                  >
                    {testimonial.role}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

