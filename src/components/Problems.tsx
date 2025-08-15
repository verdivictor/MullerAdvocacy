
import { AlertTriangle, FileText, TreePine, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Problems = () => {
  const scrollToContact = () => {
    document.getElementById('contact-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Problemas com sua calçada?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Não deixe pequenos problemas se tornarem grandes dores de cabeça. 
            Resolvemos tudo de forma rápida e profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors">
            <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Notificação do NYC DOT?</h3>
            <p className="text-gray-300 text-sm">
              Recebeu uma multa ou aviso oficial? Cuidamos de tudo para você ficar em dia.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Calçada Rachada?</h3>
            <p className="text-gray-300 text-sm">
              Rachaduras e afundamentos são perigosos e podem gerar responsabilidade civil.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <TreePine className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Danos por Árvores?</h3>
            <p className="text-gray-300 text-sm">
              Raízes de árvores levantaram o concreto? Reparamos seguindo normas da cidade.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-6 text-center hover:bg-slate-700 transition-colors">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Multa por Irregularidade?</h3>
            <p className="text-gray-300 text-sm">
              Evite multas caras do DOT. Fazemos reparos que passam em todas as inspeções.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-orange-600 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Nossa Solução: Serviço Completo com Garantia
            </h3>
            <p className="text-lg mb-6">
              Desde a avaliação inicial até a aprovação final do DOT, cuidamos de todo o processo. 
              Você não precisa se preocupar com nada - apenas com o resultado perfeito.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Resolver Meu Problema Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
