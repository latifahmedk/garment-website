import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
  Cpu,
  Scissors,
  CheckCircle2,
  Clock,
  ShieldAlert,
  ArrowRight,
  Layers,
  Sparkles,
  Sliders,
  Box,
} from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';
import Breadcrumbs from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Garment Manufacturing Infrastructure & OEM Capabilities | Apex Garments',
  description:
    'Explore our 85-machine garment manufacturing facility: CAD pattern cutting, Juki & Yamato stitching lines, Tajima embroidery, AQL 2.5 needle detection, and custom private labeling.',
  keywords: [
    'garment manufacturing process',
    'apparel machinery Juki Yamato',
    'OEM clothing manufacturer India',
    'track pant stitching facility',
    'private label activewear manufacturing',
  ],
};

export default function ManufacturingPage() {
  const steps = [
    {
      num: '01',
      title: 'Fabric Sourcing & Lab Verification',
      desc: 'Yarns are knit to specific GSM and stitch density. Before cutting, every roll undergoes a 4-point fabric inspection system, shrinkage wash test (<3%), and rub fastness audit.',
      image: '/images/fabric-texture-loopknit.jpg',
      specs: 'Shrinkage: < 3% • Color Fastness: Grade 4+ • Bio-wash standard',
    },
    {
      num: '02',
      title: 'CAD Pattern Engineering & Marker Plotting',
      desc: 'Pattern masters use digital CAD software to grade sizes (S through 4XL) with zero-tolerance symmetry. Marker nesting algorithms achieve 92%+ fabric utilization.',
      image: '/images/factory-cutting.jpg',
      specs: 'Gerber CAD Grading • Laser-guided ply alignment • Zero distortion',
    },
    {
      num: '03',
      title: 'Precision Automated Cutting',
      desc: 'Multi-ply computerized fabric spreaders ensure tensionless fabric relaxation. Precision straight-knife and CNC cutter blades slice through 80+ plies with millimeter precision.',
      image: '/images/factory-cutting.jpg',
      specs: 'Eastman CNC cutters • Anti-fray notchers • 100% ply count audit',
    },
    {
      num: '04',
      title: 'Assembly on Dedicated Stitching Lines',
      desc: 'Garments move through specialized modular lines equipped with direct-drive Juki lockstitch units, 4-thread Yamato overlock seamers, and Pegasus flatlock machines.',
      image: '/images/factory-stitching.jpg',
      specs: '10–12 Stitches Per Inch • Anti-burst seam gussets • SBS auto-lock zips',
    },
    {
      num: '05',
      title: 'Custom Branding & Embellishment',
      desc: 'In-house branding stations apply high-density 3D silicone heat seals, multi-color Tajima embroidery, custom jacquard waistband elastics, and private label neck tags.',
      image: '/images/athletic-jogger-navy.jpg',
      specs: 'Reflective 3M transfers • Rubberized 3D logos • Woven damask tags',
    },
    {
      num: '06',
      title: 'Finishing, Metal Detection & Master Packaging',
      desc: 'Every piece is thread-trimmed, steam pressed on vacuum tables, passed through a conveyorized metal detector (needle detector), and sealed into heavy export-grade cartons.',
      image: '/images/hero-factory.jpg',
      specs: '100% Needle scan • Silica moisture barrier • 7-ply export cartons',
    },
  ];

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <Breadcrumbs items={[{ name: 'Manufacturing Capabilities', href: '/manufacturing' }]} />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>Production Capabilities & Tech</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Industrial Garment Manufacturing Infrastructure
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              An inside look at our 85-machine facility: how we source, cut, stitch, brand, and package export-grade track
              pants, lowers, and knitwear with consistent precision and reliable delivery.
            </p>
          </div>
        </div>
      </section>

      {/* Production Capacity & Speed Overview */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Monthly Capacity
            </span>
            <div className="text-3xl font-black text-slate-950">35,000+ Pcs</div>
            <p className="text-xs text-slate-600">
              Scalable modular lines with surge capability up to 50,000 pieces during seasonal peak retail demands.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Sample Turnaround
            </span>
            <div className="text-3xl font-black text-slate-950">5 – 7 Days</div>
            <p className="text-xs text-slate-600">
              Rapid fit sample and fabric swatch development for verified distributors and apparel brand owners.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
              Bulk Production Lead Time
            </span>
            <div className="text-3xl font-black text-slate-950">14 – 20 Days</div>
            <p className="text-xs text-slate-600">
              Ready running fabric runs dispatched in 7–10 days; custom dyed bulk orders in 18–21 days.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Step-by-Step Process */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            End-to-End Workflow
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
            The 6-Step Manufacturing Process
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            From raw yarn verification to final container strapping, every phase is overseen by experienced garment
            engineers.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Preview */}
              <div className="lg:col-span-5 relative aspect-16/10 rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-xs text-white text-xs font-mono font-bold">
                  STEP {step.num}
                </span>
              </div>

              {/* Text Content */}
              <div className="lg:col-span-7 space-y-3">
                <h3 className="text-xl font-bold text-slate-950">{step.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200/80 text-xs font-medium text-slate-700">
                  <strong className="text-slate-900">Key Standards:</strong> {step.specs}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Machinery Specs Section */}
      <section id="machinery" className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 mb-2 inline-block">
              Machine Inventory
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Industrial Machinery & Equipment Fleet
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              We invest in Japanese and European apparel machinery to ensure superior stitch strength, automated
              welting, and zero seam-breakage under tension.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACTORY_INFO.machinery.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-950 text-base">{m.category}</h3>
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-slate-200 text-slate-700">
                    Active Floor
                  </span>
                </div>
                <div className="text-xs font-semibold text-slate-700">
                  Equipment: <span className="font-mono text-slate-900">{m.models.join(', ')}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{m.capabilities}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Labeling & OEM Showcase */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded border border-amber-500/20 inline-block">
              White-Label & OEM Services
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight">
              Launch Your Garment Brand With Full Factory Private Labeling
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We provide turnkey private-label solutions for fashion boutiques, e-commerce brands, and retail chains. We
              handle everything from custom woven labels to barcode master cartons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1">
              <span className="font-bold text-white block">Custom Jacquard Elastics</span>
              <p className="text-slate-400 text-[11px]">Knitted brand name on waistband elastic with non-roll core</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1">
              <span className="font-bold text-white block">3D Silicone & Heat Seals</span>
              <p className="text-slate-400 text-[11px]">Matte rubberized, high-density puff, and 3M reflective logos</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1">
              <span className="font-bold text-white block">Custom Aglets & Pullers</span>
              <p className="text-slate-400 text-[11px]">Laser-engraved alloy drawcord tips and branded zipper pullers</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700 text-xs space-y-1">
              <span className="font-bold text-white block">Barcode Tags & Polybags</span>
              <p className="text-slate-400 text-[11px]">Retail-ready hangtags, EAN barcode stickers, frosted ziplock bags</p>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors shadow-md flex items-center gap-2"
            >
              <span>Discuss Private Label Order</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/products"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors border border-slate-700"
            >
              Browse Ready Running Styles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
