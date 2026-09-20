'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Factory, Truck, CheckCircle2, MessageSquare } from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  const whatsappUrl = `https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
    'Hello, I am a wholesale buyer / retailer looking to source track pants and lowers in bulk directly from your factory.'
  )}`;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/80">
      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 factory-pattern-bg opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: B2B Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Verified Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-xs font-semibold shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Direct Manufacturer & Bulk Exporter</span>
              <span className="text-slate-500">|</span>
              <span className="text-amber-300 font-medium">Wholesale & OEM Only</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-[1.15]">
              Direct Manufacturer of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-800 to-amber-700">
                Track Pants, Lowers & Activewear
              </span>{' '}
              for Wholesalers & Brands.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Cut out distributor markups. Source export-grade French terry track pants, 4-way lycra lowers, and
              heavyweight knits directly from our modern 85-machine manufacturing floor. Engineered for high margin retail
              and bulk supply.
            </p>

            {/* Key Bullet Points for Bulk Buyers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>MOQ starting at only 200 pcs per style</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Full Private Labeling & Custom Tags</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Bio-washed 240–320 GSM heavy knits</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>PAN-India transport godown delivery</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-slate-800 active:scale-[0.98] transition-all shadow-md hover:shadow-lg"
              >
                <span>Request Wholesale Quotation</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-50 hover:border-slate-400 active:bg-slate-100 transition-all shadow-xs"
              >
                <span>Browse Bulk Catalogue</span>
              </Link>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold text-sm hover:bg-emerald-100 transition-all"
                title="Direct WhatsApp Bulk Discussion"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Micro Trust Note */}
            <p className="text-[11px] text-slate-500 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-slate-400" />
              <span>We supply exclusively to registered traders, wholesale dealers, clothing shops & apparel brands.</span>
            </p>
          </div>

          {/* Right Column: Hero Visual & Factory Highlights */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
              {/* Main Factory Hero Image */}
              <div className="relative aspect-16/10 w-full bg-slate-100">
                <Image
                  src="/images/hero-factory.jpg"
                  alt="Apex Garment Manufacturing Factory Floor with Sewing Lines and Quality Inspection"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <div className="text-xs font-bold tracking-wide">Apex Production Floor 01</div>
                    <div className="text-[11px] text-slate-300">Ludhiana / Tiruppur Hub • 85 Active Stitching Units</div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500 text-white">
                    LIVE PRODUCTION
                  </span>
                </div>
              </div>

              {/* Stat Grid below the image */}
              <div className="p-5 grid grid-cols-2 gap-4 bg-white border-t border-slate-100">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold">
                    <Factory className="w-3.5 h-3.5 text-amber-600" />
                    <span>Monthly Capacity</span>
                  </div>
                  <div className="text-xl font-black text-slate-900 mt-0.5">35,000+</div>
                  <div className="text-[10px] text-slate-500">Track pants & knitwear units</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                  <div className="flex items-center gap-1.5 text-slate-500 text-[11px] font-semibold">
                    <Truck className="w-3.5 h-3.5 text-blue-600" />
                    <span>On-Time Dispatch</span>
                  </div>
                  <div className="text-xl font-black text-slate-900 mt-0.5">99.4%</div>
                  <div className="text-[10px] text-slate-500">Insured road & air freight</div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3.5 rounded-xl shadow-xl border border-slate-200/90 items-center gap-3 max-w-xs animate-fade-in">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">AQL 2.5 Quality Standard</div>
                <div className="text-[11px] text-slate-500">100% pre-dispatch needle scan & seam inspection</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
