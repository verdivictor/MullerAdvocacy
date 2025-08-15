
import { Header } from "@/components/Header";
import { ModernHero } from "@/components/ModernHero";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Presentation } from "@/components/Presentation";
import { Steps } from "@/components/Steps";
import { WhoWeAre } from "@/components/WhoWeAre";

const inspList = [
  {
    title: "Root Assessment:",
    body: "We evaluate tree root interference and determine if root shaving or tree removal is needed to prevent future damage"
  },
  {
    title: "Utility Check:",
    body: "We identify all underground utilities (gas, water, electrical) to ensure safe demolition"
  },
  {
    title: "Material Evaluation:",
    body: "We assess concrete composition and thickness to determine proper replacement specifications"
  }
];

const demoList = [
  {
    title: "Precision Demolition:",
    body: "Targeted removal of damaged sections while protecting surrounding areas and property"
  },
  {
    title: "Site Safety:",
    body: "Immediate securing of exposed edges and hazardous areas to prevent accidents"
  },
  {
    title: "Waste Management:",
    body: "All debris is containerized and disposed of properly according to NYC regulations"
  }
];

const finishList = [
  {
    title: "Broom Finish:",
    body: "Professional texturing of the surface for optimal traction and ADA compliance"
  },
  {
    title: "Pitch Testing:",
    body: "Water testing to ensure proper drainage away from buildings (1/4\" per foot slope)"
  },
  {
    title: "Final Inspection:",
    body: "Thorough quality check before submitting completion paperwork to NYC DOT"
  }
];

const constList = [
  {
    title: "Waterproofing:",
    body: "Application of waterproof membranes where needed to prevent water damage and erosion"
  },
  {
    title: "Concrete Pouring:",
    body: "Precision placement of high-quality DOT-approved concrete mix for maximum durability"
  },
  {
    title: "Reinforcement:",
    body: "Installation of rebar or wire mesh as required by NYC building codes"
  }
];

const inspDesc = "Our initial inspection includes precise measurements, hazard identification, and evaluation of potential challenges for your sidewalk replacement or repair."
const demoDesc = "Our demolition process focuses on precision and safety. Using specialized equipment, we carefully remove damaged concrete while minimizing disruption to your property and neighborhood. Every step includes dust control measures and immediate cleanup.";
const constDesc = "We construct your new sidewalk using premium materials and techniques. This includes proper base preparation, waterproofing if needed, and precise pouring of concrete to meet all NYC DOT specifications.";
const finishDesc = "The finishing phase ensures your sidewalk meets all aesthetic and functional requirements. We apply the standard broom finish texture, verify proper drainage, and handle all final inspections and documentation.";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <ModernHero />
      <Presentation />
      <Steps reverseLayout={true} img="/lovable-uploads/inspection.jpg" step="STEP 1" title="Inspection" list={inspList} description={inspDesc} />
      <Steps reverseLayout={false} img="/lovable-uploads/demolition.jpg" step="STEP 2" title="Demolition" list={demoList} description={demoDesc} />
      <Steps reverseLayout={true} img="/lovable-uploads/a06c3246-2f38-472f-922b-d6d8bf0cee5e.png" step="STEP 3" title="Construction" list={constList} description={constDesc} />
      <Steps reverseLayout={false} img="/lovable-uploads/broom_finish.jpg" step="STEP 4" title="Finish" list={finishList} description={finishDesc} />
      <CallToAction />
      <WhyChooseUs />
      {/*
      <ServiceDetails />
      <Services />
      
      <Gallery />*/}
      <Testimonials />
      {/*<WhoWeAre />*/}
      <FAQ />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
