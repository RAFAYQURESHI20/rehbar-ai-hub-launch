import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { FileText, Shield, CheckCircle, AlertCircle, ChevronRight } from "lucide-react";

const TermsOfService = () => {
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
              Terms of <span className="gradient-text-accent">Service</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              The rules and guidelines for using our services.
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
                <FileText className="w-4 h-4 text-primary" />
                <span>Last updated: January 15, 2025</span>
              </div>

              {/* Acceptance */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using Rehbar AI Training Hub's website and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.
                </p>
              </div>

              {/* Services */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  Our Services
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Rehbar AI Training Hub provides online educational services including but not limited to:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  {[
                    "Online courses and tutorials in technology and programming",
                    "Live instructor-led training sessions",
                    "Recorded video lectures and learning materials",
                    "Hands-on projects and assessments",
                    "Mentorship and student support services",
                    "Certificates of completion"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* User Obligations */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  User Obligations
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  By using our services, you agree to:
                </p>
                <div className="space-y-3">
                  {[
                    "Provide accurate, current, and complete registration information",
                    "Maintain the security of your account credentials",
                    "Use the services only for lawful purposes and in accordance with these Terms",
                    "Not share your account access with others",
                    "Not reproduce, distribute, or commercially exploit the course materials",
                    "Not attempt to gain unauthorized access to our systems",
                    "Respect other users and maintain professional conduct"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Intellectual Property */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Intellectual Property Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  All content, materials, and resources provided through our services are protected by intellectual property laws and are the exclusive property of Rehbar AI Training Hub or our licensors.
                </p>
                <div className="p-4 rounded-lg bg-muted/50">
                  <p className="text-muted-foreground">
                    <strong>Your Rights:</strong> Upon successful enrollment, you receive a limited, non-exclusive, non-transferable license to access and use the course materials for personal, educational purposes only.
                  </p>
                </div>
                <div className="mt-4 p-4 rounded-lg bg-red-50 border border-red-200">
                  <p className="text-red-700">
                    <strong>Prohibited Actions:</strong> You may not copy, distribute, modify, create derivative works, or commercially exploit any course materials without our explicit written permission.
                  </p>
                </div>
              </div>

              {/* Payments and Billing */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Payments and Billing
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Course fees are clearly displayed on the course enrollment page. By enrolling, you agree to pay all applicable fees and charges.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>Payments are processed securely through our payment partners</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>All prices are in Pakistani Rupees (PKR) unless otherwise specified</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>Refunds are subject to our Refund Policy (see below)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>Failed payments may result in account suspension</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Code of Conduct */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Code of Conduct
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We expect all users to maintain professional and respectful conduct. The following are strictly prohibited:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Harassment or bullying of other users",
                    "Posting inappropriate or offensive content",
                    "Spamming or unauthorized promotions",
                    "Sharing pirated or illegal content",
                    "Impersonating others",
                    "Disrupting the learning environment"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground p-3 rounded-lg bg-red-50">
                      <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimers */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Disclaimers and Limitations
                </h2>
                <div className="p-4 rounded-lg bg-yellow-50 border border-yellow-200 mb-4">
                  <p className="text-yellow-800">
                    <strong>No Guarantees:</strong> While we strive to provide quality education, we do not guarantee specific outcomes, job placements, or career success. Your results depend on your effort and dedication.
                  </p>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  To the maximum extent permitted by law, Rehbar AI Training Hub shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, arising from your use of our services.
                </p>
              </div>

              {/* Termination */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Termination
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We may terminate or suspend your access to our services immediately, without prior notice or liability, for conduct that we believe violates these Terms of Service or is harmful to us, other users, or third parties.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Upon termination, your right to use the services will cease immediately. You may also terminate your account at any time by contacting us.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Changes to These Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide notice prior to any new terms taking effect. Your continued use of our services after such changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      Questions About These Terms?
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      If you have any questions about these Terms of Service, please contact us:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="mailto:legal@rehbarai.com" 
                        className="text-primary hover:text-primary/80 font-medium"
                      >
                        legal@rehbarai.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default TermsOfService;

