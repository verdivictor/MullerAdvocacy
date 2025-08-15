
import { FileText, MapPin, DollarSign, Wrench } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "1. Você Solicita",
      description: "Preenche o formulário ou liga para nós. Agendamos a visita técnica gratuita.",
      color: "bg-blue-600"
    },
    {
      icon: MapPin,
      title: "2. Visitamos o Local",
      description: "Nossa equipe vai até sua propriedade para avaliar o problema e medir a área.",
      color: "bg-green-600"
    },
    {
      icon: DollarSign,
      title: "3. Enviamos o Orçamento",
      description: "Você recebe um orçamento detalhado em até 24h, sem compromisso.",
      color: "bg-orange-600"
    },
    {
      icon: Wrench,
      title: "4. Executamos o Reparo",
      description: "Fazemos o trabalho conforme exigido pelo DOT, com garantia e documentação.",
      color: "bg-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            Como Funciona Nosso Processo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e transparente do primeiro contato até a entrega final. 
            Tudo documentado e aprovado pelo NYC DOT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gray-200 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            Tudo Incluído no Nosso Serviço
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>Visita técnica gratuita</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>Orçamento sem compromisso</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>Aprovação do DOT</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-600">✓</span>
              <span>Garantia de 2 anos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
