import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CoursesSection } from "@/components/home/CoursesSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

// Urgent Inquiry Headline Component
function UrgentInquiriesBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm border-b border-white/10"
    >
      <div className="container mx-auto px-4 py-3">
        <Link
          to="/contact"
          className="flex items-center justify-center gap-3 text-white font-medium hover:opacity-90 transition-opacity"
          aria-label="Contact HR team for urgent inquiries"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Phone className="w-4 h-4" />
          </motion.div>
          <span className="text-sm md:text-base">
            For urgent inquiries, contact our HR team
          </span>
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="hidden sm:inline-flex"
          >
            <ArrowRight className="w-4 h-4" />
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <UrgentInquiriesBanner />
      <CoursesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
