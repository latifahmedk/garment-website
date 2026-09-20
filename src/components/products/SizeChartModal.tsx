'use client';

import React from 'react';
import { X, Ruler, ShieldCheck } from 'lucide-react';
import { SizeMeasurement } from '@/types/product';

interface SizeChartModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  sizeChart: SizeMeasurement[];
}

export default function SizeChartModal({
  isOpen,
  onClose,
  productName,
  sizeChart,
}: SizeChartModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div
        className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs"
        onClick={onClose}
      />

      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10">
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ruler className="w-5 h-5 text-amber-400" />
            <div>
              <h3 className="text-sm font-bold">Standard B2B Measurement Chart</h3>
              <p className="text-[11px] text-slate-300">{productName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <p className="text-xs text-slate-600">
            All measurements are in inches. Commercial manufacturing tolerance is ±0.5 inches. Custom size grading is
            available for bulk private label runs.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-3">Size</th>
                  <th className="p-3">Waist (Inches)</th>
                  <th className="p-3">Length (Inches)</th>
                  <th className="p-3">Hip (Inches)</th>
                  <th className="p-3">Thigh (Inches)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                {sizeChart.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-950 bg-slate-50/50">{row.size}</td>
                    <td className="p-3">{row.waist}</td>
                    <td className="p-3">{row.length}</td>
                    <td className="p-3">{row.hip}</td>
                    <td className="p-3">{row.thigh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Graded according to Indian & International export standard size charts.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
