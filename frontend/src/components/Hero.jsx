import React from "react";
import { Phone, MessageCircle, Star, ShieldCheck, MapPin } from "lucide-react";
import { CLINIC, callHref, waHref, IMAGES } from "@/lib/clinic";

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-6 reveal">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-800 text-xs sm:text-sm font-medium border border-sky-100">
              <MapPin className="h-3.5 w-3.5" />
              {CLINIC.location} • Trusted since 2009
            </div>
            <h1
              data-testid="hero-headline"
              className="font-display font-bold text-stone-900 mt-5 text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight"
            >
              Pain-free dental care, <span className="text-sky-700">just minutes away.</span>
            </h1>
            <p
              data-testid="hero-subheadline"
              className="mt-5 text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              From routine check-ups to advanced root canals and smile makeovers — get
              gentle, modern dentistry from {CLINIC.doctor} (15+ years experience) right
              here in Andheri West.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a
                data-testid="hero-call-button"
                href={callHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-700 hover:bg-sky-600 text-white px-7 py-4 font-semibold transition hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                data-testid="hero-whatsapp-button"
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white px-7 py-4 font-semibold transition hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp Now
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-stone-600">
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-medium text-stone-800">4.9 Google rating</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-sky-700" />
                Sterilized • Insurance accepted
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-200/60 aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]">
              <img
                src={IMAGES.clinicHero}
                alt="Modern dental clinic interior"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating doctor card */}
            <div
              data-testid="hero-doctor-badge"
              className="hidden sm:flex absolute -left-4 lg:-left-10 bottom-6 items-center gap-3 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.1)] border border-stone-100 p-3 pr-5"
            >
              <img
                src={IMAGES.doctor}
                alt={CLINIC.doctor}
                className="h-14 w-14 rounded-xl object-cover"
              />
              <div>
                <div className="font-display font-semibold text-stone-900 text-sm">
                  {CLINIC.doctor}
                </div>
                <div className="text-xs text-stone-500">15+ Years • BDS, MDS</div>
              </div>
            </div>

            {/* Floating stat */}
            <div className="absolute -right-3 -top-3 sm:-right-6 sm:-top-6 bg-white rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-stone-100 px-4 py-3">
              <div className="font-display text-2xl font-bold text-sky-700">12k+</div>
              <div className="text-[11px] text-stone-500 uppercase tracking-wide">
                Happy Patients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
