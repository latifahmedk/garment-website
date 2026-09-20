import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Package, Home, PhoneCall } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-slate-50 px-4 py-16">
      <div className="max-w-md w-full bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center space-y-5">
        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mx-auto text-slate-500">
          <Package className="w-7 h-7 text-amber-600" />
        </div>

        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold text-amber-600 uppercase">404 Error</span>
          <h1 className="text-2xl font-black text-slate-900">Garment Style Not Found</h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            The page or product style code you requested is currently unavailable or may have been updated in our
            latest production season.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Link
            href="/products"
            className="w-full py-2.5 px-4 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2"
          >
            <Package className="w-4 h-4" />
            <span>Browse Full Wholesale Catalogue</span>
          </Link>

          <Link
            href="/"
            className="w-full py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 text-xs font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/contact"
            className="w-full py-2 px-4 text-xs font-semibold text-amber-700 hover:text-amber-800 transition-colors flex items-center justify-center gap-1.5"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Contact Factory Sales Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
