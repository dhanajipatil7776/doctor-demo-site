import React, { useState } from "react";
import axios from "axios";
import { Phone, MessageCircle, CheckCircle2, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
import { callHref, waHref } from "@/lib/clinic";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SERVICES = [
  "Dental Check-up & Cleaning",
  "Teeth Whitening",
  "Root Canal Treatment",
  "Crowns / Bridges / Implants",
  "Kids' Dentistry",
  "Braces / Aligners",
  "Other",
];

export const BookingSection = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: "",
    preferred_date: "",
    preferred_time: "",
    notes: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const update = (k, v) => setForm((s) => ({ ...s, [k]: v }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service) {
      toast.error("Please fill name, phone and service.");
      return;
    }
    if (!/^[+\d\s-]{6,20}$/.test(form.phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/appointments`, form);
      setDone(true);
      toast.success("Appointment request sent! We'll call you back shortly.");
    } catch (err) {
      toast.error("Could not send request. Please try Call or WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="book" data-testid="booking-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-sky-700 font-semibold">
              Book your visit
            </span>
            <h2 className="font-display font-bold text-stone-900 mt-3 text-3xl sm:text-4xl tracking-tight">
              Send a request — we'll call you back within 30 minutes.
            </h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Prefer to talk now? Tap a button below and we'll find you the next
              available slot today.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 max-w-md">
              <a
                href={callHref}
                data-testid="booking-call-button"
                className="flex items-center justify-center gap-2 rounded-2xl bg-sky-700 hover:bg-sky-600 text-white px-5 py-3.5 font-semibold transition"
              >
                <Phone className="h-5 w-5" />
                Call
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                data-testid="booking-whatsapp-button"
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#1EBE5D] text-white px-5 py-3.5 font-semibold transition"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
            {done ? (
              <div
                data-testid="booking-success"
                className="text-center py-10 px-2"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-green-50 grid place-items-center">
                  <CheckCircle2 className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-display font-semibold text-stone-900 text-xl mt-5">
                  Request received!
                </h3>
                <p className="text-stone-600 mt-2 max-w-md mx-auto">
                  Thank you, {form.name}. Our team will reach out to{" "}
                  <span className="font-medium text-stone-800">{form.phone}</span> shortly to
                  confirm your appointment.
                </p>
                <button
                  data-testid="booking-reset-button"
                  onClick={() => {
                    setDone(false);
                    setForm({
                      name: "",
                      phone: "",
                      service: "",
                      preferred_date: "",
                      preferred_time: "",
                      notes: "",
                    });
                  }}
                  className="mt-6 text-sm font-medium text-sky-700 hover:text-sky-800"
                >
                  Book another visit →
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                data-testid="booking-form"
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                <div className="sm:col-span-2">
                  <Label htmlFor="name" className="text-stone-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    data-testid="booking-name-input"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="e.g., Ramesh Iyer"
                    className="mt-1.5 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-stone-700">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    data-testid="booking-phone-input"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 98XXXXXXXX"
                    className="mt-1.5 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Label className="text-stone-700">Service</Label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => update("service", v)}
                  >
                    <SelectTrigger
                      data-testid="booking-service-select"
                      className="mt-1.5 h-12 rounded-xl"
                    >
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICES.map((s) => (
                        <SelectItem key={s} value={s} data-testid={`service-option-${s.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="date" className="text-stone-700">
                    Preferred Date
                  </Label>
                  <Input
                    id="date"
                    data-testid="booking-date-input"
                    type="date"
                    value={form.preferred_date}
                    onChange={(e) => update("preferred_date", e.target.value)}
                    className="mt-1.5 h-12 rounded-xl"
                  />
                </div>
                <div>
                  <Label htmlFor="time" className="text-stone-700">
                    Preferred Time
                  </Label>
                  <Input
                    id="time"
                    data-testid="booking-time-input"
                    type="time"
                    value={form.preferred_time}
                    onChange={(e) => update("preferred_time", e.target.value)}
                    className="mt-1.5 h-12 rounded-xl"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="notes" className="text-stone-700">
                    Notes (optional)
                  </Label>
                  <Textarea
                    id="notes"
                    data-testid="booking-notes-input"
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    placeholder="Tell us briefly about your concern..."
                    className="mt-1.5 rounded-xl min-h-[88px]"
                  />
                </div>
                <div className="sm:col-span-2 mt-2">
                  <button
                    data-testid="booking-submit-button"
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-sky-700 hover:bg-sky-600 disabled:opacity-70 text-white px-6 py-4 font-semibold transition"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Request Appointment"
                    )}
                  </button>
                  <p className="text-xs text-stone-500 mt-3 text-center">
                    By submitting, you agree to be contacted by the clinic.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
