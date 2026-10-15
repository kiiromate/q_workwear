import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { Badge } from '@/components/common/Badge';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Check, Scissors, Ruler, Layers } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const inquiryMessage = `Hello Q Workwear, I would like to request a quotation for custom "${product.title}" (${product.categoryName}). Could you please share fabric swatches, sizing options, and production turnaround?`;

  // Fallback to high-resolution category showcase image if product image is not specified
  const getProductImage = () => {
    if (product.image) return product.image;
    switch (product.categorySlug) {
      case 'corporate':
        return '/images/showcase/cat-corporate-suiting.webp';
      case 'hospitality':
        return '/images/showcase/cat-hospitality-culinary.webp';
      case 'industrial':
        return '/images/showcase/cat-industrial-safety.webp';
      case 'branded':
        return '/images/showcase/cat-branded-apparel.webp';
      default:
        return '/images/showcase/hero-atelier-table.webp';
    }
  };

  const imageSrc = getProductImage();

  return (
    <article
      className={`group flex flex-col bg-[#1C1A18] text-stone-200 rounded-3xl border border-stone-800 shadow-xl hover:border-stone-600 transition-all duration-300 overflow-hidden relative ${className}`}
    >
      {/* Top Tape Measure Accent Line on Card */}
      <div className="h-1 tape-ruler-amber opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Visual Image Preview with Tailor Spec Overlay */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
        <Image
          src={imageSrc}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90"
        />
        {/* Soft shadow gradient over image bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1A18] via-transparent to-black/30" />

        {/* Floating Lot Tag */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase bg-black/80 backdrop-blur-md text-stone-200 rounded border border-white/10">
            {product.categoryName}
          </span>
        </div>

        {/* Fabric Weight Badge */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono text-[#E0483A] bg-black/80 backdrop-blur-md rounded border border-[#E0483A]/30">
            {product.fabricOptions[0]}
          </span>
        </div>
      </div>

      {/* Garment Spec Content */}
      <div className="flex-1 p-6 flex flex-col justify-between space-y-5">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#E0483A] transition-colors leading-snug mb-2">
            {product.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-4">
            {product.summary}
          </p>

          {/* Garment Construction Highlights */}
          <div className="space-y-2 mb-5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                <span className="text-[#E0483A] font-bold mt-0.5 font-mono">▸</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Ideal Deployment Sector */}
          <div className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 text-[11px] text-stone-400">
            <span className="font-mono text-stone-300 block mb-0.5 uppercase tracking-wider text-[10px]">
              Ideal Application:
            </span>
            <p>{product.bestFor}</p>
          </div>
        </div>

        {/* Bottom Card Footer with MOQ & Quote Action */}
        <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-[11px] font-mono text-stone-400">
            <span>{product.moqNotice || 'MOQ: 15–20 pieces'}</span>
          </div>

          <WhatsAppButton
            message={inquiryMessage}
            label="Request Quote"
            size="sm"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </article>
  );
}
