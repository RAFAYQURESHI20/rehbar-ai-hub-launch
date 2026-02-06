import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Clock,
  ChevronRight,
  Brain,
  Bot,
  Code2,
  Sparkles,
  TrendingUp,
  Users
} from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in 2025: Trends Every Developer Should Know",
    excerpt: "Explore the emerging AI technologies that will shape the software development landscape in the coming year, from agentic AI to multimodal models.",
    category: "Artificial Intelligence",
    author: "Dr. Hassan Ahmed",
    date: "January 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    icon: Brain,
    gradient: "from-violet-500 to-purple-600"
  },
  {
    id: 2,
    title: "Building Your First AI Agent: A Complete Guide",
    excerpt: "Step-by-step tutorial on creating autonomous AI agents that can reason, plan, and execute complex tasks independently.",
    category: "Agentic AI",
    author: "Sarah Khan",
    date: "January 10, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop",
    icon: Bot,
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: 3,
    title: "Web Development in 2025: New Frameworks and Best Practices",
    excerpt: "Discover the latest trends in web development, from new JavaScript frameworks to innovative deployment strategies.",
    category: "Web Development",
    author: "Ali Rahman",
    date: "January 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    icon: Code2,
    gradient: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    title: "Generative AI: Beyond Chatbots - Real-World Applications",
    excerpt: "How businesses are leveraging generative AI for content creation, code generation, and creative workflows.",
    category: "Generative AI",
    author: "Fatima Begum",
    date: "December 28, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=400&fit=crop",
    icon: Sparkles,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    id: 5,
    title: "Transitioning to a Tech Career: A Complete Roadmap",
    excerpt: "Your comprehensive guide to switching careers into tech, regardless of your background or experience level.",
    category: "Career Advice",
    author: "Dr. Hassan Ahmed",
    date: "December 20, 2024",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    icon: TrendingUp,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    id: 6,
    title: "Success Stories: From Beginner to AI Engineer",
    excerpt: "Inspiring journeys of our students who transformed their careers through our AI and tech programs.",
    category: "Student Stories",
    author: "Marketing Team",
    date: "December 15, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=400&fit=crop",
    icon: Users,
    gradient: "from-orange-500 to-red-500"
  }
];

const categories = [
  { name: "All Posts", count: 6 },
  { name: "Artificial Intelligence", count: 2 },
  { name: "Agentic AI", count: 1 },
  { name: "Web Development", count: 1 },
  { name: "Generative AI", count: 1 },
  { name: "Career Advice", count: 1 }
];

const Blog = () => {
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
              Our Blog
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Insights &{" "}
              <span className="gradient-text-accent">Articles</span>
            </h1>
            <p className="text-lg text-primary-foreground/80">
              Stay updated with the latest trends in AI, technology, and career development.
              Expert insights, tutorials, and success stories.
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

      {/* Featured Post */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="font-display text-3xl font-bold text-foreground mb-4">
              Featured Article
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative rounded-3xl overflow-hidden bg-card border border-border"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${blogPosts[0].gradient} opacity-20`} />
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${blogPosts[0].gradient} text-white text-xs font-medium`}>
                    {blogPosts[0].category}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {blogPosts[0].readTime}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    By {blogPosts[0].author}
                  </span>
                  <Button variant="gradient">
                    Read More
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  index === 0
                    ? "gradient-bg text-white"
                    : "bg-card text-muted-foreground hover:text-foreground hover:bg-card/80"
                }`}
              >
                {category.name}
                <span className="ml-2 opacity-60">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="relative h-48">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${post.gradient} opacity-30`} />
                  <div className={`absolute top-4 left-4 w-10 h-10 rounded-xl bg-gradient-to-r ${post.gradient} flex items-center justify-center`}>
                    <post.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary">
                      {post.category}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-primary-foreground/80 mb-6">
              Subscribe to our newsletter and get the latest articles delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="gradient">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

