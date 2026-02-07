import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import Index from "./pages/Index";
import About from "./pages/About";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import Contact from "./pages/Contact";
import Trainers from "./pages/Trainers";
import Blog from "./pages/Blog";
import FAQs from "./pages/FAQs";
import Careers from "./pages/Careers";
import Enrollment from "./pages/Enrollment";
import ApplyInstructor from "./pages/ApplyInstructor";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";

const queryClient = new QueryClient();

// Wrap pages with PageTransition
const IndexPage = () => (
  <PageTransition>
    <Index />
  </PageTransition>
);

const AboutPage = () => (
  <PageTransition>
    <About />
  </PageTransition>
);

const CoursesPage = () => (
  <PageTransition>
    <Courses />
  </PageTransition>
);

const CourseDetailPage = () => (
  <PageTransition>
    <CourseDetail />
  </PageTransition>
);

const ContactPage = () => (
  <PageTransition>
    <Contact />
  </PageTransition>
);

const TrainersPage = () => (
  <PageTransition>
    <Trainers />
  </PageTransition>
);

const BlogPage = () => (
  <PageTransition>
    <Blog />
  </PageTransition>
);

const FAQsPage = () => (
  <PageTransition>
    <FAQs />
  </PageTransition>
);

const CareersPage = () => (
  <PageTransition>
    <Careers />
  </PageTransition>
);

const EnrollmentPage = () => (
  <PageTransition>
    <Enrollment />
  </PageTransition>
);

const ApplyInstructorPage = () => (
  <PageTransition>
    <ApplyInstructor />
  </PageTransition>
);

const PrivacyPolicyPage = () => (
  <PageTransition>
    <PrivacyPolicy />
  </PageTransition>
);

const TermsOfServicePage = () => (
  <PageTransition>
    <TermsOfService />
  </PageTransition>
);

const RefundPolicyPage = () => (
  <PageTransition>
    <RefundPolicy />
  </PageTransition>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
<Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/courses/:courseId" element={<CourseDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/trainers" element={<TrainersPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/enroll" element={<EnrollmentPage />} />
          <Route path="/apply-instructor" element={<ApplyInstructorPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
