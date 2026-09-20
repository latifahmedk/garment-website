import React from 'react';
import { Product } from '@/types/product';
import { ShieldCheck, Layers, Scissors, Box, Clock, Sliders } from 'lucide-react';

interface ProductSpecsTableProps {
  product: Product;
}

export default function ProductSpecsTable({ product }: ProductSpecsTableProps) {
  const specs = [
    { label: 'Garment Style / SKU', value: product.sku, icon: Sliders },
    { label: 'Fabric Quality', value: product.fabric, icon: Layers },
    { label: 'Fiber Composition', value: product.fabricComposition, icon: Layers },
    { label: 'Fabric Weight', value: `${product.gsm} GSM (±5% Commercial Tolerance)`, icon: Layers },
    { label: 'Fit Type', value: product.fitType, icon: Scissors },
    { label: 'Pockets & Hardware', value: product.pockets, icon: Scissors },
    { label: 'Waistband Construction', value: product.waistband, icon: Scissors },
    { label: 'Seam & Stitch Quality', value: product.stitching, icon: Scissors },
    { label: 'Packaging Specification', value: product.packaging, icon: Box },
    { label: 'Minimum Order Quantity (MOQ)', value: `${product.moq} ${product.moqUnit}`, icon: Box },
    { label: 'Turnaround / Lead Time', value: product.leadTime, icon: Clock },
    { label: 'Shrinkage & Wash Stability', value: '< 3% Post-Wash Shrinkage (Pre-shrunk, bio-washed)', icon: ShieldCheck },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs">
      <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
        <div>
          <h3 className="font-bold text-sm sm:text-base">Technical Manufacturing Specifications</h3>
          <p className="text-[11px] text-slate-300">Production parameters and commercial garment standards</p>
        </div>
        <span className="px-2.5 py-1 rounded bg-amber-500/20 border border-amber-400/30 text-amber-400 text-xs font-bold font-mono">
          {product.sku}
        </span>
      </div>

      <div className="divide-y divide-slate-100">
        {specs.map((item, idx) => (
          <div
            key={idx}
            className="grid grid-cols-1 sm:grid-cols-3 p-3.5 sm:p-4 text-xs hover:bg-slate-50/70 transition-colors"
          >
            <div className="font-semibold text-slate-500 sm:col-span-1 flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>{item.label}</span>
            </div>
            <div className="font-medium text-slate-900 sm:col-span-2 mt-1 sm:mt-0">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
