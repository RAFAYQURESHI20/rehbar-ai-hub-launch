import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  ChevronDown,
  BookOpen,
  Clock,
  CreditCard,
  Award,
  MessageCircle,
  Shield,
  Laptop,
  GraduationCap
} from "lucide-react";

const faqCategories = [
  {
    id: "general",
    title: "General Questions",
    icon: MessageCircle,
    faqs: [
      {
        question: "What is Rehbar AI Training Hub?",
        answer: "Rehbar AI Training Hub is a premier technology education platform specializing in AI, Machine Learning, Web Development, and other cutting-edge technologies. We provide comprehensive online courses designed to transform beginners into industry-ready professionals."
      },
      {
        question: "Who can join your courses?",
        answer: "Our courses are designed for everyone - from complete beginners to professionals looking to upskill. We offer courses at various levels: Beginner Friendly, Intermediate, and Advanced. Each course page specifies the recommended prerequisites."
      },
      {
        question: "What makes Rehbar AI different from other training platforms?",
        answer: "We differentiate ourselves through: 1) Industry-relevant curriculum designed by experts, 2) Hands-on practical projects, 3) Live interactive sessions, 4) One-on-one mentorship, 5) Career support and placement assistance, and 6) A strong community of learners and professionals."
      },
      {
        question: "Do you offer offline/physical classes?",
        answer: "Currently, all our courses are conducted online to provide flexibility. Our online platform includes live sessions, recorded lectures, and interactive learning materials accessible from anywhere in the world."
      }
    ]
  },
  {
    id: "courses",
    title: "Courses & Curriculum",
    icon: BookOpen,
    faqs: [
      {
        question: "What courses do you offer?",
        answer: "We offer a wide range of courses including: Artificial Intelligence, Agentic AI, Machine Learning, Deep Learning, Web Development, Natural Language Processing, Generative AI, Python Programming, and C++ Programming. Visit our Courses page for detailed information."
      },
      {
        question: "How long are the courses?",
        answer: "Most of our courses are 2 months long with intensive training. The duration includes live sessions, self-paced learning, and project work. Some advanced courses may have additional modules."
      },
      {
        question: "What is the course format?",
        answer: "Each course includes: Live instructor-led sessions (2-3 times per week), Recorded video lectures, Reading materials and documentation, Hands-on coding exercises, Real-world projects, Weekly assessments, and Mentor support."
      },
      {
        question: "Do I get a certificate after completing the course?",
        answer: "Yes! Upon successful completion of any course, you will receive a professional certificate from Rehbar AI Training Hub. Our certificates are recognized by industry partners and can be verified online."
      },
      {
        question: "Can I access course materials after completion?",
        answer: "Absolutely! You will have lifetime access to all course materials, including recorded sessions, code repositories, and future updates. This allows you to revisit concepts and stay updated with industry changes."
      }
    ]
  },
  {
    id: "enrollment",
    title: "Enrollment & Payment",
    icon: CreditCard,
    faqs: [
      {
        question: "How do I enroll in a course?",
        answer: "Enrollment is simple: 1) Browse our courses on the Courses page, 2) Select your desired course, 3) Click 'Enroll Now', 4) Complete the payment process, 5) Receive confirmation and access to course materials within 24 hours."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept multiple payment methods including: Credit/Debit Cards (Visa, MasterCard, American Express), Bank Transfers, EasyPaisa, JazzCash, and selected cryptocurrency options. We also offer installment plans for select courses."
      },
      {
        question: "Is there an admission test?",
        answer: "For beginner courses, there is no admission test. For advanced courses, we may recommend a basic assessment to ensure you have the necessary foundations. This helps us personalize your learning journey."
      },
      {
        question: "Can I switch courses after enrollment?",
        answer: "Yes, you can switch to a different course within the first 2 weeks of enrollment, subject to availability. Please contact our support team to facilitate the change. Course credits will be transferred accordingly."
      }
    ]
  },
  {
    id: "schedule",
    title: "Schedule & Flexibility",
    icon: Clock,
    faqs: [
      {
        question: "What are the class timings?",
        answer: "We offer multiple batches with flexible timings. Typically, classes are held in the evening (6:00 PM - 9:00 PM) on weekdays and weekend batches are also available. You can choose a schedule that fits your availability."
      },
      {
        question: "Are the classes live or pre-recorded?",
        answer: "We follow a hybrid model: Live interactive sessions for lectures and Q&A, plus pre-recorded content for self-paced learning. This gives you the flexibility to learn at your own pace while still having access to live instructor support."
      },
      {
        question: "What if I miss a live session?",
        answer: "Don't worry! All live sessions are recorded and made available within 24 hours. You can watch the recordings at your convenience. Additionally, our mentors are available for doubt clarification during designated hours."
      },
      {
        question: "How many hours per week should I dedicate?",
        answer: "We recommend dedicating 10-15 hours per week for optimal learning. This includes attending live sessions, watching recordings, completing assignments, and working on projects. However, the actual time may vary based on your learning pace."
      }
    ]
  },
  {
    id: "career",
    title: "Career Support",
    icon: GraduationCap,
    faqs: [
      {
        question: "Do you provide job placement assistance?",
        answer: "Yes! We have a dedicated career services team that assists students with resume building, interview preparation, and job referrals. Our industry connections help facilitate placements at partner companies."
      },
      {
        question: "What companies hire your graduates?",
        answer: "Our graduates have been hired by leading tech companies including startups, IT service providers, and product-based companies. We can't guarantee jobs, but we provide the skills and support needed to succeed in the job market."
      },
      {
        question: "Do you offer career counseling?",
        answer: "Absolutely! We offer one-on-one career counseling sessions to help you identify your strengths, explore career paths, set goals, and create a roadmap for success. This is included in all our course packages."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Requirements",
    icon: Laptop,
    faqs: [
      {
        question: "What are the technical requirements for joining?",
        answer: "You'll need: A stable internet connection (minimum 10 Mbps), A computer/laptop with at least 8GB RAM, A modern web browser (Chrome, Firefox), Microphone and webcam for live sessions, and determination to learn!"
      },
      {
        question: "Do I need prior programming experience?",
        answer: "It depends on the course. Our Beginner Friendly courses require no prior experience. For Intermediate and Advanced courses, basic programming knowledge is recommended. Check the course page for specific requirements."
      },
      {
        question: "Will I need to install any software?",
        answer: "Most of our courses use cloud-based development environments that require no installation. For courses that need local setup, we provide detailed installation guides and support sessions to help you get started."
      }
    ]
  },
  {
    id: "refunds",
    title: "Refunds & Support",
    icon: Shield,
    faqs: [
      {
        question: "What is your refund policy?",
        answer: "We offer a 7-day money-back guarantee. If you're not satisfied with our training within the first week, you can request a full refund. After this period, refunds are considered on a case-by-case basis. Please refer to our Refund Policy page for detailed terms."
      },
      {
        question: "How can I contact support?",
        answer: "You can reach our support team via: Email (info@rehbarai.com), Phone (+92 300 123 4567), WhatsApp, or through the Contact form on our website. We typically respond within 24 hours."
      }
    ]
  }
];

const FAQs = () => {
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
              Help Center
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Frequently Asked{" "}
              <span className="gradient-text-accent">Questions</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Find answers to common questions about our courses, enrollment, and services.
              Can't find what you're looking for? Contact us!
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

      {/* FAQ Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
          >
            {faqCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <category.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground text-sm">{category.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* FAQ Accordions */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card rounded-2xl border border-border p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-bold text-foreground">
                    {category.title}
                  </h2>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem
                      key={faqIndex}
                      value={`${category.id}-${faqIndex}`}
                      className="border border-border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <Award className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Can't find the answer you're looking for? Please reach out to our support team
              and we'll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" asChild>
                <a href="tel:+923001234567">Call Us</a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/contact">Contact Support</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;

