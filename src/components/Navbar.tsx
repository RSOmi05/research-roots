import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/siteData";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "Projects", href: "#projects" },
  { label: "Teaching", href: "#teaching" },
  { label: "CV", href: "#cv" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-lg font-semibold text-foreground tracking-tight">
            {personalInfo.fullName.split(" ").slice(-1)[0]}
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-colors",
                  activeSection === link.href.slice(1)
                    ? "text-accent font-medium"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </a>
            ))}
            <Button variant="ghost" size="icon" onClick={toggleDark} className="ml-2">
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-2">
            <Button variant="ghost" size="icon" onClick={toggleDark}>
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm rounded-md transition-colors",
                  activeSection === link.href.slice(1)
                    ? "text-accent font-medium bg-muted"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
