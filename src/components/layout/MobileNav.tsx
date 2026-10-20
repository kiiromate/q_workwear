"use client";

import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { X, ArrowRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { getCategoriesForLocale } from '@/content/catalog';
import {
  getLocaleFromPathname,
  getSiteCopy,
  Locale,
  localizeHref,
  stripLocalePrefix,
} from '@/content/i18n';
import { buildLanguageSwitchHref } from './Header';

export function MobileNav({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  const rawPathname = usePathname() || '/';
  const locale = getLocaleFromPathname(rawPathname);
  const basePath = stripLocalePrefix(rawPathname);
  const copy = getSiteCopy(locale);
  const categories = getCategoriesForLocale(locale);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSearchString(window.location.search || '');
    }
  }, [rawPathname, isOpen]);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const media = window.matchMedia('(min-width: 1051px)');
    const onResize = () => {
      if (media.matches) onClose();
    };
    media.addEventListener('change', onResize);
    return () => {
      document.body.style.overflow = previous;
      media.removeEventListener('change', onResize);
    };
  }, [isOpen, onClose]);

  function handleLanguageSwitch(event: ReactMouseEvent<HTMLAnchorElement>, targetLocale: Locale) {
    onClose();
    if (typeof window === 'undefined') return;
    const liveSearch = window.location.search || '';
    if (liveSearch) {
      event.preventDefault();
      const targetUrl = buildLanguageSwitchHref(basePath, targetLocale, liveSearch);
      router.push(targetUrl);
    }
  }

  const enHref = buildLanguageSwitchHref(basePath, 'en', searchString);
  const frHref = buildLanguageSwitchHref(basePath, 'fr', searchString);

  return (
    <dialog
      ref={ref}
      id="mobile-navigation"
      className="mobile-menu"
      aria-label={copy.nav.mobileNavAria}
      onCancel={onClose}
      onClose={onClose}
    >
      <div className="container mobile-menu-top">
        <Logo locale={locale} onClick={onClose} />
        <button type="button" className="menu-toggle" onClick={onClose} aria-label={copy.nav.closeNavigation}>
          <X aria-hidden="true" />
        </button>
      </div>
      <nav className="container mobile-nav-body" aria-label={copy.nav.mobileNavAria}>
        <div className="mobile-nav-group">
          <Link
            href={localizeHref('/products', locale)}
            onClick={onClose}
            className="mobile-nav-link-main"
            aria-current={basePath === '/products' ? 'page' : undefined}
          >
            {copy.nav.collections}
          </Link>
          <div className="mobile-subnav-grid">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`${localizeHref('/products', locale)}?category=${cat.id}`}
                onClick={onClose}
                className="mobile-sublink"
              >
                <span className="mobile-sublink-title">{cat.name}</span>
                <span className="mobile-sublink-desc">{cat.tagline}</span>
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={localizeHref('/work', locale)}
          onClick={onClose}
          className="mobile-nav-link-main"
          aria-current={basePath === '/work' ? 'page' : undefined}
        >
          {copy.nav.lookbook}
        </Link>
        <Link
          href={localizeHref('/about', locale)}
          onClick={onClose}
          className="mobile-nav-link-main"
          aria-current={basePath === '/about' ? 'page' : undefined}
        >
          {copy.nav.about}
        </Link>
        <Link
          href={localizeHref('/contact', locale)}
          onClick={onClose}
          className="mobile-nav-link-main"
          aria-current={basePath === '/contact' ? 'page' : undefined}
        >
          {copy.nav.contact}
        </Link>
      </nav>
      <div className="container mobile-menu-bottom">
        <div className="mobile-lang-row" role="group" aria-label={copy.nav.languageSwitcherAria}>
          <Link
            href={enHref}
            lang="en"
            hrefLang="en"
            className={`lang-switch-link ${locale === 'en' ? 'lang-switch-active' : ''}`}
            aria-current={locale === 'en' ? 'true' : undefined}
            aria-label={copy.nav.switchToEnglishAria}
            onClick={(e) => handleLanguageSwitch(e, 'en')}
          >
            English (EN)
          </Link>
          <Link
            href={frHref}
            lang="fr"
            hrefLang="fr"
            className={`lang-switch-link ${locale === 'fr' ? 'lang-switch-active' : ''}`}
            aria-current={locale === 'fr' ? 'true' : undefined}
            aria-label={copy.nav.switchToFrenchAria}
            onClick={(e) => handleLanguageSwitch(e, 'fr')}
          >
            Français (FR)
          </Link>
        </div>
        <Link
          href={localizeHref('/contact', locale)}
          className="button button-primary mobile-quote-btn"
          onClick={onClose}
        >
          <span>{copy.nav.requestQuote}</span>
          <ArrowRight aria-hidden="true" size={18} />
        </Link>
      </div>
    </dialog>
  );
}

