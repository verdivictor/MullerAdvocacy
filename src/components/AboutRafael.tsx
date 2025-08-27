import { GraduationCap, Briefcase, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutRafael = () => {
  const { ref, isVisible } = useScrollAnimation();

  const credentials = [
    {
      icon: GraduationCap,
      text: "Advogado formado pela Universidade de Brasília (UnB), com especialização em Direito Empresarial.",
    },
    {
      icon: Briefcase,
      text: "Fundador da Müller Advocacy, referência nacional em proteção patrimonial e planejamento estratégico.",
    },
    {
      icon: Award,
      text: "Reconhecido por desenvolver soluções jurídicas modernas que unem tecnologia, estratégia e prevenção de riscos.",
    },
  ];

  return (
    <section
      id="about-rafael"
      className="py-20 bg-primary text-primary-foreground relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div
          ref={ref as any}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Image Section */}
            <div className="lg:w-1/3 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary">
                <img
                  src="/lovable-uploads/logo.jpeg" // Update this path to your actual image
                  alt="Rafael Muller"
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-2/3">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                Sobre <span className="text-secondary">Rafael Müller</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Rafael Müller é advogado especialista em Direito Empresarial e
                fundador da Müller Advocacy. Com sólida experiência em planejamento
                estratégico e proteção patrimonial, atua lado a lado com empresários
                que buscam segurança e eficiência na gestão de seus negócios.
              </p>

              <div className="space-y-6">
                {credentials.map((item, i) => (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-6 border border-white/10 bg-white/10 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <item.icon className="w-8 h-8 text-secondary transition-colors duration-300 group-hover:text-accent" />
                    </div>
                    <p className="text-gray-300 leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};