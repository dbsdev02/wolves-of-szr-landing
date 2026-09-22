export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="Wolves International home">
      <span className="brand-mark" aria-hidden="true">W</span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-[11px] font-semibold uppercase text-foreground">Wolves</span>
          <span className="mt-1 block text-[8px] uppercase text-muted-foreground">International</span>
        </span>
      )}
    </a>
  );
}