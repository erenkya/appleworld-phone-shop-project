"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ImageSliderProps {
  images: string[];
  className?: string;
}

export const ImageSlider: React.FC<ImageSliderProps> = ({ images, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const next = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-paper-2", className)}>
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={images[currentIndex]}
          alt={`Görsel ${currentIndex + 1}`}
          fill
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Önceki"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={next}
            aria-label="Sonraki"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`${i + 1}. görsele git`}
                className={cn(
                  "h-1.5 rounded-full transition-all",
                  currentIndex === i ? "w-5 bg-white" : "w-1.5 bg-white/50"
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;
