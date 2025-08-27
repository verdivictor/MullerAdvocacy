import { Gavel, ChevronsDown, FileSearch, Landmark, ScrollText, Hourglass, Scale, Users, FileBox, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CallToAction } from "./CallToAction";

export const AposentadoriaPresentation = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: FileSearch,
      title: "Revisão de Benefícios",
      text: "Analisamos se você tem direito a revisões que podem aumentar o valor da sua aposentadoria, como tempo especial, contribuições em atraso ou períodos não contabilizados pelo INSS.",
    },
    {
      icon: Landmark,
      title: "Aposentadoria Especial",
      text: "Atuamos em pedidos de aposentadoria especial para quem trabalhou exposto a agentes nocivos (ruído, agentes químicos, biológicos ou periculosos).",
    },
    {
      icon: ScrollText,
      title: "Planejamento Previdenciário",
      text: "Montamos uma estratégia personalizada para você saber exatamente quando e como se aposentar, maximizando seus rendimentos futuros.",
    },
    {
      icon: Hourglass,
      title: "Tempo de Contribuição",
      text: "Regularizamos períodos de contribuição, inclusive atividades rurais, serviço militar e vínculos não registrados corretamente.",
    },
    {
      icon: Users,
      title: "Pensão por Morte",
      text: "Orientamos dependentes em pedidos de pensão por morte, revisões e contestação de indeferimentos do INSS.",
    },
    {
      icon: Scale,
      title: "Aposentadoria por Invalidez",
      text: "Atuação técnica em casos de incapacidade permanente, com apoio médico-legal e perícia administrativa ou judicial.",
    },
    {
      icon: Gavel,
      title: "Ações Judiciais contra o INSS",
      text: "Ingressamos com ações quando o INSS indefere ou demora excessivamente no seu pedido, defendendo seus direitos na Justiça.",
    },
    {
      icon: FileBox,
      title: "Documentação Completa",
      text: "Organizamos todos os documentos necessários para evitar indeferimentos e acelerar a análise do INSS.",
    },
  ];

  return (
    <section
      id="aposentadoria"
      className="py-64 bg-primary text-primary-foreground relative overflow-hidden"
    >
      {/* Primeira Parte - Texto Principal */}
<div
  ref={ref as any}
  className={`flex flex-col items-center gap-y-6 transition-all duration-700 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
>
  <h2 className="text-4xl mx-6 md:text-5xl font-extrabold mb-6 leading-tight text-center">
    Quer se <span className="text-secondary">aposentar</span> com segurança?
  </h2>

  <p className="text-3xl mx-6 text-gray-300 leading-relaxed text-center max-w-3xl">
    A <span className="font-bold text-accent">Muller Advocacy</span> garante orientação jurídica especializada em aposentadoria.
  </p>
  <ChevronsDown size={72} className="my-12 animate-bounce text-secondary group-hover:text-accent transition-colors"/>
  <p className="text-3xl mx-6 text-center">
    Aposentar-se não precisa ser <span className="font-bold text-red-600">demorado</span> nem 
    <span className="font-bold text-red-600"> complicado</span>.
  </p>
  
  <div className="mx-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <p className="text-base md:text-lg text-gray-200 leading-relaxed">
      Pela legislação brasileira (<span className="text-accent font-semibold">EC 103/2019 e Lei 8.213/91</span>), 
      a aposentadoria pode variar conforme a regra de transição ou permanente, e exige:
    </p>

    <ul className="mt-4 grid gap-3 text-gray-200">
      <li className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-secondary/80"></span>
        <span>
          <span className="font-semibold text-accent">Tempo mínimo de contribuição</span>, que pode variar conforme sua idade e categoria profissional.
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-secondary/80"></span>
        <span>
          <span className="font-semibold text-accent">Idade mínima</span>, alterada pela Reforma da Previdência (2019).
        </span>
      </li>
    </ul>

    <p className="mt-4 text-sm text-gray-400">
      Um pedido mal instruído pode levar ao <span className="text-red-600 font-bold">indeferimento </span> 
      ou a receber <span className="text-red-600 font-bold">menos do que você tem direito</span>.
    </p>
  </div>
  <ChevronsDown size={72} className="my-8 animate-pulse text-secondary group-hover:text-accent transition-colors"/>
{/* Caixa amarela com ícone e pergunta do leitor */}
<div
  className={`transition-all duration-700 delay-200 mx-6 ${
    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
  }`}
>
  <div className="mx-auto max-w-3xl rounded-2xl border border-yellow-300/60 bg-yellow-100 p-5 md:p-6 shadow-lg">
    <div className="flex items-start gap-3">
      <div>
        <AlertTriangle size={20} className="mt-1 text-yellow-900"/>
      </div>
      <div>
        <p className="text-yellow-900 text-base md:text-lg font-semibold">
          “Qual tipo de aposentadoria eu posso pedir?”
        </p>
        <p className="text-yellow-900/90 text-sm md:text-base">
          Existem diferentes modalidades: <span className="font-semibold">por idade</span>, 
          <span className="font-semibold"> por tempo de contribuição</span>, 
          <span className="font-semibold"> especial</span> (atividade insalubre/perigosa) e 
          <span className="font-semibold"> por invalidez</span>. 
          Cada uma possui requisitos específicos. Nossa equipe avalia seu histórico e define o melhor caminho.
        </p>
      </div>
    </div>
  </div>
</div>
  {/* Bloco Comparativo - Via Administrativa vs Judicial */}
  <div className="mx-6 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-black/30 to-black/10 p-8 md:p-10 shadow-xl">
    <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
      Pedido <span className="text-secondary">Administrativo</span> vs Judicial
    </h3>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Lado Administrativo */}
      <div className="rounded-2xl bg-black/40 border border-green-500/30 p-6 hover:scale-[1.02] transition-transform">
        <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
          🖊️ Pedido Administrativo
        </h4>
        <ul className="space-y-3 text-gray-200">
          <li>📑 Feito direto no <span className="font-semibold text-accent">Meu INSS</span></li>
          <li>⚡ Pode ser concluído em <span className="font-semibold text-accent">90 dias</span></li>
          <li>💸 Geralmente mais rápido e econômico</li>
          <li>❌ Pode ser indeferido por <span className="font-semibold text-accent">falta de documentos</span></li>
        </ul>
      </div>

      {/* Lado Judicial */}
      <div className="rounded-2xl bg-black/40 border border-red-500/30 p-6 hover:scale-[1.02] transition-transform">
        <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
          ⚖️ Ação Judicial
        </h4>
        <ul className="space-y-3 text-gray-200">
          <li>⏳ Necessária quando o <span className="font-semibold text-accent">INSS indefere</span> ou demora excessivamente</li>
          <li>👩‍⚖️ Julgado por um juiz federal</li>
          <li>📈 Possibilidade de <span className="font-semibold text-accent">revisão de valores</span></li>
          <li>💰 Maior tempo e custo, mas com mais garantias</li>
        </ul>
      </div>
    </div>

    {/* Box de fechamento */}
    <div className="mt-10 text-center rounded-2xl p-5">
      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
        Seja pela via <span className="text-green-400 font-semibold">administrativa</span> ou 
        pela <span className="text-red-400 font-semibold">judicial</span>, 
        na <span className="text-accent font-bold">Muller Advocacy</span> analisamos seu caso e buscamos 
        o melhor benefício para você.
      </p>
    </div>
  </div>

  {/* CTA Component */}
  <CallToAction/>

          {/* Terceira Parte - Benefícios Técnicos */}
        <div
          className={`transition-all duration-700 delay-200 w-full ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-gradient-to-r from-primary to-primary/90 p-8 rounded-xl shadow-lg border border-white/10 mb-12 max-w-4xl mx-6 lg:mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">
              Nossa <span className="text-accent">Expertise</span> em Aposentadorias
            </h3>
            <p className="text-gray-300 mb-4 text-center">
              Atuamos em todas as modalidades de aposentadoria e benefícios previdenciários, com acompanhamento estratégico e técnico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {highlights.map((item, i) => (
              <div
                key={i}
                className="group mx-6 xl:mx-0 flex flex-col p-6 border border-white/10 rounded-xl hover:bg-white/5 transition-all hover:shadow-lg hover:border-accent/20 min-h-[250px]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-accent/20 transition-colors">
                    <item.icon className="w-6 h-6 text-secondary group-hover:text-accent transition-colors" />
                  </div>
                  <h4 className="font-bold text-white/90 text-lg">{item.title}</h4>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-accent/10 p-8 rounded-xl border border-accent/20 max-w-4xl mx-auto">
            <p className="text-center font-medium text-lg">
              <span className="text-accent font-bold">Muller Advocacy</span> — aumentamos em até 40% as chances de concessão ou revisão da aposentadoria com protocolos especializados e conhecimento profundo do INSS.
            </p>
          </div>
        </div>
</div>
    </section>
  );
};
