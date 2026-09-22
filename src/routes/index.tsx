@@
 import { createFileRoute } from "@tanstack/react-router";
+import { useEffect } from "react";
+import { Footer } from "@/components/Footer";
+import { Navbar } from "@/components/Navbar";
+import { WhatsAppButton } from "@/components/WhatsAppButton";
+import { Amenities, EditorialGallery, FloorPlans, Hero, InvestmentSection, LeadForm, LifestyleSection, LocationSection, ProjectOverview, Residences, ResidenceTypes } from "@/sections/CampaignSections";
 
-// No head() here: the home route inherits title/description/og/twitter from
-// __root.tsx, and ships no og:image so serve-time hosting can inject the
-// project's social preview (explicit og:image or latest screenshot).
 export const Route = createFileRoute("/")({
+  head: () => ({
+    meta: [
+      { title: "Wolves of SZR | Premium Residences on Sheikh Zayed Road, Dubai" },
+      { name: "description", content: "Discover Wolves of SZR by Wolves International — a premium residential opportunity in one of Dubai's most connected locations." },
+      { property: "og:title", content: "Wolves of SZR | Premium Residences on Sheikh Zayed Road, Dubai" },
+      { property: "og:description", content: "A premium residential opportunity by Wolves International on Sheikh Zayed Road, Dubai." },
+      { property: "og:type", content: "website" },
+      { property: "og:url", content: "/" },
+      { name: "twitter:card", content: "summary_large_image" },
+    ],
+    links: [{ rel: "canonical", href: "/" }],
+    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Residence", name: "Wolves of SZR", address: { "@type": "PostalAddress", streetAddress: "Sheikh Zayed Road", addressLocality: "Dubai", addressCountry: "AE" }, provider: { "@type": "RealEstateAgent", name: "Wolves International" } }) }],
+  }),
   component: Index,
 });
 
-// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
 function Index() {
-  return (
-    <div
-      className="flex min-h-screen items-center justify-center"
-      style={{ backgroundColor: "#fcfbf8" }}
-    >
-      <img
-        data-lovable-blank-page-placeholder="REMOVE_THIS"
-        src="https://cdn.gpteng.co/blank-app-v1.svg"
-        alt="Your app will live here!"
-      />
-    </div>
-  );
+  useEffect(() => {
+    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 });
+    document.querySelectorAll(".reveal, .reveal-image").forEach((element) => observer.observe(element));
+    return () => observer.disconnect();
+  }, []);
+  return <><Navbar/><main><Hero/><ProjectOverview/><LocationSection/><Residences/><ResidenceTypes/><Amenities/><InvestmentSection/><LifestyleSection/><FloorPlans/><EditorialGallery/><LeadForm/></main><Footer/><WhatsAppButton/></>;
 }
import { createFileRoute } from "@tanstack/react-router";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  component: Index,
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{ backgroundColor: "#fcfbf8" }}
    >
      <img
        data-lovable-blank-page-placeholder="REMOVE_THIS"
        src="https://cdn.gpteng.co/blank-app-v1.svg"
        alt="Your app will live here!"
      />
    </div>
  );
}
