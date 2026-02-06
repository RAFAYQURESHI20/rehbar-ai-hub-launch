
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Clock, Users, ArrowRight, CheckCircle2, Star, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { courses } from "@/data/courses";

const Courses = () => {
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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4">
              Our Courses
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Launch Your <span className="text-white">Tech Career</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Choose from our comprehensive range of industry-leading courses designed 
              by experts to help you succeed in the rapidly evolving tech landscape.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Courses List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {courses.map((course, index) => {
              const Icon = course.icon;
              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="grid lg:grid-cols-4 gap-0">
                    {/* Icon Section */}
                    <div className={cn(
                      "p-8 flex items-center justify-center bg-gradient-to-br",
                      course.gradient
                    )}>
                      <div className="text-center">
                        <Icon className="w-16 h-16 text-primary-foreground mx-auto mb-4" />
                        <div className="flex items-center justify-center gap-1 text-primary-foreground/90">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="font-semibold">4.9</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-3 p-8">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                        <div>
                          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-2">
                            {course.level}
                          </span>
                          <h2 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {course.title}
                          </h2>
                        </div>
                        <Button variant="gradient" asChild>
                          <Link to={`/courses/${course.id}`}>
                            View Course
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </Button>
                      </div>

                      <p className="text-muted-foreground mb-6">
                        {course.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-6 mb-6 text-sm text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          {course.duration}
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-primary" />
                          Online Mode
                        </span>
                        <span className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-primary" />
                          {course.handsOnProjects.length} Projects
                        </span>
                      </div>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.features.map((feature) => (
                          <span
                            key={feature}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-primary" />
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Preview Top Projects */}
                      <div className="pt-4 border-t border-border">
                        <h4 className="text-xs font-medium text-muted-foreground mb-3">
                          Top Projects You'll Build:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {course.handsOnProjects.slice(0, 2).map((project) => (
                            <span
                              key={project.title}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-primary/5 text-primary text-xs font-medium"
                            >
                              {project.title.split(' ').slice(1).join(' ')}
                            </span>
                          ))}
                          {course.handsOnProjects.length > 2 && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-lg bg-muted text-muted-foreground text-xs">
                              +{course.handsOnProjects.length - 2} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Build Your Professional Portfolio Today!
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Every course includes 3+ real-world projects that you build and showcase. 
              Impress employers with a strong portfolio of practical work.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Get Started Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Courses;

