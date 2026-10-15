import React from 'react';
import { productionWorkflow } from '@/content/site';
import { SectionHeading } from '@/components/common/SectionHeading';

export function ProcessSection() {
  return (
    <section className="py-16 sm:py-24 bg-stone-50/70 border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="How We Work"
          title="From Initial Consultation to Doorstep Delivery"
          subtitle="Our proven 4-step manufacturing process ensures accurate sizing, verified quality, and zero surprise delays."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {productionWorkflow.map((item) => (
            <div
              key={item.step}
              className="relative p-6 sm:p-7 rounded-3xl bg-white border border-stone-200/90 shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="inline-block text-3xl font-black text-[#E0483A]/80 mb-4">
                  {item.step}
                </span>

                <h3 className="text-lg font-bold text-zinc-900 mb-2.5">
                  {item.title}
                </h3>

                <p className="text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-stone-100 text-xs font-semibold text-zinc-400">
                <span>Phase {item.step}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
