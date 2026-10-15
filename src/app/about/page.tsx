import React from 'react';
import Image from 'next/image';
import { aboutPageContent } from '@/content/pages';
import { CTASection } from '@/components/home/CTASection';
import { Scissors, Ruler, CheckCircle2, MapPin } from 'lucide-react';

export const metadata = {
  title: 'About Q Workwear | Kigali Uniform Tailors',
  description:
    'Learn about Q Workwear in Kigali, Rwanda, co-founded by Quddus (Q) and Tinah. Discover our commitment to durable workwear, local craftsmanship, and reliable delivery.',
};

export default function AboutPage() {
  const { hero, story, founders, craftsmanship } = aboutPageContent;

  return (
    <div className="bg-[#12100E] min-h-screen text-stone-200 pb-20">
      
      {/* Tape Ruler Top Accent */}
      <div className="h-1.5 tape-ruler-amber opacity-90" />

      {/* Header */}
      <div className="bg-[#161412] border-b border-stone-800 pt-14 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono mb-3 border border-stone-700">
              <Scissors className="w-3.5 h-3.5 text-[#E0483A]" />
              <span>THE Q WORKWEAR STORY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Story Section with Craftsmanship Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block px-3 py-1 rounded bg-[#E0483A]/15 text-[#E0483A] text-xs font-mono font-bold">
              ATELIER ORIGIN & PURPOSE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              {story.title}
            </h2>

            <div className="space-y-4 text-base text-stone-300 font-light leading-relaxed">
              {story.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-xs font-mono text-amber-300/90 bg-amber-950/40 px-3.5 py-2 rounded-xl border border-amber-800/60 inline-block">
                Draft narrative for client review — awaiting final quotes from Quddus & Tinah.
              </span>
            </div>
          </div>

          {/* Real Atelier Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-[#1A1816] border border-stone-800 shadow-2xl">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/showcase/tailor-craftsmanship.webp"
                  alt="Tailor Craftsmanship at Q Workwear"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-transparent to-transparent" />
              </div>

              <div className="p-6 space-y-3 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono text-stone-400">
                  <span className="text-[#E0483A] font-bold">SPEC // KIGALI WORKSHOP</span>
                  <span>HAND-INSPECTED</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  Crafted on Rwandan Cutting Tables
                </h3>
                <p className="text-xs text-stone-400 font-light leading-relaxed">
                  Every uniform is cut, assembled, and pressed locally in Kigali, providing dependable quality control and quick re-orders as your team expands.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Profiles */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded bg-stone-800 text-stone-300 text-xs font-mono mb-2 border border-stone-700">
              FOUNDERSHIP & DIRECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {founders.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-400 font-light">
              {founders.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-[#1A1816] rounded-3xl p-7 sm:p-8 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden"
              >
                <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-70" />

                <div>
                  <div className="flex items-center gap-4 mb-5 pt-2">
                    <div className="w-14 h-14 rounded-2xl bg-[#E0483A]/20 text-[#E0483A] flex items-center justify-center font-bold text-2xl border border-[#E0483A]/40">
                      {leader.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-mono font-semibold text-[#E0483A]">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-stone-300 font-light leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-6 mt-8 border-t border-stone-800 flex items-center justify-between text-xs font-mono text-stone-500">
                  <span>Q WORKWEAR KIGALI</span>
                  <span className="text-[#E0483A] font-bold">CO-FOUNDER</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Craftsmanship Benchmarks */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded bg-stone-800 text-stone-300 text-xs font-mono mb-2 border border-stone-700">
              CRAFTSMANSHIP PRINCIPLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftsmanship.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-[#1A1816] border border-stone-800 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-xl bg-stone-800 text-stone-300 flex items-center justify-center text-xs font-mono font-bold mb-4 border border-stone-700">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTASection />
    </div>
  );
}
