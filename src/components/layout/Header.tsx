"use client";

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { MobileNav } from '@/components/layout/MobileNav';
import { siteConfig } from '@/content/site';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);
  const pathname = usePathname().replace(/\/$/, '') || '/';

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="header-nav" aria-label="Main navigation">
            {siteConfig.navigation.filter((item) => item.href !== '/' && item.href !== '/contact').map((item) => (
              <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>
            ))}
          </nav>
          <div className="header-actions">
            <Link href="/contact" className="button button-primary header-quote">Request a quote</Link>
            <button className="menu-toggle" onClick={() => setIsOpen(true)} aria-label="Open navigation" aria-expanded={isOpen} aria-controls="mobile-navigation"><Menu aria-hidden="true" /></button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isOpen} onClose={close} />
    </>
  );
}
