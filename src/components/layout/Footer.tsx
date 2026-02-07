import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  Youtube,
  ArrowRight,
  ChevronUp,
  CheckCircle2,
  Award,
  Shield,
  Users,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const footerLinks = {
  courses: [
    { name: "Artificial Intelligence", href: "/courses/artificial-intelligence" },
    { name: "Agentic AI", href: "/courses/agentic-ai" },
    { name: "Machine Learning", href: "/courses/machine-learning" },
    { name: "Deep Learning", href: "/courses/deep-learning" },
    { name: "Web Development", href: "/courses/web-development" },
    { name: "Natural Language Processing", href: "/courses/nlp" },
    { name: "Generative AI", href: "/courses/generative-ai" },
    { name: "Python Programming", href: "/courses/python-programming" },
    { name: "C++ Programming", href: "/courses/cpp-programming" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Trainers", href: "/trainers" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Refund Policy", href: "/refund-policy" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/rehbarai", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/rehbarai", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/rehbarai", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/rehbarai", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@rehbarai", label: "YouTube" },
];

const trustBadges = [
  { icon: Award, label: "Award Winning" },
  { icon: Shield, label: "ISO Certified" },
  { icon: Users, label: "10K+ Students" },
  { icon: Zap, label: "Live Projects" },
];

// Animated Link Component
function AnimatedLink({ 
  href, 
  children, 
  className 
}: { 
  href: string; 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 300 }}>
      <Link 
        to={href} 
        className={cn("text-white/70 hover:text-white transition-colors text-sm", className)}
      >
        {children}
      </Link>
    </motion.div>
  );
}

// Mobile Accordion Section
function AccordionSection({ 
  title, 
  children, 
  isOpen, 
  onToggle 
}: { 
  title: string; 
  children: React.ReactNode; 
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="md:hidden border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-4 text-white font-semibold"
      >
        {title}
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronUp className="w-5 h-5" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Scroll to Top Button
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full gradient-bg text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/25"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");

    toast({
      title: "Subscribed!",
      description: "Thank you for subscribing to our newsletter.",
    });

    // Reset success state after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <>
      <footer className="relative z-10 bg-slate-950 text-secondary-foreground">
        {/* Main Footer */}
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12"
          >
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                >
                  <img
                    src="/rehbar.jpeg"
                    alt="Rehbar AI Training Hub Logo"
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain transition-all duration-300"
                  />
                </motion.div>
              </Link>
              <p className="text-white/70 mb-4 sm:mb-6 max-w-sm text-sm sm:text-base">
                Empowering the next generation of tech professionals with cutting-edge
                AI and IT training. Transform your career with industry-relevant skills.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white text-sm sm:text-base">Subscribe to Newsletter</h4>
                <form onSubmit={handleNewsletterSubmit} className="relative">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex-1 relative">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isSubmitting || isSuccess}
                        className={cn(
                          "bg-white/10 border-white/20 text-white placeholder:text-white/50 transition-all h-10 sm:h-11",
                          isSuccess && "border-green-500/50 bg-green-500/10"
                        )}
                      />
                      <AnimatePresence>
                        {isSuccess && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500"
                          >
                            <CheckCircle2 className="w-5 h-5" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="sm:w-auto">
                      <Button
                        type="submit"
                        variant="gradient"
                        size="sm"
                        disabled={isSubmitting || isSuccess}
                        className="w-full sm:w-auto h-10 sm:h-11"
                      >
                        {isSubmitting ? (
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </Button>
                    </motion.div>
                  </div>
                </form>
                <p className="text-xs text-white/50">
                  Join 5,000+ subscribers. No spam, unsubscribe anytime.
                </p>
              </div>
            </div>

            {/* Desktop Links Columns */}
            <div className="hidden lg:block">
              <h4 className="font-display font-semibold text-white mb-4">Courses</h4>
              <ul className="space-y-3">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <AnimatedLink href={link.href}>{link.name}</AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden lg:block">
              <h4 className="font-display font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <AnimatedLink href={link.href}>{link.name}</AnimatedLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-display font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm">
                    123 Tech Street, Innovation District<br />
                    Karachi, Pakistan
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <a href="tel:+923001234567" className="text-white/70 hover:text-white transition-colors text-sm">
                    +92 300 123 4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <a href="mailto:info@rehbarai.com" className="text-white/70 hover:text-white transition-colors text-sm">
                    info@rehbarai.com
                  </a>
                </li>
              </ul>

              {/* Social Links */}
              <div className="flex gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Mobile Accordion Sections */}
          <div className="lg:hidden mt-8 sm:mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <AccordionSection
                title="Courses"
                isOpen={openSections["courses"] || false}
                onToggle={() => toggleSection("courses")}
              >
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.courses.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionSection>

              <AccordionSection
                title="Company"
                isOpen={openSections["company"] || false}
                onToggle={() => toggleSection("company")}
              >
                <ul className="space-y-2 sm:space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-white/70 hover:text-white transition-colors text-sm block py-1"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </AccordionSection>
            </div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10"
          >
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 px-2">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.3 }}
                  className="flex items-center gap-2 text-white/60"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <badge.icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </motion.div>
                  <span className="text-xs sm:text-sm">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-6 max-w-7xl">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Rehbar AI Training Hub. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
                {footerLinks.legal.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
    </>
  );
}

