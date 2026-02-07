import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  BookOpen,
  Lightbulb,
  Rocket,
  CheckCircle2
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of industry trends to deliver cutting-edge curriculum.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building a supportive network of learners and professionals.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about transforming lives through education.",
  },
  {
    icon: Rocket,
    title: "Excellence",
    description: "Committed to the highest standards in teaching and student success.",
  },
];

const milestones = [
  { year: "2019", title: "Founded", description: "Started with 50 students and a vision" },
  { year: "2020", title: "Online Launch", description: "Expanded to online learning during pandemic" },
  { year: "2021", title: "1000+ Graduates", description: "Reached our first major milestone" },
  { year: "2022", title: "Corporate Training", description: "Launched enterprise programs" },
  { year: "2023", title: "AI Specialization", description: "Became a leading AI training hub" },
  { year: "2024", title: "10,000+ Alumni", description: "Growing community worldwide" },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Shaping the Future of{" "}
              <span className="text-white">Tech Education</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              At Rehbar AI Training Hub, we're on a mission to democratize tech education 
              and empower the next generation of innovators.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl gradient-bg flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To provide accessible, high-quality tech education that empowers individuals 
                to achieve their career goals. We believe everyone deserves the opportunity 
                to learn cutting-edge skills and succeed in the digital economy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent-foreground" />
              </div>
              <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To become the leading tech training hub in the region, known for producing 
                industry-ready professionals who drive innovation and technological advancement 
                across the globe.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-3xl border border-border p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face" 
                      alt="Founder"
                      className="w-full h-full object-cover mix-blend-overlay opacity-90"
                    />
                  </div>
                </div>
                <div className="md:col-span-2">
                  <span className="text-primary font-medium text-sm">Message from Founder</span>
                  <h2 className="font-display text-2xl font-bold text-foreground mt-2 mb-4">
                    "Education is the passport to the future"
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    When I started Rehbar AI Training Hub, I had one goal: to bridge the gap 
                    between traditional education and industry requirements. Today, I'm proud 
                    to see our graduates working at top companies worldwide.
                  </p>
                  <p className="text-muted-foreground">
                    Our commitment to practical, hands-on learning sets us apart. Every course 
                    is designed with real-world applications in mind, ensuring our students 
                    are not just certified but truly capable.
                  </p>
                  <div className="mt-6">
                    <p className="font-semibold text-foreground">Dr. Hassan Ahmed</p>
                    <p className="text-sm text-muted-foreground">Founder & CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all group"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
              Milestones & Achievements
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/30" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`relative flex items-center mb-8 ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  }`}
                >
                  <div className="w-1/2 pr-8 text-right">
                    {index % 2 === 0 && (
                      <div className="bg-primary-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-primary-foreground/10">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <h3 className="font-display font-semibold text-primary-foreground">{milestone.title}</h3>
                        <p className="text-sm text-primary-foreground/70">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full gradient-bg border-4 border-secondary" />
                  
                  <div className="w-1/2 pl-8">
                    {index % 2 !== 0 && (
                      <div className="bg-primary-foreground/5 rounded-xl p-4 backdrop-blur-sm border border-primary-foreground/10">
                        <span className="text-primary font-bold">{milestone.year}</span>
                        <h3 className="font-display font-semibold text-primary-foreground">{milestone.title}</h3>
                        <p className="text-sm text-primary-foreground/70">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "10,000+", label: "Students Trained" },
              { icon: BookOpen, value: "50+", label: "Courses Offered" },
              { icon: Award, value: "95%", label: "Placement Rate" },
              { icon: CheckCircle2, value: "100+", label: "Corporate Partners" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <p className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
