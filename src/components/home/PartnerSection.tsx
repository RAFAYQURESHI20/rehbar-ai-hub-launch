import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";

const PartnerSection = () => {
  const partnerUrl = "https://rehbarai-10.vercel.app/";

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-10" />
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 1 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Our Technology Partner
          </motion.span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Empowering AI Innovation
            <span className="block gradient-text mt-2">
              Through Strategic Partnership
            </span>
          </h2>
        </motion.div>

        {/* Partner Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* UPDATED BACKGROUND HERE */}
          <div className="bg-gradient-to-br from-[#0a0f1e] via-[#0b1224] to-[#060b16] rounded-3xl border border-border overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Partner Info */}
              <div className="p-8 md:p-10 lg:p-12">
                <motion.div
                  className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-white font-bold text-2xl">AI</span>
                </motion.div>

                <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
                  Revolutionary AI-Powered Conversation Assistant
                </h3>

                <p className="text-gray-300 mb-6">
                  Developed in Pakistan and Malaysia, sponsored by Egenie AI.
                  Download our desktop app for intelligent real-time guidance.
                </p>

                <div className="bg-white/5 rounded-xl p-5 mb-6 border-l-4 border-primary">
                  <p className="text-sm font-medium text-primary mb-1">
                    Mission Statement
                  </p>
                  <p className="text-gray-300">
                    To empower professionals worldwide with intelligent,
                    real-time conversation assistance that enhances
                    communication effectiveness while maintaining complete
                    privacy and security.
                  </p>
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    variant="gradient"
                    size="lg"
                    className="w-full sm:w-auto group"
                    asChild
                  >
                    <a href={partnerUrl} target="_blank" rel="noopener noreferrer">
                      Visit Partner Website
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </motion.div>
              </div>

              {/* Right Side - Features */}
              <div className="bg-gradient-to-br from-white/5 to-cyan-500/5 p-8 md:p-10 lg:p-12 border-l border-white/10">
                <h4 className="font-display text-lg font-semibold text-white mb-6">
                  Key Features
                </h4>

                <div className="space-y-5">
                  {[
                    {
                      icon: Zap,
                      title: "Real-Time Assistance",
                      description:
                        "Instant AI-powered suggestions and follow-up questions",
                    },
                    {
                      icon: Lock,
                      title: "Privacy-First Design",
                      description:
                        "Local processing on your device for complete data security",
                    },
                    {
                      icon: Globe,
                      title: "International Collaboration",
                      description:
                        "Built by passionate teams across Pakistan and Malaysia",
                    },
                    {
                      icon: Shield,
                      title: "Industry-Grade Technology",
                      description:
                        "World-class AI combining local innovation with global standards",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: 0.3 + index * 0.1,
                      }}
                      className="flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <feature.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-white mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-sm text-gray-300">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="mt-8 pt-6 border-t border-white/10"
                >
                  <p className="text-sm text-gray-300 leading-relaxed">
                    Our desktop application processes conversations locally on
                    your device, providing instant AI-powered suggestions,
                    follow-up questions, and contextual assistance without
                    compromising your privacy.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerSection;
