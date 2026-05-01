import React from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { DoctorProfile } from "@/components/DoctorProfile";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { BookingSection } from "@/components/BookingSection";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Toaster } from "@/components/ui/sonner";

export default function Landing() {
  return (
    <div className="bg-[#FDFBF7] min-h-screen">
      <Header />
      <main>
        <Hero />
        <DoctorProfile />
        <Services />
        <Testimonials />
        <BookingSection />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
      <Toaster richColors position="top-center" />
    </div>
  );
}
