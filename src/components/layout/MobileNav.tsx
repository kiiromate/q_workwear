'use client';

import React, { useEffect } from 'react';
import Link from 'next/navigation';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { X, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/common/Button';
import { siteConfig } from '@/content/site';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-zinc-950/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-left border-l border-stone-200"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-100">
          <Logo href="/" onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-xl text-zinc-600 hover:text-zinc-900 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A]"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-5 py-6 space-y-1.5 flex-1">
          {siteConfig.navigation.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href);

            return (
              <NextLink
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-base font-semibold transition-colors ${
                  isActive
                    ? 'bg-[#FDF2F0] text-[#E0483A]'
                    : 'text-zinc-800 hover:bg-stone-50 hover:text-zinc-900'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#E0483A] translate-x-0.5' : 'text-zinc-400'
                  }`}
                />
              </NextLink>
            );
          })}

          <div className="pt-6 pb-2">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80">
              <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-1">
                Kigali Tailoring Studio
              </span>
              <p className="text-xs text-zinc-600 flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#E0483A] shrink-0" />
                In-person fittings available across Kigali
              </p>
              <span className="text-[11px] text-zinc-500 block">
                Managed by Quddus & Tinah
              </span>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-stone-100 bg-stone-50/50 space-y-2.5">
          <WhatsAppButton
            className="w-full justify-center"
            label="Request Quote on WhatsApp"
            size="lg"
          />
          <Button
            variant="outline"
            size="md"
            href="/contact"
            className="w-full justify-center"
          >
            Contact & Fittings
          </Button>
        </div>
      </div>
    </div>
  );
}
