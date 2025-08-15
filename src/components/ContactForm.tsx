import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  details: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  details?: string;
}

export const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    details: ""
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});

  const validate = (): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) newErrors.email = "An e-mail is required.";
    if (!formData.phone.trim()) newErrors.phone = "A telephone number is required.";
    if (!formData.details.trim()) newErrors.details = "Project details are required.";
    return newErrors;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
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
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();

      if (response.ok) {
        if(window?.gtag) {
            window?.gtag("event", "form_submit_success", {
              event_category: "form_submit",
              event_label: "form_submit_success"
          });
        }
        toast({ title: "Quote requested!", description: "We will offer a response in up to 24h." });
        setFormData({ name: "", email: "", phone: "", details: "" });
      } else {
        toast({ title: "Error when sending", description: data.message || "Try again later.", variant: 'destructive' });
      }
    } catch (error) {
      console.error(error);
      toast({ title: "Connection error", description: "We were not unable to send the form.", variant: 'destructive' });
    }
  };

  return (
    <Card className="shadow-2xl border-0 bg-card/95 backdrop-blur-sm hover:shadow-3xl transition-all duration-500">
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Request Your Quote
        </CardTitle>
        <p className="text-muted-foreground text-lg">
          Fill in the form and our team will be in touch in up to 24h.
        </p>
      </CardHeader>

      <CardContent className="p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Input
              placeholder="Full Name"
              value={formData.name}
              onChange={e => handleChange('name', e.target.value)}
              className="h-12 w-full border-2 focus:border-primary transition-colors"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          <div>
            <Input
              type="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={e => handleChange('email', e.target.value)}
              className="h-12 w-full border-2 focus:border-primary transition-colors"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <Input
              type="tel"
              placeholder="Telephone"
              value={formData.phone}
              onChange={e => handleChange('phone', e.target.value)}
              className="h-12 w-full border-2 focus:border-primary transition-colors"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          <div>
            <Textarea
              placeholder="Project Details"
              value={formData.details}
              onChange={e => handleChange('details', e.target.value)}
              className="min-h-[120px] w-full border-2 focus:border-primary transition-colors resize-none"
            />
            {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
          </div>

          <Button
            type="submit"
            className="w-full h-14 flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground text-lg font-bold shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Send className="w-5 h-5" />
            Submit Request
          </Button>

          <div className="flex items-center justify-center pt-4 text-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <p className="text-sm text-muted-foreground">
              <span className="text-accent font-semibold">Guaranteed response in up to 24h</span>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};
