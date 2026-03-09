import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, CheckCircle, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-12 overflow-hidden" style={{ background: "linear-gradient(135deg, #05091A 0%, #0D1A3A 50%, #1A0A0F 100%)" }}>
      {/* Decorative Japanese character watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[40rem] font-bold text-white/[0.04] select-none pointer-events-none leading-none" aria-hidden="true">
        大
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/30 text-sm font-semibold text-primary">
              🇯🇵 Japan's Most Trusted Agency
            </div>
            
            <h1 className="text-[38px] md:text-[56px] lg:text-[68px] font-black leading-[1.05] tracking-[-1.5px] text-white">
              Japan's #1 Choice for Global Companies Breaking Into{" "}
              <span className="text-primary">Japanese Digital Markets</span>
            </h1>
            
            <p className="text-lg md:text-xl text-subheading max-w-2xl">
              20+ Years | 500+ Successful Campaigns | SEO, PPC & AI-Powered Growth
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-9 h-14 font-bold rounded-md shadow-[0_0_30px_rgba(232,0,45,0.3)] hover:-translate-y-0.5 transition-all duration-300">
                Get Your Free Japan Market Analysis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/5 hover:text-white text-lg h-14 bg-transparent">
                See Our Case Studies ↓
              </Button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap items-center gap-0 pt-4">
              {[
                { icon: <TrendingUp className="w-5 h-5" />, value: "+147%", label: "Avg. Traffic Growth" },
                { icon: <CheckCircle className="w-5 h-5" />, value: "¥2.3B+", label: "Revenue Generated" },
                { icon: <Trophy className="w-5 h-5" />, value: "98%", label: "Client Retention" },
              ].map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="text-center px-6 py-3">
                    <div className="text-[32px] md:text-[40px] font-extrabold text-secondary leading-none mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</div>
                    <div className="w-8 h-0.5 bg-secondary/40 mx-auto mt-2" />
                  </div>
                  {index < 2 && <div className="hidden sm:block w-px h-12 bg-white/10" />}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-card rounded-xl p-6 md:p-8 border border-white/[0.07] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
              
              <h3 className="text-2xl font-bold mb-2 text-white">Get Expert Advice</h3>
              <p className="text-muted-foreground mb-6 text-sm">Response within 1-2 business days. 100% confidential.</p>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-subheading">Company Name</Label>
                  <Input id="company" placeholder="e.g. Mahana Corp" className="bg-background/50 border-white/[0.07] text-white placeholder:text-muted-foreground" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="challenge" className="text-subheading">Main Challenge</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-white/[0.07] text-white">
                      <SelectValue placeholder="Select your challenge" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/[0.07]">
                      <SelectItem value="entry">Entering Japan for the first time</SelectItem>
                      <SelectItem value="seo">SEO not working in Japan</SelectItem>
                      <SelectItem value="ppc">PPC costs too high</SelectItem>
                      <SelectItem value="content">Need Japanese content</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-subheading">Work Email</Label>
                  <Input id="email" type="email" placeholder="name@company.com" className="bg-background/50 border-white/[0.07] text-white placeholder:text-muted-foreground" />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white h-12 text-lg font-bold mt-2 shadow-[0_0_30px_rgba(232,0,45,0.3)] transition-all">
                  Get Free Strategy Session
                </Button>
                
                <p className="text-xs text-center text-muted-foreground mt-4 flex items-center justify-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  Currently accepting new clients
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
