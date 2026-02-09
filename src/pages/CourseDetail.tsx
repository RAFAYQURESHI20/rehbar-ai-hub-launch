import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, BookOpen, CheckCircle2, Code2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { getCourseById } from "@/data/courses";
import { cn } from "@/lib/utils";

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = getCourseById(courseId || "");

  if (!course) {
    return (
      <Layout>
        <section className="pt-32 pb-16 gradient-bg-hero">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="font-display text-4xl font-bold text-primary-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Course Not Found
            </motion.h1>
            <motion.p
              className="text-primary-foreground/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              The course you're looking for doesn't exist.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Button variant="hero" asChild>
                <Link to="/courses">Browse All Courses</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  const Icon = course.icon;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Animated background glow */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Courses
              </Link>
            </motion.div>

            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className={cn(
                "w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center mb-6",
                "backdrop-blur-lg"
              )}
            >
              <Icon className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            {/* Title */}
            <motion.h1
              className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {course.title}
            </motion.h1>

            {/* Meta Info */}
            <motion.div
              className="flex flex-wrap gap-6 text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="flex items-center gap-2">
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Clock className="w-5 h-5" />
                </motion.span>
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {course.mode} Mode
              </span>
              <motion.span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                {course.level}
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </section>

      {/* Course Outline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              Course <span className="gradient-text">Outline</span>
            </motion.h2>

            {/* Progress indicator */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-2">
                <span>{course.outline.modules.length} Modules</span>
                <span>Complete Course Structure</span>
              </div>
              <div className="h-1 rounded-full bg-muted overflow-hidden">
                <motion.div
                  className="h-full rounded-full gradient-bg"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </motion.div>

            {/* Modules */}
            <div className="space-y-6">
              {course.outline.modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-xl border border-border overflow-hidden"
                >
                  {/* Module Header */}
                  <div className={cn(
                    "px-6 py-4 bg-gradient-to-r",
                    course.gradient
                  )}>
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-primary-foreground font-bold text-sm"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {index + 1}
                      </motion.span>
                      <h3 className="font-display text-lg font-semibold text-primary-foreground">
                        {module.title}
                      </h3>
                    </div>
                  </div>

                  {/* Module Topics */}
                  <div className="p-6">
                    <ul className="space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <motion.li
                          key={topicIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + topicIndex * 0.05 }}
                        >
                          <motion.div whileHover={{ scale: 1.2, rotate: 10 }}>
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          </motion.div>
                          <span className="text-sm leading-relaxed">
                            {topic}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features Tags */}
            <motion.div
              className="mt-8 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-sm font-medium text-muted-foreground mb-4">
                What You'll Learn
              </h4>
              <div className="flex flex-wrap gap-2">
                {course.features.map((feature, index) => (
                  <motion.span
                    key={feature}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-muted-foreground text-xs font-medium"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {feature}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hands-On Projects Section */}
      <section className="py-20 bg-gradient-to-b from-background via-slate-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Code2 className="w-4 h-4" />
                </motion.div>
                Hands-On Projects
              </motion.div>
              <motion.h2
                className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Build <span className="gradient-text">Real-World Projects</span>
              </motion.h2>
              <motion.p
                className="text-muted-foreground max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Build real-world projects that showcase your skills 
                and impress potential employers.
              </motion.p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-6">
              {course.handsOnProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <motion.h3
                          className="font-display text-xl font-bold text-foreground mb-2"
                          whileHover={{ scale: 1.02 }}
                        >
                          {project.title}
                        </motion.h3>
                        <p className="text-muted-foreground text-sm">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom gradient bar */}
                  <motion.div
                    className={cn("h-1 w-full bg-gradient-to-r", course.gradient)}
                    initial={{ scaleX: 0, originX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  />
                </motion.div>
              ))}
            </div>

            {/* Stats */}
            <motion.div
              className="mt-12 grid grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {[
                { value: course.handsOnProjects.length.toString(), label: "Major Projects" },
                { value: course.outline.modules.length.toString(), label: "Modules" },
                { value: course.handsOnProjects.reduce((acc, p) => acc + p.technologies.length, 0).toString(), label: "Technologies" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-4 bg-card rounded-xl border border-border"
                  whileHover={{ scale: 1.05 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <motion.h2
              className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Ready to Build Your Portfolio?
            </motion.h2>
            <motion.p
              className="text-lg text-primary-foreground/80 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Start building real projects today. Enroll now and get hands-on experience 
              with industry-standard tools and technologies.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button variant="hero" size="xl" asChild>
                <Link to={`/enroll?course=${course.id}`}>
                  Enroll Now
                </Link>
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl" 
                asChild
                className="bg-transparent"
              >
                <Link to="/courses">Browse More Courses</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;

