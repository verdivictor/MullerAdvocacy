import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight, Home, Building, Shield } from "lucide-react";

export const ServiceDetails = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: secondRowRef, isVisible: secondRowVisible } = useScrollAnimation();

const services = [
    {
      title: "SIDEWALK REPLACEMENT",
      icon: Home,
      image: "/lovable-uploads/33a4f5b5-4df7-459a-aa19-57e8893bf5f0.png",
      description: "Complete sidewalk replacement for heavily damaged or uneven surfaces. We remove and replace deteriorated concrete sections to ensure safe, ADA-compliant walkways that meet NYC DOT standards.",
      features: ["Full demolition & removal", "ADA-compliant installation", "DOT standard compliance", "Durable concrete mixes"]
    },
    {
      title: "SIDEWALK REPAIR",
      icon: Building,
      image: "/lovable-uploads/4757b684-afa0-43b0-9312-62654c8b0d4e.png",
      description: "Professional repair of cracked, chipped, or uneven sidewalk sections. We match existing concrete and restore surfaces to prevent trip hazards while maintaining aesthetic continuity.",
      features: ["Trip hazard removal", "Crack filling & leveling", "Surface restoration", "Color matching"]
    },
    {
      title: "PREMIUM SIDEWALK FINISHING",
      icon: Shield,
      image: "/lovable-uploads/336c6e2d-c2cf-441c-aa6f-988e7621b1a4.png",
      description: "High-end finishing options for residential and commercial properties. Decorative scoring, exposed aggregate, colored concrete, and other premium finishes that enhance curb appeal.",
      features: ["Decorative patterns", "Exposed aggregate", "Colored concrete", "Architectural finishes"]
    }
];

const additionalServices = [
    {
      title: "TREE ROOT MANAGEMENT",
      image: "/lovable-uploads/aDhsmcHW3ZqAB7hAF4cdYN.jpg",
      description: "Solutions for sidewalk damage caused by tree roots. We offer root pruning, root barrier installation, or specialized sidewalk designs that accommodate tree growth without damage.",
    },
    {
      title: "SIDEWALK WATERPROOFING",
      image: "/lovable-uploads/37832434-df02-4d5c-ab63-22f4648855c7.png",
      description: "Advanced waterproofing treatments to prevent water infiltration from sidewalks into basements or foundations. Our sealants protect against freeze-thaw damage and structural water damage.",
    },
    {
      title: "DOT VIOLATION REMEDIATION",
      image: "/lovable-uploads/DOT_Tiles-01.png",
      description: "Expert correction of NYC DOT sidewalk violations. We handle all aspects from violation assessment to final inspection sign-off, ensuring compliance with all city regulations.",
    }
];

  return (
    <section id="service-details" className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundColor: '#25709a' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            The <span className="text-primary">New York</span> construction company<br />
            <span className="text-muted-foreground text-3xl font-medium">that you can trust</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Send us the DOT violation, and we will handle it all - from zero to hero. All your sidewalk repair needs met in one place.
          </p>
        </div>

        {/* Main Services */}
        <div 
          ref={cardsRef as any}
          className={`grid lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-border transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative flex flex-col h-full ${
                cardsVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: cardsVisible ? `${index * 200}ms` : '0ms' }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5"></div>
              
              {/* Image with Overlay */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/50"></div>
                <div className="absolute top-4 left-4">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
              </div>
              
              <div className="p-8 relative z-10 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-accent mb-4 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Features List */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <a href="tel:+17184337589">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group mt-auto">
                  Request service 
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                </a>
              </div>
              
              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div 
          ref={secondRowRef as any}
          className={`grid lg:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${
            secondRowVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {additionalServices.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-border transition-all duration-500 hover:scale-105 hover:-translate-y-2 relative flex flex-col h-full ${
                secondRowVisible ? 'animate-zoom-in' : 'opacity-0 scale-50'
              }`}
              style={{ animationDelay: secondRowVisible ? `${index * 250}ms` : '0ms' }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5"></div>
              
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/60"></div>
              </div>
              
              <div className="p-6 relative z-10 flex flex-col flex-grow">
                <h3 className="text-lg font-black text-accent mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <a href="tel:+17184337589">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 group mt-auto"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                </a>
              </div>
              
              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get a Free Quote Here
          </Button>
        </div>
      </div>
    </section>
  );
};