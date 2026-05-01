import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Will the treatment hurt?",
    a: "Modern dentistry is virtually pain-free. We use effective local anesthesia and gentle techniques. Most patients tell us they felt nothing at all.",
  },
  {
    q: "Do you accept insurance / cashless?",
    a: "Yes, we work with most major Indian dental insurance providers and TPAs. Bring your card and we'll handle the paperwork.",
  },
  {
    q: "How much does a consultation cost?",
    a: "Initial consultation and oral exam is ₹300, fully adjusted against any treatment you proceed with. Diagnostic X-rays are charged separately if required.",
  },
  {
    q: "Can I get a same-day appointment?",
    a: "Most days, yes. Call us or send a WhatsApp message and we'll fit you into the next available slot — often within a few hours.",
  },
  {
    q: "Is the clinic safe and sterilized?",
    a: "Absolutely. We follow ADA-grade sterilization protocols, use single-use disposables wherever possible, and autoclave every instrument between patients.",
  },
  {
    q: "Do you treat children?",
    a: "Yes, we love seeing little patients. Our pediatric approach is gentle, friendly, and designed to build a lifelong positive relationship with the dentist.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" data-testid="faq-section">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="text-center">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-sky-700 font-semibold">
            FAQ
          </span>
          <h2 className="font-display font-bold text-stone-900 mt-3 text-3xl sm:text-4xl tracking-tight">
            Common questions, clear answers.
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              data-testid={`faq-item-${i}`}
              className="bg-white border border-stone-200 rounded-2xl px-5"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-stone-900 text-base sm:text-lg hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-stone-600 leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
