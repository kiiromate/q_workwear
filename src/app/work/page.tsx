import React from 'react';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { CTASection } from '@/components/home/CTASection';
import { Scissors, CheckCircle2, Ruler } from 'lucide-react';

export const metadata = {
  title: 'Our Work & Completed Uniforms',
  description:
    'Explore completed workwear projects and uniform programs tailored in Kigali, Rwanda. Featuring bespoke attire for hospitality, corporate, and industrial teams.',
};

function OurWorkPageInner() {
  return (
    <div className="bg-[#12100E] min-h-screen text-stone-200 pb-20">
      
      {/* Tape Ruler Top Accent */}
      <div className="h-1.5 tape-ruler-amber opacity-90" />

      {/* Page Header */}
      <div className="bg-[#161412] border-b border-stone-800 pt-14 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono mb-3 border border-stone-700">
              <Scissors className="w-3.5 h-3.5 text-[#E0483A]" />
              <span>KIGALI COMMISSION ARCHIVE</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Our Completed Work & Uniform Programs
            </h1>
            <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
              We design and construct durable, brand-aligned workwear for Rwanda’s premier hotels, corporate offices, and logistics operations. Review our capability case studies below.
            </p>
          </div>

          {/* Operational Transparency Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-950/40 border border-amber-800/60 flex items-start gap-3 text-xs text-amber-200">
            <Ruler className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-mono font-bold block mb-0.5 uppercase tracking-wider text-amber-300">
                Notice for Client Review:
              </span>
              <p className="leading-relaxed text-amber-200/90 font-light">
                The case studies displayed below illustrate how Q Workwear structures and presents finished uniform programs. In accordance with client privacy, real customer names and facility photos will be displayed only upon explicit authorization from Quddus and Tinah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Portfolio List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-10 sm:space-y-12">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Quality Standards Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-[#1A1816] rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-80" />

          <div className="max-w-3xl space-y-4 pt-2">
            <span className="inline-block px-3 py-1 rounded bg-[#E0483A]/15 text-[#E0483A] text-xs font-mono font-bold">
              RWANDAN MANUFACTURING BENCHMARK
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Every Stitch Inspected on Our Cutting Tables
            </h2>
            <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
              We do not mass-ship untested garments. Every single shirt, chef coat, and workwear overall is pressed, seam-checked, button-tested, and cross-checked against your approved staff size list before leaving our Kigali studio.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0483A]" />
                <span>Double-inspected stress points</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0483A]" />
                <span>Shrinkage-tested fabric rolls</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0483A]" />
                <span>Archived digital embroidery files</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0483A]" />
                <span>Replacement guarantee on defectives</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}

export default function OurWorkPage() {
  return <OurWorkPageInner />;
}
