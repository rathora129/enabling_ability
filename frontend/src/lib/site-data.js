// Central content + config for the Enabling Ability site (frontend-only).

export const BUSINESS = {
  name: "Enabling Ability",
  tagline: "Lawn • Garden • Property Care",
  director: "Sue Nandy",
  phone: "0468 457 872",
  phoneHref: "tel:+61468457872",
  whatsapp: "61468457872",
  email: "sue@enablingability.com",
  emailHref: "mailto:sue@enablingability.com",
  region: "Australia Wide",
  hours: [
    { day: "Mon – Fri", time: "7:00 AM – 6:00 PM" },
    { day: "Saturday", time: "8:00 AM – 4:00 PM" },
    { day: "Sunday", time: "By appointment" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const TRUST_BADGES = [
  "Fully Insured",
  "Professional Team",
  "Reliable Service",
  "Affordable Pricing",
];

export const STATS = [
  { value: 500, suffix: "+", label: "Happy Customers" },
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Customer Satisfaction" },
];

// icon = lucide-react component name (resolved in component)
export const SERVICES = [
  { icon: "Scissors", title: "Lawn Mowing", desc: "Crisp, even cuts and clean edges that keep your lawn looking sharp all season." },
  { icon: "Sprout", title: "Garden Maintenance", desc: "Regular care to keep beds, borders and plants healthy and thriving." },
  { icon: "Fence", title: "Hedge Trimming", desc: "Precise shaping and tidy lines for hedges, shrubs and topiary." },
  { icon: "Flower2", title: "Weeding", desc: "Thorough removal of weeds from lawns, garden beds and pathways." },
  { icon: "Layers", title: "Mulching", desc: "Premium mulch laid to retain moisture, suppress weeds and enrich soil." },
  { icon: "Trash2", title: "Garden Clean Ups", desc: "Full seasonal clean ups that transform neglected spaces fast." },
  { icon: "Recycle", title: "Green Waste Removal", desc: "We haul away all clippings, prunings and organic waste responsibly." },
  { icon: "Truck", title: "Rubbish Removal", desc: "General and garden rubbish cleared and disposed of the right way." },
  { icon: "Droplets", title: "Pressure Washing", desc: "Restore driveways, patios and paths to a like-new finish." },
  { icon: "Home", title: "Gutter Cleaning", desc: "Safe, complete gutter clearing to protect your property year round." },
  { icon: "TreeDeciduous", title: "Tree Pruning", desc: "Healthy, balanced pruning for shape, safety and strong growth." },
  { icon: "Axe", title: "Small Tree Removal", desc: "Careful removal of small trees and stumps with full site clean up." },
  { icon: "Wrench", title: "Property Maintenance", desc: "Reliable ongoing upkeep for homes, rentals and grounds." },
  { icon: "HeartHandshake", title: "NDIS Garden Services", desc: "Supportive, dependable garden care tailored for NDIS participants." },
  { icon: "Accessibility", title: "Aged Care Gardening", desc: "Gentle, respectful gardening that keeps outdoor spaces safe and lovely." },
  { icon: "Building2", title: "Commercial Lawn Care", desc: "Scheduled maintenance that keeps commercial grounds pristine." },
  { icon: "House", title: "Residential Lawn Care", desc: "Tailored lawn programs designed around your home and lifestyle." },
  { icon: "Leaf", title: "Seasonal Garden Care", desc: "Season-by-season programs to keep gardens at their best all year." },
  { icon: "AlarmClock", title: "Emergency Clean Up", desc: "Fast-response clean ups for storms, inspections and last-minute needs." },
];

export const WHY_US = [
  { icon: "Award", title: "Experienced Professionals", desc: "A skilled, background-checked team who take genuine pride in their work." },
  { icon: "Wallet", title: "Affordable Pricing", desc: "Fair, transparent quotes with no hidden fees or surprises." },
  { icon: "CalendarCheck", title: "Reliable Scheduling", desc: "We show up on time, every time, and communicate every step." },
  { icon: "Search", title: "Attention To Detail", desc: "The little finishing touches that make a big difference." },
  { icon: "ShieldCheck", title: "Fully Insured", desc: "Complete public liability cover for total peace of mind." },
  { icon: "Smile", title: "Friendly Staff", desc: "Approachable, respectful and happy to go the extra mile." },
  { icon: "Cog", title: "Quality Equipment", desc: "Commercial-grade tools for a faster, cleaner, better result." },
  { icon: "ThumbsUp", title: "Customer Satisfaction", desc: "Not happy? We make it right. Your satisfaction is guaranteed." },
];

export const STEPS = [
  { no: "01", title: "Request Quote", desc: "Send us a message or call. Tell us what your property needs.", icon: "MessageSquare" },
  { no: "02", title: "Free Inspection", desc: "We visit and assess your space at absolutely no cost.", icon: "ClipboardCheck" },
  { no: "03", title: "Receive Estimate", desc: "Get a clear, fixed quote with no obligation to proceed.", icon: "FileText" },
  { no: "04", title: "Service Completed", desc: "We get to work and leave your property looking its best.", icon: "CheckCircle2" },
];

export const AREAS = [
  { title: "Residential", desc: "Homes, courtyards & suburban gardens.", icon: "Home", img: "https://images.pexels.com/photos/37064587/pexels-photo-37064587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Commercial", desc: "Offices, retail & business grounds.", icon: "Building2", img: "https://images.pexels.com/photos/4079768/pexels-photo-4079768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "NDIS", desc: "Supportive care for participants.", icon: "HeartHandshake", img: "https://images.pexels.com/photos/5163429/pexels-photo-5163429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Aged Care", desc: "Gentle, dependable garden upkeep.", icon: "Accessibility", img: "https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Real Estate", desc: "Inspection & sale-ready presentation.", icon: "Building", img: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Body Corporate", desc: "Strata & shared common areas.", icon: "Users", img: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
];

export const GALLERY = [
  { src: "https://images.pexels.com/photos/4079768/pexels-photo-4079768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", alt: "Gardener trimming grass in a scenic park", span: "row-span-2" },
  { src: "https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800", alt: "Lush green meadow garden", span: "" },
  { src: "https://images.pexels.com/photos/5163429/pexels-photo-5163429.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800", alt: "Professional landscaper working", span: "" },
  { src: "https://images.pexels.com/photos/1453499/pexels-photo-1453499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", alt: "Manicured garden pathway", span: "row-span-2" },
  { src: "https://images.pexels.com/photos/37064587/pexels-photo-37064587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800", alt: "Modern home with lush landscaping", span: "" },
  { src: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=600&w=800", alt: "Neatly maintained backyard lawn", span: "" },
  { src: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=700", alt: "Well kept residential garden", span: "row-span-2" },
  { src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80", alt: "Freshly mown striped lawn", span: "" },
];

export const BEFORE_AFTER = [
  {
    label: "Backyard Transformation",
    before: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    after: "https://images.pexels.com/photos/589/garden-grass-meadow-green.jpg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
  },
  {
    label: "Garden Clean Up",
    before: "https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
    after: "https://images.pexels.com/photos/37064587/pexels-photo-37064587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=800&w=1200",
  },
];

export const TESTIMONIALS = [
  { name: "Margaret Wilson", role: "Homeowner, Sydney", rating: 5, text: "Absolutely first class. The team turned my overgrown backyard into something I'm genuinely proud of. Punctual, tidy and so friendly." },
  { name: "David Chen", role: "NDIS Participant, Parramatta", rating: 5, text: "Sue and the team are wonderful. Reliable every fortnight and always respectful. It has taken so much stress off my shoulders." },
  { name: "Rebecca Taylor", role: "Property Manager", rating: 5, text: "We use Enabling Ability across multiple rentals. Consistent quality, easy to deal with and inspection-ready every single time." },
  { name: "James O'Brien", role: "Aged Care Coordinator", rating: 5, text: "Gentle, patient and thorough with our residents' gardens. The grounds have never looked better. Highly recommend." },
  { name: "Priya Sharma", role: "Homeowner, Melbourne", rating: 5, text: "Fair pricing and beautiful results. The hedge trimming and mulching completely lifted the front of our home." },
  { name: "Tom Reynolds", role: "Cafe Owner", rating: 5, text: "Our commercial frontage always looks immaculate now. Clients notice the difference. Worth every dollar." },
];

export const FAQS = [
  { q: "What areas do you service?", a: "We provide lawn mowing, gardening and property maintenance across metropolitan and surrounding suburbs Australia-wide. Send us your address in the enquiry form and we'll confirm availability straight away." },
  { q: "How do I get a quote?", a: "Simply fill out the enquiry form or tap Call Now. Most quotes are free and provided after a quick, no-obligation inspection of your property." },
  { q: "Are you fully insured?", a: "Yes. We carry full public liability insurance, so you and your property are completely covered while we work." },
  { q: "Do you offer NDIS and Aged Care services?", a: "Absolutely. We specialise in supportive, dependable garden care for NDIS participants and Aged Care clients, with respectful and reliable staff." },
  { q: "How often can I schedule a service?", a: "We offer weekly, fortnightly, monthly and one-off services. Ongoing clients enjoy priority scheduling and consistent pricing." },
  { q: "Do you remove the green waste?", a: "Yes. All clippings, prunings and garden waste are cleared and disposed of responsibly as part of the service unless you'd prefer to keep them." },
  { q: "What's included in a garden clean up?", a: "A full clean up typically includes mowing, edging, weeding, pruning, tidying beds and removing all waste, leaving your space refreshed and ready." },
  { q: "Do I need to be home during the service?", a: "Not at all. As long as we have safe access to the property, you're welcome to leave it with us. We'll send confirmation once we're done." },
  { q: "How do I pay?", a: "We accept bank transfer and other common methods. Invoicing details are confirmed with your quote before any work begins." },
  { q: "What if I'm not happy with the result?", a: "Your satisfaction is guaranteed. If anything isn't right, let us know and we'll return promptly to make it right at no extra cost." },
];

// Build a wa.me deep link from enquiry form values.
export function buildWhatsAppLink(form) {
  const lines = [
    "Hello,",
    "",
    "I would like to request a quote.",
    "",
    `Name: ${form.name || "-"}`,
    `Phone: ${form.phone || "-"}`,
    `Email: ${form.email || "-"}`,
    `Address: ${form.address || "-"}`,
    `Required Service: ${form.service || "-"}`,
    `Preferred Date: ${form.date || "-"}`,
    `Message: ${form.message || "-"}`,
  ];
  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${BUSINESS.whatsapp}?text=${text}`;
}
