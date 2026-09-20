'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const displayImages = images.length > 0 ? images : ['/images/hero-factory.jpg'];

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative aspect-4/3 w-full rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xs">
        <Image
          src={displayImages[activeImageIndex]}
          alt={`${productName} - Detail View ${activeImageIndex + 1}`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center transition-all duration-300"
        />
        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
          {activeImageIndex + 1} / {displayImages.length}
        </div>
      </div>

      {/* Thumbnail Selector */}
      {displayImages.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {displayImages.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveImageIndex(idx)}
              className={`relative aspect-4/3 rounded-xl overflow-hidden border-2 transition-all ${
                activeImageIndex === idx
                  ? 'border-slate-900 shadow-sm'
                  : 'border-slate-200 hover:border-slate-400 opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                sizes="120px"
                className="object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
