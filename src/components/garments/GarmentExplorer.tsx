"use client";

import { KeyboardEvent, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { garmentItems, GarmentId } from './garments';
import { GarmentArtwork } from './GarmentArtwork';

export function GarmentExplorer() {
  const [selectedId, setSelectedId] = useState<GarmentId>('corporate');
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const activeGarment = garmentItems.find((item) => item.id === selectedId) || garmentItems[0];

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const count = garmentItems.length;
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
      const nextItem = garmentItems[nextIndex];
      setSelectedId(nextItem.id);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <section className="section container garment-explorer-section" aria-labelledby="garment-explorer-title">
      <div className="section-header">
        <div>
          <span className="section-eyebrow">Garment details &amp; branding</span>
          <h2 className="section-title" id="garment-explorer-title">Choose your workwear.</h2>
        </div>
        <p className="lead section-lead-compact">
          Select a garment family to inspect construction details, branding placements, and tailoring options for your team.
        </p>
      </div>

      {/* Garment Selector Rail / Tabs (WAI-ARIA APG roving tabindex, click/keyboard only) */}
      <div className="garment-rail" role="tablist" aria-label="Workwear category selector">
        {garmentItems.map((item, idx) => {
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

      {/* Active Garment Spotlight Display */}
      <div
        id={`garment-panel-${activeGarment.id}`}
        role="tabpanel"
        aria-labelledby={`garment-tab-${activeGarment.id}`}
        className="garment-spotlight"
      >
        <div className="garment-spotlight-content">
          <div className="garment-badge-row">
            <span className="garment-sector-tag">{activeGarment.tagline}</span>
          </div>
          <h3 className="garment-spotlight-title">{activeGarment.title}</h3>
          <p className="garment-spotlight-desc">{activeGarment.description}</p>

          <ul className="garment-highlights-list" aria-label="Sector tailoring highlights">
            {activeGarment.highlights.map((highlight, index) => (
              <li key={index} className="garment-highlight-item">
                <Check className="highlight-icon" aria-hidden="true" size={16} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="garment-spotlight-actions">
            <Link href={activeGarment.href} className="button button-primary">
              <span>Explore collection</span>
              <ArrowUpRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href={`/contact?product=${encodeURIComponent(activeGarment.title)}`}
              className="button button-outline"
            >
              Request this style
            </Link>
          </div>
        </div>

        <div className="garment-spotlight-visual">
          <div className="garment-photo-frame">
            <Image
              src={activeGarment.image}
              alt={activeGarment.imageAlt}
              fill
              sizes="(max-width: 1050px) 90vw, 560px"
              className="garment-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
