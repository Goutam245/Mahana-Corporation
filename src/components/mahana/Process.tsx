import { motion } from "framer-motion";

const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery & Audit",
      duration: "Days 1-7",
      desc: "Free 60-min consultation, competitive analysis, and custom strategy proposal with projected ROI."
    },
    {
      number: "02",
      title: "Foundation",
      duration: "Days 8-30",
      desc: "Account setup, keyword research, content/ad creation by native copywriters, and LP optimization."
    },
    {
      number: "03",
      title: "Launch & Optimize",
      duration: "Days 31-60",
      desc: "Campaign goes live. Daily monitoring and weekly micro-adjustments. First results typically visible."
    },
    {
      number: "04",
      title: "Scale & Report",
      duration: "Days 61-90",
      desc: "Double down on what's working. Comprehensive report with business insights. Plan for quarter 2 growth."
    }
  ];

  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[580px] mx-auto mb-20">
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-4">
            From First Call to Market Leadership
          </h2>
          <p className="text-lg text-muted-foreground">
            Your 90-Day Roadmap to Success in Japan
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-white/[0.07] -translate-y-1/2 z-0">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-full bg-primary origin-left"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`
                  bg-card p-6 rounded-xl border border-white/[0.07] hover:border-[rgba(232,0,45,0.4)] hover:shadow-[0_0_20px_rgba(232,0,45,0.08)] transition-all duration-300
                  ${index % 2 === 0 ? "md:mb-32" : "md:mt-32"}
                `}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl border-4 border-background shadow-lg z-20 hidden md:flex">
                    {step.number}
                  </div>
                  
                  <div className="md:hidden w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {step.number}
                  </div>

                  <div className="text-primary font-bold text-sm mb-2">{step.duration}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-[1.8]">
                    {step.desc}
                  </p>
                </div>
                
                <div className={`hidden md:block absolute left-1/2 -translate-x-1/2 w-0.5 h-16 border-l-2 border-dashed border-white/10 -z-10
                  ${index % 2 === 0 ? "top-full" : "bottom-full"}
                `} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
