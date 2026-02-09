import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { InstructorCard } from "@/components/ui/InstructorCard";
import { instructors } from "@/data/instructors";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const Trainers = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Our Instructors
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Learn from <span className="text-primary">AI & Tech Experts</span>
            </h1>
            <p className="text-lg text-white/80">
              Our instructors are industry professionals with real-world experience 
              in AI, Machine Learning, and Full-Stack Development.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Instructors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {instructors.map((instructor, index) => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Join as Instructor CTA */}
      <section className="py-20 bg-gradient-to-b from-background via-slate-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              If you're an industry expert passionate about teaching and mentoring, 
              we'd love to hear from you. Join our team of world-class instructors.
            </p>
            <Button variant="gradient" size="lg" asChild>
              <a href="/apply-instructor">
                Apply as Instructor
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
