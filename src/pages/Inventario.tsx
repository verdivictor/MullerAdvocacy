
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { InventarioPresentation } from "@/components/AboutInventario";

const Inventario = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <InventarioPresentation />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Inventario;
