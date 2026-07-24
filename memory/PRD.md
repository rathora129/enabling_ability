# Enabling Ability — Premium Lawn & Garden Website

## Original Problem Statement
Premium, modern, high-end single-page marketing website for an Australian Lawn Mowing, Gardening & Property Maintenance company "Enabling Ability" (business model inspired by Dylan's Mowing, but original branding). Goal: maximise enquiries, build trust, drive calls/quote requests. Frontend-only — enquiry form generates a WhatsApp deep link (no backend).

## Architecture
- **Stack:** React 19 (CRA + craco), Tailwind CSS, Framer Motion, Lenis (smooth scroll), Embla (testimonials), react-fast-marquee, lucide-react icons, shadcn/ui primitives (Accordion, Select, Input, Textarea, Label, Sonner toasts).
- **No backend / no DB** — form submission builds `https://wa.me/61468457872?text=...` and opens WhatsApp.
- **Theme:** Orange (#E65C00) primary, Dark Green (#0A2B1E) secondary, White bg, light-gray cards, soft-green accent. Fonts: Cabinet Grotesk (headings), Manrope (body).
- Structure: `src/App.js` (Lenis + all sections), `src/components/site/*` (18 section components), `src/lib/site-data.js` (content + WhatsApp builder), `src/lib/motion.jsx` (Reveal/KineticHeading), `src/hooks/useLenis.js`.

## Business details
- Director: Sue Nandy · Phone: 0468 457 872 · Email: sue@enablingability.com · WhatsApp target: 61468457872 · Map: Sydney NSW.

## What's implemented (2026-07-24)
- Preloader, sticky glass Navbar (hide-on-scroll + mobile drawer), kinetic parallax Hero with floating trust badges.
- Editorial trust Marquee, About (manifesto chapters + animated stat counters), Services (19 icon cards), Why Choose Us (dark), How It Works (4 steps), Service Areas (stylized Australia map + 6 cards).
- Before/After drag comparison sliders, masonry Gallery + lightbox, Testimonials carousel, FAQ accordion (10), CTA banner, Contact (RHF enquiry form -> WhatsApp) + details + Google map iframe, Footer.
- Floating WhatsApp/Call/Scroll-top (desktop) + sticky mobile CTA bar. Brand logo integrated (user-provided). SEO meta tags.
- Verified: hero/sections render, WhatsApp deep link builds correctly with all fields, toast + form reset.

## Backlog / Next
- P1: Real gallery/before-after photos from the business; embed real Google Maps place.
- P2: Social share of quote; add reduced-motion audit; add real ABN/insurance badge assets.
