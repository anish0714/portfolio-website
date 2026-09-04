import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselImage {
  src: string;
  alt: string;
  caption: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

export default function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const goTo = (i: number) => setIndex((i + images.length) % images.length);

  return (
    <div className="overflow-hidden rounded-lg border border-line bg-canvas-subtle">
      <div className="relative aspect-[8/5] w-full overflow-hidden bg-[#0d1117]">
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="h-full w-full object-cover object-top"
        />

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous screenshot"
              onClick={() => goTo(index - 1)}
              className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next screenshot"
              onClick={() => goTo(index + 1)}
              className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 px-4 py-3">
        <p className="text-xs text-fg-muted">{images[index].caption}</p>

        {images.length > 1 && (
          <div className="flex shrink-0 items-center gap-1.5">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-4 bg-accent" : "w-1.5 bg-line hover:bg-fg-subtle"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
