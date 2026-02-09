import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export interface Instructor {
  id: string;
  name: string;
  title: string;
  description: string;
  studentMessage: string;
  expertise: string[];
  socials: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  gradient: string;
}

export const instructors: Instructor[] = [
  {
    id: "abdul-rafay",
    name: "Abdul Rafay",
    title: "AI Engineer & Instructor",
    description:
      "Abdul Rafay is a passionate AI Engineer specializing in Artificial Intelligence, Agentic AI, Large Language Models (LLMs), Machine Learning, and NLP. He focuses on building real-world AI systems, intelligent agents, and AI-powered applications, with strong emphasis on practical and industry-ready learning.",
    studentMessage:
      "Join us at Rehbar AI Training Hub and transform your career with cutting-edge AI skills. Our hands-on approach ensures you graduate not just with knowledge, but with real-world experience that employers demand. The future of tech starts here.",
    expertise: [
      "Artificial Intelligence",
      "Agentic AI",
      "Large Language Models (LLMs)",
      "Machine Learning & Deep Learning",
      "NLP & AI Chatbots",
    ],
    socials: {
      linkedin: "https://linkedin.com/in/abdulrafay",
      twitter: "https://twitter.com/abdulrafay",
      github: "https://github.com/abdulrafay",
      email: "mailto:abdulrafay@rehbar.ai",
    },
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "hussain-ali",
    name: "Hussain Ali",
    title: "Software Engineer & Full-Stack Instructor",
    description:
      "Hussain Ali is a passionate Software Engineer and Full-Stack Developer experienced in building modern, scalable web applications. He emphasizes clean architecture, real-world development practices, and hands-on project-based learning.",
    studentMessage:
      "Whether you're a beginner or looking to level up your skills, Rehbar AI Training Hub is the place to be. We focus on practical skills that matter in today's tech industry. Start your journey with us and build the career you deserve.",
    expertise: [
      "Full-Stack Web Development",
      "Frontend Development (React, HTML, CSS, JavaScript)",
      "Backend Development & APIs",
      "Databases & Deployment",
    ],
    socials: {
      linkedin: "https://linkedin.com/in/hussainali",
      twitter: "https://twitter.com/hussainali",
      github: "https://github.com/hussainali",
      email: "mailto:hussainali@rehbar.ai",
    },
    gradient: "from-emerald-500 to-teal-600",
  },
];

export const getInstructorById = (id: string): Instructor | undefined => {
  return instructors.find((instructor) => instructor.id === id);
};

