import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  variant?: 'brand' | 'neutral' | 'draft' | 'success' | 'dark';
  size?: 'sm' | 'md';
  className?: string;
  children: React.ReactNode;
}

export function Badge({
  variant = 'neutral',
  size = 'md',
  className,
  children,
}: BadgeProps) {
  const base =
    'inline-flex items-center font-medium rounded-full tracking-wide select-none';

  const variants = {
    brand: 'bg-[#FDF2F0] text-[#E0483A] border border-[#F9D7D3]',
    neutral: 'bg-stone-100 text-stone-700 border border-stone-200',
    draft: 'bg-amber-50 text-amber-800 border border-amber-200',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    dark: 'bg-zinc-900 text-zinc-100 border border-zinc-800',
  };

  const sizes = {
    sm: 'text-[11px] px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5',
  };

  return (
    <span className={cn(base, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
