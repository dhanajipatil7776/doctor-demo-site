import React from "react";
import {
  Smile,
  Sparkles,
  Stethoscope,
  Baby,
  Crown,
  ShieldPlus,
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Dental Check-up & Cleaning",
    desc: "Thorough oral exam, scaling and polishing — the foundation of long-term oral health.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    desc: "Safe, in-clinic whitening that brightens your smile by several shades in a single visit.",
  },
  {
    icon: Smile,
    title: "Root Canal Treatment",
    desc: "Painless, single-sitting RCTs using modern rotary endodontics. Save your natural tooth.",
  },
  {
    icon: Crown,
    title: "Crowns, Bridges & Implants",
    desc: "Replace missing teeth with natural-looking, long-lasting solutions tailored to you.",
  },
  {
    icon: Baby,
    title: "Kids' Dentistry",
    desc: "Gentle, fun-friendly care that builds healthy habits and a fearless smile early on.",
  },
  {
    icon: ShieldPlus,
    title: "Braces & Aligners",
    desc: "Traditional braces and clear aligners for a beautifully aligned smile, at every age.",
  },
];

export const Services = () => {
  return (
    <section id="services" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-sky-700 font-semibold">
            What we treat
          </span>
          <h2 className="font-display font-bold text-stone-900 mt-3 text-3xl sm:text-4xl tracking-tight">
            Comprehensive dental care, under one roof.
          </h2>
          <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
            Every treatment is performed with sterilized equipment, transparent pricing,
            and a clear explanation of what to expect.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              data-testid={`service-${title.toLowerCase().replace(/\s+/g, "-")}`}
              className="group bg-white p-7 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md hover:-translate-y-0.5 transition"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-sky-700 group-hover:bg-sky-700 group-hover:text-white transition">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="font-display font-semibold text-stone-900 text-xl mt-5">
                {title}
              </h3>
              <p className="text-stone-600 text-sm mt-2 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
