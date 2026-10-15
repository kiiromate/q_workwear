'use client';

import React, { useEffect } from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { X, MapPin, ArrowRight } from 'lucide-react';
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
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#161412] text-stone-200 shadow-2xl flex flex-col justify-between overflow-y-auto animate-slide-left border-l border-stone-800"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-5 border-b border-stone-800">
          <Logo href="/" theme="dark" onClick={onClose} />
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 rounded-xl text-stone-400 hover:text-white hover:bg-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A]"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="px-5 py-6 space-y-2 flex-1">
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
                    ? 'bg-stone-800 text-white'
                    : 'text-stone-300 hover:bg-stone-850 hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#E0483A] translate-x-0.5' : 'text-stone-500'
                  }`}
                />
              </NextLink>
            );
          })}

          <div className="pt-6 pb-2">
            <div className="p-4 bg-stone-900/80 rounded-2xl border border-stone-800">
              <span className="text-[10px] font-mono font-bold text-[#E0483A] uppercase tracking-wider block mb-1">
                Kigali Tailoring Studio
              </span>
              <p className="text-xs text-stone-300 flex items-center gap-1.5 mb-2">
                <MapPin className="w-3.5 h-3.5 text-[#E0483A] shrink-0" />
                In-person fittings across Kigali by appointment
              </p>
              <span className="text-[11px] font-mono text-stone-500 block">
                Founders Quddus & Tinah
              </span>
            </div>
          </div>
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-5 border-t border-stone-800 bg-stone-950/80 space-y-3">
          <WhatsAppButton
            className="w-full justify-center"
            label="Request Quote on WhatsApp"
            size="lg"
          />
          <Button
            variant="outline"
            size="md"
            href="/contact"
            className="w-full justify-center bg-stone-900 text-stone-300 border-stone-700 hover:text-white"
          >
            Contact & Fittings
          </Button>
        </div>
      </div>
    </div>
  );
}
