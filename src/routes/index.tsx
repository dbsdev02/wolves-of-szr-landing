import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Amenities, EditorialGallery, FloorPlans, Hero, InvestmentSection, LeadForm, LifestyleSection, LocationSection, ProjectOverview, Residences, ResidenceTypes } from "@/sections/CampaignSections";

export const Route = createFileRoute("/")({ component: Index });

function Index() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal, .reveal-image").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectOverview />
        <LocationSection />
        <Residences />
        <ResidenceTypes />
        <Amenities />
        <InvestmentSection />
        <LifestyleSection />
        <FloorPlans />
        <EditorialGallery />
        <LeadForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
