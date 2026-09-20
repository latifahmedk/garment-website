import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Scissors, ShieldAlert, Cpu, Award } from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';

export default function ManufacturingPreview() {
  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20 mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>Industrial Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
              Manufacturing Capabilities & Precision Machinery
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-2xl">
              Equipped with high-performance automated cutting tables, Juki direct-drive lockstitch units, and Yamato
              activewear flatlock seamers capable of turning out 35,000+ pieces monthly.
            </p>
          </div>

          <Link
            href="/manufacturing"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-bold text-white transition-colors shrink-0"
          >
            <span>Explore Full Factory Tour</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Interactive Factory Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src="/images/factory-cutting.jpg"
                alt="Automated Computerized Fabric Cutting and Spreading Table"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-xs p-2 rounded-lg text-[10px] text-slate-200">
                <span className="font-bold block text-white">Automated CAD Cutting</span>
                Laser-guided zero-wastage nesting
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src="/images/factory-stitching.jpg"
                alt="Industrial 4-Thread Yamato Flatlock Stitching Machine"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-xs p-2 rounded-lg text-[10px] text-slate-200">
                <span className="font-bold block text-white">4-Thread Flatlock Lines</span>
                High-tension athletic seam strength
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src="/images/fabric-texture-loopknit.jpg"
                alt="Close-Up Texture of 280 GSM Cotton Loopknit Fabric"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-xs p-2 rounded-lg text-[10px] text-slate-200">
                <span className="font-bold block text-white">Lab Tested Textiles</span>
                Pre-shrunk, bio-washed cotton
              </div>
            </div>

            <div className="relative aspect-4/3 rounded-2xl overflow-hidden border border-slate-800">
              <Image
                src="/images/hero-factory.jpg"
                alt="Full Garment Factory Assembly Floor"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center"
              />
              <div className="absolute bottom-2 left-2 right-2 bg-slate-950/80 backdrop-blur-xs p-2 rounded-lg text-[10px] text-slate-200">
                <span className="font-bold block text-white">AQL 2.5 Inspection</span>
                100% in-line & end-line QC scan
              </div>
            </div>
          </div>

          {/* Right: Technical Highlights Card */}
          <div className="space-y-6 lg:pl-4">
            <div className="space-y-4">
              {FACTORY_INFO.machinery.map((mach, i) => (
                <div key={i} className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/80 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      <span>{mach.category}</span>
                    </h4>
                    <span className="text-[11px] font-mono text-amber-300">
                      {mach.models[0].split(' ')[0]}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {mach.capabilities}
                  </p>
                  <div className="text-[11px] text-slate-400 font-medium">
                    Machines: {mach.models.join(' • ')}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex items-center gap-4 text-xs text-slate-400 border-t border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" />
                <span>100% Needle Detector Audit</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                <span>Anti-Shrinkage Tested</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
