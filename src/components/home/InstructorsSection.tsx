import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InstructorCard } from "@/components/ui/InstructorCard";
import { instructors } from "@/data/instructors";

export function InstructorsSection() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 dot-pattern opacity-50" />

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3"
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Our Instructors
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
            Learn from <span className="text-white">Industry Experts</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Our instructors are passionate educators with real-world experience in AI,
            Machine Learning, and Full-Stack Development.
          </p>
        </motion.div>

        {/* Instructors Preview - Show first 2 instructors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {instructors.slice(0, 2).map((instructor, index) => (
            <InstructorCard
              key={instructor.id}
              instructor={instructor}
              index={index}
            />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center"
        >
          <Button variant="gradient" size="lg" asChild>
            <Link to="/trainers">
              View All Instructors
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

