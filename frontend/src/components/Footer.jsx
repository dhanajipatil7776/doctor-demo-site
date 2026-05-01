import React from "react";
import { CLINIC } from "@/lib/clinic";

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-stone-900 text-stone-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-9 w-9 rounded-xl bg-sky-700 text-white grid place-items-center font-display font-bold">
              S
            </span>
            <span className="font-display font-semibold text-white">
              {CLINIC.name}
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-stone-400 max-w-sm">
            {CLINIC.tagline} Family dentistry that's modern, gentle, and built around
            you.
          </p>
        </div>
        <div>
          <div className="font-display font-semibold text-white">Visit</div>
          <p className="mt-3 text-sm text-stone-400 leading-relaxed">
            {CLINIC.address}
          </p>
        </div>
        <div>
          <div className="font-display font-semibold text-white">Reach us</div>
          <ul className="mt-3 space-y-2 text-sm text-stone-400">
            <li>{CLINIC.phoneDisplay}</li>
            {CLINIC.hours.map((h) => (
              <li key={h.day}>
                {h.day}: <span className="text-stone-300">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-xs text-stone-500 flex flex-col sm:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} {CLINIC.name}. All rights reserved.</span>
          <span>Made with care in Mumbai.</span>
        </div>
      </div>
    </footer>
  );
};
