import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { SquareArrowRight } from "lucide-react";

export const Steps = ({ reverseLayout, img, step, title, description, list }) => {
  const { ref: stepsRef, isVisible } = useScrollAnimation();

  return (
    <section ref={stepsRef as any} className={`py-20 relative overflow-hidden ${reverseLayout ? 'bg-white' : 'bg-primary'}`}>
      <div className="container mx-auto px-6 relative">
        <div className={`flex flex-col lg:flex-row gap-16 items-center ${reverseLayout ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Column */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 ${
            isVisible ? (reverseLayout ? 'animate-fade-in-right' : 'animate-fade-in-left') : 'opacity-0'
          }`}>
            <div className="relative group">
              <img 
                src={img}
                alt="Brooklyn Repair - Company Photo"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${reverseLayout ? 'from-primary/20' : 'from-white/20'} to-transparent rounded-2xl`}></div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-500 ${
            isVisible ? (reverseLayout ? 'animate-fade-in-left' : 'animate-fade-in-right') : 'opacity-0'
          }`}>
            <div className="mb-2">
              <span className={`inline-block px-4 py-2 rounded-full text-xl font-bold tracking-wider ${
                reverseLayout 
                  ? 'bg-primary/10 text-primary' 
                  : 'bg-white/10 text-white'
              }`}>
                {step}
              </span>
            </div>

            <h2 className={`text-4xl md:text-5xl font-black mb-6 leading-tight ${
              reverseLayout ? 'text-primary' : 'text-white'
            }`}>
              {title}
            </h2>

            <div className="space-y-6">
              <p className={`text-lg leading-relaxed ${
                reverseLayout ? 'text-gray-700' : 'text-white/90'
              }`}>
                {description}
              </p>

              <ul className="space-y-4 pl-1">
                {list?.map(item => 
                <li className="flex items-start gap-1">
                  <SquareArrowRight size={20} className={`mt-1 ${
                    reverseLayout ? 'text-primary' : 'text-white'
                  }`} />
                  <span className={`${reverseLayout ? 'text-gray-700' : 'text-white/90'}`}>
                    <strong className={reverseLayout ? 'text-primary' : 'text-white'}>{item.title}</strong> {item.body}
                  </span>
                </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};