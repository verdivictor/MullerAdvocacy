import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, BadgeAlert, BadgeCheck, FileText, HardHat, DollarSign, Clock, ShieldCheck, AlertCircle, CheckCircle, MoveDown } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Presentation = () => {

    const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimation();


    const projectImages = [
        {
            src: "/lovable-uploads/tree_root_elevation.png",
            title: "Mismanaged tree roots",
            subtitle: "Tree roots can grow and damage nearby sidewalks, if not properly contained."
        },
        {
            src: "/lovable-uploads/trip_hazard.webp",
            title: "Uneven sidewalk",
            subtitle: "An uneven sidewalk is subject to a DOT violation, according to § 19-152 of the NYC Administrative Code."
        },
        {
            src: "/lovable-uploads/badly_patched_sidewalk.jpg",
            title: "Badly patched sidewalk",
            subtitle: "A badly patched sidewalk is subject to a DOT violation, according to § 19-152 of the NYC Administrative Code. "
        },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#f4f8fa]">
            <div className="flex flex-col items-center gap-y-12 bg-primary text-white">
                <div className="flex flex-col items-center px-6 lg:px-0 py-20 md:py-32 gap-y-8 bg-primary text-white px-4">
                    <h2 className="text-4xl md:text-6xl mb-8 md:mb-24 font-bold text-center max-w-4xl leading-tight">
                        <span className="text-red-500">Broken sidewalk</span> in the NYC area?
                    </h2>
<div 
  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-8"
  ref={imagesRef as any}
>
  {projectImages.map((image, index) => (
    <div
      key={index}
      className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${imagesVisible ? 'animate-zoom-in' : 'opacity-0 scale-50'}`}
      style={{ animationDelay: imagesVisible ? `${index * 200}ms` : '0ms' }}
    >
      <img
        src={image.src}
        alt={image.title}
        className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="font-bold text-lg mb-1">{image.title}</h4>
        <p className="text-sm text-gray-200">{image.subtitle}</p>
      </div>
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 transition-colors duration-300 rounded-2xl"></div>
    </div>
  ))}
</div>
                    <h2 className="text-4xl md:text-6xl mt-24 font-bold text-center max-w-4xl leading-tight">
                        Choose a contractor you can trust.
                    </h2>
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 py-12 w-full max-w-6xl mx-auto px-4">
                        {/* Benefit 1 - Strong red */}
                        <div className="flex gap-5 items-start flex-1">
                            <ShieldCheck size={52} className="text-red-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-medium pb-3">Avoid costly violations & fines</h3>
                                <p className="text-lg md:text-xl text-blue-100 opacity-90 leading-tight">
                                    An unhandled DOT violation will block you from <strong>selling</strong> or <strong>refinancing</strong> your property. We help you stay compliant.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 2 - Vibrant accent yellow */}
                        <div className="flex gap-5 items-start flex-1">
                            <Clock size={52} className="text-yellow-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-medium pb-3">Fast, hassle-free repairs</h3>
                                <p className="text-lg md:text-xl text-blue-100 opacity-90 leading-tight">
                                    Most repairs completed within <strong>72 hours</strong> of approval.
                                </p>
                            </div>
                        </div>

                        {/* Benefit 3 - Rich green */}
                        <div className="flex gap-5 items-start flex-1">
                            <DollarSign size={52} className="text-green-500 mt-1 flex-shrink-0" />
                            <div>
                                <h3 className="text-2xl md:text-3xl font-medium pb-3">No hidden fees</h3><br />
                                <p className="text-lg md:text-xl text-blue-100 opacity-90 leading-tight">
                                    Transparent pricing with <strong>free inspections</strong> and no surprise charges.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight mb-16">
                        When you sign with <span className="text-accent">Brooklyn Sidewalks</span>, you can <span className="text-green-500">sign off</span>.
                    </h2>
                    <img 
                        src="/lovable-uploads/friends.jpg"
                        alt="Brooklyn Repair - Company Photo"
                        className="w-[700px] h-full object-cover rounded-2xl shadow-xl group-hover:scale-105 transition-transform duration-500 mb-16"
                    />
                    <h2 className="text-4xl md:text-6xl font-bold text-center max-w-4xl leading-tight">
                        We will take care of the whole process for you
                    </h2>
                    <MoveDown size={112} className="mt-12 animate-bounce" />
                </div>
            </div>
        </section>
    );
};