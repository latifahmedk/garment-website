'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Ruler,
  Layers,
  Send,
  Package,
  Truck,
  Sparkles,
} from 'lucide-react';
import { Product, WholesaleEnquiry } from '@/types/product';
import { FACTORY_INFO } from '@/data/factory';
import ProductGallery from '@/components/products/ProductGallery';
import ProductSpecsTable from '@/components/products/ProductSpecsTable';
import SizeChartModal from '@/components/products/SizeChartModal';
import ProductCard from '@/components/ui/ProductCard';
import EnquiryModal from '@/components/ui/EnquiryModal';

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({
  product,
  relatedProducts,
}: ProductDetailClientProps) {
  const [isSizeChartOpen, setIsSizeChartOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  // Inline Enquiry Form state
  const [formData, setFormData] = useState<WholesaleEnquiry>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    whatsapp: '',
    cityState: '',
    buyerType: 'Wholesaler',
    productSku: product.sku,
    productName: product.name,
    categoryInterested: product.categoryLabel,
    quantityRequired: `${product.moq} - 500 pcs`,
    customBrandingRequired: 'Yes',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const whatsappEnquiryUrl = `https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
    `Hello Apex Garments, I am interested in bulk wholesale order for:
*Product:* ${product.name}
*SKU:* ${product.sku}
*Fabric:* ${product.fabric} (${product.gsm} GSM)
*MOQ:* ${product.moq} pcs
Please share your current volume tier rate card and color swatch availability.`
  )}`;

  const handleInlineSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setFormSubmitted(true);
    } catch {
      setFormSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Top Product Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <ProductGallery
            images={product.images}
            productName={product.name}
          />

          {/* Customization Badges under Gallery */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block">
              Available OEM / Private Label Customization:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {product.customizationOptions.map((opt, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-white text-slate-700 text-[11px] font-semibold rounded-md border border-slate-200"
                >
                  {opt}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Product Meta & Purchase Actions */}
        <div className="lg:col-span-6 space-y-6">
          {/* Header Info */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-slate-900 text-white text-[11px] font-bold uppercase tracking-wider">
                {product.categoryLabel}
              </span>
              <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-mono font-semibold border border-slate-200">
                SKU: {product.sku}
              </span>
              {product.isNew && (
                <span className="px-2 py-0.5 rounded-md bg-amber-500 text-slate-950 text-[10px] font-black uppercase">
                  New Release
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-snug">
              {product.name}
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {product.tagline}
            </p>
          </div>

          {/* B2B Pricing & MOQ Callout Box */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">
                  Wholesale Price Structure
                </span>
                <span className="text-xl sm:text-2xl font-black text-white">
                  Factory Direct Rates
                </span>
              </div>
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                  Minimum Order
                </span>
                <span className="text-base font-bold text-emerald-400">
                  {product.moq} {product.moqUnit.split(' ')[0]}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 border-t border-slate-800 pt-2">
              {product.priceNote}. Volume discounts apply on orders of 500+, 1,000+, and 5,000+ pieces.
            </p>

            <div className="pt-1 flex flex-col sm:flex-row items-center gap-2">
              <a
                href={whatsappEnquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Rate Card</span>
              </a>

              <button
                type="button"
                onClick={() => setIsQuoteModalOpen(true)}
                className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Request Written Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Colors Available */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-slate-700 block">
              Available Production Colors:
            </span>
            <div className="flex flex-wrap gap-2">
              {product.availableColors.map((color) => (
                <div
                  key={color.name}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-800"
                >
                  <span
                    className="w-3.5 h-3.5 rounded-full border border-slate-300"
                    style={{ backgroundColor: color.hex }}
                  />
                  <span>{color.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Sizes & Size Chart Link */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">
                Available Size Range:
              </span>
              <button
                type="button"
                onClick={() => setIsSizeChartOpen(true)}
                className="text-xs font-bold text-amber-700 hover:text-amber-800 inline-flex items-center gap-1 underline underline-offset-2"
              >
                <Ruler className="w-3.5 h-3.5" />
                <span>View Measurement Chart</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.availableSizes.map((sz) => (
                <span
                  key={sz}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-800"
                >
                  {sz}
                </span>
              ))}
            </div>
          </div>

          {/* Key Fabric & Construction Highlights */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <span className="text-xs font-bold text-slate-900 block">
              Quality & Construction Highlights:
            </span>
            <div className="space-y-1.5">
              {product.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics & Packaging Notice */}
          <div className="p-3.5 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-slate-500 shrink-0" />
              <span>
                Standard Packaging: <strong>50 pcs per export corrugated carton</strong>
              </span>
            </div>
            <span className="text-[11px] font-semibold text-slate-800">Ready Stock / Custom Run</span>
          </div>
        </div>
      </div>

      {/* Mid Section: Comprehensive Technical Specs Table */}
      <div className="pt-6">
        <ProductSpecsTable product={product} />
      </div>

      {/* Description & Factory Fabric Note */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
        <h3 className="text-lg font-bold text-slate-950">Detailed Product Description</h3>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {product.description}
        </p>
      </div>

      {/* Inline Direct Wholesale Enquiry Form */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded border border-amber-500/20 inline-block mb-2">
            Direct Factory Enquiry
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-white">
            Send Wholesale Enquiry for {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            Fill out the form below to receive customized volume rate tiers, available color cards, and sample dispatch
            options.
          </p>
        </div>

        {formSubmitted ? (
          <div className="p-6 bg-slate-800/80 border border-emerald-500/40 rounded-xl text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <h4 className="text-base font-bold text-white">Quotation Request Submitted!</h4>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Our factory merchandising team has received your enquiry for <strong>{product.name}</strong>. We will
              reach out via WhatsApp or phone with the detailed rate card within 2–4 business hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleInlineSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Company / Firm Name *</label>
              <input
                type="text"
                required
                placeholder="Business Name"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Calling Phone *</label>
              <input
                type="tel"
                required
                placeholder="+91 Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">WhatsApp Number *</label>
              <input
                type="tel"
                required
                placeholder="+91 WhatsApp Number"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Target Quantity *</label>
              <select
                value={formData.quantityRequired}
                onChange={(e) => setFormData({ ...formData, quantityRequired: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value={`${product.moq} - 500 pcs`}>{product.moq} – 500 Pieces (Standard MOQ)</option>
                <option value="500 - 1,000 pcs">500 – 1,000 Pieces (Tier 2)</option>
                <option value="1,000 - 5,000 pcs">1,000 – 5,000 Pieces (Volume)</option>
                <option value="5,000+ pcs">5,000+ Pieces (Mill Bulk)</option>
                <option value="Sample Order (10-20 pcs)">Sample Verification Order</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">City & State *</label>
              <input
                type="text"
                required
                placeholder="e.g. Delhi NCR / Bangalore"
                value={formData.cityState}
                onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-slate-300 font-semibold mb-1">Special Requirements / Customization</label>
              <textarea
                rows={2}
                placeholder="Mention specific color breakdown, private label tags, or delivery schedule..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2.5 rounded-lg bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
              <span className="text-[11px] text-slate-400 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Direct factory response within 2–4 hours.
              </span>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? <span>Processing...</span> : <span>Send Bulk Quotation Request</span>}
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="pt-8 border-t border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-950">Related Wholesale Garments</h3>
              <p className="text-xs text-slate-500">Complementary styles frequently ordered together</p>
            </div>
            <Link
              href="/products"
              className="text-xs font-bold text-slate-900 hover:text-amber-600 transition-colors inline-flex items-center gap-1"
            >
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onOpenEnquiry={() => {
                  setFormData((prev) => ({
                    ...prev,
                    productSku: p.sku,
                    productName: p.name,
                    categoryInterested: p.categoryLabel,
                    quantityRequired: `${p.moq} - 500 pcs`,
                  }));
                  setIsQuoteModalOpen(true);
                }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Modals */}
      <SizeChartModal
        isOpen={isSizeChartOpen}
        onClose={() => setIsSizeChartOpen(false)}
        productName={product.name}
        sizeChart={product.sizeChart}
      />

      <EnquiryModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productContext={{
          name: product.name,
          sku: product.sku,
          category: product.categoryLabel,
          moq: product.moq,
        }}
      />
    </div>
  );
}
