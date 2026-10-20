"use client";

import { MouseEvent as ReactMouseEvent, useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { MobileNav } from '@/components/layout/MobileNav';
import { getCategoriesForLocale, translateGarmentLabel } from '@/content/catalog';
import {
  getLocaleFromPathname,
  getSiteCopy,
  Locale,
  localizeHref,
  stripLocalePrefix,
} from '@/content/i18n';

export function buildLanguageSwitchHref(basePath: string, targetLocale: Locale, rawSearch: string): string {
  const baseHref = localizeHref(basePath, targetLocale);
  if (!rawSearch) return baseHref;
  const params = new URLSearchParams(rawSearch.startsWith('?') ? rawSearch.slice(1) : rawSearch);
  const rawProduct = params.get('product');
  if (rawProduct) {
    params.set('product', translateGarmentLabel(rawProduct, targetLocale));
  }
  const qs = params.toString();
  return qs ? `${baseHref}?${qs}` : baseHref;
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [searchString, setSearchString] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setIsOpen(false), []);
  const router = useRouter();
  const rawPathname = usePathname() || '/';
  const locale = getLocaleFromPathname(rawPathname);
  const basePath = stripLocalePrefix(rawPathname);
  const copy = getSiteCopy(locale);
  const categories = getCategoriesForLocale(locale);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
    if (typeof window !== 'undefined') {
      setSearchString(window.location.search || '');
    }
  }, [locale, rawPathname]);

  // Close disclosure on outside click or Escape (returning focus to toggle)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setCollectionsOpen(false);
      }
    }
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setCollectionsOpen(false);
        toggleButtonRef.current?.focus();
      }
    }
    if (collectionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [collectionsOpen]);

  // Close disclosure on route change
  useEffect(() => {
    setCollectionsOpen(false);
  }, [rawPathname]);

  const isCollectionsActive = basePath.startsWith('/products');

  function handleLanguageSwitch(event: ReactMouseEvent<HTMLAnchorElement>, targetLocale: Locale) {
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
    <>
      <a href="#main-content" className="skip-link">
        {copy.nav.skipToContent}
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Logo locale={locale} />
          <nav className="header-nav" aria-label={copy.nav.mainNavAria}>
            <div
              className="nav-dropdown-wrapper"
              ref={dropdownRef}
              onBlur={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setCollectionsOpen(false);
                }
              }}
            >
              <button
                ref={toggleButtonRef}
                type="button"
                className={`nav-dropdown-toggle ${isCollectionsActive ? 'nav-link-active' : ''}`}
                onClick={() => setCollectionsOpen((prev) => !prev)}
                aria-expanded={collectionsOpen}
                aria-controls="header-collections-dropdown"
              >
                <span>{copy.nav.collections}</span>
                <ChevronDown
                  className={`dropdown-chevron ${collectionsOpen ? 'dropdown-chevron-open' : ''}`}
                  aria-hidden="true"
                  size={15}
                />
              </button>
              {collectionsOpen && (
                <div
                  id="header-collections-dropdown"
                  className="dropdown-panel"
                  aria-label={copy.nav.collectionsDropdownAria}
                >
                  <ul className="dropdown-sectors">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`${localizeHref('/products', locale)}?category=${cat.id}`}
                          className="dropdown-item"
                          onClick={() => setCollectionsOpen(false)}
                        >
                          <span className="dropdown-item-title">{cat.name}</span>
                          <span className="dropdown-item-desc">{cat.tagline}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="dropdown-footer">
                    <Link
                      href={localizeHref('/products', locale)}
                      className="dropdown-all-link"
                      onClick={() => setCollectionsOpen(false)}
                    >
                      {copy.nav.allCollections} &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link
              href={localizeHref('/work', locale)}
              aria-current={basePath === '/work' ? 'page' : undefined}
            >
              {copy.nav.lookbook}
            </Link>
            <Link
              href={localizeHref('/about', locale)}
              aria-current={basePath === '/about' ? 'page' : undefined}
            >
              {copy.nav.about}
            </Link>
            <Link
              href={localizeHref('/contact', locale)}
              aria-current={basePath === '/contact' ? 'page' : undefined}
            >
              {copy.nav.contact}
            </Link>
          </nav>
          <div className="header-actions">
            <div className="lang-switcher" role="group" aria-label={copy.nav.languageSwitcherAria}>
              <Link
                href={enHref}
                lang="en"
                hrefLang="en"
                className={`lang-switch-link ${locale === 'en' ? 'lang-switch-active' : ''}`}
                aria-current={locale === 'en' ? 'true' : undefined}
                aria-label={copy.nav.switchToEnglishAria}
                onClick={(e) => handleLanguageSwitch(e, 'en')}
              >
                EN
              </Link>
              <span className="lang-switch-sep" aria-hidden="true">
                /
              </span>
              <Link
                href={frHref}
                lang="fr"
                hrefLang="fr"
                className={`lang-switch-link ${locale === 'fr' ? 'lang-switch-active' : ''}`}
                aria-current={locale === 'fr' ? 'true' : undefined}
                aria-label={copy.nav.switchToFrenchAria}
                onClick={(e) => handleLanguageSwitch(e, 'fr')}
              >
                FR
              </Link>
            </div>
            <Link href={localizeHref('/contact', locale)} className="button button-primary header-quote">
              {copy.nav.requestQuote}
            </Link>
            <button
              className="menu-toggle"
              onClick={() => setIsOpen(true)}
              aria-label={copy.nav.openNavigation}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileNav isOpen={isOpen} onClose={close} />
    </>
  );
}

