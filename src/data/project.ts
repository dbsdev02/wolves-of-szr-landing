import architectureImage from "@/assets/wolves-architecture.jpg";
import heroImage from "@/assets/wolves-szr-hero.jpg";
import interiorImage from "@/assets/wolves-interior.jpg";
import lifestyleImage from "@/assets/wolves-lifestyle.jpg";

export const project = {
  brand: "Wolves International",
  name: "Wolves of SZR",
  location: "Sheikh Zayed Road, Dubai, UAE",
  eyebrow: "Wolves International presents",
  headline: "Where Dubai’s energy meets elevated living.",
  intro:
    "A distinctive residential opportunity on Sheikh Zayed Road, positioned at the heart of Dubai’s most connected urban corridor.",
  whatsappNumber: "971000000000",
  email: "enquiries@wolvesinternational.com",
  phone: "+971 (0) 00 000 0000",
  nav: [
    ["The Project", "project"],
    ["Location", "location"],
    ["Residences", "residences"],
    ["Investment", "investment"],
    ["Amenities", "amenities"],
  ],
  stats: ["Sheikh Zayed Road", "Dubai", "Premium residences", "Prime connectivity"],
  destinations: [
    "Downtown Dubai",
    "Dubai Marina",
    "Dubai International Airport",
    "Dubai Mall",
    "Business Bay",
    "DIFC",
    "Jumeirah",
  ],
  gallery: [
    { category: "Residences", image: interiorImage, alt: "Contemporary residence interior overlooking Dubai" },
    { category: "Living Spaces", image: interiorImage, alt: "Refined open-plan living space" },
    { category: "Kitchens", image: interiorImage, alt: "Luxury kitchen and dining setting" },
    { category: "Bedrooms", image: lifestyleImage, alt: "Dubai residence with skyline views" },
    { category: "Bathrooms", image: architectureImage, alt: "Architectural materials and warm metallic details" },
    { category: "Views", image: heroImage, alt: "Sheikh Zayed Road skyline at night" },
  ],
  propertyTypes: ["1 Bedroom", "2 Bedroom", "3 Bedroom", "Penthouse"].map((name, index) => ({
    name,
    bedrooms: index < 3 ? `${index + 1} bedroom${index > 0 ? "s" : ""}` : "Configuration to be confirmed",
    price: "Available on request",
    area: "Area to be confirmed",
  })),
  amenities: [
    "Infinity pool",
    "Fitness centre",
    "Residents’ lounge",
    "Landscaped spaces",
    "Concierge",
    "Wellness",
    "Kids’ area",
    "Private parking",
  ],
  investmentThemes: [
    ["01", "Prime location", "A presence on one of Dubai’s defining urban corridors."],
    ["02", "Global connectivity", "Positioned within a city built for international business and living."],
    ["03", "Dubai real estate demand", "An opportunity within an established global property market."],
    ["04", "Long-term asset potential", "A residential proposition shaped around location and enduring design."],
    ["05", "International buyer appeal", "Designed for globally minded residents and investors."],
  ],
  images: { hero: heroImage, architecture: architectureImage, interior: interiorImage, lifestyle: lifestyleImage },
  footer: {
    regulatory: "RERA and regulatory information — to be confirmed",
    social: ["Instagram", "LinkedIn", "YouTube"],
  },
} as const;

export type GalleryImage = (typeof project.gallery)[number];