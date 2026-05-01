import React from "react";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { CLINIC, callHref, waHref } from "@/lib/clinic";

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="bg-stone-50/60 border-t border-stone-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-sky-700 font-semibold">
              Visit us
            </span>
            <h2 className="font-display font-bold text-stone-900 mt-3 text-3xl sm:text-4xl tracking-tight">
              Find {CLINIC.shortName} in {CLINIC.location}.
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="h-11 w-11 grid place-items-center rounded-xl bg-white border border-stone-200 text-sky-700">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm uppercase tracking-wider text-stone-500">
                    Clinic Address
                  </div>
                  <div className="text-stone-900 font-medium mt-0.5">
                    {CLINIC.address}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-11 w-11 grid place-items-center rounded-xl bg-white border border-stone-200 text-sky-700">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm uppercase tracking-wider text-stone-500">
                    Phone
                  </div>
                  <a
                    href={callHref}
                    data-testid="contact-phone-link"
                    className="text-stone-900 font-medium mt-0.5 hover:text-sky-700"
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="h-11 w-11 grid place-items-center rounded-xl bg-white border border-stone-200 text-sky-700">
                  <Clock className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-sm uppercase tracking-wider text-stone-500">
                    Hours
                  </div>
                  <ul className="mt-0.5 space-y-0.5">
                    {CLINIC.hours.map((h) => (
                      <li
                        key={h.day}
                        className="text-stone-900 text-sm flex justify-between gap-6 max-w-xs"
                      >
                        <span className="text-stone-600">{h.day}</span>
                        <span className="font-medium">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
              <a
                data-testid="contact-call-button"
                href={callHref}
                className="flex items-center justify-center gap-2 rounded-2xl bg-sky-700 hover:bg-sky-600 text-white px-5 py-3.5 font-semibold transition"
              >
                <Phone className="h-5 w-5" />
                Call Now
              </a>
              <a
                data-testid="contact-whatsapp-button"
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3.5 font-semibold transition"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden border border-stone-200 shadow-[0_12px_40px_rgba(0,0,0,0.05)] bg-white">
            <iframe
              data-testid="map-iframe"
              title="Clinic Map"
              src={CLINIC.mapsEmbed}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[420px] lg:h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
