"use client";

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { MobileNav } from '@/components/layout/MobileNav';
import { categories } from '@/content/catalog';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => setIsOpen(false), []);
  const pathname = usePathname().replace(/\/$/, '') || '/';

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
  }, [pathname]);

  const isCollectionsActive = pathname.startsWith('/products');

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Logo />
          <nav className="header-nav" aria-label="Main navigation">
            <div className="nav-dropdown-wrapper" ref={dropdownRef}>
              <button
                ref={toggleButtonRef}
                type="button"
                className={`nav-dropdown-toggle ${isCollectionsActive ? 'nav-link-active' : ''}`}
                onClick={() => setCollectionsOpen((prev) => !prev)}
                aria-expanded={collectionsOpen}
                aria-controls="header-collections-dropdown"
              >
                <span>Collections</span>
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
                  aria-label="Workwear collections"
                >
                  <ul className="dropdown-sectors">
                    {categories.map((cat) => (
                      <li key={cat.id}>
                        <Link
                          href={`/products?category=${cat.id}`}
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
                      href="/products"
                      className="dropdown-all-link"
                      onClick={() => setCollectionsOpen(false)}
                    >
                      All collections &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Link href="/work" aria-current={pathname === '/work' ? 'page' : undefined}>
              Lookbook
            </Link>
            <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
              About
            </Link>
            <Link href="/contact" aria-current={pathname === '/contact' ? 'page' : undefined}>
              Contact
            </Link>
          </nav>
          <div className="header-actions">
            <Link href="/contact" className="button button-primary header-quote">
              Request a quote
            </Link>
            <button
              className="menu-toggle"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation"
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
