"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { categories } from '@/content/catalog';

export function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const pathname = usePathname().replace(/\/$/, '') || '/';

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const media = window.matchMedia('(min-width: 1051px)');
    const onResize = () => { if (media.matches) onClose(); };
    media.addEventListener('change', onResize);
    return () => { document.body.style.overflow = previous; media.removeEventListener('change', onResize); };
  }, [isOpen, onClose]);

  return (
    <dialog ref={ref} id="mobile-navigation" className="mobile-menu" aria-label="Navigation" onCancel={onClose} onClose={onClose}>
      <div className="container mobile-menu-top">
        <Logo onClick={onClose} />
        <button type="button" className="menu-toggle" onClick={onClose} aria-label="Close navigation"><X aria-hidden="true" /></button>
      </div>
      <nav className="container mobile-nav-body" aria-label="Mobile navigation">
        <div className="mobile-nav-group">
          <Link href="/products" onClick={onClose} className="mobile-nav-link-main" aria-current={pathname === '/products' ? 'page' : undefined}>
            Collections
          </Link>
          <div className="mobile-subnav-grid">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/products?category=${cat.id}`}
                onClick={onClose}
                className="mobile-sublink"
              >
                <span className="mobile-sublink-title">{cat.name}</span>
                <span className="mobile-sublink-desc">{cat.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/work" onClick={onClose} className="mobile-nav-link-main" aria-current={pathname === '/work' ? 'page' : undefined}>
          Lookbook
        </Link>
        <Link href="/about" onClick={onClose} className="mobile-nav-link-main" aria-current={pathname === '/about' ? 'page' : undefined}>
          About
        </Link>
        <Link href="/contact" onClick={onClose} className="mobile-nav-link-main" aria-current={pathname === '/contact' ? 'page' : undefined}>
          Contact
        </Link>
      </nav>
      <div className="container mobile-menu-bottom">
        <Link href="/contact" className="button button-primary mobile-quote-btn" onClick={onClose}>
          <span>Request a quote</span>
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </dialog>
  );
}
