import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Aposentadoria from "./pages/Aposentadoria";
import Inventario from "./pages/Inventario";
import NotFound from "./pages/NotFound";

const App = () => (
  <>
  <TooltipProvider>
    <Toaster />
    <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/aposentadoria" element={<Aposentadoria />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </>
);

export default App;
