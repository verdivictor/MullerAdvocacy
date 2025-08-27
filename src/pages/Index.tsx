
import { Header } from "@/components/Header";
import { ModernHero } from "@/components/ModernHero";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Presentation } from "@/components/Presentation";
import { Services } from "@/components/Services";
import { AboutRafael } from "@/components/AboutRafael";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ModernHero />
      <Services />
      <Presentation />
      <AboutRafael />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
