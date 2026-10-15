import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Scissors, Ruler, ShieldCheck, Sparkles, MapPin, Check } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { siteConfig } from '@/content/site';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#12100E] text-white pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-stone-800">
      {/* Cinematic Workshop Cutting Table Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/showcase/hero-atelier-table.webp"
          alt="Q Workwear Atelier Cutting Table"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-40 mix-blend-luminosity scale-105 transition-transform duration-1000"
        />
        {/* Deep atmospheric gradients for text legibility and cinematic mood */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A] via-[#12100E]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-transparent to-[#0C0B0A]/70" />
      </div>

      {/* Tailor's Tape Measure Ruler Accent Stripe across top of hero */}
      <div className="absolute top-0 left-0 right-0 h-2 tape-ruler-amber z-10 opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & Conversion Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Atelier Identity Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-stone-200">
              <span className="w-2 h-2 rounded-full bg-[#E0483A] animate-pulse" />
              <span className="font-mono tracking-wider uppercase text-[11px]">
                Q WORKWEAR ATELIER • KIGALI, RWANDA
              </span>
            </div>

            {/* Cinematic Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Custom Workwear & Uniforms{' '}
              <span className="text-[#E0483A] block sm:inline">
                Tailored for Kigali&rsquo;s Teams
              </span>
            </h1>

            {/* Body Description */}
            <p className="text-lg sm:text-xl text-stone-300 leading-relaxed max-w-2xl font-light">
              We design, cut, stitch, and brand bespoke uniforms on Rwandan cutting tables. Built with industrial-grade twill, breathable culinary mesh, executive suiting drape, and precision logo embroidery.
            </p>

            {/* Primary & Secondary Conversion Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Button
                variant="primary"
                size="lg"
                href="/products"
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                className="shadow-xl shadow-red-950/40"
              >
                Explore Workwear Collections
              </Button>

              <WhatsAppButton
                size="lg"
                label="Request Quote on WhatsApp"
              />
            </div>

            {/* Tactile Workshop Guarantees */}
            <div className="pt-8 border-t border-stone-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono text-stone-300">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-[#E0483A]/20 text-[#E0483A] flex items-center justify-center font-bold text-[10px]">
                  01
                </span>
                <span>On-Site Kigali Sizing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-[#E0483A]/20 text-[#E0483A] flex items-center justify-center font-bold text-[10px]">
                  02
                </span>
                <span>Triple-Stitched Seams</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-md bg-[#E0483A]/20 text-[#E0483A] flex items-center justify-center font-bold text-[10px]">
                  03
                </span>
                <span>Direct Founder Care</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Tailor's Spec Sheet & Swatch Board */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none bg-[#1A1816]/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-stone-700/80 shadow-2xl space-y-6 text-stone-200">
              
              {/* Top Woven Spec Label Header */}
              <div className="flex items-center justify-between pb-4 border-b border-stone-800">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E0483A] text-white flex items-center justify-center font-black text-xl shadow-md">
                    Q
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#E0483A] uppercase block">
                      SPECIFICATION LOT // 2026-RW
                    </span>
                    <h3 className="text-base font-bold text-white leading-none mt-0.5">
                      Q Workwear Tailoring Studio
                    </h3>
                  </div>
                </div>

                <span className="px-2.5 py-1 text-[10px] font-mono bg-stone-800 text-stone-300 rounded border border-stone-700">
                  KIGALI, RW
                </span>
              </div>

              {/* Swatch & Garment Feature Highlight Box */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#24201D] to-[#141210] p-5 border border-stone-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-400">
                    Active Workshop Capabilities
                  </span>
                  <span className="text-[10px] font-mono text-[#E0483A] font-bold">
                    FOUNDERS: Q & TINAH
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                    <span className="text-[10px] text-stone-500 block uppercase font-mono">Heavy Twill</span>
                    <strong className="text-stone-200">300 GSM Cotton</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                    <span className="text-[10px] text-stone-500 block uppercase font-mono">Embroidery</span>
                    <strong className="text-stone-200">12,000 Stitches</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                    <span className="text-[10px] text-stone-500 block uppercase font-mono">Culinary Canvas</span>
                    <strong className="text-stone-200">12oz Duck Canvas</strong>
                  </div>
                  <div className="p-3 rounded-xl bg-stone-900/80 border border-stone-800">
                    <span className="text-[10px] text-stone-500 block uppercase font-mono">Executive Suiting</span>
                    <strong className="text-stone-200">Poly-Wool Blend</strong>
                  </div>
                </div>
              </div>

              {/* Garment Preview Spec List */}
              <div className="space-y-2">
                <Link
                  href="/products?category=corporate"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#E0483A]" />
                    <span className="text-xs font-semibold text-stone-200 group-hover:text-white">
                      Corporate Suiting & Oxford Shirts
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 group-hover:text-stone-300">
                    View Range →
                  </span>
                </Link>

                <Link
                  href="/products?category=hospitality"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-xs font-semibold text-stone-200 group-hover:text-white">
                      Chef Double-Breasted & Canvas Aprons
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 group-hover:text-stone-300">
                    View Range →
                  </span>
                </Link>

                <Link
                  href="/products?category=industrial"
                  className="flex items-center justify-between p-3 rounded-xl bg-stone-900/60 hover:bg-stone-800/80 border border-stone-800 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs font-semibold text-stone-200 group-hover:text-white">
                      Heavy-Duty Overalls & High-Vis Vests
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-stone-500 group-hover:text-stone-300">
                    View Range →
                  </span>
                </Link>
              </div>

              {/* Card Footer with Tape Measure Edge */}
              <div className="pt-2 text-center border-t border-stone-800/80 relative">
                <div className="h-1.5 tape-ruler-amber rounded-full mb-3 opacity-90" />
                <span className="text-xs text-stone-400 font-mono">
                  All garments measured, assembled, and fitted in Kigali.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
