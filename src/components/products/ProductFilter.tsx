'use client';

import React from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { CATEGORIES } from '@/data/products';

interface ProductFilterProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  selectedGsmRange: string;
  onSelectGsmRange: (range: string) => void;
  totalResults: number;
}

export default function ProductFilter({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  selectedGsmRange,
  onSelectGsmRange,
  totalResults,
}: ProductFilterProps) {
  const gsmRanges = [
    { id: 'all', label: 'All GSM' },
    { id: 'light', label: '180–220 GSM' },
    { id: 'medium', label: '240–280 GSM' },
    { id: 'heavy', label: '300+ GSM' },
  ];

  const hasActiveFilters = selectedCategory !== 'all' || searchQuery !== '' || selectedGsmRange !== 'all';

  const clearFilters = () => {
    onSelectCategory('all');
    onSearchChange('');
    onSelectGsmRange('all');
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-xs space-y-4">
      {/* Top Controls: Search Bar & Sorting */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by product name, fabric (e.g. Loopknit, Lycra), or SKU..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-900 focus:border-transparent bg-slate-50/50"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-medium whitespace-nowrap hidden sm:inline">
            Sort by:
          </span>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="px-3 py-2.5 text-xs font-semibold rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-900"
          >
            <option value="featured">Featured / Best Sellers</option>
            <option value="moq-asc">MOQ: Low to High</option>
            <option value="moq-desc">MOQ: High to Low</option>
            <option value="gsm-desc">GSM: Heavy to Light</option>
            <option value="gsm-asc">GSM: Light to Heavy</option>
          </select>
        </div>
      </div>

      {/* Category Pills */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Garment Category
          </span>
          <span className="text-xs text-slate-500 font-medium">
            Showing <strong className="text-slate-900">{totalResults}</strong> wholesale styles
          </span>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => onSelectCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-slate-950 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-950'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected ? 'bg-slate-800 text-slate-200' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* GSM Weight Filter Chips */}
      <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1">
            Fabric Weight:
          </span>
          {gsmRanges.map((range) => {
            const isSelected = selectedGsmRange === range.id;
            return (
              <button
                key={range.id}
                type="button"
                onClick={() => onSelectGsmRange(range.id)}
                className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-semibold'
                    : 'bg-slate-50 text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {range.label}
              </button>
            );
          })}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-xs text-red-600 hover:text-red-700 font-medium inline-flex items-center gap-1 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>
    </div>
  );
}
