import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ArrowUpRight, MessageSquare } from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';
import { CATEGORIES } from '@/data/products';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top B2B Value Proposition Bar */}
        <div className="pb-12 border-b border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Direct Factory Pricing</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Zero middleman commissions. Maximum margin potential for distributors, wholesalers, and retail chains.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">Low Starting MOQ</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Production runs starting at 200 pieces per style. Sample batches available for verified commercial buyers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-5 rounded-xl bg-slate-900/80 border border-slate-800">
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white text-sm">35,000+ Monthly Capacity</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                State-of-the-art automated cutting and 85+ Juki stitching units ensuring on-time bulk dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1 & 2: Factory Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white text-slate-950 flex items-center justify-center font-black tracking-wider text-lg">
                A<span className="text-amber-500">G</span>
              </div>
              <span className="font-bold text-white tracking-tight text-lg">
                APEX GARMENT INDUSTRIES
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Leading OEM & private-label garment manufacturer specializing in precision-stitched track pants, lowers,
              athletic track suits, and premium combed cotton apparel. Supplying wholesale traders, e-commerce brands,
              and retail apparel stores across India and export markets.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300">
                100% In-House Stitching
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300">
                OEM / Private Labeling
              </span>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-medium text-slate-300">
                AQL 2.5 Quality Standard
              </span>
            </div>
          </div>

          {/* Column 3: Wholesale Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Product Catalogue</h4>
            <ul className="space-y-2 text-xs">
              {CATEGORIES.filter((c) => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{cat.label}</span>
                    <span className="text-[10px] text-slate-600 group-hover:text-amber-400">({cat.count})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Quick Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Company & Facilities</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Our Factory
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="text-slate-400 hover:text-white transition-colors">
                  Manufacturing Capabilities
                </Link>
              </li>
              <li>
                <Link href="/manufacturing#machinery" className="text-slate-400 hover:text-white transition-colors">
                  Machinery & Stitching Lines
                </Link>
              </li>
              <li>
                <Link href="/manufacturing#quality" className="text-slate-400 hover:text-white transition-colors">
                  Quality Control Standards
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Request Wholesale Quotation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Factory Visit & Sample Request
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Factory Office Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Factory Contact</h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {FACTORY_INFO.contact.factoryAddress.plot}, {FACTORY_INFO.contact.factoryAddress.industrialArea},{' '}
                  {FACTORY_INFO.contact.factoryAddress.city} - {FACTORY_INFO.contact.factoryAddress.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${FACTORY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                  className="hover:text-white transition-colors font-medium text-slate-300"
                >
                  {FACTORY_INFO.contact.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href={`mailto:${FACTORY_INFO.contact.salesEmail}`}
                  className="hover:text-white transition-colors"
                >
                  {FACTORY_INFO.contact.salesEmail}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>Mon – Sat: {FACTORY_INFO.contact.workingHours.weekdays}</span>
              </div>
            </div>
          </div>
        </div>

        {/* B2B Disclaimer Notice */}
        <div className="py-4 px-5 rounded-xl bg-slate-900/50 border border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
          <strong className="text-slate-300 uppercase tracking-wide mr-1.5">B2B Wholesale Disclaimer:</strong>
          Apex Garments is an industrial garment manufacturing facility. We deal strictly in bulk commercial orders for
          wholesalers, apparel distributors, retail brand chains, and corporate buyers. We do not provide individual
          retail sales, single-piece deliveries, or retail consumer checkout.
        </div>

        {/* Bottom Bar: Copyright & Target SEO keywords */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} {FACTORY_INFO.companyName}. All Rights Reserved. OEM & Wholesale Garment Manufacturer.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Track Pants Manufacturer</span>
            <span>•</span>
            <span>Lowers & Joggers Supplier</span>
            <span>•</span>
            <span>Wholesale Garment Factory</span>
            <span>•</span>
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
