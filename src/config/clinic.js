/**
 * CENTRAL CLINIC CONFIGURATION
 * ----------------------------
 * Every clinic-specific detail on the website comes from this file.
 * To adapt the template for a new clinic, edit the values here, replace the
 * images in /public/images, and update src/data/testimonials.js.
 * No component should contain clinic details of its own.
 */

// The clinic's telephone number. Use the international format where possible,
// e.g. "+91 44 1234 5678". Verify the number before deploying for a real client.
const phone = "0123456789";

export const clinic = {
  name: "Serene Health Clinic",
  tagline: "Compassionate Care for a Healthier Tomorrow",

  location: {
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
  },

  contact: {
    phone,
    // Derived from `phone` so the number is defined in one place only.
    // Non-digit characters (spaces, hyphens, brackets) are stripped; "+" is kept.
    tel: `tel:${phone.replace(/[^\d+]/g, "")}`,
  },

  // Applied as CSS custom properties in src/utils/branding.js.
  branding: {
    primaryColor: "#0F766E",
    secondaryColor: "#E6F4F1",
    accentColor: "#DCEFEA",
    textColor: "#1F2937",
    backgroundColor: "#FFFFFF",
  },

  content: {
    heroTitle: "Your Health, Our Priority",
    heroSubtitle:
      "Experience compassionate, patient-focused care in a welcoming environment.",

    aboutTitle: "Care That Puts You First",
    aboutDescription:
      "We believe healthcare should be personal, accessible, and centered around every patient's needs.",

    contactTitle: "We're Here to Help",
    contactDescription:
      "Call our clinic to book an appointment, check an existing appointment, or ask a question.",
  },

  // Icon names must match keys in src/components/iconMap.js.
  trustIndicators: [
    { icon: "ShieldCheck", label: "Compassionate Staff" },
    { icon: "Heart", label: "Patient-First Approach" },
    { icon: "Phone", label: "Easy to Reach by Phone" },
  ],

  // Icon names must match keys in src/components/iconMap.js.
  aboutFeatures: [
    {
      icon: "Heart",
      title: "Patient-Centered Care",
      description: "Your concerns come first, and we explain options in plain language.",
    },
    {
      icon: "Armchair",
      title: "Comfortable Environment",
      description: "A clean, calm space designed to help you feel at ease.",
    },
    {
      icon: "Users",
      title: "Personalized Attention",
      description: "Time to listen, ask questions, and understand what works for you.",
    },
    {
      icon: "CalendarCheck",
      title: "Convenient Appointments",
      description: "Call us to find a time that suits your schedule.",
    },
  ],

  images: {
    hero: "/images/clinic-hero.jpg",
    heroAlt: "A smiling doctor in a bright, plant-filled consultation room, listening to a patient",
    about: "/images/clinic-about.jpg",
    aboutAlt: "Clinic reception lounge with the clinic's name on the wall, where a nurse speaks with a patient",
  },

  // Only non-empty links are displayed in the footer.
  socialLinks: {
    instagram: "",
    facebook: "",
    linkedin: "",
  },

  demo: {
    isDemo: true,
    showDemoNotice: true,
  },
};

/** Address generated from the location fields, e.g. "Chennai, Tamil Nadu, India". */
export const displayAddress = [
  clinic.location.city,
  clinic.location.state,
  clinic.location.country,
]
  .filter(Boolean)
  .join(", ");
