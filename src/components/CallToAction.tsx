import { Button } from "@/components/ui/button";

export const CallToAction = ({ whiteBackground = true }) => {
  return (
    <section className={`py-32 ${whiteBackground ? 'bg-white' : 'bg-primary'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className={`text-5xl md:text-6xl font-bold mb-8 ${
          whiteBackground ? 'text-primary' : 'text-white'
        }`}>
          Ready to fix your sidewalk?
        </h2>
        
        <div className="max-w-3xl mx-auto mb-12">
          <p className={`text-xl md:text-2xl leading-relaxed ${
            whiteBackground ? 'text-gray-700' : 'text-white/90'
          }`}>
            Get a free, no-obligation estimate from NYC's trusted sidewalk specialists
          </p>
        </div>

        <a href="tel:+17184337589">
          <Button className={`${
            whiteBackground 
              ? 'bg-primary text-white hover:bg-primary/90' 
              : 'bg-white text-primary hover:bg-white/90'
          } px-12 py-6 text-xl md:text-2xl font-bold shadow-lg hover:shadow-xl transition-all`}>
            Get an estimate
          </Button>
        </a>
      </div>
    </section>
  );
};