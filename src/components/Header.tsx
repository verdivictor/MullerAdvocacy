
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setIsScrolled(currentScrollY > 20);
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    if (!isHomePage) {
      // Se não estiver na home, navega para home primeiro
      navigate('/');
      // Usa um timeout maior para garantir que a página carregue
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 500);
    } else {
      // Se já estiver na home, faz scroll direto
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${
      isScrolled ? 'bg-background/95 backdrop-blur-xl shadow-2xl' : 'bg-background/90 backdrop-blur-lg'
    }`}>
      <div className="container mx-auto p-1">
        <div className="flex items-center justify-between h-14">
          {/* Logo Brooklyn Sidewalks */}
          <Link to="/" className="flex items-center space-x-3 group cursor-pointer">
            <img 
              src="/lovable-uploads/Muller_Adv.png" 
              alt="Muller Advocacy" 
              className="h-32 w-auto group-hover:scale-110 transition-all duration-300"
            />
          </Link>

          {/* Desktop Navigation Moderno */}
          <nav className="hidden md:flex items-center space-x-1">
            {/*<Link 
              to="/who-we-are"
              className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 group"
            >
              Who We Are
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>*/}
            <Link
              to="/aposentadoria" 
              className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 group"
            >
              Aposentadoria
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link 
              to="/inventario" 
              className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 group"
            >
              Inventário
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <button 
              onClick={() => scrollToSection('areas')}
              className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 group"
            >
                Outras áreas de atuação
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </button>
            <Link 
              to="/contato"
              className="relative px-4 py-2 text-muted-foreground hover:text-primary transition-all duration-300 font-medium hover:scale-105 group"
            >
              Contato
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          </nav>

          {/* Desktop CTA Moderno */}
          <div className="hidden md:flex items-center">
            <Link to="/contato">
              <Button 
                className="text-black px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:bg-accent transition-all bg-accent duration-300 hover:scale-105 hover:-translate-y-1"
              >
                Fale conosco hoje
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-4">
              {/*<button 
                onClick={() => scrollToSection('who-we-are')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Who We Are
              </button>*/}
              <button 
                onClick={() => scrollToSection('services')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('testimonials')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Testimonials
              </button>
              <Link 
                to="/contato"
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contato
              </Link>
              <div className="pt-4 border-t border-border">
                <Link to="/contato" className="w-full">
                  <Button 
                    className="text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                  >
                    Fale conosco hoje
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
