import React from 'react';
import { valuePillars } from '@/content/site';
import { Scissors, ShieldCheck, Sparkles, Truck, Ruler, Layers } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

const iconMap = {
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
};

const specNotes = [
  'SEAM ALLOWANCE: 1.5CM • REINFORCED SEAMS',
  'TENSILE TEST: 300 GSM COTTON DRILL',
  'THREAD DENSITY: UP TO 12,000 STITCHES',
  'DISPATCH: DOORSTEP KIGALI DELIVERY',
];

export function ValuePillars() {
  return (
    <section className="py-20 sm:py-28 bg-[#181513] text-stone-200 border-b border-stone-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono mb-3 border border-stone-700">
            <Ruler className="w-3.5 h-3.5 text-[#E0483A]" />
            <span>ATELIER BENCHMARKS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Engineered for Endurance, Tailored in Kigali
          </h2>
          <p className="mt-3 text-base sm:text-lg text-stone-400 font-light leading-relaxed">
            Every garment is constructed to withstand commercial laundry and daily wear, eliminating the costly cycle of replacing flimsy imported uniforms.
          </p>
        </div>

        {/* 4 Atelier Craftsmanship Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {valuePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName];

            return (
              <div
                key={idx}
                className="group relative p-7 rounded-3xl bg-[#201C19] border border-stone-800 hover:border-[#E0483A]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                {/* Top Subtle Running Stitch Accent */}
                <div className="absolute top-0 left-8 right-8 h-1 basting-stitch-white opacity-40 group-hover:opacity-100 transition-opacity" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#E0483A]/15 text-[#E0483A] flex items-center justify-center border border-[#E0483A]/30 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-stone-500 font-bold">
                      BENCHMARK 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-stone-400 font-light leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Chalk-style specification note */}
                <div className="pt-6 mt-8 border-t border-stone-800/80">
                  <span className="text-[10px] font-mono text-stone-500 tracking-wider block">
                    {specNotes[idx]}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
