"use client";

import { KeyboardEvent, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { getGarmentsForLocale, GarmentId } from './garments';
import { GarmentArtwork } from './GarmentArtwork';
import { getSiteCopy, Locale, localizeHref } from '@/content/i18n';

interface GarmentExplorerProps {
  locale?: Locale;
}

export function GarmentExplorer({ locale = 'en' }: GarmentExplorerProps) {
  const [selectedId, setSelectedId] = useState<GarmentId>('corporate');
  const [viewMode, setViewMode] = useState<'garment' | 'detail'>('detail');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const items = getGarmentsForLocale(locale);
  const copy = getSiteCopy(locale).explorer;

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const count = items.length;
    let nextIndex: number | null = null;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (index + 1) % count;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (index - 1 + count) % count;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = count - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      const nextItem = items[nextIndex];
      setSelectedId(nextItem.id);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <section className="section container garment-explorer-section" aria-labelledby="garment-explorer-title">
      <div className="section-header">
        <div>
          <span className="section-eyebrow">{copy.eyebrow}</span>
          <h2 className="section-title" id="garment-explorer-title">
            {copy.title}
          </h2>
        </div>
        <p className="lead section-lead-compact">{copy.lead}</p>
      </div>

      {/* Garment Selector Rail / Tabs (WAI-ARIA APG roving tabindex, click/keyboard only) */}
      <div className="garment-rail" role="tablist" aria-label={copy.tablistAria}>
        {items.map((item, idx) => {
          const isSelected = item.id === selectedId;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[idx] = el;
              }}
              type="button"
              role="tab"
              id={`garment-tab-${item.id}`}
              tabIndex={isSelected ? 0 : -1}
              aria-selected={isSelected}
              aria-controls={`garment-panel-${item.id}`}
              className={`garment-tab ${isSelected ? 'garment-tab-active' : ''}`}
              onClick={() => setSelectedId(item.id)}
              onKeyDown={(e) => handleTabKeyDown(e, idx)}
            >
              <div className="garment-artwork-frame">
                <GarmentArtwork id={item.id} selected={isSelected} />
              </div>
              <div className="garment-tab-info">
                <span className="garment-tab-title">{item.title}</span>
                <span className="garment-tab-sub">{item.subtitle}</span>
              </div>
              {isSelected && <span className="garment-indicator" aria-hidden="true" />}
            </button>
          );
        })}
      </div>

      {/* Mount all 4 tabpanels in the DOM so every tab's aria-controls resolves at all times */}
      {items.map((item) => {
        const isSelected = item.id === selectedId;
        const activePhotoSrc = viewMode === 'detail' ? item.detailImage : item.image;
        const activePhotoAlt = viewMode === 'detail' ? item.detailImageAlt : item.imageAlt;
        const activePhotoCaption = viewMode === 'detail' ? item.detailImageCaption : item.imageCaption;

        return (
          <div
            key={item.id}
            id={`garment-panel-${item.id}`}
            role="tabpanel"
            aria-labelledby={`garment-tab-${item.id}`}
            hidden={!isSelected}
            className="garment-spotlight"
          >
            <div className="garment-spotlight-content">
              <div className="garment-badge-row">
                <span className="garment-sector-tag">{item.tagline}</span>
              </div>
              <h3 className="garment-spotlight-title">{item.title}</h3>
              <p className="garment-spotlight-desc">{item.description}</p>

              <div className="garment-branding-note">
                <span className="garment-branding-note-label">{copy.brandingMethodLabel}:</span>{' '}
                <span>{item.brandingMethodNote}</span>
              </div>

              <ul className="garment-highlights-list" aria-label={copy.highlightsAria}>
                {item.highlights.map((highlight, index) => (
                  <li key={index} className="garment-highlight-item">
                    <Check className="highlight-icon" aria-hidden="true" size={16} />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <div className="garment-spotlight-actions">
                <Link href={item.href} className="button button-primary">
                  <span>{copy.exploreCollectionCta}</span>
                  <ArrowUpRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  href={`${localizeHref('/contact', locale)}?product=${encodeURIComponent(item.title)}`}
                  className="button button-outline"
                >
                  {copy.requestStyleCta}
                </Link>
              </div>
            </div>

            <div className="garment-spotlight-visual">
              <div className="garment-view-toggle" role="group" aria-label={copy.brandingMethodLabel}>
                <button
                  type="button"
                  className={`garment-view-btn ${viewMode === 'garment' ? 'garment-view-btn-active' : ''}`}
                  aria-pressed={viewMode === 'garment'}
                  onClick={() => setViewMode('garment')}
                >
                  {copy.viewToggleGarment}
                </button>
                <button
                  type="button"
                  className={`garment-view-btn ${viewMode === 'detail' ? 'garment-view-btn-active' : ''}`}
                  aria-pressed={viewMode === 'detail'}
                  onClick={() => setViewMode('detail')}
                >
                  {copy.viewToggleDetail}
                </button>
              </div>
              <div className="garment-photo-frame">
                {isSelected && (
                  <Image
                    src={activePhotoSrc}
                    alt={activePhotoAlt}
                    fill
                    sizes="(max-width: 1050px) 90vw, 560px"
                    className="garment-photo"
                  />
                )}
              </div>
              <p className="garment-photo-caption">{activePhotoCaption}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

