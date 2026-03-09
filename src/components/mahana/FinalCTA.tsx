import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const FinalCTA = () => {
  return (
    <section className="py-[100px] md:py-[100px] py-[60px] relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1A0005 0%, #05091A 100%)" }}>
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-[28px] md:text-[42px] lg:text-[48px] font-bold mb-6 text-white">
            Ready to Dominate the Japanese Market?
          </h2>
          <p className="text-xl text-subheading">
            Book your free 30-minute strategy session. No sales pitch. Just expert advice tailored to your situation.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-card rounded-xl p-8 border border-white/[0.07] shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="cta-name" className="text-subheading">Name</Label>
                <Input id="cta-name" placeholder="John Doe" className="bg-background/50 border-white/[0.07] text-white placeholder:text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cta-company" className="text-subheading">Company</Label>
                <Input id="cta-company" placeholder="Mahana Corp" className="bg-background/50 border-white/[0.07] text-white placeholder:text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-email" className="text-subheading">Email</Label>
              <Input id="cta-email" type="email" placeholder="name@company.com" className="bg-background/50 border-white/[0.07] text-white placeholder:text-muted-foreground" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cta-challenge" className="text-subheading">What's your biggest Japan market challenge?</Label>
              <Textarea 
                id="cta-challenge" 
                placeholder="Describe your goals or obstacles..." 
                className="h-24 resize-none bg-background/50 border-white/[0.07] text-white placeholder:text-muted-foreground"
              />
            </div>

            <Button size="lg" className="w-full bg-white text-primary border border-white hover:bg-primary hover:text-white h-14 text-xl font-bold transition-all duration-300">
              Get My Free Strategy Session
            </Button>

            <div className="flex flex-wrap justify-center gap-6 text-xs text-muted-foreground pt-2">
              <span className="flex items-center gap-1">✓ No commitment</span>
              <span className="flex items-center gap-1">✓ Reply within 24h</span>
              <span className="flex items-center gap-1">✓ Free first consultation</span>
            </div>
          </form>
        </div>

        <div className="text-center mt-8">
          <a href="tel:+81300000000" className="text-muted-foreground hover:text-white transition-colors text-sm">
            Prefer to talk first? Call us: +81-3-XXXX-XXXX
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
