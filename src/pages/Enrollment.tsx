import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
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
  BookOpen,
  Clock,
  Award,
  Users,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { courses, getCourseById } from "@/data/courses";

// Stats data
const stats = [
  { icon: Users, value: "10,000+", label: "Students Enrolled" },
  { icon: Clock, value: "6-12 Months", label: "Flexible Duration" },
  { icon: Award, value: "Certificate", label: "Industry Recognized" },
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
}: {
  label: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
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

const Enrollment = () => {
  const { toast } = useToast();
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    currentStatus: "",
    learningMode: "online",
    message: "",
  });

  // Auto-fill course from URL parameter
  useEffect(() => {
    const courseParam = searchParams.get("course");
    if (courseParam) {
      const course = getCourseById(courseParam);
      if (course) {
        setFormData((prev) => ({ ...prev, course: courseParam }));
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Enrollment Successful!",
      description: "We'll contact you within 24 hours to confirm your spot.",
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
                Enrollment Submitted!
              </motion.h1>

              <motion.p
                className="text-slate-300 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Thank you for enrolling. Our team will contact you shortly
                with payment details and next steps.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button variant="gradient" size="lg" asChild>
                  <Link to="/">
                    Back to Home
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/courses">
                    Browse More Courses
                  </Link>
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
              <BookOpen className="w-4 h-4" />
              Student Enrollment
            </motion.span>
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-100 to-white">
                Start Your
              </span>{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
                Tech Journey
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Join thousands of students transforming their careers with our
              industry-leading AI and tech training programs.
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
      <section className="py-12 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <StatCard key={stat.label} item={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Form Section */}
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
                    Course Enrollment Form
                  </motion.h2>
                  <p className="text-muted-foreground">
                    Fill out the form below to enroll in your chosen course.
                    Our team will contact you within 24 hours.
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
                      <Label htmlFor="course">Selected Course *</Label>
                      <Select
                        value={formData.course}
                        onValueChange={(value) =>
                          setFormData({ ...formData, course: value })
                        }
                        required
                      >
                        <SelectTrigger id="course">
                          <SelectValue placeholder="Select a course" />
                        </SelectTrigger>
                        <SelectContent>
                          {courses.map((course) => (
                            <SelectItem key={course.id} value={course.id}>
                              {course.title}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  {/* Educational Background */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="qualification">Highest Qualification *</Label>
                      <Select
                        value={formData.qualification}
                        onValueChange={(value) =>
                          setFormData({ ...formData, qualification: value })
                        }
                        required
                      >
                        <SelectTrigger id="qualification">
                          <SelectValue placeholder="Select qualification" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high-school">High School</SelectItem>
                          <SelectItem value="intermediate">Intermediate</SelectItem>
                          <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                          <SelectItem value="masters">Master's Degree</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-2"
                    >
                      <Label htmlFor="currentStatus">Current Status *</Label>
                      <Select
                        value={formData.currentStatus}
                        onValueChange={(value) =>
                          setFormData({ ...formData, currentStatus: value })
                        }
                        required
                      >
                        <SelectTrigger id="currentStatus">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="working-professional">
                            Working Professional
                          </SelectItem>
                          <SelectItem value="fresher">Fresher</SelectItem>
                          <SelectItem value="freelancer">Freelancer</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </motion.div>
                  </div>

                  {/* Learning Mode */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <Label>Preferred Learning Mode *</Label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-2">
                      {[
                        { value: "online", label: "Online" },
                        { value: "hybrid", label: "Hybrid" },
                        { value: "weekend", label: "Weekend Batch" },
                      ].map((mode) => (
                        <motion.button
                          key={mode.value}
                          type="button"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() =>
                            setFormData({ ...formData, learningMode: mode.value })
                          }
                          className={`px-4 py-3 rounded-xl border text-sm font-medium transition-all ${
                            formData.learningMode === mode.value
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background hover:bg-muted border-border"
                          }`}
                        >
                          {mode.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>

                  {/* Message */}
                  <AnimatedTextarea
                    label="Message / Questions (Optional)"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Any questions about the course or special requirements..."
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
                          Submit Enrollment
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
              {/* Course Info Card */}
              {formData.course && (() => {
                const course = getCourseById(formData.course);
                if (!course) return null;
                const IconComponent = course.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-card rounded-2xl border border-border p-6 mb-6"
                  >
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">
                      Selected Course
                    </h3>
                    <div className="space-y-3">
                      <div className="aspect-video rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-white/10">
                        <IconComponent className="w-16 h-16 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground">
                        {course.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {course.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-bold text-primary">
                          Contact for Pricing
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}

              {/* What's Included */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-card rounded-2xl border border-border p-6"
              >
                <h3 className="font-display text-lg font-bold text-foreground mb-4">
                  What's Included
                </h3>
                <ul className="space-y-3">
                  {[
                    "Live instructor-led sessions",
                    "Hands-on projects & assignments",
                    "Certificate upon completion",
                    "Lifetime LMS access",
                    "Placement assistance",
                    "24/7 mentor support",
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

              {/* Need Help */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20"
              >
                <h3 className="font-semibold text-foreground mb-2">
                  Need Help?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Our admissions team is here to assist you.
                </p>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enrollment;

