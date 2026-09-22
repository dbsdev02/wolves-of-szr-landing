import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowRight, Check, ChevronLeft, ChevronRight, Download, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageLightbox } from "@/components/ImageLightbox";
import { SectionHeading } from "@/components/SectionHeading";
import { project } from "@/data/project";

const fieldClass = "h-12 w-full border-0 border-b border-border bg-transparent px-0 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-accent";

export function Hero() {
  return <section id="top" className="relative flex min-h-[92svh] items-end overflow-hidden pb-16 pt-32 sm:min-h-screen sm:pb-20">
    <img src={project.images.hero} alt="Dubai skyline and Sheikh Zayed Road at blue hour" width={1920} height={1088} fetchPriority="high" className="hero-media absolute inset-0 h-full w-full object-cover" />
    <div className="hero-overlay absolute inset-0" />
    <div className="site-container relative z-10 w-full">
      <div className="hero-enter max-w-5xl">
        <p className="mb-5 text-[10px] font-medium uppercase text-accent sm:text-xs">{project.eyebrow}</p>
        <h1 className="font-display text-[clamp(4.25rem,11vw,10rem)] uppercase leading-[0.76]">Wolves <span className="block text-stroke">of SZR</span></h1>
        <div className="mt-8 grid gap-7 border-t border-foreground/25 pt-7 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <h2 className="max-w-2xl font-display text-2xl uppercase leading-tight sm:text-4xl">{project.headline}</h2>
          <div><p className="max-w-lg text-sm leading-6 text-foreground/70">{project.intro}</p><div className="mt-7 flex flex-col gap-3 sm:flex-row"><Button asChild variant="gold" size="xl"><a href="#consultation">Request project details <ArrowRight /></a></Button><Button asChild variant="glass" size="xl"><a href="#project">Explore the project <ArrowDown /></a></Button></div></div>
        </div>
      </div>
    </div>
    <a href="#project" aria-label="Scroll to project" className="absolute bottom-7 right-6 z-10 hidden items-center gap-3 text-[9px] uppercase text-foreground/55 sm:flex lg:right-12"><span>Scroll to discover</span><span className="scroll-line" /></a>
  </section>;
}

export function ProjectOverview() {
  return <section id="project" className="section-pad bg-surface">
    <div className="site-container grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
      <div className="reveal-image relative overflow-hidden"><img src={project.images.architecture} alt="Contemporary residential tower in Dubai" width={1440} height={1808} loading="lazy" className="aspect-[4/5] w-full object-cover" /><span className="image-caption">Architectural vision · Artist impression</span></div>
      <div><SectionHeading index="01" eyebrow="The project" title="Built around the rhythm of Dubai" body="Wolves of SZR brings together contemporary architecture, refined interiors and a strategically connected location to create a residential address designed for modern Dubai living." />
        <div className="mt-14 grid grid-cols-2 border-l border-t border-border/70">{project.stats.map((stat, index) => <div key={stat} className="reveal border-b border-r border-border/70 p-5 sm:p-7"><span className="mb-8 block font-display text-4xl text-accent">0{index + 1}</span><p className="text-xs uppercase text-foreground/80">{stat}</p></div>)}</div>
      </div>
    </div>
  </section>;
}

export function LocationSection() {
  return <section id="location" className="section-pad overflow-hidden">
    <div className="site-container"><SectionHeading index="02" eyebrow="Why SZR" title="The address that connects Dubai" body="Sheikh Zayed Road is the city’s defining north–south axis—linking established business, lifestyle and leisure districts across Dubai." /></div>
    <div className="site-container mt-16 grid gap-8 lg:grid-cols-[1fr_1.15fr]">
      <div className="relative min-h-[440px] overflow-hidden border border-border bg-panel p-7 sm:p-10">
        <div className="map-grid absolute inset-0" /><div className="map-road absolute left-[15%] top-[12%] h-[110%] w-14 -rotate-[28deg] border-x border-accent/40" />
        <div className="absolute left-[43%] top-[43%] z-10 flex items-center gap-3"><span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent bg-background"><MapPin className="text-accent" /></span><span className="text-xs font-medium uppercase">Wolves of SZR</span></div>
        <p className="absolute bottom-7 left-7 max-w-xs text-xs leading-6 text-muted-foreground sm:bottom-10 sm:left-10">Conceptual location visual. Final project coordinates and travel times will be added when confirmed.</p>
      </div>
      <div className="divide-y divide-border border-y border-border">{project.destinations.map((destination, index) => <div key={destination} className="group flex items-center justify-between py-5"><span className="text-[10px] text-accent">0{index + 1}</span><span className="flex-1 pl-5 font-display text-xl uppercase transition-transform group-hover:translate-x-2 sm:text-2xl">{destination}</span><span className="text-[10px] uppercase text-muted-foreground">Travel time — TBC</span></div>)}</div>
    </div>
  </section>;
}

export function Residences() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const scrollGallery = (direction: number) => document.querySelector("#residence-track")?.scrollBy({ left: direction * 520, behavior: "smooth" });
  return <section id="residences" className="section-pad bg-surface overflow-hidden"><div className="site-container flex items-end justify-between gap-6"><SectionHeading index="03" eyebrow="The residences" title="Designed for modern Dubai living" /><div className="hidden gap-2 sm:flex"><Button variant="outline" size="icon" onClick={() => scrollGallery(-1)} aria-label="Previous residences"><ChevronLeft /></Button><Button variant="outline" size="icon" onClick={() => scrollGallery(1)} aria-label="Next residences"><ChevronRight /></Button></div></div>
    <div id="residence-track" className="scrollbar-none mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto pl-[max(1.25rem,calc((100vw-88rem)/2))] pr-5">{project.gallery.map((item, index) => <button key={`${item.category}-${index}`} type="button" onClick={() => setLightbox(index)} className="group relative h-[58vh] min-h-[420px] w-[82vw] max-w-[660px] flex-none snap-center overflow-hidden text-left sm:w-[58vw]"><img src={item.image} alt={item.alt} width={1600} height={1200} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" /><span className="gallery-shade absolute inset-0"/><span className="absolute bottom-6 left-6 text-xs uppercase">{item.category}</span><span className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border border-foreground/30"><ExternalLink className="size-4" /></span></button>)}</div>
    <ImageLightbox images={project.gallery} index={lightbox} onIndex={setLightbox} onClose={() => setLightbox(null)} />
  </section>;
}

export function ResidenceTypes() {
  return <section className="section-pad"><div className="site-container"><SectionHeading index="04" eyebrow="Residence types" title="A collection shaped around you" body="Final inventory, specifications and availability will be shared in the official project presentation." /><div className="mt-14 grid border-l border-t border-border md:grid-cols-2 xl:grid-cols-4">{project.propertyTypes.map((type, index) => <article key={type.name} className="group border-b border-r border-border p-6 transition-colors hover:bg-surface sm:p-8"><span className="text-[10px] text-accent">0{index + 1}</span><h3 className="mt-20 font-display text-3xl uppercase">{type.name}</h3><dl className="mt-8 space-y-3 border-t border-border pt-5 text-xs"><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Starting price</dt><dd>{type.price}</dd></div><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Area</dt><dd>{type.area}</dd></div><div className="flex justify-between gap-4"><dt className="text-muted-foreground">Configuration</dt><dd className="text-right">{type.bedrooms}</dd></div></dl><Button asChild variant="linkArrow" className="mt-10 px-0"><a href="#floor-plans">View details <ArrowRight /></a></Button></article>)}</div></div></section>;
}

export function Amenities() {
  return <section id="amenities" className="section-pad bg-surface"><div className="site-container"><SectionHeading index="05" eyebrow="Amenities" title="Everyday living, redefined" body="The amenity programme below is indicative only. Confirmed facilities will be published with the official project details." /><div className="mt-14 grid gap-4 lg:grid-cols-12 lg:grid-rows-2"><div className="reveal-image relative min-h-[470px] overflow-hidden lg:col-span-7 lg:row-span-2"><img src={project.images.lifestyle} alt="Rooftop pool and Dubai skyline" width={1920} height={1088} loading="lazy" className="h-full w-full object-cover" /><span className="image-caption">Indicative lifestyle visual</span></div>{project.amenities.slice(0, 4).map((amenity, index) => <div key={amenity} className="group flex min-h-36 items-end justify-between border border-border bg-panel p-6 lg:col-span-5"><div><span className="text-[9px] uppercase text-muted-foreground">Indicative amenity · 0{index + 1}</span><h3 className="mt-4 font-display text-2xl uppercase">{amenity}</h3></div><ArrowRight className="text-accent transition-transform group-hover:translate-x-1" /></div>)}</div><p className="mt-5 text-xs text-muted-foreground">Additional concepts: {project.amenities.slice(4).join(" · ")} — all to be confirmed.</p></div></section>;
}

export function InvestmentSection() {
  return <section id="investment" className="section-pad"><div className="site-container"><div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]"><div className="lg:sticky lg:top-32 lg:self-start"><SectionHeading index="06" eyebrow="Investment opportunity" title="Positioned for the future of Dubai" body="A considered opportunity for buyers seeking a premium address within Dubai’s connected urban core. Request the investment brief for the latest verified project information." /><Button asChild variant="gold" size="xl" className="mt-9"><a href="#consultation">Request investment details <ArrowRight /></a></Button></div><div className="border-t border-border">{project.investmentThemes.map(([number, title, body]) => <article key={number} className="reveal grid gap-5 border-b border-border py-8 sm:grid-cols-[70px_0.8fr_1fr] sm:items-start"><span className="font-display text-3xl text-accent">{number}</span><h3 className="font-display text-2xl uppercase">{title}</h3><p className="text-sm leading-6 text-muted-foreground">{body}</p></article>)}</div></div><p className="mt-12 border-l border-accent pl-5 text-xs leading-6 text-muted-foreground">Investment content is informational and does not constitute a guarantee of returns, appreciation or availability.</p></div></section>;
}

export function LifestyleSection() {
  return <section className="relative flex min-h-[78vh] items-end overflow-hidden py-16 sm:py-24"><img src={project.images.lifestyle} alt="Dubai rooftop lifestyle with skyline views" width={1920} height={1088} loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="hero-overlay absolute inset-0"/><div className="site-container relative z-10"><p className="mb-5 text-[10px] uppercase text-accent">07 · Dubai lifestyle</p><h2 className="max-w-5xl font-display text-5xl uppercase leading-[0.92] sm:text-7xl lg:text-9xl">Live at the centre of everything</h2><p className="mt-8 max-w-xl text-sm leading-7 text-foreground/70">From business and culture to waterfronts, dining and design, Dubai’s defining experiences converge around its central corridor.</p></div></section>;
}

function FloorPlanPlaceholder({ label }: { label: string }) {
  return <div className="floor-plan relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-plan"><div className="floor-shape"><div/><div/><div/><div/><div/></div><span className="absolute bottom-4 right-4 text-[9px] uppercase text-muted-foreground">Illustrative placeholder · Not to scale</span><span className="sr-only">Placeholder floor plan for {label}</span></div>;
}

export function FloorPlans() {
  const [active, setActive] = useState(0);
  const selected = project.propertyTypes[active];
  return <section id="floor-plans" className="section-pad bg-surface"><div className="site-container"><SectionHeading index="08" eyebrow="Floor plans" title="Space, considered" body="Floor plans shown here are replaceable placeholders. Official layouts and dimensions will be added once released." /><div className="mt-12 flex gap-2 overflow-x-auto border-b border-border pb-4">{project.propertyTypes.map((type, index) => <Button key={type.name} variant={active === index ? "gold" : "ghost"} onClick={() => setActive(index)} className="flex-none">{type.name}</Button>)}</div><div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-center"><FloorPlanPlaceholder label={selected.name}/><div><p className="text-[10px] uppercase text-accent">Selected residence</p><h3 className="mt-5 font-display text-5xl uppercase">{selected.name}</h3><dl className="mt-10 divide-y divide-border border-y border-border text-sm"><div className="flex justify-between py-5"><dt className="text-muted-foreground">Area</dt><dd>{selected.area}</dd></div><div className="flex justify-between py-5"><dt className="text-muted-foreground">Bedrooms</dt><dd>{selected.bedrooms}</dd></div><div className="flex justify-between py-5"><dt className="text-muted-foreground">Bathrooms</dt><dd>To be confirmed</dd></div></dl><Button variant="outline" size="xl" disabled className="mt-8"><Download /> Floor plan coming soon</Button></div></div></div></section>;
}

export function EditorialGallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const items = project.gallery.slice(0, 5);
  return <section className="section-pad"><div className="site-container"><SectionHeading index="09" eyebrow="Gallery" title="A new perspective on Dubai" /><div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:grid-rows-2">{items.map((item, index) => <button type="button" key={`${item.category}-editorial`} onClick={() => setLightbox(index)} className={`group relative min-h-64 overflow-hidden text-left ${index === 0 ? "col-span-2 row-span-2 min-h-[520px]" : ""}`}><img src={item.image} alt={item.alt} width={1600} height={1200} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"/><span className="gallery-shade absolute inset-0"/><span className="absolute bottom-5 left-5 text-[10px] uppercase">{item.category}</span></button>)}</div></div><ImageLightbox images={items} index={lightbox} onIndex={setLightbox} onClose={() => setLightbox(null)} /></section>;
}

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const form = new FormData(event.currentTarget); const email = String(form.get("email") ?? ""); if (!/^\S+@\S+\.\S+$/.test(email)) { setError("Please enter a valid email address."); return; } setError(""); setSubmitted(true); };
  return <section id="consultation" className="section-pad bg-accent text-accent-foreground"><div className="site-container grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24"><div><p className="text-[10px] font-semibold uppercase">10 · Private consultation</p><h2 className="mt-7 font-display text-5xl uppercase leading-[0.92] sm:text-7xl">Your Dubai address starts here.</h2><p className="mt-7 max-w-md text-sm leading-7 opacity-70">Request the complete Wolves of SZR project presentation and speak with our property specialists.</p></div>{submitted ? <div className="flex min-h-96 flex-col items-start justify-center border-y border-accent-foreground/25"><span className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-foreground/40"><Check /></span><h3 className="mt-7 font-display text-4xl uppercase">Thank you for your interest.</h3><p className="mt-4 max-w-md text-sm leading-6 opacity-70">Your request has been prepared. Connect the form to your preferred enquiry service before launch to receive submissions.</p><Button variant="ink" className="mt-8" onClick={() => setSubmitted(false)}>Submit another enquiry</Button></div> : <form onSubmit={submit} className="grid gap-x-8 gap-y-5 sm:grid-cols-2" noValidate><input className={fieldClass} name="name" placeholder="Full name *" aria-label="Full name" required maxLength={100}/><input className={fieldClass} name="email" type="email" placeholder="Email *" aria-label="Email" required maxLength={255}/><input className={fieldClass} name="phone" type="tel" placeholder="Phone number *" aria-label="Phone number" required maxLength={30}/><input className={fieldClass} name="country" placeholder="Country" aria-label="Country" maxLength={80}/><select className={fieldClass} name="property" aria-label="Preferred property type" defaultValue=""><option value="" disabled>Preferred property type</option>{project.propertyTypes.map((type) => <option key={type.name}>{type.name}</option>)}</select><select className={fieldClass} name="budget" aria-label="Budget range" defaultValue=""><option value="" disabled>Budget range</option><option>To be discussed</option><option>Request price guidance</option></select><textarea className={`${fieldClass} min-h-28 resize-none pt-4 sm:col-span-2`} name="message" placeholder="Message" aria-label="Message" maxLength={1000}/>{error && <p className="text-sm sm:col-span-2" role="alert">{error}</p>}<div className="sm:col-span-2"><Button type="submit" variant="ink" size="xl">Request private consultation <ArrowRight /></Button><p className="mt-5 max-w-xl text-[10px] leading-5 opacity-65">Your information is kept confidential and used only to contact you regarding Wolves of SZR.</p></div></form>}</div></section>;
}