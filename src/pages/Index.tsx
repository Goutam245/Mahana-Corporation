import Navbar from "@/components/mahana/Navbar";
import Hero from "@/components/mahana/Hero";
import TrustBar from "@/components/mahana/TrustBar";
import Problem from "@/components/mahana/Problem";
import Solution from "@/components/mahana/Solution";
import Services from "@/components/mahana/Services";
import Proof from "@/components/mahana/Proof";
import Process from "@/components/mahana/Process";
import Team from "@/components/mahana/Team";
import Pricing from "@/components/mahana/Pricing";
import FAQ from "@/components/mahana/FAQ";
import FinalCTA from "@/components/mahana/FinalCTA";
import Footer from "@/components/mahana/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-sans text-foreground bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Solution />
      <Services />
      <Proof />
      <Process />
      <Team />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
