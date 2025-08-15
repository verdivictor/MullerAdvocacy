import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleContactClick = () => {
    const phone = "+17184337589";
    const message = "Hello! I would like to request a free quote for a repair on my sidewalk."
    
    // Detectar se é dispositivo móvel
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Em dispositivos móveis, abrir o teclado de telefone
      window.location.href = `tel:${phone}`;
    } else {
      // Em desktop, abrir WhatsApp
      const whatsappUrl = `https://wa.me/${phone.replace(/[^\d]/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleContactClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 animate-float hover:scale-110 hover:rotate-12"
        aria-label="Contact through Telephone/WhatsApp"
      >
        {/* Tooltip */}
        {isHovered && (
          <div className="absolute bottom-full right-0 mb-3 px-4 py-2 bg-foreground text-background text-sm rounded-xl whitespace-nowrap animate-fade-in-up shadow-xl">
            Speak With Us
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground"></div>
          </div>
        )}
        
        <Phone className="w-7 h-7" />
        
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30"></div>
      </button>
    </div>
  );
};