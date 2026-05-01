import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { CLINIC, callHref } from "@/lib/clinic";

const navItems = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "testimonials", label: "Reviews" },
  { id: "book", label: "Book" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header
      data-testid="site-header"
      className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-stone-200/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          data-testid="header-logo"
          className="flex items-center gap-2"
        >
          <span className="h-9 w-9 rounded-xl bg-sky-700 text-white grid place-items-center font-display font-bold">
            S
          </span>
          <span className="font-display font-semibold text-stone-900 leading-tight">
            <span className="block text-sm tracking-tight">{CLINIC.shortName}</span>
            <span className="block text-[11px] text-stone-500 font-normal">
              {CLINIC.location}
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              data-testid={`nav-${n.id}`}
              className="text-sm text-stone-700 hover:text-sky-700 transition"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={callHref}
            data-testid="header-call-button"
            className="inline-flex items-center gap-2 rounded-xl bg-sky-700 hover:bg-sky-600 text-white px-4 py-2.5 text-sm font-semibold transition"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
        </div>

        <button
          data-testid="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-stone-200 text-stone-800"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-stone-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                data-testid={`mobile-nav-${n.id}`}
                className="py-2 text-stone-800 hover:text-sky-700"
              >
                {n.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
