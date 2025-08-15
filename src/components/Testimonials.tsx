
import { Star, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Testimonials = () => {
  const { ref: testimonialsRef, isVisible } = useScrollAnimation();
  const testimonials = [
    {
    name: "Ana Rodriguez",
    location: "Queens",
    text: "The team at Brooklyn Sidewalks took care of everything with DOT for me. Clean and fast service! I recommend them to everyone in Queens.",
    rating: 5
    },
    {
    name: "Michael Chen", 
    location: "Brooklyn",
    text: "I got a ticket from the DOT and was desperate. Not only did they fix it, they helped me with all the paperwork. Excellent!",
    rating: 5
    },
    {
    name: "Sarah Johnson",
    location: "Manhattan", 
    text: "Real professionals! They did the repair in 2 days and the sidewalk was perfect. Fair price and impeccable quality.",
    rating: 5
    },
    {
    name: "Carlos Martinez",
    location: "Bronx",
    text: "The tree in front of my house had lifted the whole sidewalk. They fixed it while respecting the tree and city regulations.",
    rating: 4
    }
  ];

  return (
    <section id="testimonials" ref={testimonialsRef as any} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
        }`}>
          <h2 className="text-4xl font-bold text-foreground mb-6">
            What our clients say
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hundreds of homeowners in NYC have already put their trust in our work. 
            Here are some real testimonials from satisfied clients.
          </p>
        </div>

        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-[20px]'
        }`}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card rounded-lg shadow-lg p-6 relative hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Quote className="w-8 h-8 text-accent mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                <div className="text-accent text-sm font-medium">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transition-all duration-1000 delay-500 ${
          isVisible ? 'animate-scale-in' : 'opacity-0 scale-90'
        }`}>
          <div className="bg-card rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <div className="flex justify-center gap-8 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">4.9/5</div>
                <div className="text-muted-foreground text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">250+</div>
                <div className="text-muted-foreground text-sm">Satisfied Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">98%</div>
                <div className="text-muted-foreground text-sm">Recommended</div>
              </div>
            </div>
            <p className="text-muted-foreground">
              All our customers recommend our service to their friends and neighbors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
