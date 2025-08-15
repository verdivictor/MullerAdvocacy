import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const FAQ = () => {
  const [openItem, setOpenItem] = useState(0);

  const faqs = [
    {
      question: "What services does Brooklyn Sidewalks provide?",
      answer: "Brooklyn Sidewalks specializes in sidewalk repair, replacement, DOT violation corrections, trip hazard removal, waterproofing, and premium finishing. We also offer general construction services including concrete work, paving, and renovations throughout NYC."
    },
    {
      question: "How do I know if my sidewalk needs repair or replacement?",
      answer: "Signs include visible cracks (>¼ inch), uneven surfaces (creating trip hazards), spalling (flaking concrete), or DOT violations. We offer free inspections to assess your sidewalk's condition."
    },
    {
      question: "Do you handle NYC DOT sidewalk violations?",
      answer: "Yes! We specialize in resolving DOT violations—from initial assessment to final inspection sign-off. We handle all paperwork and ensure compliance with NYC regulations."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve all five boroughs with a focus on Brooklyn, Queens, and Manhattan. We cover residential, commercial, and municipal properties."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, we're fully licensed (NYC DOT-approved) and carry comprehensive liability insurance and workers' compensation coverage for your protection."
    },
    {
      question: "How long does sidewalk replacement typically take?",
      answer: "Most residential projects take 1-3 days (including curing time). Commercial projects vary based on size. We provide clear timelines during our free estimate."
    },
    {
      question: "Do you work with property managers and landlords?",
      answer: "Absolutely. We’re experienced with multi-unit buildings, HOA properties, and commercial portfolios. Ask about our account programs for recurring maintenance."
    },
    {
      question: "Can you match existing concrete finishes?",
      answer: "Yes, we specialize in color-matching and texture-matching to maintain aesthetic consistency with your existing walkways."
    },
    {
      question: "How do I get a free estimate?",
      answer: "Call us at 718-433-7589, email office@brooklynsidewalks.com, or fill out our online form. We’ll schedule a convenient time to assess your project and provide a detailed, no-obligation quote."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, checks, and bank transfers. Financing options are available for larger projects."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-accent font-semibold">
            General Construction Services in the five boroughs and New York metropolitan region
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg bg-card">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50"
                onClick={() => setOpenItem(openItem === index ? -1 : index)}
              >
                <span className="font-semibold text-primary text-lg">
                  + {faq.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-primary transition-transform ${
                    openItem === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {openItem === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};