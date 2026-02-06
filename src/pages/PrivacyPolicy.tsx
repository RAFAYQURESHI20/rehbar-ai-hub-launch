import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Shield, Eye, Lock, Database, Mail, User, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Legal
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Privacy <span className="gradient-text-accent">Policy</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              How we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              {/* Last Updated */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
                <Shield className="w-4 h-4 text-primary" />
                <span>Last updated: January 15, 2025</span>
              </div>

              {/* Introduction */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Rehbar AI Training Hub ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </div>

              {/* Information We Collect */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Database className="w-6 h-6 text-primary" />
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Personal Data You Provide</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Name and contact information (email, phone number)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Educational background and professional experience</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Payment information and billing details</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Communications and feedback you provide</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h3 className="font-semibold text-foreground mb-2">Automatically Collected Data</h3>
                    <ul className="text-muted-foreground space-y-2">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>IP address and browser information</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Usage data and session duration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>Cookies and tracking technologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* How We Use Your Information */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Eye className="w-6 h-6 text-primary" />
                  How We Use Your Information
                </h2>
                <div className="grid gap-3">
                  {[
                    "Providing and improving our educational services",
                    "Processing enrollments and payments",
                    "Sending course materials and updates",
                    "Providing customer support",
                    "Sending promotional communications (with your consent)",
                    "Analyzing website usage and improving user experience",
                    "Complying with legal obligations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Data Protection */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Lock className="w-6 h-6 text-primary" />
                  Data Protection & Security
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "SSL/TLS encryption for data transmission",
                    "Secure data storage with encryption at rest",
                    "Regular security assessments and audits",
                    "Access controls and authentication",
                    "Secure payment processing (PCI-DSS compliant)",
                    "Regular data backups and recovery procedures"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <Shield className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sharing Your Data */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Sharing Your Data
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We do not sell your personal data. We may share your information with:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span><strong>Service providers:</strong> Companies that assist in our operations (hosting, payment processing, analytics)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span><strong>Educational partners:</strong> Institutions we collaborate with for course delivery</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ChevronRight className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span><strong>Legal requirements:</strong> When required by law or to protect our rights</span>
                  </li>
                </ul>
              </div>

              {/* Cookies Policy */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Cookies & Tracking Technologies
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your browsing experience. You can control cookies through your browser settings. For more information, please refer to our Cookie Policy.
                </p>
              </div>

              {/* Your Rights */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <User className="w-6 h-6 text-primary" />
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal data:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Right to access your personal data",
                    "Right to rectify inaccurate data",
                    "Right to request deletion of your data",
                    "Right to restrict processing",
                    "Right to data portability",
                    "Right to withdraw consent"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Us */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <h3 className="font-display text-lg font-bold text-foreground mb-3">
                  Questions About This Policy?
                </h3>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:privacy@rehbarai.com" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <Mail className="w-4 h-4" />
                    privacy@rehbarai.com
                  </a>
                  <Link 
                    to="/contact" 
                    className="flex items-center gap-2 text-primary hover:text-primary/80"
                  >
                    <ChevronRight className="w-4 h-4" />
                    Contact Form
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;

