import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Trainers", href: "/trainers" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const mouseX = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Track mouse position for animated underline
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    mouseX.set(x);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/10 bg-slate-950",
        isScrolled ? "backdrop-blur-xl shadow-lg py-3" : "backdrop-blur-xl py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative"
          >
            <img
              src="/rehbar.jpeg"
              alt="Rehbar AI Training Hub Logo"
              className="w-14 h-14 object-contain"
            />
            {/* Glow effect on hover */}
            <motion.div
              className="absolute inset-0 rounded-xl bg-primary/50 blur-lg"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.5 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          <div className="flex flex-col">
            <span className={cn(
              "font-display font-bold text-lg leading-tight transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}>
              Rehbar AI
            </span>
            <span className={cn(
              "text-xs font-medium transition-colors",
              isScrolled ? "text-muted-foreground" : "text-white/70"
            )}>
              Training Hub
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 relative">
          {/* Animated underline track */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-primary rounded-full pointer-events-none"
            style={{
              left: 0,
              width: 80,
              x: springX,
              opacity: 0,
            }}
            animate={{
              opacity: isScrolled ? 1 : 0.7,
            }}
          />
          
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative",
                location.pathname === link.href
                  ? isScrolled
                    ? "text-primary bg-primary/10"
                    : "text-white bg-white/20"
                  : isScrolled
                  ? "text-foreground/70 hover:text-foreground hover:bg-muted"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
              onMouseMove={handleMouseMove}
            >
              {link.name}
              {/* Active indicator */}
              {location.pathname === link.href && (
                <motion.div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                  layoutId="activeNavDot"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            variant="hero"
            size="sm"
            asChild
            className="group"
          >
            <Link to="/contact">
              Get Started
            </Link>
          </Button>
          <Button
            variant={isScrolled ? "gradient" : "hero"}
            size="sm"
            asChild
            className="group"
          >
            <Link to="/courses">
              Explore Courses
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled
              ? "text-foreground hover:bg-muted"
              : "text-white hover:bg-white/10"
          )}
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.div>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-t border-border"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        "px-4 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between",
                        location.pathname === link.href
                          ? "text-primary bg-primary/10"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {link.name}
                      {location.pathname === link.href && (
                        <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col gap-3 mt-4 pt-4 border-t border-border"
              >
                <Button variant="hero" asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="gradient" asChild className="w-full">
                  <Link to="/courses">Explore Courses</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
  );
}
