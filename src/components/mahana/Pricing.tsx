import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[580px] mx-auto mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-4">
            Transparent Investment Plans
          </h2>
          <p className="text-lg text-muted-foreground">
            No hidden fees. Choose the level of support that fits your market entry stage.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Starter */}
          <div className="bg-card border border-white/[0.07] rounded-xl overflow-hidden hover:border-[rgba(232,0,45,0.4)] hover:shadow-[0_0_20px_rgba(232,0,45,0.08)] transition-all duration-300">
            <div className="p-8 border-b border-white/[0.07] text-center">
              <h3 className="text-xl font-bold text-white mb-2">Market Entry</h3>
              <div className="text-white"><span className="text-[52px] font-extrabold">$3,500</span><span className="text-muted-foreground text-base">/mo</span></div>
              <p className="text-sm text-muted-foreground mt-2">Best for testing the waters</p>
            </div>
            <div className="p-8 space-y-4">
              <ul className="space-y-4">
                {["SEO OR PPC (choose one)", "Japanese Keyword Research", "Monthly Reporting", "Email Support", "1 Strategy Call / mo"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-white/[0.15] text-white hover:bg-white/5 hover:text-white mt-4 bg-transparent">
                Start with Basic
              </Button>
            </div>
          </div>

          {/* Growth - Recommended */}
          <motion.div 
            initial={{ y: 0 }}
            whileInView={{ y: -12 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-card border-2 border-primary rounded-xl overflow-hidden relative shadow-[0_0_40px_rgba(232,0,45,0.15)] scale-[1.03]">
              <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                Most Popular
              </div>
              <div className="p-8 border-b border-white/[0.07] text-center pt-10">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                  Growth Accelerator <Star className="w-4 h-4 fill-secondary text-secondary" />
                </h3>
                <div className="text-white"><span className="text-[52px] font-extrabold">$7,500</span><span className="text-muted-foreground text-base">/mo</span></div>
                <p className="text-sm text-muted-foreground mt-2">For scaling companies</p>
              </div>
              <div className="p-8 space-y-4">
                <ul className="space-y-4">
                  {["SEO + PPC Combined", "Content Creation (4 posts/mo)", "Bi-weekly Strategy Calls", "Landing Page Optimization", "Competitor Intelligence", "Priority Support"].map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="mt-0.5 rounded-full bg-secondary/20 p-0.5">
                        <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                      </div>
                      <span className="text-white font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(232,0,45,0.3)] h-12 text-lg font-bold mt-4">
                  Get Growth Plan
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Enterprise */}
          <div className="bg-card border border-white/[0.07] rounded-xl overflow-hidden hover:border-[rgba(232,0,45,0.4)] hover:shadow-[0_0_20px_rgba(232,0,45,0.08)] transition-all duration-300">
            <div className="p-8 border-b border-white/[0.07] text-center">
              <h3 className="text-xl font-bold text-white mb-2">Full-Spectrum</h3>
              <div className="text-white"><span className="text-[52px] font-extrabold">Custom</span><span className="text-muted-foreground text-base">/mo</span></div>
              <p className="text-sm text-muted-foreground mt-2">For serious market investment</p>
            </div>
            <div className="p-8 space-y-4">
              <ul className="space-y-4">
                {["Everything in Growth", "AI Consulting Integration", "Trade Show Support", "Dedicated Account Manager", "Weekly Strategy Calls", "Custom Integrations"].map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full border-white/[0.15] text-white hover:bg-white/5 hover:text-white mt-4 bg-transparent">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
