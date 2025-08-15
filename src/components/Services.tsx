import { Button } from "@/components/ui/button";
import { Building, Building2, Factory, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  const services = [
    {
      icon: Building,
      title: "Sidewalk Repairs",
      description: "Expert repairs and replacements for damaged sidewalks, ensuring safety and compliance with NYC regulations.",
      features: [
        "Customized solutions",
        "High-quality materials",
        "Specialized team",
        "Extended warranty"
      ]
    },
    {
      icon: Building2,
      title: "DOT Violation Removals",
      description: "Fast and efficient removal of NYC DOT violations, helping property owners avoid fines and legal issues.",
      features: [
        "Municipal approval",
        "Optimized scheduling",
        "Required certifications",
        "Full support"
      ]
    },
    {
      icon: Factory,
      title: "Other Construction Services",
      description: "Comprehensive construction solutions for both residential and commercial properties.",
      features: [
        "Residential Construction",
        "Commercial Construction",
        "Safety compliance",
        "Included maintenance"
      ]
    }
  ];
    
  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
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
            Our <span className="text-primary">Construction Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer complete solutions for construction and renovation, with guaranteed quality and competitive prices.
          </p>
        </div>

        <div 
          ref={cardsRef as any}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            cardsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col h-full ${
                cardsVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'
              }`}
              style={{ animationDelay: cardsVisible ? `${index * 200}ms` : '0ms' }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center justify-center w-20 h-20 mb-6 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-3 flex-grow">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0 group-hover:animate-pulse" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <Button 
                    onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    Get a free quote
                  </Button>
                </div>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get your free quote
          </Button>
        </div>
      </div>
    </section>
  );
};