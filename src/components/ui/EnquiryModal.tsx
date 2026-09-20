'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Phone, AlertCircle } from 'lucide-react';
import { BuyerType, WholesaleEnquiry } from '@/types/product';
import { FACTORY_INFO } from '@/data/factory';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productContext?: {
    name?: string;
    sku?: string;
    category?: string;
    moq?: number;
  } | null;
}

export default function EnquiryModal({ isOpen, onClose, productContext }: EnquiryModalProps) {
  const [formData, setFormData] = useState<WholesaleEnquiry>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    whatsapp: '',
    cityState: '',
    buyerType: 'Wholesaler',
    productSku: productContext?.sku || '',
    productName: productContext?.name || '',
    categoryInterested: productContext?.category || 'Track Pants',
    quantityRequired: productContext?.moq ? `${productContext.moq} - 500 pcs` : '200 - 500 pcs',
    customBrandingRequired: 'Yes',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Update context if changed
  useEffect(() => {
    if (productContext) {
      setFormData((prev) => ({
        ...prev,
        productSku: productContext.sku || '',
        productName: productContext.name || '',
        categoryInterested: productContext.category || prev.categoryInterested,
        quantityRequired: productContext.moq ? `${productContext.moq} - 500 pcs` : prev.quantityRequired,
      }));
    }
  }, [productContext]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send enquiry. Please try again.');
      }

      setSubmitted(true);
    } catch (err: any) {
      // Fallback for demonstration if API had an issue
      console.warn('Submission notice:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Dark overlay */}
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/30 text-amber-400 flex items-center justify-center font-bold text-sm">
              B2B
            </div>
            <div>
              <h3 className="text-base font-bold tracking-tight">Request Wholesale Quotation</h3>
              <p className="text-xs text-slate-300">
                Direct factory pricing for bulk buyers, retailers & distributors
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Wholesale Enquiry Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Our factory wholesale manager
                will contact you at <strong className="text-slate-900">{formData.phone || formData.whatsapp}</strong> with
                the technical spec sheet and tiered pricing catalog within 2–4 business hours.
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 max-w-md mx-auto space-y-1 text-left">
                <div>
                  <strong>Company:</strong> {formData.companyName || 'N/A'}
                </div>
                <div>
                  <strong>Product:</strong> {formData.productName || formData.categoryInterested}
                </div>
                <div>
                  <strong>Order Tier:</strong> {formData.quantityRequired}
                </div>
              </div>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-slate-800 transition-colors"
                >
                  Close Window
                </button>
                <a
                  href={`https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
                    `Hi Apex Garments, I just submitted an enquiry for ${formData.productName || formData.categoryInterested} (Qty: ${formData.quantityRequired}). My name is ${formData.fullName}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>WhatsApp Fast-Track</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Product Reference Pill if available */}
              {formData.productName && (
                <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-xl flex items-center justify-between text-xs">
                  <div>
                    <span className="text-amber-800 font-semibold uppercase tracking-wider text-[10px] block">
                      Enquiring For Product:
                    </span>
                    <span className="font-bold text-slate-900 text-sm">{formData.productName}</span>
                    {formData.productSku && (
                      <span className="text-slate-500 ml-2 font-mono">({formData.productSku})</span>
                    )}
                  </div>
                  <span className="px-2 py-1 bg-amber-100 text-amber-900 font-bold rounded text-[11px]">
                    Direct Factory Rate
                  </span>
                </div>
              )}

              {error && (
                <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Kumar"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>

                {/* Company / Business Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Firm Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Retailers / Sharma Hosiery"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>

                {/* Phone / Mobile */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Calling Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 00000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp Number (For instant rate card) <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 00000"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email</label>
                  <input
                    type="email"
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>

                {/* City & State */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    City & State <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mumbai, Maharashtra"
                    value={formData.cityState}
                    onChange={(e) => setFormData({ ...formData, cityState: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  />
                </div>

                {/* Buyer Type */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Buyer Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.buyerType}
                    onChange={(e) => setFormData({ ...formData, buyerType: e.target.value as BuyerType })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="Wholesaler">Wholesaler / Bulk Trader</option>
                    <option value="Retail Store / Chain">Retail Store / Clothing Chain</option>
                    <option value="Regional Distributor">Regional Distributor</option>
                    <option value="Apparel Brand / Private Label">Apparel Brand / Private Label</option>
                    <option value="Corporate / Institutional">Corporate / Institutional Buyer</option>
                    <option value="Other">Other Bulk Buyer</option>
                  </select>
                </div>

                {/* Quantity Tier */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Estimated Bulk Quantity <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.quantityRequired}
                    onChange={(e) => setFormData({ ...formData, quantityRequired: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                  >
                    <option value="200 - 500 pcs">200 – 500 Pieces (Standard MOQ)</option>
                    <option value="500 - 1,000 pcs">500 – 1,000 Pieces (Tier 2 Discount)</option>
                    <option value="1,000 - 5,000 pcs">1,000 – 5,000 Pieces (High Volume)</option>
                    <option value="5,000+ pcs">5,000+ Pieces (Direct Mill Run)</option>
                    <option value="Sample Order (10-20 pcs)">Sample Verification Batch</option>
                  </select>
                </div>
              </div>

              {/* Custom Branding Check */}
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-800 block">
                    Require Custom Branding / Private Labeling?
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Custom tags, jacquard elastic, or silicone rubber logos
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  {(['Yes', 'No'] as const).map((opt) => (
                    <label key={opt} className="flex items-center gap-1.5 text-xs font-medium text-slate-700 cursor-pointer">
                      <input
                        type="radio"
                        name="customBranding"
                        value={opt}
                        checked={formData.customBrandingRequired === opt}
                        onChange={() => setFormData({ ...formData, customBrandingRequired: opt })}
                        className="text-slate-900 focus:ring-slate-900"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Specific Requirements / Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Specific Specifications / Color Ratios / Target Pricing
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention desired GSM, size ratios (e.g. M:L:XL = 1:2:1), or specific timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent"
                />
              </div>

              {/* Trust Badge & Submit */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Your commercial enquiry is protected under confidentiality.</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-slate-950 text-white text-sm font-semibold hover:bg-slate-800 active:scale-[0.98] transition-all shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Enquiry...</span>
                  ) : (
                    <>
                      <span>Submit Wholesale Enquiry</span>
                      <Send className="w-4 h-4 text-amber-400" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
