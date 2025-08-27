import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, HardHat, Home, Construction, Users, CheckCircle, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ScrollToTop from "@/components/ScrollToTop";

const WhoWeAre = () => {
  const heroRef = useScrollAnimation();
  const aboutRef = useScrollAnimation();
  const teamRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section 
        ref={heroRef.ref}
        className={`relative pt-32 pb-20 overflow-hidden transition-all duration-1000 ${
          heroRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
        style={{ 
            backgroundImage: `url('/lovable-uploads/b730bd0e-7843-4066-8557-144e756ed94a.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-accent/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              About <span className="text-accent">Brooklyn Sidewalks</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              The sidewalk specialists of New York City, proudly serving as the dedicated pavement division of Sunnyside Masonry.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30">
                <Shield className="w-4 h-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge variant="secondary" className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30">
                <Award className="w-4 h-4 mr-2" />
                NYC DOT Approved
              </Badge>
              <Badge variant="secondary" className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30">
                <Clock className="w-4 h-4 mr-2" />
                Fast & Reliable
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section 
        ref={aboutRef.ref}
        className={`py-20 bg-background transition-all duration-1000 delay-200 ${
          aboutRef.isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative rounded-2xl overflow-hidden h-96">
              <img
                src="/lovable-uploads/2bcmUPQa5KPdlOvwhB87elKfbIL0rXupOV9DQUdtnn7ytXtrAd7qwbmOh6BZwRKp.png" // Replace with your team image
                alt="Brooklyn Sidewalks Team"
                className="object-cover"
              />
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Our Specialized Approach
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Brooklyn Sidewalks</strong> was created as the dedicated sidewalk division of <strong className="text-primary">Sunnyside Masonry</strong> to focus exclusively on NYC's unique pavement needs. While Sunnyside handles broader masonry projects, our team specializes solely in sidewalk repairs, replacements, and compliance solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  This specialization allows us to offer deeper expertise, faster project completion, and better pricing through our parent company's established relationships with material suppliers and regulatory agencies.
                </p>
                <div className="bg-muted/30 p-6 rounded-xl border-l-4 border-primary">
                  <h3 className="font-bold text-foreground mb-3">Why choose our specialized team?</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Exclusive focus on sidewalk work means we know every NYC code requirement</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Direct access to Sunnyside Masonry's 30+ years of combined experience</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Priority scheduling as we don't get diverted to other masonry projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-accent">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to repair or replace your sidewalk?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
            Get the specialized attention your project deserves from Brooklyn's sidewalk experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contato#contact-form" 
              className="inline-flex items-center justify-center px-8 py-4 bg-background text-foreground rounded-xl font-semibold hover:bg-background/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get Your Free Estimate
            </a>
            <a 
              href="tel:+17184337589" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-background text-background rounded-xl font-semibold hover:bg-background/10 transition-all duration-300 hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (718) 433-7589
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default WhoWeAre;