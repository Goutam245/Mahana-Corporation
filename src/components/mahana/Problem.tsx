import { motion } from "framer-motion";
import { AlertTriangle, TrendingDown, MessageSquareWarning } from "lucide-react";

const Problem = () => {
  const problems = [
    {
      icon: <AlertTriangle className="w-8 h-8 text-primary" />,
      title: "SEO Strategies That Work in English Fail in Japanese",
      points: [
        "Google Japan algorithms favor different content structures",
        "Most agencies use machine translation (disaster)",
        "Keyword intent differs culturally"
      ]
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-primary" />,
      title: "PPC Ads Get Clicked But Don't Convert",
      points: [
        "Cultural nuances ignored in ad copy",
        "Landing pages don't resonate with Japanese buyers",
        "Wrong platform selection (Yahoo vs Google)"
      ]
    },
    {
      icon: <MessageSquareWarning className="w-8 h-8 text-primary" />,
      title: "You're Burning Budget Without Clear ROI",
      points: [
        "Agencies report metrics, not business outcomes",
        "No one speaks your language (literally)",
        "Lack of transparency in media spend"
      ]
    }
  ];

  return (
    <section className="py-[100px] md:py-[100px] py-[60px] bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-[580px] mx-auto mb-16">
          <h2 className="text-[28px] md:text-[42px] font-bold tracking-[-0.5px] mb-4">
            Why Most Foreign Companies Fail in Japan's Digital Market
          </h2>
          <p className="text-lg text-muted-foreground">
            The Japanese market is unique. Copy-pasting your global strategy won't work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card border border-white/[0.07] rounded-xl p-7 hover:border-[rgba(232,0,45,0.4)] hover:shadow-[0_0_20px_rgba(232,0,45,0.08)] transition-all duration-300"
            >
              <div className="mb-5 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                {problem.icon}
              </div>
              <h3 className="text-xl font-bold leading-tight mb-4 min-h-[3.5rem] text-white">
                {problem.title}
              </h3>
              <ul className="space-y-3">
                {problem.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
