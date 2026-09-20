import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Layers, Tag } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

const CATEGORY_DETAILS = [
  {
    id: 'track-pants',
    name: 'Heavyweight Track Pants',
    tagline: '260–300 GSM Cotton French Terry & Twill',
    description: 'Heavyweight casual and streetwear lowers featuring SBS zipper pockets, ribbed cuffs, and thick drawcords.',
    image: '/images/track-pant-charcoal.jpg',
    moq: '200 Pcs',
    href: '/products?category=track-pants',
  },
  {
    id: 'lowers-joggers',
    name: '4-Way Lycra Athletic Lowers',
    tagline: '240 GSM Performance High-Stretch',
    description: 'High-recovery athletic joggers with laser ventilation, waterproof zipper pockets, and aerodynamic seams.',
    image: '/images/athletic-jogger-navy.jpg',
    moq: '250 Pcs',
    href: '/products?category=lowers-joggers',
  },
  {
    id: 'track-suits',
    name: 'Coordinated Track Suits',
    tagline: '280 GSM Poly Interlock 2-Piece Sets',
    description: 'Matching athletic training jackets and pants for sports clubs, academies, institutional uniforms, and retail.',
    image: '/images/tracksuit-set-grey.jpg',
    moq: '150 Sets',
    href: '/products?category=track-suits',
  },
  {
    id: 't-shirts',
    name: 'Heavy Combed Cotton T-Shirts',
    tagline: '220 GSM Bio-Washed Single Jersey',
    description: 'Dense, smooth cotton crewnecks engineered with Lycra rib collars. Ready for DTG, puff ink, and private labeling.',
    image: '/images/cotton-tshirt-stack.jpg',
    moq: '300 Pcs',
    href: '/products?category=t-shirts',
  },
];

export default function CategorySection() {
  return (
    <section className="py-16 lg:py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200 mb-2">
              <Tag className="w-3.5 h-3.5" />
              <span>Core Manufacturing Lines</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Specialized B2B Product Categories
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Engineered exclusively for bulk distributors, retail store chains, and apparel labels. All lines support full
              OEM customization and private labeling.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-900 hover:text-amber-700 transition-colors group shrink-0"
          >
            <span>View Complete Catalogue</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORY_DETAILS.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group relative rounded-2xl bg-slate-50 border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-4/3 w-full bg-slate-200 overflow-hidden">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-80" />

                  {/* Top Badge: MOQ */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-slate-900/80 text-white text-[10px] font-bold tracking-wide backdrop-blur-xs">
                    MOQ: {cat.moq}
                  </span>

                  {/* Bottom Image Label */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-[11px] font-semibold text-amber-300 block">{cat.tagline}</span>
                    <span className="font-bold text-base leading-tight drop-shadow-xs">{cat.name}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="p-4 pt-0 flex items-center justify-between text-xs font-bold text-slate-900 border-t border-slate-200/60 mt-2">
                <span className="group-hover:text-amber-700 transition-colors">Explore Category</span>
                <div className="w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
