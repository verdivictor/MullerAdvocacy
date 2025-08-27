
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AposentadoriaPresentation } from "@/components/AboutAposentadoria";

const Aposentadoria = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AposentadoriaPresentation />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Aposentadoria;
