import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin,
  Star,
  CheckCircle,
  Users,
  Timer,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const heroRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Seção Hero */}
      <section
        ref={heroRef.ref}
        className={`relative pt-32 pb-20 overflow-hidden transition-all duration-1000 ${
          heroRef.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}
        style={{
          backgroundImage: `url('/lovable-uploads/b730bd0e-7843-4066-8557-144e756ed94a.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/70 to-accent/60"></div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Selos de confiança */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-left">
            <Badge
              variant="secondary"
              className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30"
            >
              <Shield className="w-4 h-4 mr-2" />
              OAB/RJ Regular
            </Badge>
            <Badge
              variant="secondary"
              className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30"
            >
              <Award className="w-4 h-4 mr-2" />
              +30 Anos de Experiência
            </Badge>
            <Badge
              variant="secondary"
              className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30"
            >
              <Clock className="w-4 h-4 mr-2" />
              Atendimento Ágil
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Fale Conosco
            <span className="block text-accent drop-shadow-lg">
              Unidades em todo o Brasil
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-md">
            Nossa equipe jurídica está pronta para ajudá-lo.  
            Consultoria inicial gratuita e soluções legais personalizadas para o
            seu caso.
          </p>
        </div>
      </section>

      {/* Seção de Estatísticas */}
      <section
        ref={statsRef.ref}
        className={`py-16 bg-muted/30 transition-all duration-1000 delay-300 ${
          statsRef.isVisible ? "animate-slide-in-bottom" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Clientes Atendidos</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Timer className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">24h</div>
                <div className="text-muted-foreground">Prazo de Resposta</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="text-3xl font-bold text-secondary-foreground mb-2">
                  Confiança
                </div>
                <div className="text-muted-foreground">Garantia de Sigilo</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground">Avaliação Média</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção de Contato */}
      <main
        ref={contactRef.ref}
        className={`py-20 bg-gradient-to-br from-background via-muted/20 to-background transition-all duration-1000 delay-500 ${
          contactRef.isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Informações de Contato */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Entre em Contato
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Nossa equipe de advogados está pronta para atendê-lo com
                    agilidade e qualidade.  
                    Fale conosco pelos canais abaixo ou preencha o formulário.
                  </p>
                </div>

                {/* Métodos de Contato */}
                <div className="space-y-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">
                          Telefone
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Atendimento em horário comercial
                        </p>
                        <a
                          href="tel:+5521999999999"
                          className="text-primary font-semibold hover:text-primary/80 transition-colors text-lg"
                        >
                          (21) 99999-9999
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-accent">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">
                          E-mail
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Retorno garantido em até 24h
                        </p>
                        <a
                          href="mailto:contato@advocaciarj.com.br"
                          className="text-accent font-semibold hover:text-accent/80 transition-colors"
                        >
                          contato@advocaciarj.com.br
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MapPin className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">
                          Localização
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          Escritório no Rio de Janeiro
                        </p>
                        <div className="text-secondary-foreground font-semibold">
                          Centro • Barra da Tijuca • Zona Sul • Zona Norte
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Cartão de Emergência */}
                <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center mr-4">
                        <Star className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="font-bold text-red-800 dark:text-red-400 text-xl">
                        Atendimento de Urgência
                      </h3>
                    </div>
                    <p className="text-red-700 dark:text-red-300 mb-6 text-lg leading-relaxed">
                      Casos urgentes? Nossa equipe jurídica está disponível
                      para atendimentos emergenciais que exigem atenção imediata.
                    </p>
                    <a
                      href="tel:+5521999999999"
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Emergência - Ligue Agora
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Formulário de Contato */}
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
