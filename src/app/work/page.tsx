import React from 'react';
import { projects } from '@/content/projects';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Badge } from '@/components/common/Badge';
import { CTASection } from '@/components/home/CTASection';
import { Info, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Our Work & Completed Uniforms',
  description:
    'Explore completed workwear projects and uniform programs tailored in Kigali, Rwanda. Featuring bespoke attire for hospitality, corporate, and industrial teams.',
};

export default function OurWorkPage() {
  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Page Header */}
      <div className="bg-white border-b border-stone-200/80 pt-12 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" size="md" className="mb-3">
              Kigali Portfolio & Capabilities
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
              Our Completed Work & Uniform Programs
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              We design and construct durable, brand-aligned workwear for Rwanda’s premier hotels, corporate offices, and logistics operations. Review our capability case studies below.
            </p>
          </div>

          {/* Operational Transparency Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-amber-50/80 border border-amber-200/80 flex items-start gap-3 text-xs text-amber-900">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block mb-0.5 text-amber-950">
                Notice for Client Review:
              </span>
              <p className="leading-relaxed text-amber-800">
                The case studies displayed below illustrate how Q Workwear structures and presents finished uniform programs. In accordance with client privacy, real customer names and facility photos will be displayed only upon explicit authorization from Quddus and Tinah.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Portfolio List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8 sm:space-y-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Quality Standards Summary */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm">
          <div className="max-w-3xl space-y-4">
            <Badge variant="brand" size="sm">
              Rwandan Manufacturing Standards
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              Every Stitch Inspected Before Delivery
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              We do not mass-ship untested garments. Every single shirt, chef coat, and workwear overall is pressed, seam-checked, button-tested, and cross-checked against your approved staff size list before leaving our Kigali studio.
            </p>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-zinc-700">
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
