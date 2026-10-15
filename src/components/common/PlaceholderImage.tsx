import React from 'react';
import Image from 'next/image';
import { Shirt, UtensilsCrossed, HardHat, Sparkles, Scissors, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { CategorySlug } from '@/types';

interface PlaceholderImageProps {
  src?: string;
  alt: string;
  categorySlug?: CategorySlug | string;
  title?: string;
  aspectRatio?: '4/3' | '16/9' | 'square' | 'hero';
  className?: string;
  showBadge?: boolean;
}

export function PlaceholderImage({
  src,
  alt,
  categorySlug,
  title,
  aspectRatio = '4/3',
  className,
  showBadge = true,
}: PlaceholderImageProps) {
  const ratioClasses = {
    '4/3': 'aspect-[4/3]',
    '16/9': 'aspect-[16/9]',
    square: 'aspect-square',
    hero: 'aspect-[16/10] sm:aspect-[2/1]',
  };

  // If a real photo is supplied and exists, render the image
  if (src && !src.includes('placeholder')) {
    return (
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-2xl bg-stone-100',
          ratioClasses[aspectRatio],
          className
        )}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    );
  }

  // Category-specific visual icon & color styling
  const getCategoryTheme = (slug?: string) => {
    switch (slug) {
      case 'corporate':
        return {
          icon: Briefcase,
          accent: 'text-zinc-700 bg-zinc-200/70 border-zinc-300',
          bgGradient: 'from-stone-100 via-stone-150 to-zinc-200',
          label: 'Corporate Office Uniform',
        };
      case 'hospitality':
        return {
          icon: UtensilsCrossed,
          accent: 'text-amber-800 bg-amber-100/70 border-amber-200',
          bgGradient: 'from-stone-100 via-amber-50 to-orange-100/50',
          label: 'Hospitality & Culinary Attire',
        };
      case 'industrial':
        return {
          icon: HardHat,
          accent: 'text-stone-800 bg-stone-200/80 border-stone-300',
          bgGradient: 'from-stone-200 via-zinc-200 to-stone-300',
          label: 'Heavy-Duty Workwear & PPE',
        };
      case 'branded':
        return {
          icon: Sparkles,
          accent: 'text-[#E0483A] bg-[#FDF2F0] border-[#F9D7D3]',
          bgGradient: 'from-stone-100 via-red-50/40 to-stone-200',
          label: 'Custom Branded Apparel',
        };
      default:
        return {
          icon: Scissors,
          accent: 'text-zinc-700 bg-stone-200 border-stone-300',
          bgGradient: 'from-stone-100 to-stone-200',
          label: 'Q Workwear Kigali',
        };
    }
  };

  const theme = getCategoryTheme(categorySlug);
  const IconComponent = theme.icon;

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-2xl bg-gradient-to-br flex flex-col items-center justify-center p-6 text-center select-none border border-stone-200/80 shadow-inner group',
        theme.bgGradient,
        ratioClasses[aspectRatio],
        className
      )}
    >
      {/* Subtle Tailoring Twill / Stitching Grid Pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.18] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M0 24 L24 0 M-6 18 L18 -6 M6 30 L30 6"
          stroke="#18181B"
          strokeWidth="1.2"
          strokeDasharray="2 2"
        />
      </svg>

      {/* Center Icon & Garment Context */}
      <div className="relative z-10 flex flex-col items-center max-w-[85%]">
        <div
          className={cn(
            'w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border shadow-sm mb-3 transition-transform duration-300 group-hover:scale-110',
            theme.accent
          )}
        >
          <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
        </div>

        {title && (
          <h4 className="text-sm sm:text-base font-bold text-zinc-800 line-clamp-1 mb-1">
            {title}
          </h4>
        )}

        <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider">
          {theme.label}
        </span>
      </div>

      {/* Floating Status Pill */}
      {showBadge && (
        <div className="absolute bottom-3 right-3 z-10">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold text-zinc-600 bg-white/90 backdrop-blur-sm border border-stone-200/90 rounded-full shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
            Photo Pending
          </span>
        </div>
      )}
    </div>
  );
}
