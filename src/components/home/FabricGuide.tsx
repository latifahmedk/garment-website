import React from 'react';
import Image from 'next/image';
import { Layers, Sparkles, Check, Info } from 'lucide-react';

const FABRICS = [
  {
    name: 'French Terry / Cotton Loopknit',
    gsm: '260 – 300 GSM',
    composition: '80% Combed Cotton, 20% Polyester',
    feel: 'Heavy, plush, structured fall',
    usage: 'Premium Streetwear Track Pants, Winter Joggers, Lifestyle Sweatpants',
    features: ['Inner looped terry absorbs moisture', 'Pre-shrunk bio-wash finish', 'Heavyweight zero-sag drape'],
  },
  {
    name: '4-Way Performance Lycra Spandex',
    gsm: '220 – 250 GSM',
    composition: '88% Poly-Micro, 12% Spandex',
    feel: 'Silky, cool-touch, high-recovery',
    usage: 'Athletic Performance Lowers, Gym Joggers, Running Pants',
    features: ['High-tensile multidirectional stretch', 'Rapid dry capillary capillary action', 'Water-repellent finish'],
  },
  {
    name: 'Super Combed Cotton Single Jersey',
    gsm: '200 – 240 GSM',
    composition: '100% Long-Staple Combed Cotton',
    feel: 'Velvety smooth, breathable, skin-friendly',
    usage: 'Heavyweight B2B Blank T-Shirts, Lounge Tops',
    features: ['Silicon bio-washed anti-pilling surface', '24mm 1x1 Lycra ribbed neck collar', 'Optimal for DTG & Screen Print'],
  },
  {
    name: '3-Thread Thermal Brushed Polar Fleece',
    gsm: '320 – 350 GSM',
    composition: '70% Cotton, 30% Thermal Poly',
    feel: 'Dense, ultra-warm, soft sherpa loft',
    usage: 'North India Winter Lowers, Heavy Hoodies, Insulated Tracksuits',
    features: ['Brushed inner pile for thermal trapping', 'Anti-pilling outer knit shell', 'Zero lint shedding'],
  },
];

export default function FabricGuide() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Garment Science</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Fabric & GSM Technical Specification Guide
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We partner directly with certified knitting mills to source consistent, high-denier yarns with strict GSM
            tolerances. Here are the core textiles we run on our production lines.
          </p>
        </div>

        {/* Fabric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FABRICS.map((fabric, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 inline-block mb-1.5">
                      {fabric.gsm}
                    </span>
                    <h3 className="text-lg font-bold text-slate-950">{fabric.name}</h3>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-2xs">
                    <Layers className="w-4 h-4 text-slate-600" />
                  </div>
                </div>

                {/* Specs Pill Box */}
                <div className="grid grid-cols-2 gap-2 my-3 p-3 bg-white rounded-xl border border-slate-200/80 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Composition</span>
                    <span className="font-semibold text-slate-800">{fabric.composition}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Hand-Feel</span>
                    <span className="font-semibold text-slate-800">{fabric.feel}</span>
                  </div>
                </div>

                <div className="text-xs text-slate-600 mb-4">
                  <strong className="text-slate-900">Recommended For:</strong> {fabric.usage}
                </div>

                {/* Checklist */}
                <div className="space-y-1.5 pt-1 border-t border-slate-200/60">
                  {fabric.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lab Testing Guarantee Strip */}
        <div className="mt-8 p-4 rounded-xl bg-slate-100 border border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-700">
          <div className="flex items-center gap-2.5">
            <Info className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>Custom Batch Dyeing:</strong> Need a custom Pantone shade or special GSM? We develop custom fabric
              lots with approved lab dips within 7–10 days (MOQ 600 pcs).
            </span>
          </div>
          <a
            href="/contact"
            className="font-bold text-slate-900 hover:text-amber-600 whitespace-nowrap transition-colors"
          >
            Request Swatch Card &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
