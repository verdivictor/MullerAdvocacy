import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Link } from "react-router-dom";

export const WhoWeAre = () => {
  const { ref: aboutRef, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="who-we-are" 
      ref={aboutRef as any} 
      className="py-20 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center lg:text-left">
          {/* Header 
          <div className={`transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              Who We Are
            </h2>
            <div className="w-24 h-2 bg-primary mx-auto lg:mx-0 mb-8 rounded-full"></div>
          </div>*/}

          {/* Content */}
          <div className={`transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            <div className="space-y-6 text-lg text-muted-foreground mb-10">
              <p>
                <strong className="text-foreground">Brooklyn Sidewalks</strong> is the dedicated sidewalk division of <strong className="text-foreground">Sunnyside Masonry</strong> — where decades of masonry expertise meet specialized sidewalk solutions.
              </p>
              
              <p>
                While Sunnyside handles broader masonry projects, all sidewalk repairs and replacements are exclusively managed through Brooklyn Sidewalks to ensure focused attention on your pavement needs.
              </p>

              <div className="bg-secondary/30 p-6 rounded-xl border-l-4 border-primary">
                <h3 className="font-bold text-foreground mb-2">Why choose Brooklyn Sidewalks?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>Specialized Knowledge:</strong> Our crew focuses solely on sidewalk work, mastering NYC's unique requirements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>Backed by Experience:</strong> Sunnyside's masons bring 10-35 years each to every project</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span><strong>Priority Scheduling:</strong> As a sidewalk-dedicated team, we complete projects faster than general contractors</span>
                  </li>
                </ul>
              </div>

              <p className="text-sm italic text-muted-foreground/70">
                Note: All Brooklyn Sidewalks projects are completed by Sunnyside Masonry's licensed and insured crews, with contracts processed through our parent company for your protection.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              
            <Link to="/who-we-are">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Learn more
              </Button>
              </Link>
              <Button 
                variant="outline" 
                onClick={() => {
                  const element = document.getElementById('contact-form');
                  if (element) {
                    // Different offsets for mobile vs desktop
                    const yOffset = window.innerWidth < 768 ? -260 : 50; // 20px for mobile, 50px for desktop
                    const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Your Free Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};