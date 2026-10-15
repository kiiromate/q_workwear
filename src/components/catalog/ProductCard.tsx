import React from 'react';
import { Product } from '@/types';
import { PlaceholderImage } from '@/components/common/PlaceholderImage';
import { Badge } from '@/components/common/Badge';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Check, Info, Sparkles } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className = '' }: ProductCardProps) {
  const inquiryMessage = `Hello Q Workwear, I would like to request a quotation for custom "${product.title}" (${product.categoryName}). Could you please share fabric options, sizing details, and turnaround times?`;

  return (
    <article
      className={`group flex flex-col bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${className}`}
    >
      {/* Product Image / Placeholder */}
      <div className="relative p-3 bg-stone-50/50">
        <PlaceholderImage
          src={product.image}
          alt={product.title}
          categorySlug={product.categorySlug}
          title={product.title}
          aspectRatio="4/3"
        />

        {/* Top Floating Badges */}
        <div className="absolute top-5 left-5 right-5 flex items-center justify-between pointer-events-none">
          <Badge variant="brand" size="sm" className="shadow-xs bg-white/90 backdrop-blur-sm">
            {product.categoryName}
          </Badge>

          {product.isDraft && (
            <Badge variant="draft" size="sm" className="shadow-xs bg-amber-50/95 backdrop-blur-sm">
              Demo Concept
            </Badge>
          )}
        </div>
      </div>

      {/* Product Information */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg sm:text-xl font-bold text-zinc-900 group-hover:text-[#E0483A] transition-colors leading-snug">
              {product.title}
            </h3>
          </div>

          <p className="text-sm text-zinc-600 leading-relaxed mb-4">
            {product.summary}
          </p>

          {/* Key Garment Highlights */}
          <div className="space-y-2 mb-5">
            {product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                <Check className="w-4 h-4 text-[#E0483A] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* Recommended Best For */}
          <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 mb-5 text-xs text-zinc-600">
            <span className="font-semibold text-zinc-800 block mb-0.5">
              Ideal Application:
            </span>
            <p>{product.bestFor}</p>
          </div>
        </div>

        {/* Card Footer with MOQ & Quote Action */}
        <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="text-[11px] text-zinc-500 font-medium">
            <span>{product.moqNotice || 'MOQ: 15–20 pieces'}</span>
          </div>

          <WhatsAppButton
            message={inquiryMessage}
            label="Get Quotation"
            size="sm"
            className="w-full sm:w-auto"
          />
        </div>
      </div>
    </article>
  );
}
