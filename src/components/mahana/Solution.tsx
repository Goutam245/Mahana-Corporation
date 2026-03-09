import { motion } from "framer-motion";
import { ArrowRight, MapPin, BarChart3, Clock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

const Solution = () => {
  const features = [
    {
      icon: <MapPin className="w-7 h-7 text-primary" />,
      title: "Tokyo-Based Team, Global Mindset",
      description: "All staff fluent in Japanese + English. Located in Shibuya, Tokyo's digital marketing hub. We understand both YOUR business culture and Japan's."
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-primary" />,
      title: "Data-Driven, Not Opinion-Driven",
      description: "Real-time dashboards (not monthly PDFs). Clear ROI tracking aligned to YOUR KPIs. A/B testing built into every campaign."
    },
    {
      icon: <Clock className="w-7 h-7 text-primary" />,
      title: "18+ Years Specializing in Japan Entry",
      description: "Not generalists - Japan digital marketing is ALL we do. Successfully launched 500+ brands. From SEO to trade show staffing."
    },
    {
      icon: <Cpu className="w-7 h-7 text-primary" />,
      title: "Proprietary AI-Powered Tools",
      description: "Japanese keyword discovery engine. Cultural sensitivity checker for ad copy. Competitor intelligence platform for Japan market."
    }
  ];

  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-muted relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[580px] mx-auto mb-16">
          <div className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">The Mahana Difference</div>
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-4">
            Your Bridge Between Cultures
          </h2>
          <p className="text-lg text-muted-foreground">
            We combine local expertise with global standards to deliver results, not just reports.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-card border border-white/[0.07] rounded-xl p-7 flex gap-6 hover:border-[rgba(232,0,45,0.4)] hover:shadow-[0_0_20px_rgba(232,0,45,0.08)] transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-[1.8] text-base">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-bold shadow-[0_0_30px_rgba(232,0,45,0.3)]">
            See How We Do It - Free Strategy Call
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solution;
