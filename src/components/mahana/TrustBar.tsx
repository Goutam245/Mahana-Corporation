import { Building2, Globe2, Briefcase } from "lucide-react";

const TrustBar = () => {
  return (
    <section className="py-10 bg-muted border-y border-white/[0.06]">
      <div className="container mx-auto px-4">
        <p className="text-center text-muted-foreground font-medium mb-6 uppercase tracking-wider text-sm">
          Trusted by Global Leaders Entering Japan
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-90 transition-all duration-500">
          <div className="flex items-center gap-2 font-bold text-xl text-white/70">
            <Globe2 className="w-8 h-8 text-primary" />
            <span>GlobalTech</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-white/70">
            <Building2 className="w-8 h-8 text-secondary" />
            <span>SaaS Leader</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-white/70">
            <Briefcase className="w-8 h-8 text-secondary" />
            <span>FinanceCorp</span>
          </div>
          <div className="flex items-center gap-2 font-bold text-xl text-white/70">
            <Globe2 className="w-8 h-8 text-primary" />
            <span>E-Com Giant</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
