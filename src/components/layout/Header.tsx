'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, MessageSquareQuote } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/common/Button';
import { MobileNav } from '@/components/layout/MobileNav';
import { siteConfig } from '@/content/site';

export function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <div className="flex items-center gap-8">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1.5"
              aria-label="Main navigation"
            >
              {siteConfig.navigation.map((item) => {
                const isActive =
                  item.href === '/'
                    ? pathname === '/'
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-150 ${
                      isActive
                        ? 'text-[#E0483A] bg-[#FDF2F0]'
                        : 'text-zinc-700 hover:text-zinc-950 hover:bg-stone-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#E0483A] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2.5">
                <Button
                  variant="primary"
                  size="md"
                  href="/contact"
                  icon={<MessageSquareQuote className="w-4 h-4" />}
                >
                  Request a Quote
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setIsMobileNavOpen(true)}
                className="lg:hidden p-2.5 rounded-xl text-zinc-700 hover:text-zinc-950 hover:bg-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A]"
                aria-expanded={isMobileNavOpen}
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Responsive Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
}
