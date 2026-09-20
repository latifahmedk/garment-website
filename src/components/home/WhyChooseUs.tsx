import React from 'react';
import { DollarSign, ShieldCheck, Cpu, Sliders, Truck, RefreshCcw } from 'lucide-react';

const REASONS = [
  {
    icon: DollarSign,
    title: 'Direct Factory Floor Pricing',
    description:
      'Buy directly from the manufacturing unit without agent commissions or trading house markups. Maximize your retail margins and stay competitive in wholesale markets.',
    badge: 'Higher Margins',
  },
  {
    icon: Sliders,
    title: 'Low Starting MOQ (200 Pcs)',
    description:
      'Unlike massive export mills demanding 2,000+ pieces, we support emerging brands, regional retail chains, and growing wholesalers with flexible batches starting at 200 pcs.',
    badge: 'Accessible Bulk',
  },
  {
    icon: Cpu,
    title: '100% In-House Precision Stitching',
    description:
      '85+ Juki lockstitch and Yamato flatlock machines under one roof. No sub-contracting. Complete control over seam tension, stitch density, and dimensional accuracy.',
    badge: 'Zero Sub-contracting',
  },
  {
    icon: ShieldCheck,
    title: 'Pre-Shrunk & Lab-Tested Fabrics',
    description:
      'All fabrics undergo shrinkage testing (<3%), rubbing fastness checks, and silicone bio-washing before cutting. No post-wash customer complaints for your retail clients.',
    badge: 'AQL 2.5 Standard',
  },
  {
    icon: RefreshCcw,
    title: 'Full Private Label Customization',
    description:
      'From customized branded jacquard waistband elastics to silicone rubber 3D badges, woven neck labels, and custom printed barcode polybags ready for store shelves.',
    badge: 'OEM / ODM',
  },
  {
    icon: Truck,
    title: 'Safe Insured Bulk Dispatch',
    description:
      'Tie-ups with leading national cargo carriers (Safexpress, V-Trans, TCI) and regional transport nagar booking agencies. Door delivery or transport godown delivery across India.',
    badge: 'PAN-India Delivery',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-300 mb-3">
            The Manufacturer Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Why Wholesalers & Retail Chains Source From Us
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            We are not traders or drop-shippers. We operate an integrated garment manufacturing facility engineered
            for long-term commercial B2B supply.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REASONS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-xs">
                      <Icon className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-200/80 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-950 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
