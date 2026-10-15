import React from 'react';
import Image from 'next/image';
import { Product } from '@/types';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const inquiryMessage = `Hello Q Workwear, I would like to request a quotation for custom "${product.title}" (${product.categoryName}). Could you please share fabric swatches, sizing options, and production turnaround?`;

  const getProductImage = () => {
    if (product.image) return product.image;
    switch (product.categorySlug) {
      case 'corporate':
        return '/images/lookbook/lookbook-corporate.webp';
      case 'hospitality':
        return product.id.includes('apron')
          ? '/images/lookbook/lookbook-apron.webp'
          : '/images/lookbook/lookbook-chef.webp';
      case 'industrial':
        return '/images/lookbook/lookbook-industrial.webp';
      case 'branded':
        return '/images/showcase/cat-branded-apparel.webp';
      default:
        return '/images/showcase/cat-corporate-suiting.webp';
    }
  };

  const imageSrc = getProductImage();

  return (
    <article
      className={`group flex flex-col bg-[#1A1816] text-stone-200 rounded-3xl border border-stone-800 shadow-xl hover:border-stone-600 transition-all duration-300 overflow-hidden relative ${className}`}
    >
      {/* Top Tape Ruler Accent */}
      <div className="h-1 tape-ruler-amber opacity-80 group-hover:opacity-100 transition-opacity" />

      {/* Visual Image Preview */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-stone-900">
        <Image
          src={imageSrc}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1816] via-transparent to-black/20" />

        {/* Floating Category Tag */}
        <div className="absolute top-4 left-4 z-10">
          <span className="px-3 py-1 text-[10px] font-mono font-bold uppercase bg-black/80 backdrop-blur-md text-stone-200 rounded border border-white/10">
            {product.categoryName}
          </span>
        </div>

        {/* Fabric Spec Tag */}
        <div className="absolute bottom-3 left-4 right-4 z-10">
          <span className="inline-block px-2.5 py-0.5 text-[10px] font-mono text-[#E0483A] bg-black/85 backdrop-blur-md rounded border border-[#E0483A]/30">
            {product.fabricOptions[0]}
          </span>
        </div>
      </div>

      {/* Lookbook Content */}
      <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-[#E0483A] transition-colors leading-snug mb-2">
            {product.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
            {product.summary}
          </p>
        </div>

        {/* Action Button & MOQ */}
        <div className="pt-4 border-t border-stone-850 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <span className="text-[11px] font-mono text-stone-400">
            {product.moqNotice || 'MOQ: 15–20 pieces'}
          </span>

          <WhatsAppButton
            message={inquiryMessage}
            label="Request Quote"
            size="sm"
            className="w-full sm:w-auto font-bold"
          />
        </div>
      </div>
    </article>
  );
}
