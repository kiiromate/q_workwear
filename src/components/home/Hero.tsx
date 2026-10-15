import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0C0B0A] text-white pt-16 pb-24 lg:pt-24 lg:pb-32 border-b border-stone-850">
      {/* Full-Bleed Cinematic Tailor Cutting Table Backdrop */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/showcase/hero-atelier-table.webp"
          alt="Q Workwear Atelier Kigali"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45 mix-blend-luminosity scale-105"
        />
        {/* Soft atmospheric gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0C0B0A] via-[#0C0B0A]/70 to-transparent" />
      </div>

      {/* Tailor's Tape Measure Ruler Accent Stripe */}
      <div className="absolute top-0 left-0 right-0 h-1.5 tape-ruler-amber z-10 opacity-90" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-7">
          
          {/* Atelier Origin Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs text-stone-300">
            <span className="w-2 h-2 rounded-full bg-[#E0483A] animate-pulse" />
            <span className="font-mono tracking-wider uppercase text-[11px]">
              KIGALI ATELIER • CRAFTED BY QUDDUS & TINAH
            </span>
          </div>

          {/* Human Headline: Pathos & Ethos */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            The Dignity of{' '}
            <span className="text-[#E0483A] block sm:inline">
              the Uniform.
            </span>
          </h1>

          {/* Punchy, Non-Verbose Subtitle */}
          <p className="text-lg sm:text-2xl text-stone-300 font-light leading-relaxed max-w-2xl">
            Bespoke workwear tailored on Rwandan cutting tables. Built for corporate teams, hotel brigades, and industrial crews who take pride in their craft.
          </p>

          {/* Solid, Unmissable Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
            <WhatsAppButton
              size="lg"
              label="Talk to Q & Tinah on WhatsApp"
              className="text-base font-bold shadow-xl shadow-red-950/40"
            />

            <Button
              variant="outline"
              size="lg"
              href="/products"
              icon={<ArrowRight className="w-5 h-5" />}
              iconPosition="right"
              className="bg-white/10 text-white hover:bg-white/20 border-white/20 backdrop-blur-sm"
            >
              View the Lookbook
            </Button>
          </div>

          {/* Quick Human Anchors */}
          <div className="pt-8 border-t border-stone-800/80 flex flex-wrap gap-6 sm:gap-10 text-xs font-mono text-stone-400">
            <div>
              <span className="text-white font-bold block text-sm">On-Site Kigali Sizing</span>
              <span>Individual fit for every staff member</span>
            </div>
            <div>
              <span className="text-white font-bold block text-sm">Pre-Shrunk Fabrics</span>
              <span>Built to survive daily commercial laundry</span>
            </div>
            <div>
              <span className="text-white font-bold block text-sm">Direct Re-Orders</span>
              <span>Fast top-ups when your workforce grows</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
