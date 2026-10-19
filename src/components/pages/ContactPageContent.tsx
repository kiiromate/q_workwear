"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/content/site';
import { translateGarmentLabel } from '@/content/catalog';
import { getSiteCopy, Locale } from '@/content/i18n';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { isWhatsAppAvailable } from '@/lib/whatsapp';

const DRAFT_STORAGE_KEY = 'qww_enquiry_draft_state';

interface StoredDraftState {
  name: string;
  email: string;
  garment: string;
  quantity: string;
  details: string;
  hasPreparedDraft?: boolean;
}

function buildLiveEmailDraft(
  locale: Locale,
  fields: { name: string; email: string; garment: string; quantity: string; details: string },
) {
  const copy = getSiteCopy(locale).contactPage.form;
  const cleanGarment = fields.garment.trim();
  const cleanQuantity = fields.quantity.trim() || copy.quantityToDiscuss;
  const lines = [
    copy.emailGreeting,
    '',
    copy.emailIntro,
    '',
    `${copy.emailNameLine}: ${fields.name.trim()}`,
    `${copy.emailReplyLine}: ${fields.email.trim()}`,
    `${copy.emailGarmentLine}: ${cleanGarment}`,
    `${copy.emailQuantityLine}: ${cleanQuantity}`,
    '',
    fields.details.trim(),
  ];
  const body = lines.join('\n');
  const subject = `${copy.emailSubjectPrefix} — ${cleanGarment}`;
  const url = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { url, body };
}

function QuoteForm({ locale = 'en' }: { locale?: Locale }) {
  const params = useSearchParams();
  const copy = getSiteCopy(locale).contactPage;
  const rawProductParam = params.get('product') || '';
  const rawMessageParam = params.get('message') || params.get('draft') || '';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [garment, setGarment] = useState(() =>
    rawProductParam ? translateGarmentLabel(rawProductParam, locale) : '',
  );
  const [quantity, setQuantity] = useState('');
  const [details, setDetails] = useState(rawMessageParam);
  const [hasPreparedDraft, setHasPreparedDraft] = useState(false);
  const [copyStatus, setCopyStatus] = useState<'copied' | 'fallback' | ''>('');
  const hydratedRef = useRef(false);

  // Restore in-progress enquiry state across EN/FR language switches without leaking personal data into URLs
  useEffect(() => {
    let restored: StoredDraftState | null = null;
    try {
      const raw = window.sessionStorage.getItem(DRAFT_STORAGE_KEY);
      if (raw) {
        restored = JSON.parse(raw) as StoredDraftState;
      }
    } catch {
      restored = null;
    }

    if (restored) {
      if (restored.name) setName(restored.name);
      if (restored.email) setEmail(restored.email);
      if (restored.quantity) setQuantity(restored.quantity);
      if (!rawMessageParam && restored.details) {
        setDetails(restored.details);
      }
      if (rawProductParam) {
        setGarment(translateGarmentLabel(rawProductParam, locale));
      } else if (restored.garment) {
        setGarment(translateGarmentLabel(restored.garment, locale));
      }
      if (restored.hasPreparedDraft) {
        setHasPreparedDraft(true);
      }
    } else {
      if (rawProductParam) {
        setGarment(translateGarmentLabel(rawProductParam, locale));
      }
      if (rawMessageParam) {
        setDetails(rawMessageParam);
      }
    }
    hydratedRef.current = true;
  }, [locale, rawProductParam, rawMessageParam]);

  useEffect(() => {
    if (!hydratedRef.current) return;
    try {
      const payload: StoredDraftState = {
        name,
        email,
        garment,
        quantity,
        details,
        hasPreparedDraft,
      };
      window.sessionStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(payload));
    } catch {
      // Ignore storage quota or private mode restrictions
    }
  }, [name, email, garment, quantity, details, hasPreparedDraft]);

  // Live reactive draft: any edit to name, email, garment, quantity, or details immediately updates both the mailto link and copied text
  const currentDraft = useMemo(
    () => buildLiveEmailDraft(locale, { name, email, garment, quantity, details }),
    [locale, name, email, garment, quantity, details],
  );

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const freshDraft = buildLiveEmailDraft(locale, { name, email, garment, quantity, details });
    setCopyStatus('');
    setHasPreparedDraft(true);
    window.location.href = freshDraft.url;
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(currentDraft.body);
      setCopyStatus('copied');
    } catch {
      setCopyStatus('fallback');
    }
  }

  return (
    <form className="quote-form" onSubmit={prepareDraft}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="quote-name">{copy.form.nameLabel}</label>
          <input
            id="quote-name"
            name="name"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
              setCopyStatus('');
            }}
            autoComplete="name"
            maxLength={120}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="quote-email">{copy.form.emailLabel}</label>
          <input
            id="quote-email"
            name="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setCopyStatus('');
            }}
            autoComplete="email"
            maxLength={254}
            required
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="quote-garment">{copy.form.garmentLabel}</label>
          <input
            id="quote-garment"
            name="garment"
            value={garment}
            onChange={(event) => {
              setGarment(event.target.value);
              setCopyStatus('');
            }}
            maxLength={150}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="quote-quantity">
            {copy.form.quantityLabel} <span className="optional">{copy.form.optionalSuffix}</span>
          </label>
          <input
            id="quote-quantity"
            name="quantity"
            type="number"
            min="1"
            max="1000000"
            step="1"
            inputMode="numeric"
            value={quantity}
            onChange={(event) => {
              setQuantity(event.target.value);
              setCopyStatus('');
            }}
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="quote-details">
          {copy.form.detailsLabel} <span className="optional">{copy.form.optionalSuffix}</span>
        </label>
        <textarea
          id="quote-details"
          name="details"
          value={details}
          onChange={(event) => {
            setDetails(event.target.value);
            setCopyStatus('');
          }}
          placeholder={copy.form.detailsPlaceholder}
          maxLength={3000}
        />
      </div>
      <div className="form-action">
        <button className="button button-primary" type="submit">
          {copy.form.submitButton} <ArrowUpRight aria-hidden="true" size={18} />
        </button>
        <p className="form-note">{copy.form.submitNote}</p>
      </div>
      {hasPreparedDraft && (
        <div className="draft-result" role="status">
          <p>{copy.form.draftPreparedStatus}</p>
          <div className="draft-actions">
            <a href={currentDraft.url} className="text-link">
              {copy.form.openDraftAgain} <ArrowUpRight aria-hidden="true" size={18} />
            </a>
            <button type="button" className="text-link" onClick={copyDraft}>
              {copy.form.copyEnquiry}
            </button>
          </div>
          {copyStatus === 'copied' && <p>{copy.form.copiedStatus}</p>}
          {copyStatus === 'fallback' && (
            <>
              <p>{copy.form.copyUnavailableStatus}</p>
              <textarea
                aria-label={copy.form.copyTextareaAria}
                readOnly
                value={currentDraft.body}
              />
            </>
          )}
        </div>
      )}
    </form>
  );
}

export function ContactPageContent({ locale = 'en' }: { locale?: Locale }) {
  const copy = getSiteCopy(locale).contactPage;

  return (
    <>
      <div className="container page-intro">
        <h1 className="display">{copy.title}</h1>
        <p className="lead">{copy.lead}</p>
      </div>
      <section className="container contact-grid contact-body" aria-label={copy.sectionAria}>
        <div className="contact-summary">
          <h2 className="section-title">{copy.summaryTitle}</h2>
          <p className="lead">{copy.summaryLead}</p>
          <a className="text-link email-link" href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
            <ArrowUpRight aria-hidden="true" />
          </a>
          <p className="contact-location">{copy.location}</p>
          {isWhatsAppAvailable() && <WhatsAppButton label={copy.whatsappLabel} />}
        </div>
        <Suspense fallback={<p role="status">{copy.loadingForm}</p>}>
          <QuoteForm locale={locale} />
        </Suspense>
      </section>
      <section className="container section contact-faq" aria-labelledby="faq-title">
        <h2 id="faq-title" className="section-title">
          {copy.faqTitle}
        </h2>
        <div className="faq-list">
          {copy.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
