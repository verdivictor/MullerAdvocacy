import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Gallery = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Sidewalk replacement",
      description: "Team working on complete sidewalk renovation",
      location: "Brooklyn",
      type: "Residential",
      image: "/lovable-uploads/33a4f5b5-4df7-459a-aa19-57e8893bf5f0.png"
    },
    {
      title: "Sidewalk replacement",
      description: "Technician applying high-quality materials",
      location: "Brooklyn",
      type: "Residential",
      image: "/lovable-uploads/a06c3246-2f38-472f-922b-d6d8bf0cee5e.png"
    },
    {
      title: "Sidewalk replacement",
      description: "Concrete mixer truck at large-scale project",
      location: "Brooklyn",
      type: "Residential",
      image: "/lovable-uploads/37832434-df02-4d5c-ab63-22f4648855c7.png"
    },
    {
      title: "Sidewalk replacement",
      description: "Paving work in busy urban area",
      location: "Brooklyn",
      type: "Residential",
      image: "/lovable-uploads/4757b684-afa0-43b0-9312-62654c8b0d4e.png"
    },
    {
      title: "Driveway replacement",
      description: "Plastic protection applied at all moments",
      location: "Queens",
      type: "Residential",
      image: "/lovable-uploads/test/photo_2025-07-19_13-37-54.jpg"
    },
    {
      title: "Driveway replacement",
      description: "Drying the concrete before the final finish",
      location: "Queens",
      type: "Residential",
      image: "/lovable-uploads/test/photo_2025-07-19_13-37-51.jpg"
    },
    {
      title: "Walkway replacement",
      description: "Finishing the walkway with expert broom finish and timeless design",
      location: "Queens",
      type: "Residential",
      image: "/lovable-uploads/test/photo_2025-07-19_14-59-36.jpg"
    },
    {
      title: "Walkway replacement",
      description: "Carefully finished walkway",
      location: "Queens",
      type: "Residential",
      image: "/lovable-uploads/test/photo_2025-07-19_14-59-34.jpg"
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-background relative overflow-hidden">
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
            Our <span className="text-primary">Work</span> in New York
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our projects carried out in NYC's main neighborhoods. 
            Each job approved by the NYS Department of Transportation (DOT).
          </p>
        </div>

        <div 
          ref={gridRef as any}
          className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
            gridVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
          }`}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                gridVisible ? 'animate-zoom-in' : 'opacity-0 scale-50'
              }`}
              style={{ animationDelay: gridVisible ? `${index * 150}ms` : '0ms' }}
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(37, 112, 154, 0.8)' }}></div>
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex gap-2 mb-3">
                   <Badge className="bg-accent text-accent-foreground text-xs hover:bg-accent/80">
                     {project.location}
                   </Badge>
                   <Badge variant="outline" className="border-white text-white text-xs hover:bg-white hover:text-primary">
                     {project.type}
                   </Badge>
                </div>
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-sm text-gray-200">{project.description}</p>
              </div>

              {/* Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-colors duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6 text-lg">
            All the projects include the required permits and approval by the NYS DOT
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
             <Badge className="bg-accent/10 text-accent px-6 py-3 text-sm font-semibold hover:bg-accent/20 transition-colors cursor-pointer">
               ✓ Approved by the NYS DOT
             </Badge>
             <Badge className="bg-primary/10 text-primary px-6 py-3 text-sm font-semibold hover:bg-primary/20 transition-colors cursor-pointer">
               ✓ 2 year Guarantee
             </Badge>
             <Badge className="bg-secondary/10 text-secondary-foreground px-6 py-3 text-sm font-semibold hover:bg-secondary/20 transition-colors cursor-pointer">
               ✓ Licensed and OSHA Certified
             </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};