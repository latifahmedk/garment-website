'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MessageSquare, PhoneCall, ShieldCheck, Mail } from 'lucide-react';
import { PRODUCTS, getFeaturedProducts } from '@/data/products';
import { FACTORY_INFO } from '@/data/factory';
import Hero from '@/components/home/Hero';
import CategorySection from '@/components/home/CategorySection';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import ManufacturingPreview from '@/components/home/ManufacturingPreview';
import FabricGuide from '@/components/home/FabricGuide';
import OrderProcess from '@/components/home/OrderProcess';
import EnquiryModal from '@/components/ui/EnquiryModal';
import { Product } from '@/types/product';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name?: string;
    sku?: string;
    category?: string;
    moq?: number;
  } | null>(null);

  const featuredProducts = getFeaturedProducts();

  const handleOpenEnquiry = (product?: Product) => {
    if (product) {
      setSelectedProduct({
        name: product.name,
        sku: product.sku,
        category: product.categoryLabel,
        moq: product.moq,
      });
    } else {
      setSelectedProduct(null);
    }
    setIsModalOpen(true);
  };

  // Schema.org Organization + LocalBusiness structured data
  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'ClothingStore',
    additionalType: 'https://schema.org/Manufacturer',
    name: FACTORY_INFO.companyName,
    description:
      'Premier garment manufacturer and wholesale supplier of track pants, lowers, joggers, track suits, and t-shirts for bulk buyers.',
    url: 'https://apexgarments.com',
    telephone: FACTORY_INFO.contact.primaryPhone,
    email: FACTORY_INFO.contact.salesEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${FACTORY_INFO.contact.factoryAddress.plot}, ${FACTORY_INFO.contact.factoryAddress.industrialArea}`,
      addressLocality: FACTORY_INFO.contact.factoryAddress.city,
      addressRegion: FACTORY_INFO.contact.factoryAddress.state,
      postalCode: FACTORY_INFO.contact.factoryAddress.pincode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.9010',
      longitude: '75.8573',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:30',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '₹₹ - Wholesale Volume Tiers',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <main className="min-h-screen">
        {/* 1. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenEnquiry()} />

        {/* 2. Main Categories Showcase */}
        <CategorySection />

        {/* 3. Featured Products for Wholesale Buyers */}
        <FeaturedProducts
          products={featuredProducts}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 4. Why Choose Us / B2B Advantages */}
        <WhyChooseUs />

        {/* 5. Manufacturing Facilities & Precision Machinery Preview */}
        <ManufacturingPreview />

        {/* 6. Technical Fabric & GSM Guide */}
        <FabricGuide />

        {/* 7. Step-by-Step B2B Wholesale Ordering Process */}
        <OrderProcess />

        {/* 8. High-Converting Wholesale Lead Capture CTA Strip */}
        <section className="py-16 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              Direct Factory Partnerships
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight max-w-3xl mx-auto">
              Ready to Upgrade Your Wholesale Garment Sourcing?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Connect directly with our factory merchandising team. Get comprehensive product catalogues, physical fabric
              swatch samples, and bulk tier pricing for your business.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => handleOpenEnquiry()}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-lg active:scale-[0.98] inline-flex items-center justify-center gap-2"
              >
                <span>Request Detailed Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
                  'Hello Apex Garments, I would like to request your latest wholesale rate card and swatch kit.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-lg active:scale-[0.98] inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-all border border-slate-700"
              >
                Contact Factory Office
              </Link>
            </div>

            <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Confidential B2B Pricing
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <PhoneCall className="w-4 h-4 text-blue-400" />
                Wholesale Desk: {FACTORY_INFO.contact.primaryPhone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-amber-400" />
                {FACTORY_INFO.contact.salesEmail}
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Quick Quote Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productContext={selectedProduct}
      />
    </>
  );
}
