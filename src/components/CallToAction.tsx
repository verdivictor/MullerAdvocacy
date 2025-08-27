import { Button } from "@/components/ui/button";

export const CallToAction = ({ whiteBackground = true }) => {
  return (
    <section className="my-16 relative py-32 bg-[url('/lovable-uploads/inventario-bg5.jpg')] bg-cover bg-center w-full  ">
      {/* Background image com overlay claro */}
      <div 
        className="absolute inset-0"
      ></div>
      <div 
        className={`absolute inset-0 bg-white/90`}
      ></div>

      <div className="relative container mx-auto px-4 text-center">
        <h2
          className={`text-5xl md:text-6xl font-bold mb-8 ${
            whiteBackground ? "text-primary" : "text-primary"
          }`}
        >
          Pronto para tomar o <span className="text-accent">próximo</span> passo?
        </h2>

        <div className="max-w-3xl mx-auto mb-12">
          <p
            className={`text-xl md:text-2xl leading-relaxed text-gray-800`}
          >
            Consulte hoje mesmo com a advocacia <span className="font-semibold text-accent">#1{" "}</span> para{" "}
            <span className="font-semibold">inventários</span>.
          </p>
        </div>

        {/* Botão CTA */}
        <div className="transition-all duration-700 delay-100">
          <a
            href="/contato"
            className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-black bg-accent rounded-xl transition-all shadow-lg hover:shadow-accent/10 animate-pulse hover:animate-none"
          >
            Fale Conosco Agora
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-2"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
