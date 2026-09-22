import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import { project } from "@/data/project";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ${scrolled || open ? "border-border/70 bg-background/90 py-3 backdrop-blur-xl" : "border-transparent bg-transparent py-5"}`}>
      <div className="site-container flex items-center justify-between">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {project.nav.map(([label, id]) => <a key={id} href={`#${id}`} className="nav-link">{label}</a>)}
        </nav>
        <Button asChild variant="gold" size="lg" className="hidden lg:inline-flex">
          <a href="#consultation">Private consultation</a>
        </Button>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav className="site-container flex flex-col gap-1 border-t border-border/60 py-6 lg:hidden" aria-label="Mobile navigation">
          {project.nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="py-3 font-display text-2xl uppercase">{label}</a>)}
          <Button asChild variant="gold" size="lg" className="mt-5"><a href="#consultation" onClick={() => setOpen(false)}>Private consultation</a></Button>
        </nav>
      )}
    </header>
  );
}