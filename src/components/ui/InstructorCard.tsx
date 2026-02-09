import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail, ChevronRight } from "lucide-react";
import { Instructor } from "@/data/instructors";
import { cn } from "@/lib/utils";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface InstructorCardProps {
  instructor: Instructor;
  index?: number;
}

export function InstructorCard({ instructor, index = 0 }: InstructorCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        className="group bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden">
          {/* Gradient Overlay based on instructor */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br opacity-80",
              instructor.gradient
            )}
          />

          {/* Placeholder pattern overlay */}
          <div className="absolute inset-0 grid-pattern opacity-20" />

          {/* Initials Avatar */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <span className="text-4xl font-bold text-white">
                {instructor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
            </motion.div>
          </div>

          {/* Gradient Fade at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />

          {/* Social Links */}
          <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            {instructor.socials.linkedin && (
              <a
                href={instructor.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}
            {instructor.socials.twitter && (
              <a
                href={instructor.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-5 h-5" />
              </a>
            )}
            {instructor.socials.github && (
              <a
                href={instructor.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {instructor.socials.email && (
              <a
                href={instructor.socials.email}
                onClick={(e) => e.stopPropagation()}
                className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
            {instructor.name}
          </h3>
          <p className="text-primary text-sm font-medium mb-3">
            {instructor.title}
          </p>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {instructor.description}
          </p>

          {/* Expertise Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {instructor.expertise.slice(0, 3).map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 rounded bg-primary/10 text-primary text-xs font-medium"
              >
                {skill}
              </span>
            ))}
            {instructor.expertise.length > 3 && (
              <span className="px-2 py-1 rounded bg-muted text-muted-foreground text-xs">
                +{instructor.expertise.length - 3} more
              </span>
            )}
          </div>

          {/* View Profile Button */}
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
          >
            View Profile
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* Instructor Profile Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-card border-border max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-4">
              <div
                className={cn(
                  "w-16 h-16 rounded-xl bg-gradient-to-br flex items-center justify-center text-white text-xl font-bold",
                  instructor.gradient
                )}
              >
                {instructor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  {instructor.name}
                </h3>
                <p className="text-primary font-medium">
                  {instructor.title}
                </p>
              </div>
            </DialogTitle>
            <DialogDescription className="sr-only">
              Instructor profile for {instructor.name}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-4 space-y-6">
            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">
                About
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {instructor.description}
              </p>
            </div>

            {/* Expertise */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Expertise
              </h4>
              <div className="flex flex-wrap gap-2">
                {instructor.expertise.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-3 py-1.5 rounded-lg bg-gradient-to-r text-white text-sm font-medium",
                      instructor.gradient
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3">
                Connect
              </h4>
              <div className="flex gap-3">
                {instructor.socials.linkedin && (
                  <a
                    href={instructor.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                )}
                {instructor.socials.twitter && (
                  <a
                    href={instructor.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                )}
                {instructor.socials.github && (
                  <a
                    href={instructor.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {instructor.socials.email && (
                  <a
                    href={instructor.socials.email}
                    className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

