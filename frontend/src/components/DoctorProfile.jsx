import React from "react";
import { Award, GraduationCap, Stethoscope, HeartHandshake } from "lucide-react";
import { CLINIC, IMAGES } from "@/lib/clinic";

const credentials = [
  { icon: GraduationCap, text: "BDS, MDS — Conservative Dentistry & Endodontics" },
  { icon: Award, text: "Member, Indian Dental Association (IDA)" },
  { icon: Stethoscope, text: "15+ years of clinical experience" },
  { icon: HeartHandshake, text: "Trusted by 12,000+ families across Mumbai" },
];

export const DoctorProfile = () => {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="bg-stone-50/60 border-y border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-[0_12px_40px_rgba(0,0,0,0.06)] aspect-[4/5]">
              <img
                src={IMAGES.doctor}
                alt={CLINIC.doctor}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-7">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-sky-700 font-semibold">
              Meet your dentist
            </span>
            <h2 className="font-display font-bold text-stone-900 mt-3 text-3xl sm:text-4xl tracking-tight">
              {CLINIC.doctor}
            </h2>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              {CLINIC.doctor} has spent over 15 years helping families across Andheri
              regain confident, pain-free smiles. From child-friendly check-ups to
              full-mouth rehabilitations, every treatment is explained clearly — no
              jargon, no pressure.
            </p>

            <ul className="mt-7 grid sm:grid-cols-2 gap-3">
              {credentials.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 bg-white border border-stone-200 rounded-2xl p-4"
                >
                  <span className="h-9 w-9 grid place-items-center rounded-xl bg-sky-50 text-sky-700 shrink-0">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="text-sm text-stone-700 leading-snug pt-1.5">
                    {text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CLINIC.stats.map((s) => (
                <div
                  key={s.label}
                  data-testid={`stat-${s.label.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-white rounded-2xl border border-stone-200 p-4"
                >
                  <div className="font-display text-2xl sm:text-3xl font-bold text-sky-700">
                    {s.value}
                  </div>
                  <div className="text-xs text-stone-500 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
