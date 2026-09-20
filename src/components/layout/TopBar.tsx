import React from 'react';
import { Phone, MessageSquare, MapPin, Truck } from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';

export default function TopBar() {
  return (
    <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        {/* Left Side: Business notice */}
        <div className="flex items-center gap-3 font-medium">
          <span className="inline-flex items-center gap-1.5 text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            B2B Manufacturing Only
          </span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
            <Truck className="w-3.5 h-3.5 text-amber-400" />
            PAN-India & Export Dispatch | Direct Factory Bulk Rates
          </span>
        </div>

        {/* Right Side: Quick Contacts */}
        <div className="flex items-center gap-4 text-slate-300">
          <a
            href={`tel:${FACTORY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-slate-400" />
            <span className="hidden sm:inline">Wholesale Line:</span>
            <span className="font-semibold text-slate-100">{FACTORY_INFO.contact.primaryPhone}</span>
          </a>

          <span className="text-slate-700">|</span>

          <a
            href={`https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
              'Hello, I would like to enquire about bulk garment wholesale pricing and MOQ.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Quick Connect</span>
          </a>

          <span className="hidden lg:inline text-slate-700">|</span>

          <div className="hidden lg:inline-flex items-center gap-1 text-slate-400">
            <MapPin className="w-3.5 h-3.5 text-slate-500" />
            <span>{FACTORY_INFO.contact.factoryAddress.city}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
