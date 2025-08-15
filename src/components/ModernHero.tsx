import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  details: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
}

export const ModernHero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    details: ""
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "An e-mail is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "E-mail format is invalid.";
    }
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (!phoneDigits) {
      newErrors.phone = "A telephone number is required.";
    } else if (phoneDigits.length < 8) {
      newErrors.phone = "Telephone is too short.";
    }
    if (!formData.details.trim()) {
      newErrors.details = "Project details are required";
    }
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});

    try {
      const resp = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await resp.json();
      if (resp.ok) {
        if(window?.gtag) {
            window?.gtag("event", "form_submit_success", {
              event_category: "form_submit",
              event_label: "form_submit_success"
          });
        }
        toast.success("Quote request sent! We will contact you until the end of the day.");
        setFormData({ name: "", email: "", phone: "", details: "" });
      } else {
        toast.error("Error when sending request: " + data.message);
      }
    } catch (err) {
      toast.error("Connection error when sending");
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section ref={heroRef as any} className="md:z-[10000] relative mt-[60px] bg-background md:mt-16">
      {/* Top Bar */}
      <div className="bg-primary text-white py-2 px-4 text-sm hidden sm:block">
        <div className="container mx-auto flex justify-center items-center gap-8 font-semibold text-lg">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>+1 (718)-433-7589</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4" />
            <span>office@mulleradvocacy.com</span>
          </div>
        </div>
      </div>

      {/* Main Hero */}
      <div
      id="contact-form"
        className="relative min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/lovable-uploads/pexels-karolina-grabowska-7876093.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
            {/* Left Content */}
              <div
                className={`text-white transition-all duration-1000 ${
                  heroVisible ? 'animate-fade-in-left' : 'opacity-0 translate-x-[-20px]'
                }`}
              >
                <div className="mb-1">
                  <span className="text-white text-sm lg:text-lg font-semibold">
                    TRABALHISTA · TRIBUTÁRIO · CIVIL
                  </span><br />
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className="text-accent mb-2">Raphael Muller</span><br />
                </h1>
                <span className="text-white text-3xl lg:text-2xl font-light">
                  Advocacia com confiança, prestatividade e diligência.
                </span><br />
              </div>

            {/* Right Form */}
            <div
              className={`bg-accent p-8 rounded-lg transition-all duration-1000 delay-300 ${
                heroVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-[20px]'
              }`}
            >
              <h2 className="text-accent-foreground text-2xl font-bold mb-6">
                Fale com nossos advogados hoje
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 h-full overflow-auto">
                <div>
                  <Input
                    placeholder="Name"
                    value={formData.name}
                    onChange={e => handleChange('name', e.target.value)}
                    className="bg-background border-none text-foreground"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Input
                    type="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={e => handleChange('email', e.target.value)}
                    className="bg-background border-none text-foreground"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <Input
                    type="tel"
                    placeholder="Telephone"
                    value={formData.phone}
                    onChange={e => handleChange('phone', e.target.value)}
                    className="bg-background border-none text-foreground"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <Textarea
                    placeholder="Project Details"
                    value={formData.details}
                    onChange={e => handleChange('details', e.target.value)}
                    className="bg-background border-none text-foreground min-h-[100px]"
                  />
                  {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3"
                >
                  FALE COM NOSSOS ADVOGADOS HOJE
                </Button>
              </form>
              <ToastContainer position="top-right" autoClose={5000}  style={{ zIndex: 1000 }} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover draggable />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};