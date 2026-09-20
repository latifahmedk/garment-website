import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Factory,
  ShieldCheck,
  Award,
  Users,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'About Our Garment Factory & Heritage | Apex Garments',
  description:
    'Established in 2012, Apex Garment Industries operates an 18,500 sq. ft. modern apparel manufacturing facility with 85+ stitching machines and 35,000+ monthly capacity. Learn about our OEM capabilities.',
  keywords: [
    'garment factory India',
    'apparel manufacturer profile',
    'OEM clothing factory',
    'track pant manufacturing unit',
    'Ludhiana Tiruppur garment supplier',
  ],
};

export default function AboutPage() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <Breadcrumbs items={[{ name: 'About Factory', href: '/about' }]} />

      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              Manufacturing Heritage Since {FACTORY_INFO.establishedYear}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Precision Garment Manufacturing Built for Wholesale Scale
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Apex Garment Industries is an integrated apparel manufacturing facility specializing in high-grade
              knitwear, track pants, lowers, and athletic performance garments for wholesale distributors, retail store
              chains, and private label apparel labels.
            </p>
          </div>
        </div>
      </section>

      {/* Main Factory Profile & Story */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Our Manufacturing Story
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              From a Small Craft Stitching Line to a Modern 85-Machine Facility
            </h2>

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p>
                Founded in {FACTORY_INFO.establishedYear}, Apex Garment Industries began with a single mission: to eliminate
                the quality inconsistencies and inflated middlemen margins that plague the bulk apparel supply chain.
              </p>
              <p>
                Over the past decade, we have expanded into an 18,500 sq. ft. modern production floor equipped with
                computerized CAD cutting spreaders, direct-drive Juki lockstitch units, and Yamato flatlock machines.
                Today, our facility turns out over 35,000 finished pieces per month while maintaining a 99.4% on-time dispatch
                record.
              </p>
              <p>
                We do not operate as brokers, middlemen, or dropshippers. When you place an order with Apex Garments,
                your fabrics are knit to spec, pattern-graded by our CAD technicians, sewn on our owned lines, and inspected
                by our dedicated quality assurance officers before being sealed in export-grade cartons.
              </p>
            </div>

            {/* Core Metrics Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-black text-slate-950">14+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Years Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-black text-slate-950">85+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Industrial Machines</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-black text-slate-950">35K+</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">Monthly Capacity</div>
              </div>
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-2xl font-black text-slate-950">99.4%</div>
                <div className="text-[11px] text-slate-500 font-medium mt-0.5">On-Time Dispatch</div>
              </div>
            </div>
          </div>

          {/* Right Image Grid */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
              <Image
                src="/images/hero-factory.jpg"
                alt="Apex Garment Manufacturing Floor Assembly Line"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-md">
                Sewing Line Floor 01 • Main Assembly
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src="/images/factory-cutting.jpg"
                  alt="Precision Computerized Fabric Cutting Spreader"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-slate-200">
                <Image
                  src="/images/factory-stitching.jpg"
                  alt="Industrial Flatlock Machine Stitches"
                  fill
                  sizes="25vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control & Standards */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-2">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Zero-Defect Commitment</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Our 4-Stage Quality Assurance Checkpoints
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every production lot is governed by rigorous AQL 2.5 standards to ensure your retail clients never encounter
              broken zippers, unraveled seams, or shrinkage issues.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACTORY_INFO.qualityCheckpoints.map((qc, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  0{i + 1}
                </div>
                <h3 className="text-sm font-bold text-slate-950">{qc.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{qc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical & Sustainable Manufacturing */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Ethical Production & Fair Wages
            </span>
            <h3 className="text-xl sm:text-2xl font-bold">
              Responsible Manufacturing You Can Proudly Stand Behind
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We operate under strict ethical manufacturing standards. All 120+ team members receive fair living wages,
              regulated working hours, safe and ventilated workspaces, and healthcare coverage. We utilize eco-friendly
              azo-free dyes and recycled carton packaging to minimize environmental impact.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/contact"
              className="w-full text-center py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md"
            >
              Schedule a Factory Visit
            </Link>
            <Link
              href="/manufacturing"
              className="w-full text-center py-3 px-6 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
            >
              View Machinery Specs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
