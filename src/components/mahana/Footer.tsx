import { Linkedin, Twitter, Facebook, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-footer-bg border-t border-white/[0.05] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1: Company */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img src={logo} alt="Mahana Corporation" className="h-12 w-auto object-contain brightness-110" />
            </div>
            <p className="text-muted-foreground mb-6 leading-[1.8]">
              Japan's #1 digital marketing agency for global companies. We help you enter, grow, and dominate the Japanese market.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">SEO for Japan</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">PPC Management</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Content Localization</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">AI Consulting</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Market Entry Strategy</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Japan Market Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Blog & Insights</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-0.5" />
                <a href="mailto:contact@mahana.jp" className="text-muted-foreground hover:text-white transition-colors">contact@mahana.jp</a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-0.5" />
                <a href="tel:+81300000000" className="text-muted-foreground hover:text-white transition-colors">+81-3-XXXX-XXXX</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Shibuya, Tokyo, Japan<br />
                  150-0002
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.05] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-footer-text">
          <div>© 2026 Mahana Corporation. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
