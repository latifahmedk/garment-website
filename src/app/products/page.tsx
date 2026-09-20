'use client';

import React, { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Package, ShieldCheck, ArrowRight, MessageSquare, Filter } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types/product';
import ProductCard from '@/components/ui/ProductCard';
import ProductFilter from '@/components/products/ProductFilter';
import EnquiryModal from '@/components/ui/EnquiryModal';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { FACTORY_INFO } from '@/data/factory';

function ProductCatalogueContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [selectedGsmRange, setSelectedGsmRange] = useState<string>('all');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{
    name?: string;
    sku?: string;
    category?: string;
    moq?: number;
  } | null>(null);

  const handleOpenEnquiry = (product: Product) => {
    setSelectedProduct({
      name: product.name,
      sku: product.sku,
      category: product.categoryLabel,
      moq: product.moq,
    });
    setIsModalOpen(true);
  };

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // GSM filter
      if (selectedGsmRange === 'light' && item.gsm > 220) return false;
      if (selectedGsmRange === 'medium' && (item.gsm < 221 || item.gsm > 280)) return false;
      if (selectedGsmRange === 'heavy' && item.gsm < 281) return false;

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesSku = item.sku.toLowerCase().includes(query);
        const matchesFabric = item.fabric.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesSku && !matchesFabric && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'moq-asc') return a.moq - b.moq;
      if (sortBy === 'moq-desc') return b.moq - a.moq;
      if (sortBy === 'gsm-asc') return a.gsm - b.gsm;
      if (sortBy === 'gsm-desc') return b.gsm - a.gsm;
      // Default featured
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, selectedGsmRange]);

  return (
    <div className="bg-slate-50/60 min-h-screen pb-20">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[{ name: 'Wholesale Catalogue', href: '/products' }]} />

      {/* Catalogue Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-800 bg-slate-200/70 px-2.5 py-1 rounded-md mb-2">
              <Package className="w-3.5 h-3.5 text-amber-600" />
              <span>B2B Wholesale Garment Catalogue</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Track Pants, Lowers & Knitwear Collection
            </h1>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Commercial wholesale catalogue with technical fabric specifications, GSM metrics, standard pack sizes, and
              minimum order quantities. Direct manufacturer pricing.
            </p>
          </div>

          {/* Quick Notice Badge */}
          <div className="p-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 text-xs text-slate-700 shadow-2xs shrink-0">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold text-slate-900 block">Sample Batch Available</span>
              <span className="text-[11px] text-slate-500">Test quality before booking bulk runs</span>
            </div>
          </div>
        </div>

        {/* Filters & Search */}
        <div className="mt-6">
          <ProductFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            selectedGsmRange={selectedGsmRange}
            onSelectGsmRange={setSelectedGsmRange}
            totalResults={filteredProducts.length}
          />
        </div>

        {/* Product Grid / Empty State */}
        <div className="mt-8">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenEnquiry={handleOpenEnquiry}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 space-y-4 max-w-md mx-auto">
              <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
                <Filter className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No matching garments found</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We could not find any products matching your active search or filters. We can manufacture custom styles
                matching your exact tech-pack.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                    setSelectedGsmRange('all');
                  }}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-slate-900 text-white hover:bg-slate-800"
                >
                  Clear All Filters
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSelectedProduct({ category: 'Custom Tech-Pack' });
                    setIsModalOpen(true);
                  }}
                  className="px-4 py-2 text-xs font-bold rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400"
                >
                  Request Custom Manufacturing
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Lead Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900">Need a Master Catalogue PDF with Pricing?</h3>
            <p className="text-xs text-slate-600 max-w-xl">
              We send our unbranded or branded B2B PDF catalogue with complete wholesale tier pricing directly via
              WhatsApp or email to registered apparel businesses.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => {
                setSelectedProduct(null);
                setIsModalOpen(true);
              }}
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-colors inline-flex items-center gap-2"
            >
              <span>Request Master PDF</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>

            <a
              href={`https://wa.me/${FACTORY_INFO.contact.whatsappUrlNumber}?text=${encodeURIComponent(
                'Hello Apex Garments, please share your complete B2B wholesale PDF catalogue and rate sheet.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-500 transition-colors inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp PDF</span>
            </a>
          </div>
        </div>
      </div>

      {/* Global Quick Quote Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productContext={selectedProduct}
      />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen py-20 text-center text-slate-500 text-sm">
          Loading garment catalogue...
        </div>
      }
    >
      <ProductCatalogueContent />
    </Suspense>
  );
}
