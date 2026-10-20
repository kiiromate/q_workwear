"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/common/Logo';
import { siteConfig } from '@/content/site';
import { getLocaleFromPathname, getSiteCopy, localizeHref } from '@/content/i18n';

export function Footer() {
  const pathname = usePathname() || '/';
  const locale = getLocaleFromPathname(pathname);
  const copy = getSiteCopy(locale);

  const navItems = [
    { label: copy.nav.collections, href: localizeHref('/products', locale) },
    { label: copy.nav.lookbook, href: localizeHref('/work', locale) },
    { label: copy.nav.about, href: localizeHref('/about', locale) },
    { label: copy.nav.contact, href: localizeHref('/contact', locale) },
  ];

  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <div>
          <Logo locale={locale} />
          <p>{copy.footer.tagline}</p>
        </div>
        <nav aria-label={copy.nav.footerNavAria} className="footer-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Q Workwear</p>
        <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
      </div>
    </footer>
  );
}

