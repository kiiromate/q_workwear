import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { categories } from '@/content/catalog';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { ArrowRight, Scissors } from 'lucide-react';

export function CategoryShowcase() {
  return (
    <section className="py-20 sm:py-28 bg-[#141210] text-white border-y border-stone-800 relative overflow-hidden">
      {/* Subtle Tailor Cutting Mat Grid Background */}
      <div className="absolute inset-0 cutting-table-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0483A]/15 text-[#E0483A] text-xs font-mono mb-3 border border-[#E0483A]/30">
              <Scissors className="w-3.5 h-3.5" />
              <span>COLLECTIONS & SECTOR WORKWEAR</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our Product Range
            </h2>
            <p className="mt-3 text-base sm:text-lg text-stone-400 font-light leading-relaxed">
              Tailored uniform suites engineered for Rwanda&rsquo;s leading hospitality brands, financial institutions, construction contractors, and enterprise fleets.
            </p>
          </div>

          <Button
            variant="outline"
            size="md"
            href="/products"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
            className="self-start md:self-end bg-stone-900 text-stone-200 border-stone-700 hover:bg-stone-800 hover:text-white"
          >
            Full Catalogue (16 Styles)
          </Button>
        </div>

        {/* 4 Cinematic Showroom Category Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {categories.map((category, idx) => (
            <article
              key={category.id}
              className="group relative rounded-3xl overflow-hidden bg-[#1A1816] border border-stone-800 shadow-2xl transition-all duration-500 hover:border-stone-600 flex flex-col justify-end min-h-[440px] sm:min-h-[480px]"
            >
              {/* Background Fabric & Tailoring Image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Deep atmospheric gradient for text clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0B0A] via-[#0C0B0A]/75 to-transparent" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              {/* Tape measure top accent on card */}
              <div className="absolute top-0 left-0 right-0 h-1 tape-ruler-dark opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Top Floating Lot Tag & Fabric Spec */}
              <div className="absolute top-5 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider bg-black/80 backdrop-blur-md text-stone-300 border border-white/10 rounded-md">
                  SERIES 0{idx + 1} // {category.id.toUpperCase()}
                </span>

                <span className="px-3 py-1 text-[10px] font-mono font-semibold bg-[#E0483A]/90 backdrop-blur-md text-white rounded-md shadow-xs">
                  {category.garmentCountEstimate}
                </span>
              </div>

              {/* Content Panel Overlaid at Bottom */}
              <div className="relative z-10 p-6 sm:p-8 space-y-4">
                
                {/* Fabric Badge */}
                <span className="inline-block px-2.5 py-1 text-[11px] font-mono text-[#E0483A] bg-[#E0483A]/10 border border-[#E0483A]/30 rounded">
                  {category.fabricBadge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#E0483A] transition-colors">
                  {category.name}
                </h3>

                <p className="text-sm text-stone-300 font-light leading-relaxed line-clamp-2">
                  {category.description}
                </p>

                {/* Direct Action Link */}
                <div className="pt-2 flex items-center justify-between border-t border-stone-800">
                  <Link
                    href={`/products?category=${category.id}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#E0483A] transition-colors"
                  >
                    <span>Inspect Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </Link>

                  <span className="text-xs font-mono text-stone-500">
                    Kigali Bespoke
                  </span>
                </div>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
