import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, Search, Target, PenTool, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const [activeTab, setActiveTab] = useState("seo");

  const services = {
    seo: {
      id: "seo",
      icon: <Search className="w-5 h-5" />,
      label: "SEO",
      title: "Japanese SEO that Actually Ranks",
      description: "Don't just translate keywords. We identify the actual search terms Japanese decision-makers use and build authority in your niche.",
      features: [
        "Technical SEO Audit for Japanese search engines",
        "Native Japanese Content Strategy",
        "Local Link Building & PR",
        "Google & Yahoo! Japan Optimization",
        "Schema Markup for Japanese Entities"
      ],
      caseStudy: {
        title: "Tourism Client Success",
        stat: "+50% organic traffic, +47% booking revenue in 12 months"
      }
    },
    ppc: {
      id: "ppc",
      icon: <Target className="w-5 h-5" />,
      label: "PPC / SEM",
      title: "High-ROI Paid Advertising",
      description: "Stop wasting budget on direct translations. We create culturally resonant campaigns across Google, Yahoo! Japan, LINE, and Facebook.",
      features: [
        "Account Structure Optimization",
        "Native Ad Copywriting",
        "Landing Page CRO",
        "Cross-channel Retargeting",
        "Real-time Bidding Management"
      ],
      caseStudy: {
        title: "SaaS Client Success",
        stat: "Reduced CPA by 40% while doubling lead volume"
      }
    },
    content: {
      id: "content",
      icon: <PenTool className="w-5 h-5" />,
      label: "Content & Localization",
      title: "Transcreation, Not Translation",
      description: "Direct translation fails in Japan. We rewrite your message to resonate with local cultural nuances while maintaining your brand voice.",
      features: [
        "Website Localization",
        "Blog & Article Production",
        "Whitepaper & eBook Creation",
        "Social Media Content",
        "Video Subtitling & Dubbing"
      ],
      caseStudy: {
        title: "E-commerce Client Success",
        stat: "3x conversion rate increase after content localization"
      }
    },
    ai: {
      id: "ai",
      icon: <Bot className="w-5 h-5" />,
      label: "AI Consulting",
      title: "AI-Powered Market Entry",
      description: "Leverage our proprietary AI tools to analyze market gaps, competitor strategies, and consumer sentiment at unprecedented speed.",
      features: [
        "Market Opportunity Analysis",
        "Competitor Intelligence",
        "Sentiment Analysis",
        "Automated Content Scaling",
        "Predictive Trend Modeling"
      ],
      caseStudy: {
        title: "FinTech Client Success",
        stat: "Identified 3 untapped market segments in 2 weeks"
      }
    }
  };

  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[580px] mx-auto mb-12">
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-4">Comprehensive Japan Market Solutions</h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to succeed in Japan, under one roof.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-white/[0.07] pb-1">
          {Object.values(services).map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-all relative ${
                activeTab === service.id 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              {service.icon}
              {service.label}
              {activeTab === service.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-primary"
                />
              )}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white">{services[activeTab as keyof typeof services].title}</h3>
                  <p className="text-lg text-muted-foreground leading-[1.8]">
                    {services[activeTab as keyof typeof services].description}
                  </p>
                  
                  <ul className="space-y-3">
                    {services[activeTab as keyof typeof services].features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-subheading">
                        <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white gap-2 font-bold shadow-[0_0_20px_rgba(232,0,45,0.2)]">
                      Learn More About {services[activeTab as keyof typeof services].label}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-card border border-white/[0.07] rounded-xl overflow-hidden p-8">
                    <div className="mb-6 inline-flex p-3 rounded-lg bg-secondary/10 text-secondary">
                      {services[activeTab as keyof typeof services].icon}
                    </div>
                    
                    <div className="bg-secondary/10 border border-secondary/20 rounded-xl p-6 mb-6">
                      <div className="text-secondary font-bold mb-2 uppercase text-xs tracking-wider">Case Study</div>
                      <h4 className="font-bold text-white mb-2">{services[activeTab as keyof typeof services].caseStudy.title}</h4>
                      <div className="text-xl font-bold text-secondary">
                        {services[activeTab as keyof typeof services].caseStudy.stat}
                      </div>
                    </div>

                    <div className="h-40 w-full bg-white/[0.03] rounded-lg" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Services;
