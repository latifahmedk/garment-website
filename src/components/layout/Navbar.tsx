'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight, ShieldCheck, PhoneCall, ChevronRight } from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';

interface NavbarProps {
  onOpenEnquiryModal?: () => void;
}

export default function Navbar({ onOpenEnquiryModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products Catalogue', href: '/products' },
    { name: 'Manufacturing', href: '/manufacturing' },
    { name: 'About Factory', href: '/about' },
    { name: 'Contact & Enquiry', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white border-b border-slate-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Tagline */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-slate-900 text-white flex items-center justify-center font-black tracking-wider text-xl shadow-sm group-hover:bg-slate-800 transition-colors">
              A<span className="text-amber-400">G</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-950 tracking-tight text-lg sm:text-xl">
                  APEX GARMENTS
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-slate-100 text-slate-700 rounded border border-slate-300">
                  OEM Factory
                </span>
              </div>
              <span className="text-[11px] text-slate-500 font-medium tracking-tight">
                Bulk Garment Manufacturers & Exporters
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                    isActive
                      ? 'text-slate-950 bg-slate-100 font-bold'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Request Wholesale Quote Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all shadow-sm hover:shadow"
            >
              <span>Get Wholesale Quote</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold"
            >
              Get Quote
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 active:bg-slate-200 transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden animate-fade-in">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                    AG
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">Apex Garments</div>
                    <div className="text-[10px] text-emerald-700 font-semibold">Verified B2B Factory</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-5 space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center justify-between px-3 py-3 rounded-lg text-base font-semibold transition-colors ${
                        isActive
                          ? 'bg-slate-100 text-slate-950 font-bold'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Quick Info Box */}
              <div className="mt-4 p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-800">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Wholesale Order Specs</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Direct factory supply. Standard MOQ starting at 200 pcs per style. Custom branding available.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 shadow-sm"
              >
                <span>Request Wholesale Quote</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
              <a
                href={`tel:${FACTORY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-800 font-medium text-xs hover:bg-slate-50"
              >
                <PhoneCall className="w-4 h-4 text-slate-600" />
                <span>Call Factory: {FACTORY_INFO.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
