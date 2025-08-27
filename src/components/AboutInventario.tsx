import { Gavel, ChevronsDown, FileSearch, Landmark, ScrollText, Hourglass, Scale, Users, FileBox, AlertTriangle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CallToAction } from "./CallToAction";

export const InventarioPresentation = () => {
  const { ref, isVisible } = useScrollAnimation();

  const highlights = [
    {
      icon: Gavel,
      title: "Processo Judicial Completo",
      text: "Atuamos em todos os tipos de inventário judicial, incluindo casos complexos com bens imóveis, empresas e herdeiros residentes no exterior.",
    },
    {
      icon: FileSearch,
      title: "Inventário Extrajudicial",
      text: "Realizamos inventários extrajudiciais (cartório) de forma ágil quando possível, economizando tempo e recursos dos herdeiros.",
    },
    {
      icon: Landmark,
      title: "Regularização de Bens",
      text: "Especialistas em regularização de imóveis não registrados, matrículas irregulares e disputas de limites territoriais.",
    },
    {
      icon: ScrollText,
      title: "Testamentos e Doações",
      text: "Análise detalhada de testamentos válidos e planejamento sucessório para evitar litígios entre herdeiros.",
    },
    {
      icon: Hourglass,
      title: "Inventário Negativo",
      text: "Atuação em casos onde é necessário declarar a inexistência de bens para fins de extinção de obrigações.",
    },
    {
      icon: Users,
      title: "Conflitos Familiares",
      text: "Mediação especializada para resolver disputas entre herdeiros de forma menos conflituosa e mais econômica.",
    },
    {
      icon: Scale,
      title: "Partilha Complexa",
      text: "Solução técnica para partilhas envolvendo sócios, empresas familiares e bens indivisíveis.",
    },
    {
      icon: FileBox,
      title: "Bens Digitais",
      text: "Inventário e partilha de ativos digitais (criptomoedas, NFTs, contas online) conforme a nova legislação.",
    },
  ];

  return (
    <section
      id="inventario"
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
    Precisa fazer um <span className="text-secondary">inventário</span>?
  </h2>

  <p className="text-3xl mx-6 text-gray-300 leading-relaxed text-center max-w-3xl">
    A <span className="font-bold text-accent">Muller Advocacy</span> está aqui para te ajudar.
  </p>
  <ChevronsDown size={72} className="my-12 animate-bounce text-secondary group-hover:text-accent transition-colors"/>
  <p className="text-3xl mx-6">
    Um inventário não precisa ser nem <span className="font-bold text-red-600">complexo</span> nem
  <span className="font-bold text-red-600"> demorado</span>. </p>
  
  <div className="mx-6 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
    <p className="text-base md:text-lg text-gray-200 leading-relaxed">
      Pela legislação brasileira (<span className="text-accent font-semibold">CPC/2015, art. 611</span>),
      o inventário é <span className="font-semibold text-accent">obrigatório</span> para apuração e partilha
      dos bens do falecido e deve ser:
    </p>

    <ul className="mt-4 grid gap-3 text-gray-200">
      <li className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-secondary/80"></span>
        <span>
          <span className="font-semibold text-accent">Aberto em até 2 meses</span> a partir do óbito
          (prazo de instauração).
        </span>
      </li>
      <li className="flex items-start gap-3">
        <span className="mt-1 h-2 w-2 rounded-full bg-secondary/80"></span>
        <span>
          <span className="font-semibold text-accent">Concluído em até 12 meses</span>, podendo o juiz
          prorrogar, se houver justificativa.
        </span>
      </li>
    </ul>

    <p className="mt-4 text-sm text-gray-400">
      Perder prazos pode gerar <span className="text-red-600 font-bold">multas e encargos</span> no imposto sobre os bens (ITCMD), além de
      <span className="text-red-600 font-bold"> travar a administração de bens e contas</span>.
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
          “Mas qual tipo de inventário devo abrir?”
        </p>
        <p className="text-yellow-900/90 text-sm md:text-base">
          Se todos são maiores, capazes e concordam — e não há testamento — normalmente o{" "}
          <span className="font-semibold">extrajudicial</span> é o caminho mais rápido. Havendo
          <span className="font-semibold"> menores/incapazes</span>, <span className="font-semibold">testamento</span> ou
          <span className="font-semibold"> conflito</span>, o <span className="font-semibold">judicial</span> é o indicado.
          Nossa equipe analisa o seu caso e aponta a via mais eficiente.
        </p>
      </div>
    </div>
  </div>
</div>
  {/* Bloco Comparativo - Judicial vs Extrajudicial */}
  <div className="mx-6 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-black/30 to-black/10 p-8 md:p-10 shadow-xl">
    <h3 className="text-2xl md:text-3xl font-extrabold text-center mb-10">
      Judicial <span className="text-secondary">vs</span> Extrajudicial
    </h3>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Lado Judicial */}
      <div className="rounded-2xl bg-black/40 border border-red-500/30 p-6 hover:scale-[1.02] transition-transform">
        <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
          ⚖️ Inventário Judicial
        </h4>
        <ul className="space-y-3 text-gray-200">
          <li>👶 Presença de <span className="font-semibold text-accent">menores ou incapazes</span></li>
          <li>📜 Existe <span className="font-semibold text-accent">testamento</span></li>
          <li>⚔️ <span className="font-semibold text-accent">Conflito</span> ou divergência entre herdeiros</li>
          <li>⏳ Pode durar <span className="font-semibold text-accent">meses ou anos</span></li>
          <li>💰 Custos maiores (processo judicial + taxas)</li>
        </ul>
      </div>

      {/* Lado Extrajudicial */}
      <div className="rounded-2xl bg-black/40 border border-green-500/30 p-6 hover:scale-[1.02] transition-transform">
        <h4 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
          🖊️ Inventário Extrajudicial
        </h4>
        <ul className="space-y-3 text-gray-200">
          <li>👨‍👩‍👧 Todos os herdeiros <span className="font-semibold text-accent">maiores e capazes</span></li>
          <li>🚫 Não existe <span className="font-semibold text-accent">testamento</span></li>
          <li>🤝 Há <span className="font-semibold text-accent">consenso</span> entre todos</li>
          <li>⚡ Conclusão em <span className="font-semibold text-accent">30 a 60 dias</span></li>
          <li>💸 Geralmente <span className="font-semibold text-accent">mais econômico</span></li>
        </ul>
      </div>
    </div>

    {/* Box de fechamento */}
    <div className="mt-10 text-center rounded-2xl p-5">
      <p className="text-gray-300 text-base md:text-lg leading-relaxed">
        Seja <span className="text-green-400 font-semibold">extrajudicial</span> (rápido e simples)
        ou <span className="text-red-400 font-semibold">judicial</span> (quando há conflito ou menores),
        aqui na <span className="text-accent font-bold">Muller Advocacy</span> analisamos seu caso com diligencia e apontamos  
        o melhor caminho para você.
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
              Nossa <span className="text-accent">Expertise</span> em Inventários
            </h3>
            <p className="text-gray-300 mb-4 text-center">
              Atendemos todos os tipos de processos inventariários com abordagem técnica e estratégica:
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
              <span className="text-accent font-bold">Muller Advocacy</span> - Reduzimos em até 70% o tempo do inventário através de protocolos especializados e conhecimento profundo das varas de sucessões.
            </p>
          </div>
        </div>
</div>
    </section>
  );
};