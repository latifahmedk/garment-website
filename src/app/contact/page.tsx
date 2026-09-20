import React from 'react';
import type { Metadata } from 'next';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  Truck,
  ShieldCheck,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { FACTORY_INFO } from '@/data/factory';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import ContactForm from '@/components/contact/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Factory & B2B Wholesale Enquiry | Apex Garments',
  description:
    'Contact Apex Garment Industries for bulk orders, wholesale rate cards, and physical sample swatches. Speak directly with our factory sales merchandising team.',
  keywords: [
    'garment manufacturer contact',
    'wholesale track pants enquiry',
    'bulk clothing supplier contact',
    'track pant factory Ludhiana Tiruppur',
    'apparel OEM enquiry',
  ],
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
    'Hello Apex Garments Team, I would like to schedule a factory discussion or request your latest wholesale rate card.'
  )}`;

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      <Breadcrumbs items={[{ name: 'Contact & Wholesale Enquiry', href: '/contact' }]} />

      {/* Header */}
      <section className="bg-slate-900 text-white py-14 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/20">
              Direct Manufacturer Access
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight">
              Factory Office & Wholesale Enquiries
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Speak directly with our factory floor merchandising team. Whether you need physical fabric swatch cards,
              custom tech-pack pricing, or sample verification batches, we are here to support your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Factory Coordinates */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Column: Contact Cards & Location Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Connect Cards */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <h3 className="text-base font-bold text-slate-950 flex items-center gap-2">
                <Building className="w-4 h-4 text-amber-600" />
                <span>Factory Contact Channels</span>
              </h3>

              <div className="space-y-4 text-xs">
                {/* Calling Phone */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Wholesale Calling Desk
                    </span>
                    <a
                      href={`tel:${FACTORY_INFO.contact.primaryPhone.replace(/\s+/g, '')}`}
                      className="font-bold text-slate-900 hover:text-blue-600 text-sm"
                    >
                      {FACTORY_INFO.contact.primaryPhone}
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Alt: {FACTORY_INFO.contact.secondaryPhone} (9 AM – 7:30 PM IST)
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase font-bold text-emerald-800 block">
                      Direct WhatsApp Sales Desk
                    </span>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-950 hover:underline text-sm block"
                    >
                      {FACTORY_INFO.contact.whatsappNumber}
                    </a>
                    <span className="text-[11px] text-emerald-700 block mt-0.5">
                      Average response: Under 15 minutes during business hours
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Official Wholesale Email
                    </span>
                    <a
                      href={`mailto:${FACTORY_INFO.contact.salesEmail}`}
                      className="font-bold text-slate-900 hover:text-amber-600 text-sm"
                    >
                      {FACTORY_INFO.contact.salesEmail}
                    </a>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Tech packs & RFQ: {FACTORY_INFO.contact.supportEmail}
                    </div>
                  </div>
                </div>

                {/* Factory Address */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Physical Manufacturing Plant
                    </span>
                    <div className="font-semibold text-slate-900 leading-snug">
                      {FACTORY_INFO.contact.factoryAddress.plot}, {FACTORY_INFO.contact.factoryAddress.industrialArea}
                    </div>
                    <div className="text-slate-600">
                      {FACTORY_INFO.contact.factoryAddress.city}, {FACTORY_INFO.contact.factoryAddress.state} -{' '}
                      {FACTORY_INFO.contact.factoryAddress.pincode}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      Landmark: {FACTORY_INFO.contact.factoryAddress.landmark}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Logistics & Connectivity Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Logistics & Dispatch Hub Connectivity</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our plant is strategically situated within 1.5 km of major national transport nagar booking agencies
                (Safexpress, V-Trans, TCI Freight, ARC, Delhivery B2B). We provide insured road dispatch across all states
                and container FOB dispatch to ports.
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Dispatch schedules: Mon – Sat (Daily 6:00 PM)</span>
              </div>
            </div>

            {/* Factory Visit Policy */}
            <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-2">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Factory Floor Visit Policy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We welcome registered wholesalers, retail chain procurement directors, and brand founders for in-person
                facility audits. Please schedule an appointment 24 hours in advance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
