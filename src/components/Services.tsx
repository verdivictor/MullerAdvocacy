import { Button } from "@/components/ui/button";
import { Briefcase, Scale, Landmark, Building, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const areas = [
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos trabalhistas e representação em conflitos entre empregado e empregador.",
      href: "/services/direito-trabalhista"
    },
    {
      icon: Scale,
      title: "Direito Civil",
      description: "Atuação em questões contratuais, responsabilidade civil e direitos do consumidor.",
      href: "/services/direito-civil"
    },
    {
      icon: Landmark,
      title: "Direito Comercial",
      description: "Assessoria em relações comerciais, contratos empresariais e litígios societários.",
      href: "/services/direito-comercial"
    },
    {
      icon: Building,
      title: "Direito Empresarial",
      description: "Consultoria jurídica para empresas em todas as fases de sua operação.",
      href: "/services/direito-empresarial"
    },
  ];

  return (
    <section id="areas" className="py-20 bg-primary relative overflow-hidden text-white">
      {/* Fundo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ backgroundColor: '#1e293b' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Título */}
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Confira nossas <span className="text-secondary">áreas de atuação</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Atendemos pessoas físicas e jurídicas em diferentes ramos do Direito, com excelência e compromisso.
          </p>
        </div>

        {/* Cards */}
        <div 
          ref={cardsRef as any}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {areas.map((area, index) => (
            <div 
              key={index} 
              className={`group bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col h-full ${
                cardsVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: cardsVisible ? `${index * 200}ms` : '0ms' }}
            >
              <div className="relative z-10 flex flex-col h-full">
                {/* Ícone */}
                <div className="flex items-center justify-center w-20 h-20 mb-6 group-hover:scale-110 transition-all duration-300">
                  <area.icon className="w-12 h-12 text-secondary" />
                </div>

                {/* Título */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {area.title}
                </h3>

                {/* Descrição */}
                <p className="text-gray-200 mb-6 leading-relaxed flex-grow">
                  {area.description}
                </p>
                
                {/* Botão */}
                <Button 
                  onClick={() => window.location.href = area.href}
                  className="w-full bg-secondary hover:bg-secondary/90 text-black py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Saiba mais
                </Button>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-secondary/30 transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
