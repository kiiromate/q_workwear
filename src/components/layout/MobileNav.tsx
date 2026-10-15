"use client";

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { siteConfig } from '@/content/site';

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
      <nav className="container" aria-label="Mobile navigation">
        {siteConfig.navigation.map((item) => <Link key={item.href} href={item.href} onClick={onClose} aria-current={pathname === item.href ? 'page' : undefined}>{item.label}</Link>)}
      </nav>
      <div className="container mobile-menu-bottom"><Link href="/contact" className="button button-primary" onClick={onClose}>Request a quote</Link></div>
    </dialog>
  );
}
