import React from 'react';
import { valuePillars } from '@/content/site';
import { Scissors, ShieldCheck, Sparkles, Truck } from 'lucide-react';
import { SectionHeading } from '@/components/common/SectionHeading';

const iconMap = {
  Scissors,
  ShieldCheck,
  Sparkles,
  Truck,
};

export function ValuePillars() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Q Workwear"
          title="Engineered for Endurance, Tailored for Kigali"
          subtitle="We eliminate the compromises between cheap imported uniforms and unreliable tailoring schedules."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {valuePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.iconName];

            return (
              <div
                key={idx}
                className="group p-6 sm:p-7 rounded-3xl bg-stone-50 border border-stone-200/80 hover:border-[#E0483A]/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF2F0] text-[#E0483A] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-lg font-bold text-zinc-900 mb-2.5">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-200/60 flex items-center text-xs font-semibold text-[#E0483A]">
                  <span>Crafted in Rwanda</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
