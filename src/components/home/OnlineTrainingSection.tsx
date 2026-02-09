import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Video, 
  Globe2, 
  Users, 
  Calendar, 
  MessageCircle,
  Play,
  VideoIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/useAnimations";

// Feature data
const features = [
  {
    icon: Video,
    title: "Live Classes via Google Meet & Zoom",
    description: "Interactive sessions in real-time",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Globe2,
    title: "Learn from Anywhere",
    description: "Access training from worldwide",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Direct Instructor Interaction",
    description: "Connect with expert mentors",
    color: "from-purple-500 to-violet-500"
  },
  {
    icon: Calendar,
    title: "Flexible Schedules & Recordings",
    description: "Learn at your own pace",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: MessageCircle,
    title: "Real-time Q&A & Mentorship",
    description: "Get instant answers & guidance",
    color: "from-emerald-500 to-teal-500"
  }
];

// Platform badge component
function PlatformBadge({ 
  icon: Icon, 
  name, 
  delay 
}: { 
  icon: React.ComponentType<{ className?: string }>; 
  name: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ scale: 1.05 }}
      className="flex items-center gap-2 px-4 py-2 bg-slate-800/80 backdrop-blur-sm rounded-full border border-white/10"
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium text-white">{name}</span>
    </motion.div>
  );
}

// Feature card component
function FeatureCard({ 
  feature, 
  index 
}: { 
  feature: typeof features[0]; 
  index: number;
}) {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative bg-slate-800/60 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
    >
      {/* Hover glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${feature.color.replace('from-', '').replace(' to-', ', ')}, transparent 70%)`,
          filter: 'blur(20px)',
          opacity: 0.15
        }}
      />
      
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <feature.icon className="w-6 h-6 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="font-display font-semibold text-white text-lg mb-1 group-hover:text-cyan-400 transition-colors">
          {feature.title}
        </h3>
        <p className="text-slate-400 text-sm">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

import React from "react";

export function OnlineTrainingSection() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section 
      ref={ref}
      className="relative py-20 bg-transparent overflow-hidden"
    >
      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-transparent blur-3xl"
        animate={{
          scale: isInView ? [1, 1.1, 1] : 1,
          opacity: isInView ? [0.4, 0.6, 0.4] : 0.4,
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Animated dots/grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 via-emerald-500/10 to-cyan-500/20 backdrop-blur-sm border border-green-500/30 mb-6"
          >
            <motion.span
              className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]"
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.8, 1, 0.8],
                boxShadow: [
                  "0 0 8px rgba(74, 222, 128, 0.6)",
                  "0 0 12px rgba(74, 222, 128, 0.8)",
                  "0 0 8px rgba(74, 222, 128, 0.6)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-green-200 text-sm font-medium">
              Live • Online • Interactive
            </span>
          </motion.div>

          {/* Title */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            100% <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Live Online Training</span>
          </h2>

          {/* Subtitle */}
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Learn from industry experts through live interactive sessions — no recordings, no compromise.
          </p>

          {/* Platform Badges */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <PlatformBadge icon={VideoIcon} name="Google Meet" delay={0.2} />
            <PlatformBadge icon={Video} name="Zoom" delay={0.3} />
            <PlatformBadge icon={Video} name="Other Platforms" delay={0.4} />
          </div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block"
          >
            <Button 
              variant="hero" 
              size="xl" 
              asChild
              className="group"
            >
              <Link to="/enroll">
                <motion.span
                  className="relative flex items-center gap-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Play className="w-5 h-5" />
                </motion.span>
                Join Live Classes
              </Link>
            </Button>
          </motion.div>

          {/* Trust text */}
          <p className="text-slate-400 text-sm mt-4">
            💬 Have questions?{" "}
            <Link 
              to="/contact" 
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
            >
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Bottom gradient */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      />
    </section>
  );
}

export default OnlineTrainingSection;

