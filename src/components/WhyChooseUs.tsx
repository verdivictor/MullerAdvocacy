import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { 
  CheckCircle, 
  Award, 
  Users, 
  Shield, 
  Clock, 
  Star, 
  Wrench, 
  Heart,
  Leaf,
  ChevronRight,
  Trophy,
  MapPin
} from "lucide-react";
import { useState } from "react";

export const WhyChooseUs = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: benefitsRef, isVisible: benefitsVisible } = useScrollAnimation();
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimation();
  
  const [openItem, setOpenItem] = useState(0);

  const stats = [
    { number: "30+", label: "Years of Experiece", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Trophy },
    { number: "98%", label: "Satisfied Clients", icon: Star },
    { number: "5", label: "Boroughs Serviced", icon: MapPin }
  ];

  const benefits = [
    {
      title: "Experienced and qualified team",
      icon: Users,
      content: "Our New York construction team consists of highly qualified and experienced professionals dedicated to delivering excellent craftsmanship and unmatched customer service. With attention to detail, we ensure every project is completed to the highest standards.",
      highlight: "OSHA Certified professionals with over 30 years of experience"
    },
    {
      title: "Transparent pricing and accurate estimates",
      icon: CheckCircle,
      content: "We provide detailed, transparent estimates for all our projects. No surprises, no hidden costs - just honesty and clarity in every proposal.",
      highlight: "Detailed estimates with no hidden fees"
    },
    {
      title: "Fully licensed and insured",
      icon: Shield,
      content: "All our work is performed with proper licenses and insurance. Your peace of mind is our priority, ensuring complete protection for you and your property.",
      highlight: "Current licenses and comprehensive insurance"
    },
    {
      title: "Timely project completion",
      icon: Clock,
      content: "We meet deadlines and deliver projects as agreed. Our efficient planning and professional management ensure your project is completed on time.",
      highlight: "100% of projects delivered on schedule"
    },
    {
      title: "Unmatched customer service",
      icon: Heart,
      content: "Our priority is total customer satisfaction on every project. We maintain constant communication and ensure your expectations are always exceeded.",
      highlight: "24/7 support throughout your project"
    },
    {
      title: "Environmentally Conscious Practices",
      icon: Leaf,
      content: "We use sustainable materials and practices whenever possible. Committed to the environment and the sustainable future of construction.",
      highlight: "Eco-friendly materials and sustainable practices"
    }
  ];

  const projectImages = [
    {
      src: "/lovable-uploads/33a4f5b5-4df7-459a-aa19-57e8893bf5f0.png",
      title: "Brooklyn",
      subtitle: "Residential Sidewalk"
    },
    {
      src: "/lovable-uploads/a06c3246-2f38-472f-922b-d6d8bf0cee5e.png",
      title: "Brooklyn",
      subtitle: "Residential Sidewalk"
    },
    {
      src: "/lovable-uploads/4757b684-afa0-43b0-9312-62654c8b0d4e.png",
      title: "Brooklyn",
      subtitle: "Residential Sidewalk"
    },
    {
      src: "/lovable-uploads/8233832b-4778-4622-8cfb-d14e7caf008c.png",
      title: "Brooklyn",
      subtitle: "Residential Sidewalk"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary via-accent to-primary"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        {/* Title Section */}
        <div 
          ref={titleRef as any}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6">
            Why <span className="text-primary">choose us</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            30+ years specializing in NYC sidewalk repair - trusted by Brooklyn homeowners and property managers to fix DOT violations and repair damaged walkways.
          </p>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef as any}
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-300 ${
            statsVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center group transition-all duration-500 ${
                statsVisible ? 'animate-scale-in' : 'opacity-0 scale-75'
              }`}
              style={{ animationDelay: statsVisible ? `${index * 150}ms` : '0ms' }}
            >
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
                <stat.icon className="w-10 h-10 text-accent" />
              </div>
              <div className="text-4xl font-black text-primary mb-2 group-hover:text-accent transition-colors duration-300">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Enhanced Accordion */}
          <div 
            ref={benefitsRef as any}
            className={`space-y-4 transition-all duration-1000 delay-500 ${
              benefitsVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className={`bg-card border border-border rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 group ${
                  benefitsVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-20'
                }`}
                style={{ animationDelay: benefitsVisible ? `${index * 100}ms` : '0ms' }}
              >
                <button
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-muted/50 rounded-2xl transition-all duration-300"
                  onClick={() => setOpenItem(openItem === index ? -1 : index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      openItem === index 
                        ? 'text-accent' 
                        : 'text-accent group-hover:text-primary'
                    }`}>
                      <benefit.icon className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-lg text-card-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </span>
                  </div>
                  <ChevronRight 
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                      openItem === index ? "rotate-90" : "group-hover:translate-x-1"
                    }`}
                  />
                </button>
                
                {openItem === index && (
                  <div className="px-8 pb-6 animate-fade-in-up">
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border-l-4 border-primary">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {benefit.content}
                      </p>
                      <div className="flex items-center text-primary font-semibold">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        {benefit.highlight}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Side - Enhanced Images */}
          <div 
            ref={imagesRef as any}
            className={`transition-all duration-1000 delay-700 ${
              imagesVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="grid grid-cols-2 gap-6">
              {projectImages.map((image, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    imagesVisible ? 'animate-zoom-in' : 'opacity-0 scale-50'
                  }`}
                  style={{ animationDelay: imagesVisible ? `${index * 200}ms` : '0ms' }}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-lg mb-1">{image.title}</h4>
                    <p className="text-sm text-gray-200">{image.subtitle}</p>
                  </div>
                  
                  {/* Hover Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 rounded-2xl"></div>
                </div>
              ))}
            </div>

            {/* Call to Action Card */}
            <div className="mt-8 bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-center shadow-xl">
              <h3 className="text-2xl font-black text-primary-foreground mb-4">
                Ready to start your project?
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Join hundreds of satisfied customers and transform your property with us.
              </p>
              <Button 
                onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-background text-primary hover:bg-background/90 px-8 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Contate nossos advogados HOJE
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};