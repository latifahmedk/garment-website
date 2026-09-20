import React from 'react';
import { ClipboardList, CheckCircle2, Factory, SearchCheck, Truck, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const STEPS = [
  {
    step: '01',
    icon: ClipboardList,
    title: 'Requirement & Quotation',
    description:
      'Browse our catalogue or submit your custom tech-pack with desired GSM, size ratios, and branding requirements. Receive an itemized tiered quotation within 2–4 hours.',
  },
  {
    step: '02',
    icon: CheckCircle2,
    title: 'Sample Approval',
    description:
      'We courier physical fit and fabric samples for your team to inspect stitching, zipper quality, and hand-feel. Production begins once samples receive written sign-off.',
  },
  {
    step: '03',
    icon: Factory,
    title: 'Bulk Production Run',
    description:
      'Computerized CAD cutting, high-tension flatlock stitching, custom logo embellishment (silicone / embroidery), and precision elastic waistband attachment.',
  },
  {
    step: '04',
    icon: SearchCheck,
    title: 'AQL 2.5 Quality Audit',
    description:
      'Every unit undergoes broken needle detection, thread trimming, dimensional measurement audit, steam pressing, and moisture-barrier polybag sealing.',
  },
  {
    step: '05',
    icon: Truck,
    title: 'Insured Logistics Dispatch',
    description:
      'Cartons strapped and dispatched through your preferred transport company (Safexpress, V-Trans, TCI, etc.) with real-time lorry receipt (LR) tracking.',
  },
];

export default function OrderProcess() {
  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 mb-3">
            Wholesale Ordering Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            How Bulk & Wholesale Orders Work
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            A seamless, transparent manufacturing process designed to give buyers 100% confidence from initial sample
            development to final commercial warehouse delivery.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-black text-slate-400">
                      STEP {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-950 mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA to start */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all shadow-md active:scale-[0.98]"
          >
            <span>Start Your Wholesale Order Today</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </div>
      </div>
    </section>
  );
}
