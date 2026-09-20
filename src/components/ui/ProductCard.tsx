'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Layers, MessageSquare, ArrowRight, Check } from 'lucide-react';
import { Product } from '@/types/product';
import { FACTORY_INFO } from '@/data/factory';

interface ProductCardProps {
  product: Product;
  onOpenEnquiry?: (product: Product) => void;
}

export default function ProductCard({ product, onOpenEnquiry }: ProductCardProps) {
  const whatsappUrl = `https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
    `Hello Apex Garments, I would like to receive wholesale quotation for "${product.name}" (SKU: ${product.sku}, MOQ: ${product.moq} pcs). Please share the rate card and fabric swatch card.`
  )}`;

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between">
      <div>
        {/* Image Container with Badges */}
        <div className="relative aspect-4/3 w-full bg-slate-100 overflow-hidden">
          <Link href={`/products/${product.slug}`} className="block w-full h-full">
            <Image
              src={product.images[0] || '/images/hero-factory.jpg'}
              alt={`${product.name} - Wholesale Garment Manufacturer`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </Link>

          {/* Top Badges */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <span className="px-2.5 py-1 rounded-md bg-slate-950/85 backdrop-blur-xs text-white text-[11px] font-bold tracking-wide uppercase border border-slate-700/50">
              MOQ: {product.moq} {product.moqUnit.split(' ')[0]}
            </span>

            {product.isNew && (
              <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-wider shadow-xs">
                New Style
              </span>
            )}
          </div>

          {/* Fabric & GSM Floating Tag at bottom of image */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-semibold border border-slate-200/80 shadow-xs flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-slate-500" />
              <span>{product.gsm} GSM • {product.fabric.split(' ')[1] || 'Knit'}</span>
            </span>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-colors pointer-events-auto"
              title="Quick WhatsApp Enquiry"
              aria-label="Direct WhatsApp Enquiry"
            >
              <MessageSquare className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-5 space-y-3">
          {/* Category & SKU */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-slate-500 uppercase tracking-wider text-[10px]">
              {product.categoryLabel}
            </span>
            <span className="font-mono text-[11px] text-slate-400 bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">
              {product.sku}
            </span>
          </div>

          {/* Product Name */}
          <h3 className="font-bold text-slate-900 text-base leading-snug group-hover:text-slate-800 transition-colors">
            <Link href={`/products/${product.slug}`} className="hover:underline underline-offset-2">
              {product.name}
            </Link>
          </h3>

          {/* Short Tagline / Specs */}
          <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>

          {/* Color Swatches */}
          <div className="flex items-center gap-2 pt-1">
            <span className="text-[11px] font-medium text-slate-400">Colors:</span>
            <div className="flex items-center gap-1.5">
              {product.availableColors.slice(0, 4).map((c) => (
                <span
                  key={c.name}
                  title={c.name}
                  className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-2xs inline-block"
                  style={{ backgroundColor: c.hex }}
                />
              ))}
              {product.availableColors.length > 4 && (
                <span className="text-[10px] text-slate-500 font-medium">
                  +{product.availableColors.length - 4}
                </span>
              )}
            </div>
          </div>

          {/* Available Sizes Pills */}
          <div className="flex items-center gap-1.5 flex-wrap pt-0.5">
            <span className="text-[11px] font-medium text-slate-400">Sizes:</span>
            {product.availableSizes.slice(0, 4).map((sz) => (
              <span
                key={sz}
                className="px-1.5 py-0.5 text-[10px] font-semibold bg-slate-100 text-slate-700 rounded border border-slate-200"
              >
                {sz.split(' ')[0]}
              </span>
            ))}
            {product.availableSizes.length > 4 && (
              <span className="text-[10px] text-slate-500 font-medium">
                +{product.availableSizes.length - 4}
              </span>
            )}
          </div>

          {/* Pricing Tier Notice */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <div>
              <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Commercial Pricing
              </span>
              <span className="text-xs font-bold text-slate-900">
                Direct Wholesale Rates
              </span>
            </div>
            <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
              <Check className="w-3 h-3 text-emerald-600" />
              OEM Ready
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-5 pt-0 grid grid-cols-2 gap-2">
        <Link
          href={`/products/${product.slug}`}
          className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <span>View Specs</span>
        </Link>

        <button
          type="button"
          onClick={() => onOpenEnquiry && onOpenEnquiry(product)}
          className="flex items-center justify-center gap-1 py-2 px-3 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all shadow-xs"
        >
          <span>Quote</span>
          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
        </button>
      </div>
    </div>
  );
}
