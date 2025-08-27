import { ShieldCheck, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Presentation = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: ShieldCheck,
      text: "Ser referência em um novo conceito de Proteção Patrimonial, desenvolvido pela Muller Advocacy, oferecendo soluções completas para prevenção de riscos e proteção de bens, ideal para empresários que desejam preservar o legado construído.",
    },
    {
      icon: CheckCircle2,
      text: "Atuar na prevenção de riscos com soluções jurídicas modernas e eficazes, garantindo a segurança e a estabilidade das estruturas empresariais.",
    },
    {
      icon: CheckCircle2,
      text: "Elaborar contratos e planejamentos estratégicos que potencializam resultados e reduzem riscos, adaptando-se às necessidades específicas de cada cliente.",
    },
    {
      icon: CheckCircle2,
      text: "Oferecer suporte próximo e personalizado para empresas e empresários em qualquer tipo de demanda, com uma equipe preparada para enfrentar os desafios mais complexos.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-brand-dark text-foreground relative overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Coluna Esquerda */}
          <div
            ref={ref as any}
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Sobre o <span className="text-brand-gold">escritório.</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Com tecnologia de ponta e uma equipe altamente especializada,
              a Muller Advocacy oferece atendimentos online e presenciais
              em cidades estratégicas, assessorando clientes em todo o Brasil.
            </p>
            <p className="text-md font-semibold text-muted-foreground mb-8">
              Localização:{" "}
              <span className="text-black font-bold">Rio de Janeiro - RJ, Brasília - DF</span> ou{" "}
              <span className="text-black font-bold">Online</span>
            </p>
            <img
              src="/lovable-uploads/pexels-ekaterina-bolovtsova-6077091.jpg"
              alt="Equipe Muller Advocacy"
              className="rounded-lg shadow-lg border border-border"
            />
          </div>

          {/* Coluna Direita */}
          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6 border-l-4 border-brand-gold pl-4">
              Nosso escritório se destaca por:
            </h3>
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-6 border border-border rounded-xl hover:bg-muted/10 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <item.icon className="w-8 h-8 text-brand-gold transition-colors duration-300 group-hover:text-accent" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
