import React from "react";
import { Phone, MessageCircle } from "lucide-react";
import { callHref, waHref } from "@/lib/clinic";

export const StickyMobileCTA = () => {
  return (
    <div
      data-testid="sticky-mobile-cta"
      className="fixed bottom-0 left-0 right-0 z-[100] md:hidden bg-white/95 backdrop-blur border-t border-stone-200 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] sticky-cta-pad px-3 pt-3"
    >
      <div className="grid grid-cols-2 gap-3">
        <a
          data-testid="sticky-call-button"
          href={callHref}
          className="flex items-center justify-center gap-2 rounded-2xl bg-sky-700 hover:bg-sky-600 text-white font-semibold py-3.5 transition active:scale-[0.98]"
        >
          <Phone className="h-5 w-5" />
          Call Now
        </a>
        <a
          data-testid="sticky-whatsapp-button"
          href={waHref}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold py-3.5 transition active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};
