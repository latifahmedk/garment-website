'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '@/types/product';
import ProductCard from '@/components/ui/ProductCard';

interface FeaturedProductsProps {
  products: Product[];
  onOpenEnquiry: (product: Product) => void;
}

export default function FeaturedProducts({ products, onOpenEnquiry }: FeaturedProductsProps) {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bulk Order Hot-Sellers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Featured Wholesale Garments
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              High-velocity styles with consistent repeat orders across wholesale markets. Available in ready stock fabrics
              or custom bulk OEM production runs.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <span>View All Products</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpenEnquiry={onOpenEnquiry}
            />
          ))}
        </div>

        {/* Bottom Banner for Custom Manufacturing */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg sm:text-xl font-bold">
              Looking for Custom Fabric, Colorway, or Private Label Branding?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              We manufacture customized tech-pack patterns, Pantone-matched batch dyeing, custom woven waistband elastics,
              and silicone 3D heat transfers for established apparel labels.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm shadow-md transition-all active:scale-[0.98]"
          >
            Discuss Custom Tech-Pack
          </Link>
        </div>
      </div>
    </section>
  );
}
