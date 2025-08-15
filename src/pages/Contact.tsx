
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Award, Clock, Phone, Mail, MapPin, Star, CheckCircle, Users, Timer } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const heroRef = useScrollAnimation();
  const statsRef = useScrollAnimation();
  const contactRef = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Modern Hero Section */}
      <section 
        ref={heroRef.ref}
        className={`relative pt-32 pb-20 overflow-hidden transition-all duration-1000 ${
          heroRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          backgroundImage: `url('/lovable-uploads/b730bd0e-7843-4066-8557-144e756ed94a.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-primary/70"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/70 to-accent/60"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* Trust badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-left">
            <Badge variant="secondary" className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30">
              <Shield className="w-4 h-4 mr-2" />
              Licensed in NYC
            </Badge>
            <Badge variant="secondary" className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30">
              <Award className="w-4 h-4 mr-2" />
              +30 Years of Experience
            </Badge>
            <Badge variant="secondary" className="bg-background/20 backdrop-blur-sm text-primary-foreground hover:bg-background/30 px-4 py-2 border-primary-foreground/30">
              <Clock className="w-4 h-4 mr-2" />
              We answer within 24h
            </Badge>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
            Speak With Us
            <span className="block text-accent drop-shadow-lg">
              Right Now
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up drop-shadow-md">
            Our specialized team is ready to help you. 
            Free quote for your project, permit arrangement included.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section 
        ref={statsRef.ref}
        className={`py-16 bg-muted/30 transition-all duration-1000 delay-300 ${
          statsRef.isVisible ? 'animate-slide-in-bottom' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-muted-foreground">Finished Projects</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                  <Timer className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-bold text-accent mb-2">24h</div>
                <div className="text-muted-foreground">Response Time</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-secondary-foreground" />
                </div>
                <div className="text-3xl font-bold text-secondary-foreground mb-2">2 year</div>
                <div className="text-muted-foreground">Guarantee</div>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-muted-foreground">Average Rating</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <main 
        ref={contactRef.ref}
        className={`py-20 bg-gradient-to-br from-background via-muted/20 to-background transition-all duration-1000 delay-500 ${
          contactRef.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Contact Us
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    Our team is ready to serve you with speed and quality. 
                    Get in touch via the channels below or fill in the form.
                  </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-primary">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="w-14 h-14 rounded-xl bg-primary text-primary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Phone className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">Call Now</h3>
                          <p className="text-muted-foreground mb-3">Immediate service for emergencies</p>
                        <a 
                          href="tel:+17184337589" 
                          className="text-primary font-semibold hover:text-primary/80 transition-colors text-lg"
                        >
                          (718) 433-7589
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-accent">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="w-14 h-14 rounded-xl bg-accent text-accent-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Mail className="w-7 h-7" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-foreground mb-2 text-lg">E-mail</h3>
                        <p className="text-muted-foreground mb-3">Guaranteed response in up to 24 hours</p>
                        <a 
                          href="mailto:office@brooklynsidewalks.com" 
                          className="text-accent font-semibold hover:text-accent/80 transition-colors"
                        >
                          office@brooklynsidewalks.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>

                   <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-l-secondary">
                     <CardContent className="flex items-start space-x-4 p-6">
                       <div className="w-14 h-14 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center group-hover:scale-110 transition-transform">
                         <MapPin className="w-7 h-7" />
                       </div>
                       <div className="flex-1">
                         <h3 className="font-bold text-foreground mb-2 text-lg">Service Area</h3>
                         <p className="text-muted-foreground mb-3">We cover all 5 boroughs</p>
                         <div className="text-secondary-foreground font-semibold">
                           Brooklyn • Queens • Manhattan • Bronx • Staten Island
                         </div>
                       </div>
                     </CardContent>
                   </Card>
                </div>

                {/* Emergency Service Card */}
                <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-lg bg-red-100 dark:bg-red-900 flex items-center justify-center mr-4">
                        <Star className="w-6 h-6 text-red-600" />
                      </div>
                      <h3 className="font-bold text-red-800 dark:text-red-400 text-xl">24/7 Emergency Service</h3>
                    </div>
                    <p className="text-red-700 dark:text-red-300 mb-6 text-lg leading-relaxed">
                      Urgent problems with sidewalks? Our team is available 24 hours a day 
                      for emergency situations that need immediate attention.
                    </p>
                    <a 
                      href="tel:+17184337589" 
                      className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold text-lg hover:scale-105 hover:shadow-lg"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Emergency - Call Now
                    </a>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <ContactForm />
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;
