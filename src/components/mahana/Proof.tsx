import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Proof = () => {
  const cases = [
    {
      company: "Global IT Company",
      category: "SaaS",
      challenge: "Needed to rank for competitive SaaS keywords",
      solution: "Technical SEO + Japanese content strategy",
      result: "Page 1 rankings for 47 target keywords",
      metric: "47 Keywords",
      metricLabel: "Page 1 Rankings",
      growth: 92
    },
    {
      company: "E-commerce Brand",
      category: "Fashion",
      challenge: "PPC ads getting clicks but no sales",
      solution: "Rewrote ad copy + optimized LPs for JP UX",
      result: "3x conversion rate, reduced CPC by 40%",
      metric: "300%",
      metricLabel: "Conversion Rate",
      growth: 300
    },
    {
      company: "B2B SaaS Platform",
      category: "Enterprise",
      challenge: "Zero visibility in Japanese search",
      solution: "Complete site localization + backlink building",
      result: "Organic leads grew from 0 to 85/month",
      metric: "85/mo",
      metricLabel: "Qualified Leads",
      growth: 100
    }
  ];

  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[580px] mx-auto mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-4">
            Real Results for Companies Like Yours
          </h2>
          <p className="text-lg text-muted-foreground">
            We don't just promise growth. We deliver measurable business impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-white/[0.07] rounded-xl overflow-hidden hover:border-[rgba(232,0,45,0.4)] hover:shadow-[0_0_20px_rgba(232,0,45,0.08)] transition-all duration-300 group border-l-[3px] border-l-primary"
            >
              <div className="p-7">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.company}</h3>
                <div className="space-y-3 mb-6">
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Challenge</div>
                    <p className="text-sm text-muted-foreground">{item.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Solution</div>
                    <p className="text-sm text-muted-foreground">{item.solution}</p>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-white/[0.07]">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-secondary">{item.metric}</span>
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.metricLabel}</div>
                  <div className="h-1.5 w-full bg-white/[0.05] mt-3 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-secondary rounded-full"
                    />
                  </div>
                </div>

                <a href="#" className="mt-4 text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm">
                  Read Case Study <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proof;
