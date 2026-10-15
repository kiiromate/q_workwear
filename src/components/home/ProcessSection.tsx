import React from 'react';
import { productionWorkflow } from '@/content/site';
import { Ruler, Scissors } from 'lucide-react';

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#141210] text-stone-200 border-b border-stone-800 relative overflow-hidden">
      {/* Subtle cutting mat background grid */}
      <div className="absolute inset-0 cutting-table-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono mb-3 border border-stone-700">
            <Ruler className="w-3.5 h-3.5 text-[#E0483A]" />
            <span>KIGALI PRODUCTION LIFECYCLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            From Cutting Table to Workforce Delivery
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-400 font-light leading-relaxed">
            Our disciplined 4-phase manufacturing workflow ensures individual staff fit accuracy, pre-tested fabric durability, and zero surprise delays.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {productionWorkflow.map((item) => (
            <div
              key={item.step}
              className="group relative p-7 rounded-3xl bg-[#1D1A18] border border-stone-800 hover:border-stone-700 transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Tape Ruler Top Stripe on card */}
              <div className="absolute top-0 left-6 right-6 h-1 tape-ruler-amber opacity-60 group-hover:opacity-100 transition-opacity" />

              <div>
                <span className="inline-block text-3xl font-black font-mono text-[#E0483A] mb-4">
                  {item.step}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-8 border-t border-stone-800/80 flex items-center justify-between text-[11px] font-mono text-stone-500">
                <span>PHASE {item.step}</span>
                <span className="text-[#E0483A] font-bold">KIGALI WORKSHOP</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
