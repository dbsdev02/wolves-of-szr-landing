import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import type { GalleryImage } from "@/data/project";

export function ImageLightbox({ images, index, onIndex, onClose }: { images: readonly GalleryImage[]; index: number | null; onIndex: (index: number) => void; onClose: () => void }) {
  const item = index === null ? undefined : images[index];
  return (
    <Dialog open={Boolean(item)} onOpenChange={(value) => !value && onClose()}>
      <DialogContent className="h-[92vh] max-w-[94vw] border-border bg-background/95 p-3 sm:p-5 [&>button]:hidden">
        <DialogTitle className="sr-only">Residence image viewer</DialogTitle>
        {item && <img src={item.image} alt={item.alt} className="h-full w-full object-contain" />}
        <Button variant="glass" size="icon" className="absolute right-5 top-5" onClick={onClose} aria-label="Close image"><X /></Button>
        {item && <>
          <Button variant="glass" size="icon" className="absolute left-5 top-1/2" onClick={() => onIndex((index! - 1 + images.length) % images.length)} aria-label="Previous image"><ChevronLeft /></Button>
          <Button variant="glass" size="icon" className="absolute right-5 top-1/2" onClick={() => onIndex((index! + 1) % images.length)} aria-label="Next image"><ChevronRight /></Button>
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase text-muted-foreground">{item.category}</p>
        </>}
      </DialogContent>
    </Dialog>
  );
}