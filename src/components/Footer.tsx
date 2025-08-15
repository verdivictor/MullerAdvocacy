
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, ExternalLink, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Logo e Descrição */}
          <div className="space-y-6">
            <div>
              <img 
                src="/lovable-uploads/fasfasf.png" 
                alt="Brooklyn Sidewalks" 
                className="h-12 w-auto group-hover:scale-110 transition-all duration-300 border border-none rounded-[10%] p-[0.5px] bg-[#093056]"
              />
              <p className="text-muted-foreground leading-relaxed">
                NYC sidewalk repair specialists with 30+ years of DOT-compliant experience.
                We engineer durable, code-compliant walkways with precision craftsmanship for properties demanding the highest standards.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3">
              <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-primary/10 p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">(718) 433-7589</p>
                  <p className="text-muted-foreground text-sm">Cell: (718) 433-7589</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">office@mulleradvocacy.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground">40-08 30th Ave</p>
                  <p className="text-muted-foreground">Queens, NY 11103</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-foreground font-semibold">Mon-Fri: 7am to 8pm</p>
                  <p className="text-muted-foreground text-sm">Sat: 9am to 7pm | Sun: 9am to 7pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Úteis */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Useful Links</h3>
            <ul className="space-y-3">
              {/*<li>
                <Link to="/who-we-are" className="text-muted-foreground hover:text-primary transition-colors">
                  Who We Are
                </Link>
              </li>*/}
              <li>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-muted-foreground hover:text-primary transition-colors">
                  Project Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Free Quote
                </a>
              </li>
              {/*<li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>*/}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-2 md:mb-0 text-center md:text-left">
              <p>© 2025 Brooklyn Sidewalks. All Rights Reserved.</p>
              <p>Licensed GC – NYC</p>
            </div>
            {/*<div className="flex items-center space-x-1">
              <span>Desenvolvido por</span>
              <a 
                href="https://nferdica.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold transition-colors flex items-center space-x-1"
              >
                <span>Nathan Ferdinando</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};
