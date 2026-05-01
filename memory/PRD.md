# PRD — Dr. Sharma Dental Clinic Landing Page

## Original Problem Statement
Build a high-converting local business website for a doctor/clinic. Goal: increase calls, WhatsApp inquiries, and appointment bookings. Mobile-first, calming colors, large tap targets, sticky mobile CTA.

## Architecture
- **Backend**: FastAPI + MongoDB (Motor). Routes prefixed `/api`.
- **Frontend**: React + React Router + Tailwind + Shadcn UI + lucide-react icons + sonner toasts.
- **Fonts**: Outfit (display) + Manrope (body) via Google Fonts.
- **Theme**: Soft Medical Blue (#0369A1) on warm off-white (#FDFBF7), WhatsApp green (#25D366) for tertiary CTA.

## User Personas
- **Local patients (Andheri/Lokhandwala/Versova)** searching "dentist near me" — primary.
- **Clinic admin** — checks appointment requests at `/admin`.

## Core Requirements (static)
- Hero with dual CTAs (Call + WhatsApp)
- Doctor Profile (photo, credentials, stats)
- Services grid
- Booking form (saves to backend) + Call/WhatsApp shortcuts
- Contact section with embedded Google Maps + click-to-call + WhatsApp
- Testimonials (3 reviews with stars)
- FAQ (Shadcn Accordion, 6 Q&As)
- Sticky Mobile CTA (md:hidden, fixed bottom, Call + WhatsApp)
- Admin dashboard at `/admin` listing all requests

## Implemented (2025-12)
- Backend: `GET /api/clinic`, `POST /api/appointments`, `GET /api/appointments`
- Frontend pages: `/` (Landing), `/admin` (Appointment list)
- Components: Header, Hero, DoctorProfile, Services, Testimonials, BookingSection, Contact, FAQ, Footer, StickyMobileCTA
- Tested end-to-end via testing_agent_v3 — 100% backend & frontend pass.

## Backlog (P0 → P2)
- **P1**: Admin page authentication (currently public).
- **P1**: Surface 422 validation errors from backend in booking form toast.
- **P2**: Store `created_at` as native datetime in Mongo (currently ISO string).
- **P2**: WhatsApp click tracking + call analytics (gtag/Meta pixel) for ROI.
- **P2**: SEO/local search meta tags + JSON-LD `Dentist` schema for "dentist near me" Google ranking.
- **P2**: Multi-language (Hindi / Marathi) toggle.
- **P2**: Replace demo content with multi-tenant config so it can be sold to other doctors.

## Next Tasks
1. Add `Dentist` JSON-LD schema + Open Graph tags for local SEO win.
2. Protect `/admin` with a simple password.
3. Connect WhatsApp click events to analytics.
