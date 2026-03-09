import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      q: "Do you work with companies outside Japan?",
      a: "Yes, 100% of our clients are international companies entering or expanding in Japan. We are experts at bridging the gap between your HQ and the Japanese market."
    },
    {
      q: "How long before we see results?",
      a: "For PPC, results can be immediate (within weeks). For SEO, you typically see significant movement in months 3-6. Our 90-day roadmap ensures you have early wins while building long-term equity."
    },
    {
      q: "What if our budget is limited?",
      a: "We recommend starting with our Market Entry tier which focuses on one high-impact channel (usually PPC for immediate traffic or SEO for long-term growth). We can scale as revenue grows."
    },
    {
      q: "Do you require long-term contracts?",
      a: "We typically work on 6-month initial agreements to ensure we have enough time to demonstrate ROI, but we offer flexible terms for specific project-based work."
    },
    {
      q: "Can you work with our existing in-house team?",
      a: "Absolutely. We often act as the 'Japan extension' of global marketing teams, reporting to your CMO or Marketing Director and collaborating on slack/teams."
    },
    {
      q: "What industries do you specialize in?",
      a: "We have deep expertise in B2B SaaS, Manufacturing, FinTech, and Cross-border E-commerce. If you sell to Japanese businesses, we know how to reach them."
    }
  ];

  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[580px] mx-auto mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common questions about entering the Japanese market.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-card px-6 rounded-lg border border-white/[0.07] data-[state=open]:border-primary hover:border-l-[3px] hover:border-l-primary transition-all"
              >
                <AccordionTrigger className="text-left font-semibold text-white text-lg py-5 hover:no-underline hover:text-primary [&>svg]:text-primary">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-[1.8]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
