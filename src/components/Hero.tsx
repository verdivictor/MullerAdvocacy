
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock, Shield, Award } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#25709a' }}>
      {/* Background overlay pattern */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="secondary" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Licenciado em NYC
          </Badge>
          <Badge variant="secondary" className="bg-orange-600 text-white hover:bg-orange-700 px-4 py-2">
            <Award className="w-4 h-4 mr-2" />
            +10 Anos de Experiência
          </Badge>
          <Badge variant="secondary" className="bg-green-600 text-white hover:bg-green-700 px-4 py-2">
            <Clock className="w-4 h-4 mr-2" />
            Aprovado pelo NYC DOT
          </Badge>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Precisa consertar sua
          <span className="text-orange-500 block">calçada em Nova York?</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
          Reparos aprovados pelo NYC DOT. Orçamento gratuito e serviço rápido garantido 
          em Brooklyn, Queens, Manhattan e Bronx.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Solicite um Orçamento Agora
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
          >
            <Phone className="w-5 h-5 mr-2" />
            (718) 433-7589
          </Button>
        </div>

        {/* Service areas */}
        <div className="text-gray-300 text-lg">
          <p className="mb-2">Atendemos em:</p>
          <div className="flex flex-wrap justify-center gap-4 text-orange-400 font-semibold">
            <span>Brooklyn</span>
            <span>•</span>
            <span>Queens</span>
            <span>•</span>
            <span>Manhattan</span>
            <span>•</span>
            <span>Bronx</span>
          </div>
        </div>
      </div>
    </section>
  );
};
