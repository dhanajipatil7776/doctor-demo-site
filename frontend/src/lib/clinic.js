export const CLINIC = {
  name: "Dr. Sharma Dental Clinic",
  shortName: "Sharma Dental",
  doctor: "Dr. Anil Sharma",
  credentials: "BDS, MDS — Conservative Dentistry & Endodontics",
  tagline: "Caring smiles. Trusted hands.",
  location: "Andheri West, Mumbai",
  phoneDisplay: "+91 98765 43210",
  phoneTel: "+919876543210",
  whatsappNumber: "919876543210", // no plus, used in wa.me
  whatsappMessage:
    "Hi Dr. Sharma, I'd like to book a dental consultation at your Andheri clinic.",
  address:
    "204, Lokhandwala Complex, Andheri West, Mumbai, Maharashtra 400053",
  mapsEmbed:
    "https://www.google.com/maps?q=Lokhandwala+Complex+Andheri+West+Mumbai&output=embed",
  hours: [
    { day: "Mon – Sat", time: "10:00 AM – 8:30 PM" },
    { day: "Sunday", time: "By appointment only" },
  ],
  stats: [
    { label: "Years of Experience", value: "15+" },
    { label: "Happy Patients", value: "12,000+" },
    { label: "Google Rating", value: "4.9★" },
    { label: "Procedures Done", value: "20k+" },
  ],
};

export const callHref = `tel:${CLINIC.phoneTel}`;
export const waHref = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(
  CLINIC.whatsappMessage,
)}`;

export const IMAGES = {
  clinicHero:
    "https://static.prod-images.emergentagent.com/jobs/843dfdd7-8a2c-4316-93c8-bb26895b6752/images/914eedab4e45bcd180e338a5626b2809c81651d0429596a181c2839e8b7badc3.png",
  doctor:
    "https://static.prod-images.emergentagent.com/jobs/843dfdd7-8a2c-4316-93c8-bb26895b6752/images/37abb6bc9bc30cc8ff196639fc2982daeb2b89193cfe1d31a9ac9bc1c065c263.png",
  tools:
    "https://static.prod-images.emergentagent.com/jobs/843dfdd7-8a2c-4316-93c8-bb26895b6752/images/e5d7e92368d219591f0fefb5c16732d249ea8edc8defead109646f4a3cfcb8a7.png",
  patient1:
    "https://static.prod-images.emergentagent.com/jobs/843dfdd7-8a2c-4316-93c8-bb26895b6752/images/a91d8cfbf31610bae60fb43a0da877da10b7d8e3d691660a4eb2dab50da4ae00.png",
  patient2:
    "https://images.unsplash.com/photo-1758600587683-d86675a2f6e9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1Mjh8MHwxfHNlYXJjaHwyfHxoYXBweSUyMHBhdGllbnQlMjBwZXJmZWN0JTIwc21pbGV8ZW58MHx8fHwxNzc3NjM2MTU2fDA&ixlib=rb-4.1.0&q=85",
  patient3:
    "https://images.pexels.com/photos/11956947/pexels-photo-11956947.jpeg",
};
