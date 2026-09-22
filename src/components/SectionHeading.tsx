import { cn } from "@/lib/utils";

export function SectionHeading({
  index,
  eyebrow,
  title,
  body,
  className,
}: {
  index: string;
  eyebrow: string;
  title: string;
  body?: string;
  className?: string;
}) {
  return (
    <div className={cn("reveal max-w-3xl", className)}>
      <div className="mb-7 flex items-center gap-4 text-[10px] font-medium uppercase text-accent">
        <span>{index}</span><span className="h-px w-10 bg-accent/50" /><span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-4xl uppercase leading-[0.96] text-balance sm:text-6xl lg:text-7xl">{title}</h2>
      {body && <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">{body}</p>}
    </div>
  );
}