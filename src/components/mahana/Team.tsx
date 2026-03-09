import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const Team = () => {
  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="aspect-[3/4] rounded-xl bg-card border border-white/[0.07] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex items-center justify-center text-muted-foreground text-sm">Team Member 1</div>
                </div>
                <div className="aspect-[3/4] rounded-xl bg-card border border-white/[0.07] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex items-center justify-center text-muted-foreground text-sm">Team Member 2</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-xl bg-card border border-white/[0.07] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex items-center justify-center text-muted-foreground text-sm">Team Member 3</div>
                </div>
                <div className="aspect-[3/4] rounded-xl bg-primary/10 border border-primary/20 overflow-hidden flex flex-col items-center justify-center text-center p-4">
                  <span className="text-[52px] font-extrabold text-secondary mb-2 leading-none">20+</span>
                  <span className="text-sm font-medium text-white">Experts in Tokyo</span>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl" />
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-6">
                Meet the Team Behind Your Success
              </h2>
              <p className="text-lg text-muted-foreground leading-[1.8]">
                We are a diverse team of digital natives based in Shibuya, Tokyo. With a mix of Japanese, American, and European backgrounds, we bridge the cultural gap so you don't have to.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Based in Shibuya, Tokyo's Digital Hub",
                "All team members fluent in Japanese + English",
                "Combined 150+ years of digital marketing experience",
                "Specialized in cross-cultural B2B campaigns"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-card border border-white/[0.07] p-4 rounded-lg hover:border-[rgba(232,0,45,0.4)] transition-all">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="font-medium text-white">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 flex gap-6 opacity-40">
              <div className="h-10 bg-white/10 w-24 rounded" />
              <div className="h-10 bg-white/10 w-24 rounded" />
              <div className="h-10 bg-white/10 w-24 rounded" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;
