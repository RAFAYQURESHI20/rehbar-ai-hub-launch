import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Briefcase,
  Users,
  Heart,
  Zap,
  Award,
  Coffee,
  Globe,
  ChevronRight,
  CheckCircle2,
  Send,
  Mail,
  MapPin,
  Clock,
  Brain,
  GraduationCap,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Job positions data
const jobOpenings = [
  {
    id: "ai-instructor",
    title: "AI/ML Instructor",
    department: "Teaching",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description: "We're looking for an experienced AI/ML Instructor to join our team. You'll be responsible for teaching cutting-edge AI courses and mentoring students.",
    requirements: [
      "Master's or PhD in Computer Science, AI, or related field",
      "3+ years of teaching experience",
      "Strong expertise in Python, TensorFlow, and PyTorch",
      "Experience with LLMs and Generative AI",
    ],
  },
  {
    id: "web-development-trainer",
    title: "Web Development Trainer",
    department: "Teaching",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description: "Join our team to teach modern web development technologies and help students build real-world projects.",
    requirements: [
      "Bachelor's degree in Computer Science or equivalent",
      "2+ years of professional web development experience",
      "Expertise in React, Node.js, and modern frontend frameworks",
      "Good communication skills",
    ],
  },
  {
    id: "content-developer",
    title: "Content Developer",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Create engaging educational content for our AI and IT courses. Work with instructors to develop curriculum materials.",
    requirements: [
      "Strong writing and communication skills",
      "Experience in technical writing",
      "Understanding of AI/ML concepts",
      "Ability to explain complex topics simply",
    ],
  },
  {
    id: "marketing-specialist",
    title: "Marketing Specialist",
    department: "Marketing",
    location: "Karachi, Pakistan",
    type: "Full-time",
    description: "Help us reach more students and grow our brand. You'll be responsible for digital marketing campaigns and student outreach.",
    requirements: [
      "Bachelor's degree in Marketing or related field",
      "2+ years of digital marketing experience",
      "Experience with social media and content marketing",
      "Data-driven mindset",
    ],
  },
];

// Benefits data
const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance for you and your family",
  },
  {
    icon: Zap,
    title: "Learning Budget",
    description: "Annual budget for courses, conferences, and certifications",
  },
  {
    icon: Coffee,
    title: "Flexible Hours",
    description: "Work-life balance with flexible working hours",
  },
  {
    icon: Globe,
    title: "Remote Work",
    description: "Hybrid work model with remote options available",
  },
  {
    icon: Award,
    title: "Performance Bonus",
    description: "Annual bonuses based on performance",
  },
  {
    icon: Users,
    title: "Team Events",
    description: "Regular team building activities and events",
  },
];

const values = [
  { icon: Brain, title: "Innovation", description: "We embrace new ideas and technologies" },
  { icon: Users, title: "Collaboration", description: "We work together to achieve success" },
  { icon: Heart, title: "Excellence", description: "We strive for the highest quality" },
  { icon: Globe, title: "Impact", description: "We measure success by student outcomes" },
];

// Animated Benefit Card
function BenefitCard({ item, index }: { item: typeof benefits[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-card rounded-xl border border-border p-6"
    >
      <motion.div
        className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <item.icon className="w-6 h-6 text-primary-foreground" />
      </motion.div>
      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
      <p className="text-muted-foreground text-sm">{item.description}</p>
    </motion.div>
  );
}

// Job Card Component
function JobCard({ job }: { job: typeof jobOpenings[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-xl border border-border overflow-hidden"
    >
      <motion.div
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-display text-xl font-bold text-foreground">{job.title}</h3>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                {job.type}
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Briefcase className="w-4 h-4" />
                {job.department}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {job.location}
              </span>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="border-t border-border pt-4 mb-4">
                <h4 className="font-semibold text-foreground mb-2">About this role</h4>
                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
                <h4 className="font-semibold text-foreground mb-2">Requirements</h4>
                <ul className="space-y-2 mb-6">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              <Button variant="gradient" asChild>
                <Link to={`/contact?position=${job.id}`}>Apply Now</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

const Careers = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you soon.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      experience: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-bg-hero relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        
        {/* Animated background elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-accent/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Join Our Team
            </motion.span>
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Build the Future of <span className="gradient-text-accent">AI Education</span>
            </motion.h1>
            <motion.p
              className="text-lg text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Join a team of passionate educators and innovators shaping the next generation 
              of tech professionals.
            </motion.p>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Join Rehbar AI?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're more than just a training institute. We're a community of innovators 
              dedicated to transforming education.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} item={benefit} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-background via-slate-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <value.icon className="w-8 h-8 text-primary-foreground" />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find the perfect role for your skills and passion
            </p>
          </motion.div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Don't see a position that fits your skills?
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Send us your CV</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-gradient-to-b from-background via-slate-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                Can't Find the Right Position?
              </h2>
              <p className="text-muted-foreground mb-8">
                We're always looking for talented individuals to join our team. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email us</h3>
                    <p className="text-muted-foreground text-sm">careers@rehbarai.com</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Visit us</h3>
                    <p className="text-muted-foreground text-sm">
                      123 Tech Street, Innovation District<br />
                      Karachi, Pakistan
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Working hours</h3>
                    <p className="text-muted-foreground text-sm">
                      Mon - Fri: 9am - 6pm<br />
                      Sat: 10am - 4pm
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                General Application
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="space-y-2"
                >
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="space-y-2"
                >
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., AI Instructor"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="space-y-2"
                >
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="e.g., 3+ years"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="space-y-2"
                >
                  <Label htmlFor="message">Tell us about yourself</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share your background and why you'd like to join us..."
                    rows={4}
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin absolute left-1/2 -translate-x-1/2"
                          layoutId="spinner"
                        />
                        <span className="opacity-0">Submit Application</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Submit Application
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;

