import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowRight,
  CheckCircle2,
  Send,
  Briefcase,
  GraduationCap,
  Award,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Stats data
const stats = [
  { icon: Users, value: "500+", label: "Expert Instructors" },
  { icon: Award, value: "Top Companies", label: "Industry Experts" },
  { icon: Briefcase, value: "Flexible", label: "Part-time Options" },
];

// Animated Input Field
function AnimatedInput({
  label,
  id,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <Label htmlFor={id || name}>{label}</Label>
      <Input
        id={id || name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />
    </motion.div>
  );
}

// Animated Textarea
function AnimatedTextarea({
  label,
  id,
  name,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <Label htmlFor={id || name}>{label}</Label>
      <Textarea
        id={id || name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[100px]"
      />
    </motion.div>
  );
}

// Stat Card Component
function StatCard({ item, index }: { item: typeof stats[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800/60 backdrop-blur-xl p-5 rounded-xl text-center border border-white/10"
    >
      <motion.div
        className="flex justify-center mb-2"
        whileHover={{ rotate: 15, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <item.icon className="w-7 h-7 text-cyan-400" />
      </motion.div>
      <p className="font-display text-2xl font-bold text-white">{item.value}</p>
      <p className="text-slate-400 text-sm">{item.label}</p>
    </motion.div>
  );
}

const ApplyInstructor = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    expertise: "",
    experience: "",
    linkedIn: "",
    portfolio: "",
    motivation: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 48 hours.",
    });

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="pt-32 pb-20 gradient-bg-hero relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 grid-pattern opacity-20" />

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6"
              >
                <CheckCircle2 className="w-10 h-10 text-green-500" />
              </motion.div>

              <motion.h1
                className="font-display text-3xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Application Submitted!
              </motion.h1>

              <motion.p
                className="text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for your interest in joining our team. Our HR team will
                review your application and contact you within 48 hours.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

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
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/10 text-primary-foreground text-sm font-medium mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Award className="w-4 h-4" />
              Join Our Team
            </motion.span>
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white">
                Apply as an
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Instructor
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Share your expertise with the next generation of tech professionals.
              Join our team of world-class instructors and make an impact.
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

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-b from-background via-slate-900 to-background relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} item={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <motion.div
                className="bg-card rounded-2xl border border-border p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="mb-8">
                  <motion.h2
                    className="font-display text-2xl font-bold text-foreground mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    Instructor Application Form
                  </motion.h2>
                  <p className="text-muted-foreground">
                    Fill out the form below to apply as an instructor. Our team will
                    review your application and get back to you within 48 hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Full Name *"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                    <AnimatedInput
                      label="Email Address *"
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <AnimatedInput
                      label="Phone Number *"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+92 300 1234567"
                      required
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="expertise">Area of Expertise *</Label>
                      <Select
                        value={formData.expertise}
                        onValueChange={(value) =>
                          setFormData({ ...formData, expertise: value })
                        }
                        required
                      >
                        <SelectTrigger id="expertise">
                          <SelectValue placeholder="Select your expertise" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="data-science">Data Science</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile Development</SelectItem>
                          <SelectItem value="cloud-devops">Cloud & DevOps</SelectItem>
                          <SelectItem value="cybersecurity">Cyber Security</SelectItem>
                          <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                          <SelectItem value="blockchain">Blockchain</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  {/* Experience & Background */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="experience">Years of Experience *</Label>
                      <Select
                        value={formData.experience}
                        onValueChange={(value) =>
                          setFormData({ ...formData, experience: value })
                        }
                        required
                      >
                        <SelectTrigger id="experience">
                          <SelectValue placeholder="Select experience" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 Years</SelectItem>
                          <SelectItem value="3-5">3-5 Years</SelectItem>
                          <SelectItem value="5-10">5-10 Years</SelectItem>
                          <SelectItem value="10+">10+ Years</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <AnimatedInput
                      label="LinkedIn Profile URL *"
                      id="linkedIn"
                      name="linkedIn"
                      type="url"
                      value={formData.linkedIn}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/yourprofile"
                      required
                    />
                  </div>

                  {/* Optional Fields */}
                  <AnimatedInput
                    label="GitHub / Portfolio URL (Optional)"
                    id="portfolio"
                    name="portfolio"
                    type="url"
                    value={formData.portfolio}
                    onChange={handleChange}
                    placeholder="https://github.com/yourprofile or portfolio URL"
                  />

                  {/* Resume Upload */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="resume">Resume / CV (PDF) *</Label>
                    <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        required
                      />
                      <label
                        htmlFor="resume"
                        className="cursor-pointer flex flex-col items-center gap-2"
                      >
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                          <Send className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-sm text-muted-foreground">
                          Click to upload or drag and drop
                        </span>
                        <span className="text-xs text-muted-foreground">
                          PDF only, max 5MB
                        </span>
                      </label>
                    </div>
                  </motion.div>

                  {/* Motivation */}
                  <AnimatedTextarea
                    label="Why do you want to join us? *"
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    placeholder="Tell us about your teaching experience and why you'd like to join our team..."
                    required
                  />

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Button
                      type="submit"
                      variant="gradient"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto relative overflow-hidden"
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          <span className="opacity-0">Submitting...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Submit Application
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>

            {/* Sidebar Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              {/* Benefits Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-card rounded-2xl border border-border p-6 mb-6"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  What We Offer
                </h3>
                <ul className="space-y-3">
                  {[
                    "Competitive compensation",
                    "Flexible scheduling",
                    "Work with top talent",
                    "Professional development",
                    "Global exposure",
                    "Impact on future engineers",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Requirements Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6 mb-6"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {[
                    "5+ years industry experience",
                    "Strong communication skills",
                    "Passion for teaching",
                    "Proficiency in your domain",
                    "Working knowledge of modern tools",
                  ].map((item, index) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.05 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Need Help */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  Questions?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our HR team is here to help you with any questions about the
                  application process.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/contact">Contact HR Team</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyInstructor;

