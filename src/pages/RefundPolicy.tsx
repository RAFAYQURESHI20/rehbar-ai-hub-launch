import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { RefreshCw, DollarSign, Clock, FileText, CheckCircle, AlertCircle, ChevronRight } from "lucide-react";

const RefundPolicy = () => {
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
              Refund <span className="gradient-text-accent">Policy</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Our commitment to transparency and student satisfaction.
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
              {/* Overview */}
              <div className="mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <RefreshCw className="w-4 h-4 text-primary" />
                  <span>Last updated: January 15, 2025</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  At Rehbar AI Training Hub, we are committed to providing high-quality education and ensuring student satisfaction. This Refund Policy outlines the terms and conditions under which refunds may be granted.
                </p>
              </div>

              {/* Money Back Guarantee */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-foreground">
                      7-Day Money-Back Guarantee
                    </h2>
                    <p className="text-muted-foreground">Try risk-free for the first week</p>
                  </div>
                </div>
                <div className="p-6 rounded-xl bg-green-50 border border-green-200">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-800 font-medium mb-2">
                        If you're not satisfied within the first 7 days, you'll receive a full refund!
                      </p>
                      <p className="text-green-700 text-sm">
                        No questions asked. No hidden fees. No risk.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eligibility Criteria */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Eligibility Criteria
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  To be eligible for a refund, the following conditions must be met:
                </p>
                <div className="space-y-3">
                  {[
                    "Refund request must be submitted within 7 days of the original purchase date",
                    "The student must not have accessed more than 30% of the course content",
                    "No certificate or credentials have been issued",
                    "The account must be in good standing (no violations of Terms of Service)",
                    "The request must be submitted through our official refund request form"
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

              {/* Refund Process */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  How to Request a Refund
                </h2>
                <div className="grid gap-4">
                  {[
                    {
                      step: "1",
                      title: "Submit Request",
                      description: "Fill out our official refund request form with your account details and reason for the refund."
                    },
                    {
                      step: "2",
                      title: "Review Process",
                      description: "Our team will review your request within 3-5 business days."
                    },
                    {
                      step: "3",
                      title: "Decision Notification",
                      description: "You will receive an email notification regarding the status of your refund request."
                    },
                    {
                      step: "4",
                      title: "Refund Processing",
                      description: "If approved, refunds are processed within 7-10 business days to your original payment method."
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4 rounded-lg bg-card border border-border"
                    >
                      <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center shrink-0 font-bold text-primary-foreground">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Non-Refundable Items */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6 text-orange-500" />
                  Non-Refundable Items
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The following are not eligible for refunds:
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Requests made after the 7-day window",
                    "Courses where more than 30% has been accessed",
                    "Downloadable resources or materials",
                    "Examination or certification fees",
                    "Promotional or discounted course bundles",
                    "Accounts with policy violations"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 p-3 rounded-lg bg-orange-50">
                      <AlertCircle className="w-4 h-4 text-orange-500 shrink-0" />
                      <span className="text-sm text-orange-800">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Circumstances for Consideration */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Special Circumstances (Case by Case)
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In certain exceptional circumstances, we may consider refund requests beyond the standard policy:
                </p>
                <div className="grid gap-3">
                  {[
                    {
                      icon: Clock,
                      title: "Technical Issues",
                      description: "Persistent technical problems that prevent access to course content despite our support team's efforts"
                    },
                    {
                      icon: FileText,
                      title: "Course Cancellation",
                      description: "If a course is discontinued or significantly changed after purchase"
                    },
                    {
                      icon: RefreshCw,
                      title: "Duplicate Purchase",
                      description: "Accidental duplicate enrollment in the same course"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Partial Refunds */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Partial Refunds
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  In rare cases where a partial refund may be applicable:
                </p>
                <div className="p-4 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-blue-800 text-sm">
                    <strong>Pro-rated refunds</strong> may be considered for multi-month subscription plans based on the remaining time, minus any administrative fees.
                  </p>
                </div>
              </div>

              {/* Refund Timeline */}
              <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-4">
                  Refund Timeline
                </h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { icon: Clock, value: "3-5", unit: "Days", label: "Review Time" },
                    { icon: RefreshCw, value: "7-10", unit: "Days", label: "Processing" },
                    { icon: DollarSign, value: "10-15", unit: "Days", label: "Total Time" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
                    >
                      <item.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                      <p className="font-display text-3xl font-bold text-foreground">
                        {item.value}
                        <span className="text-lg font-normal text-muted-foreground ml-1">{item.unit}</span>
                      </p>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <RefreshCw className="w-8 h-8 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">
                      Need to Request a Refund?
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      Please contact our support team with your enrollment details. We'll be happy to assist you.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="mailto:support@rehbarai.com" 
                        className="flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
                      >
                        <ChevronRight className="w-4 h-4" />
                        support@rehbarai.com
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

export default RefundPolicy;

