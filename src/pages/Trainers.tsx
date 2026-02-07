import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { 
  Linkedin, 
  Twitter, 
  Github,
  Award,
  Briefcase,
  GraduationCap
} from "lucide-react";

const trainers = [
  {
    id: 1,
    name: "Dr. Sarah Khan",
    role: "AI & ML Lead Instructor",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Former Google AI researcher with 10+ years of experience in machine learning and deep learning. PhD from MIT.",
    expertise: ["Deep Learning", "NLP", "Computer Vision"],
    experience: "10+ Years",
    education: "PhD, MIT",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 2,
    name: "Ahmed Raza",
    role: "Data Science Instructor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Data Science lead at Microsoft with expertise in big data analytics and machine learning. 8+ years in the industry.",
    expertise: ["Python", "Big Data", "Statistical Modeling"],
    experience: "8+ Years",
    education: "MS, Stanford",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 3,
    name: "Fatima Zaidi",
    role: "Full Stack Development Lead",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    bio: "Full-stack engineer with experience at Meta and startup founder. Expert in React, Node.js, and cloud technologies.",
    expertise: ["React", "Node.js", "Cloud Architecture"],
    experience: "7+ Years",
    education: "BS, LUMS",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 4,
    name: "Hassan Ali",
    role: "Mobile Development Instructor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Senior mobile engineer at Uber. Built apps with millions of downloads on iOS and Android platforms.",
    expertise: ["React Native", "Flutter", "iOS Development"],
    experience: "6+ Years",
    education: "BS, NUST",
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    id: 5,
    name: "Ayesha Malik",
    role: "Cyber Security Expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    bio: "Certified ethical hacker and security consultant. Former security lead at a Fortune 500 company.",
    expertise: ["Penetration Testing", "Network Security", "OWASP"],
    experience: "9+ Years",
    education: "MS, FAST",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 6,
    name: "Bilal Ahmed",
    role: "UI/UX Design Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    bio: "Principal designer at Spotify. Has led design teams at multiple startups and taught at design schools.",
    expertise: ["Figma", "Design Systems", "User Research"],
    experience: "8+ Years",
    education: "MFA, RISD",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    id: 7,
    name: "Zainab Hussain",
    role: "Cloud & DevOps Instructor",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    bio: "AWS Solutions Architect and DevOps engineer. Has built and managed infrastructure for startups and enterprises.",
    expertise: ["AWS", "Kubernetes", "CI/CD"],
    experience: "7+ Years",
    education: "MS, Carnegie Mellon",
    socials: {
      linkedin: "#",
      github: "#",
    },
  },
  {
    id: 8,
    name: "Omar Sheikh",
    role: "Freelancing & Career Coach",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
    bio: "Top-rated freelancer on Upwork with $1M+ earnings. Helps students build successful freelance careers.",
    expertise: ["Client Acquisition", "Personal Branding", "Proposal Writing"],
    experience: "10+ Years",
    education: "MBA, IBA",
    socials: {
      linkedin: "#",
      twitter: "#",
    },
  },
];

const Trainers = () => {
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
              Our Trainers
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Learn from <span className="text-white">Industry Experts</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Our trainers bring real-world experience from top tech companies 
              like Google, Microsoft, Meta, and more.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Trainers Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-transparent to-transparent" />
                  
                  {/* Social Links */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {trainer.socials.linkedin && (
                      <a
                        href={trainer.socials.linkedin}
                        className="w-10 h-10 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    )}
                    {trainer.socials.twitter && (
                      <a
                        href={trainer.socials.twitter}
                        className="w-10 h-10 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    )}
                    {trainer.socials.github && (
                      <a
                        href={trainer.socials.github}
                        className="w-10 h-10 rounded-lg bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-bold text-foreground mb-1">
                    {trainer.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {trainer.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {trainer.bio}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" />
                      {trainer.experience}
                    </span>
                    <span className="flex items-center gap-1">
                      <GraduationCap className="w-3 h-3" />
                      {trainer.education}
                    </span>
                  </div>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {trainer.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join as Trainer CTA */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              If you're an industry expert passionate about teaching and mentoring, 
              we'd love to hear from you. Join our team of world-class instructors.
            </p>
<a
              href="/apply-instructor"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl gradient-bg text-primary-foreground font-semibold hover:shadow-xl transition-shadow"
            >
              Apply as Instructor
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Trainers;
