import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  UserPlus,
  Briefcase,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "WhatsApp Support",
    details: ["0304 5759899"],
    isWhatsApp: true,
    link: "https://wa.me/923045759899",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["rehbaraitraininghub@gmail.com"],
    isEmail: true,
    link: "mailto:rehbaraitraininghub@gmail.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["DHA Phase 2, House No. 245", "Islamabad, Pakistan"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 9am - 6pm", "Sat: 10am - 4pm"],
  },
];

// Animated Input Field
function AnimatedInput({
  label,
  icon: Icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  icon?: React.ElementType;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <div className="relative">
        {Icon && (
          <motion.div
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Icon className="w-4 h-4" />
          </motion.div>
        )}
        <Input
          {...props}
          className={`transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary ${
            Icon ? "pl-10" : ""
          }`}
        />
      </div>
    </motion.div>
  );
}

// Focus Ring Input
function FocusInput({
  label,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Input
        {...props}
        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />
    </motion.div>
  );
}

// Animated Textarea
function AnimatedTextarea({
  label,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      <Label htmlFor={props.id || props.name}>{label}</Label>
      <Textarea
        {...props}
        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary min-h-[120px]"
      />
    </motion.div>
  );
}

// Contact Info Card
function ContactInfoCard({
  item,
  index,
}: {
  item: typeof contactInfo[0];
  index: number;
}) {
  const content = (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, x: 5 }}
      className="flex gap-4 cursor-default"
    >
      <motion.div
        className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center shrink-0"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <item.icon className="w-5 h-5 text-primary-foreground" />
      </motion.div>
      <div>
        <h3 className="font-semibold text-foreground">{item.title}</h3>
        {item.details.map((detail, i) => (
          <motion.p
            key={i}
            className="text-muted-foreground text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 + i * 0.1 }}
          >
            {detail}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );

  // If item has a link, wrap content in an anchor tag
  if (item.link) {
    return (
      <a
        href={item.link}
        target={item.isWhatsApp || item.isEmail ? "_blank" : "_self"}
        rel="noopener noreferrer"
        className="block"
      >
        {content}
      </a>
    );
  }

  return content;
}

// CTA Card Component
function CTACard({
  icon: Icon,
  title,
  description,
  buttonText,
  href,
  index,
  variant = "primary",
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  buttonText: string;
  href: string;
  index: number;
  variant?: "primary" | "secondary";
}) {
  const colors = {
    primary: "from-blue-500 to-cyan-500",
    secondary: "from-slate-700 to-slate-600",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 + index * 0.1 }}
      className="bg-card rounded-2xl border border-border p-6"
    >
      <motion.div
        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors[variant]} flex items-center justify-center mb-4`}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Icon className="w-6 h-6 text-white" />
      </motion.div>
      <h3 className="font-display text-lg font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm mb-4">{description}</p>
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Button
          variant={variant === "primary" ? "gradient" : "outline"}
          className="w-full"
          asChild
        >
          <Link to={href}>
            {buttonText}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  );
}

function ArrowRight({
  className,
}: {
  className?: string;
}): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
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
              Contact Us
            </motion.span>
            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Let's Start Your <span className="text-white">Journey</span>
            </motion.h1>
            <motion.p
              className="text-lg text-primary-foreground/80"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              Have questions about our courses? Ready to enroll or join our team?
              We're here to help you every step of the way.
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

      {/* CTA Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <CTACard
              icon={UserPlus}
              title="Enroll as a Student"
              description="Start your tech journey today. Browse our courses and enroll."
              buttonText="Enroll Now"
              href="/enroll"
              index={0}
              variant="primary"
/>
            <CTACard
              icon={Briefcase}
              title="Apply as Instructor"
              description="Share your expertise. Join our team of world-class instructors."
              buttonText="Apply Now"
              href="/apply-instructor"
              index={1}
              variant="primary"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <motion.h2
                className="font-display text-2xl font-bold text-foreground mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Get in Touch
              </motion.h2>
              <motion.p
                className="text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                We'd love to hear from you. Reach out to us through any of these
                channels or fill out the form.
              </motion.p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <ContactInfoCard key={item.title} item={item} index={index} />
                ))}
              </div>

              {/* WhatsApp Button */}
              <motion.a
                href="https://wa.me/923045759899"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Support
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
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
                <motion.h2
                  className="font-display text-2xl font-bold text-foreground mb-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Send us a Message
                </motion.h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FocusInput
                      id="name"
                      name="name"
                      label="Full Name *"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                    <FocusInput
                      id="email"
                      name="email"
                      type="email"
                      label="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <AnimatedInput
                    id="phone"
                    name="phone"
                    label="Phone Number"
                    icon={Phone}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                  />

                  <AnimatedTextarea
                    id="message"
                    name="message"
                    label="Message *"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    required
                  />

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
                            className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin absolute left-1/2 -translate-x-1/2"
                            layoutId="spinner"
                          />
                          <span className="opacity-0">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-background via-slate-900 to-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <p className="text-muted-foreground">
              Visit our training center in DHA Phase 2, Islamabad
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.945823456789!3d73.0567!2d33.3325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDMzJzM4LjUiTiA3M8KwMDMnMjcuNCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rehbar AI Training Hub Location - DHA Phase 2 Islamabad"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-2xl border border-border p-8 md:p-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </motion.div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              Have More Questions?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Check out our frequently asked questions for quick answers to common
              queries about our courses, admissions, and more.
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block"
            >
              <Button variant="gradient" size="lg" asChild>
                <Link to="/faqs">View FAQs</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

