import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Scissors, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { siteConfig } from '@/content/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-50 via-white to-stone-50/50 pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-stone-200/70">
      {/* Decorative background grid and soft glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#E0483A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            <div className="inline-flex items-center gap-2">
              <Badge variant="brand" size="md">
                <MapPin className="w-3.5 h-3.5 text-[#E0483A]" />
                Kigali, Rwanda • Custom Tailoring & Workwear
              </Badge>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1]">
              Custom Workwear & Uniforms Tailored for{' '}
              <span className="text-[#E0483A] inline-block">
                Professional Teams
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 leading-relaxed max-w-2xl">
              We design, cut, stitch, and brand durable workwear for corporate institutions, luxury hospitality venues, and industrial crews across Kigali. Built with reinforced seams, breathable fabrics, and exact logo embroidery.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/products"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
              >
                Browse Product Catalogue
              </Button>

              <WhatsAppButton
                size="lg"
                label="Request Quote on WhatsApp"
              />
            </div>

            {/* Trust Anchors */}
            <div className="pt-6 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-medium text-zinc-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>On-Site Kigali Sizing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>High-Density Embroidery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>Direct Founder Service</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Showcase Preview Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-2xl space-y-6">
              {/* Card Header with Brand Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E0483A] text-white flex items-center justify-center font-black text-xl shadow-sm">
                    Q
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-900 leading-none">
                      Q Workwear Studio
                    </h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      Kigali Workshop Showcase
                    </p>
                  </div>
                </div>
                <Badge variant="success" size="sm">
                  Active Production
                </Badge>
              </div>

              {/* Showcase Highlight Box */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#E0483A] to-[#B32D20] p-6 text-white shadow-md">
                <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-15">
                  <Scissors className="w-36 h-36" />
                </div>
                <span className="text-[11px] font-bold tracking-widest uppercase text-white/80 block mb-1">
                  Bespoke Capability
                </span>
                <h4 className="text-xl sm:text-2xl font-black mb-2">
                  Tailored to Your Exact Brand Standards
                </h4>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                  From heavy industrial cotton drill to breathable hospitality mesh and crisp Oxford suiting.
                </p>
                <div className="flex items-center gap-2 text-xs font-semibold bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-lg w-fit">
                  <span>Founders Quddus & Tinah</span>
                </div>
              </div>

              {/* 3 Quick Preview Pills */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs">
                  <span className="font-semibold text-zinc-800">
                    Corporate & Banking Attire
                  </span>
                  <span className="text-zinc-500">Oxford Twill • Wrinkle-Free</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs">
                  <span className="font-semibold text-zinc-800">
                    Hospitality & Chef Wear
                  </span>
                  <span className="text-zinc-500">Cool-Vent Back • Canvas Aprons</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-stone-50 border border-stone-200/70 text-xs">
                  <span className="font-semibold text-zinc-800">
                    Industrial PPE & Overalls
                  </span>
                  <span className="text-zinc-500">Triple-Stitched • High-Vis Tape</span>
                </div>
              </div>

              <div className="pt-2 text-center">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#E0483A] hover:underline"
                >
                  Explore all 16 workwear demo styles →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
