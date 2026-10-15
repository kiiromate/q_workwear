import React from 'react';
import Image from 'next/image';
import { Scissors, ShieldCheck, Heart, TrendingUp } from 'lucide-react';

export function ValuePillars() {
  return (
    <section className="py-20 sm:py-28 bg-[#12100E] text-stone-200 border-b border-stone-850 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Atmospheric Photography of Craft in Action */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#1A1816] border border-stone-800 shadow-2xl">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/images/lookbook/lookbook-hands.webp"
                  alt="Tailor Hands Measuring and Cutting Fabric in Kigali"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#12100E] via-transparent to-transparent" />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#0C0B0A]/90 backdrop-blur-md border border-stone-800 text-xs font-mono text-stone-300">
                <span className="text-[#E0483A] font-bold block mb-1">
                  ATELIER PHILOSOPHY // 01
                </span>
                <p className="font-sans text-sm text-white font-light italic">
                  &ldquo;A uniform isn&rsquo;t just clothing. It is how your staff begins every shift. When it fits with dignity, they represent your company with pride.&rdquo;
                </p>
                <span className="text-[10px] text-stone-500 block mt-2">
                  — QUDDUS & TINAH, FOUNDERS
                </span>
              </div>
            </div>
          </div>

          {/* Right: The Three Pillars (Ethos, Pathos, Logos) */}
          <div className="lg:col-span-7 space-y-10">
            
            <div>
              <span className="inline-block px-3 py-1 rounded bg-[#E0483A]/15 text-[#E0483A] text-xs font-mono font-bold mb-3">
                WHY WE TAILOR IN RWANDA
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Clothing That Honors the People Who Wear It.
              </h2>
            </div>

            {/* Ethos: The Dignity of Rwandan Labor */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-[#E0483A] flex items-center justify-center shrink-0 border border-stone-800">
                <Scissors className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white">
                  Made in Kigali by Rwandan Hands (Ethos)
                </h3>
                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  We reject disposable fast-fashion imports. Every piece is measured, cut, and assembled by skilled tailors in Kigali—providing dignified employment and keeping economic value in Rwanda.
                </p>
              </div>
            </div>

            {/* Pathos: The Worker's Pride & Confidence */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-[#E0483A] flex items-center justify-center shrink-0 border border-stone-800">
                <Heart className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white">
                  The Pride of Fit & Dignity (Pathos)
                </h3>
                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  Ill-fitting uniforms make staff uncomfortable and unmotivated. We measure individual team members so your front-desk staff, chefs, and engineers feel respected and ready to excel.
                </p>
              </div>
            </div>

            {/* Logos: The Real Economics of Quality */}
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-[#E0483A] flex items-center justify-center shrink-0 border border-stone-800">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-white">
                  Built to Outlast the Shift (Logos)
                </h3>
                <p className="text-sm text-stone-400 font-light leading-relaxed">
                  Cheap polyester tears after 8 weeks of washing. We use 300 GSM cotton drill, reinforced stress points, and heavy-duty zippers. Fewer replacements, lower cost-per-wear, and zero shipping delays.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
