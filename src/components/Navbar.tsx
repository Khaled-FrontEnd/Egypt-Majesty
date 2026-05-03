import { motion, useScroll, useTransform } from "framer-motion";
import { ThemeContext } from "@/App";
import { useContext, useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#hero" },
    { name: "الحضارة", href: "#ancient" },
    { name: "السياحة", href: "#tourism" },
    { name: "الثقافة", href: "#culture" },
    { name: "التاريخ الحديث", href: "#modern" },
    { name: "مصر اليوم", href: "#today" },
    { name: "اختبارك", href: "#quiz" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#hero" className="text-2xl font-serif font-bold text-primary flex items-center gap-2" data-testid="link-logo">
          <span>🏺</span>
          مصر الخالدة
        </a>

        {/* Desktop Navigation - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200"
              data-testid={`link-${link.name}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted text-primary transition-colors"
            data-testid="button-theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Theme Toggle - Left side */}
        <div className="md:hidden flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-muted text-primary transition-colors bg-background/50 backdrop-blur-sm"
            data-testid="button-theme-toggle-mobile"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}