'use client';

import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappMessage = encodeURIComponent(
    'Hello Apex Garments Team, I am interested in bulk B2B wholesale pricing, MOQ, and catalogue details for your garments.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Mini Tooltip Bubble */}
      {showTooltip && (
        <div className="mb-2 hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-medium py-2 px-3.5 rounded-xl shadow-lg border border-slate-200 animate-fade-in">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></div>
          <span>Wholesale Sales Desk Online</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating CTA Button */}
      <a
        href={`https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Wholesale Enquiry"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white shadow-xl hover:shadow-2xl transition-all duration-200"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 text-[9px] font-bold text-white items-center justify-center">
            1
          </span>
        </span>
        <MessageSquare className="w-7 h-7 fill-white" />
        
        {/* Hover Label for Desktop */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
