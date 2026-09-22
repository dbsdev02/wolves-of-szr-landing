# Wolves of SZR campaign landing page

## Experience
- Build one immersive, dark luxury campaign page at `/` with a full-screen Dubai skyline opening, editorial typography, champagne accents, cinematic image treatment, restrained motion, and a sticky navigation that changes on scroll.
- Preserve the requested section sequence: project overview, SZR location, residences slider, residence types, amenities, investment case, Dubai lifestyle, floor plans, editorial gallery, consultation form, and premium footer.
- Optimize the composition for 1920px desktop, 1024px tablet, and 390–430px mobile, including a mobile menu, swipeable galleries, stacked cards, readable type, and persistent conversion opportunities.

## Content and conversion
- Centralize all editable project copy, property types, placeholder pricing/areas, location labels, amenity placeholders, contact details, email, WhatsApp number, and image references in one typed configuration file.
- Clearly label every unconfirmed project detail as “To be confirmed” or “Available on request”; do not state exact travel times, pricing, sizes, amenities, returns, payment plans, handover details, developer details, or regulatory information as facts.
- Add anchored calls to action throughout the page, a polished consultation form with client-side validation, privacy reassurance, and a configurable WhatsApp action. Since no external service was requested, form submission will provide a refined confirmation state without sending or storing personal data.

## Visual assets and interactions
- Generate a cohesive set of original cinematic Dubai, architecture, interior, lifestyle, and floor-plan placeholder imagery sized for the layouts, then use responsive loading and lazy loading below the fold.
- Add lightweight native interactions: sticky-header transformation, smooth anchor scrolling, viewport reveal animations, subtle hero parallax, animated project facts, horizontal galleries, category controls, floor-plan tabs, and fullscreen image viewing.
- Respect reduced-motion preferences and keep animation restrained to protect performance.

## Structure and quality
- Create reusable components under `src/components`, page sections under `src/sections`, content under `src/data`, and shared interaction helpers under `src/hooks` or `src/utils`.
- Establish a semantic Tailwind v4 design system in the global stylesheet and use the existing shared button/dialog primitives where appropriate.
- Add page-specific title, description, Open Graph/Twitter metadata, canonical URL, semantic headings, descriptive image text, and Residence/RealEstateAgent structured data limited to supplied facts.
- Verify the final page in the live preview at desktop and mobile widths, check navigation, sliders, fullscreen gallery, tabs, form validation, visual overlap, console errors, and the latest build status.
