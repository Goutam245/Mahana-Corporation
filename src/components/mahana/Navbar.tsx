import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#proof" },
    { name: "Process", href: "#process" },
    { name: "Team", href: "#team" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/[0.06] ${
        isScrolled ? "bg-[rgba(5,9,26,0.95)] py-2" : "bg-[rgba(5,9,26,0.9)] py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="Mahana Corporation" 
            className="h-10 w-auto object-contain brightness-110"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white text-sm font-semibold px-5 py-2 h-9 shadow-[0_0_20px_rgba(232,0,45,0.2)]">
            Get Started
          </Button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[rgba(5,9,26,0.98)] backdrop-blur-xl border-b border-white/[0.06] p-4 md:hidden flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground font-medium py-2 hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full bg-primary text-white">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
