import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Amenities, EditorialGallery, FloorPlans, Hero, InvestmentSection, LeadForm, LifestyleSection, LocationSection, ProjectOverview, Residences, ResidenceTypes } from "@/sections/CampaignSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Wolves of SZR | Premium Residences on Sheikh Zayed Road, Dubai" },
      { name: "description", content: "Discover Wolves of SZR by Wolves International — a premium residential opportunity in one of Dubai's most connected locations." },
      { property: "og:title", content: "Wolves of SZR | Premium Residences on Sheikh Zayed Road, Dubai" },
      { property: "og:description", content: "A premium residential opportunity by Wolves International on Sheikh Zayed Road, Dubai." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Residence", name: "Wolves of SZR", address: { "@type": "PostalAddress", streetAddress: "Sheikh Zayed Road", addressLocality: "Dubai", addressCountry: "AE" }, provider: { "@type": "RealEstateAgent", name: "Wolves International" } }) }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
    document.querySelectorAll(".reveal, .reveal-image").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return <><Navbar /><main><Hero /><ProjectOverview /><LocationSection /><Residences /><ResidenceTypes /><Amenities /><InvestmentSection /><LifestyleSection /><FloorPlans /><EditorialGallery /><LeadForm /></main><Footer /><WhatsAppButton /></>;
}
