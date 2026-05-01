import React from "react";
import { Star, Quote } from "lucide-react";
import { IMAGES } from "@/lib/clinic";

const reviews = [
  {
    name: "Ramesh Iyer",
    place: "Andheri West",
    img: IMAGES.patient1,
    text:
      "Got my root canal done here — completely painless. Dr. Sharma explained everything before starting. Best dental experience in years.",
  },
  {
    name: "Priya Mehta",
    place: "Lokhandwala",
    img: IMAGES.patient2,
    text:
      "Amazing whitening results in a single visit! The clinic is super clean and the staff genuinely care. Highly recommended for families.",
  },
  {
    name: "Aditi Joshi",
    place: "Versova",
    img: IMAGES.patient3,
    text:
      "Took my 6-year-old here for his first check-up. He left smiling and asking when we can come back. That says everything.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      data-testid="testimonials-section"
      className="bg-stone-50/60 border-y border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-sky-700 font-semibold">
            Real patient stories
          </span>
          <h2 className="font-display font-bold text-stone-900 mt-3 text-3xl sm:text-4xl tracking-tight">
            Trusted by 12,000+ smiles in Mumbai.
          </h2>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <article
              key={r.name}
              data-testid={`testimonial-${r.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="bg-white p-7 rounded-3xl border border-stone-200 relative"
            >
              <Quote className="absolute right-6 top-6 h-7 w-7 text-sky-100" />
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mt-4 text-stone-700 leading-relaxed">{r.text}</p>
              <div className="mt-6 flex items-center gap-3 pt-5 border-t border-stone-100">
                <img
                  src={r.img}
                  alt={r.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <div className="font-display font-semibold text-stone-900 text-sm">
                    {r.name}
                  </div>
                  <div className="text-xs text-stone-500">{r.place}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
