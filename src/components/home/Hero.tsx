"use client";

import { KeyboardEvent, TouchEvent, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getSiteCopy, Locale, localizeHref } from '@/content/i18n';
import { getCategoriesForLocale } from '@/content/catalog';

interface HeroProps {
  locale?: Locale;
}

export function Hero({ locale = 'en' }: HeroProps) {
  const copy = getSiteCopy(locale).hero;
  const slides = copy.slides;
  const categories = getCategoriesForLocale(locale);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mql.matches) {
      setPaused(true);
    }
    const handleMotionChange = (e: MediaQueryListEvent) => {
      if (e.matches) setPaused(true);
    };
    const handleVisibility = () => {
      setIsHidden(document.hidden);
    };
    mql.addEventListener('change', handleMotionChange);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      mql.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  useEffect(() => {
    if (paused || isInteracting || isHidden) return;
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => window.clearInterval(timer);
  }, [paused, isInteracting, isHidden, slides.length]);

  const activeSlide = slides[index] || slides[0];

  function selectSlide(nextIdx: number) {
    const normalized = ((nextIdx % slides.length) + slides.length) % slides.length;
    setIndex(normalized);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      selectSlide(index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      selectSlide(index + 1);
    }
  }

  function handleTouchStart(event: TouchEvent<HTMLElement>) {
    if (event.touches.length !== 1) return;
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  }

  function handleTouchEnd(event: TouchEvent<HTMLElement>) {
    if (touchStartX.current === null || touchStartY.current === null || event.changedTouches.length !== 1) {
      return;
    }
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const deltaY = event.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) > 44 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        selectSlide(index + 1);
      } else {
        selectSlide(index - 1);
      }
    }
  }

  return (
    <section
      className="hero container"
      aria-labelledby="hero-title"
      onMouseEnter={() => setIsInteracting(true)}
      onMouseLeave={() => setIsInteracting(false)}
      onFocusCapture={() => setIsInteracting(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsInteracting(false);
        }
      }}
    >
      <div className="hero-intro">
        <h1 id="hero-title" className="display">
          {copy.headlineLine1}
          <br />
          {copy.headlineLine2}
        </h1>
        <p className="lead hero-intro-lead">{copy.lead}</p>
      </div>

      <div
        className="hero-slideshow-stage"
        role="region"
        aria-roledescription={copy.slideshowAriaRoleDescription}
        aria-label={copy.slideshowAriaLabel}
        onKeyDown={handleKeyDown}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="hero-slide-photo-wrap">
          <Image
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            fill
            priority
            sizes="(min-width: 1488px) 1344px, 92vw"
            className="hero-slide-photo"
          />
        </div>
        <div className="hero-slide-overlay" aria-hidden="true" />

        <div className="hero-slide-content">
          <span className="hero-slide-eyebrow" id="slide-count">
            {activeSlide.number} / 04
          </span>
          <h2 className="hero-slide-title" id="hero-slide-title">
            {activeSlide.title}
          </h2>
          <p className="hero-slide-desc" id="hero-slide-desc">
            {activeSlide.description}
          </p>
          <div className="hero-slide-actions">
            <Link
              id="hero-slide-link"
              className="button hero-btn-light"
              href={`${localizeHref('/products', locale)}?category=${activeSlide.slug}`}
            >
              {activeSlide.ctaLabel}
            </Link>
            <Link className="button hero-btn-outline-light" href={localizeHref('/contact', locale)}>
              {copy.discussOrderCta}
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-controlbar">
        <div className="hero-slide-nav" role="group" aria-label={copy.chooseVisualAria} onKeyDown={handleKeyDown}>
          <button
            type="button"
            id="hero-prev"
            className="hero-control-btn"
            aria-label={copy.prevAria}
            onClick={() => selectSlide(index - 1)}
          >
            ←
          </button>
          {slides.map((slide, idx) => (
            <button
              key={slide.slug}
              type="button"
              data-slide={idx}
              className="hero-control-btn hero-slide-num-btn"
              aria-current={idx === index ? 'true' : 'false'}
              aria-label={`${copy.slideButtonAriaPrefix} ${slide.number}: ${slide.title}`}
              onClick={() => selectSlide(idx)}
            >
              {slide.number}
            </button>
          ))}
          <button
            type="button"
            id="hero-next"
            className="hero-control-btn"
            aria-label={copy.nextAria}
            onClick={() => selectSlide(index + 1)}
          >
            →
          </button>
          <button
            type="button"
            id="hero-pause"
            className="hero-control-btn hero-play-btn"
            aria-pressed={paused}
            onClick={() => setPaused((p) => !p)}
          >
            {paused ? copy.playLabel : copy.pauseLabel}
          </button>
        </div>

        <nav className="hero-direct-links" aria-label={copy.directLinksAria}>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`${localizeHref('/products', locale)}?category=${cat.id}`}
              className="hero-direct-link"
            >
              {cat.name}
            </Link>
          ))}
        </nav>
      </div>

      <p className="hero-illustrative-note">{copy.illustrativeNote}</p>
    </section>
  );
}

