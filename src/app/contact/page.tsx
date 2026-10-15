"use client";

import { Suspense, useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { contactPageContent } from '@/content/pages';
import { siteConfig } from '@/content/site';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { isWhatsAppAvailable } from '@/lib/whatsapp';

function QuoteForm() {
  const params = useSearchParams();
  const product = params.get('product') || '';
  const message = params.get('message') || params.get('draft') || '';
  const [garment, setGarment] = useState(product);
  const [details, setDetails] = useState(message);
  const [draft, setDraft] = useState<{ url: string; body: string } | null>(null);
  const [copyStatus, setCopyStatus] = useState('');
  useEffect(() => { setGarment(product); setDetails(message); setDraft(null); }, [product, message]);

  function prepareDraft(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const body = [
      'Hello Q Workwear,', '', 'I would like to discuss a uniform order.', '',
      `Name: ${String(data.get('name')).trim()}`,
      `Reply email: ${String(data.get('email')).trim()}`,
      `Garment: ${garment.trim()}`,
      `Approximate quantity: ${data.get('quantity') || 'To discuss'}`,
      '', details.trim(),
    ].join('\n');
    const url = `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(`Uniform enquiry — ${garment.trim()}`)}&body=${encodeURIComponent(body)}`;
    setCopyStatus('');
    setDraft({ url, body });
    window.location.href = url;
  }

  async function copyDraft() {
    if (!draft) return;
    try { await navigator.clipboard.writeText(draft.body); setCopyStatus('Enquiry copied. Paste it into your email.'); }
    catch { setCopyStatus('Copy is unavailable. Use the email draft link or select the text below.'); }
  }

  return <form className="quote-form" onSubmit={prepareDraft}>
    <div className="form-grid">
      <div className="field"><label htmlFor="quote-name">Your name</label><input id="quote-name" name="name" autoComplete="name" maxLength={120} required /></div>
      <div className="field"><label htmlFor="quote-email">Email</label><input id="quote-email" name="email" type="email" autoComplete="email" maxLength={254} required /></div>
    </div>
    <div className="form-grid">
      <div className="field"><label htmlFor="quote-garment">Garment</label><input id="quote-garment" name="garment" value={garment} onChange={(event) => { setGarment(event.target.value); setDraft(null); }} maxLength={150} required /></div>
      <div className="field"><label htmlFor="quote-quantity">Quantity <span className="optional">(optional)</span></label><input id="quote-quantity" name="quantity" type="number" min="1" max="1000000" step="1" inputMode="numeric" /></div>
    </div>
    <div className="field"><label htmlFor="quote-details">Tell us about your team <span className="optional">(optional)</span></label><textarea id="quote-details" name="details" value={details} onChange={(event) => { setDetails(event.target.value); setDraft(null); }} placeholder="Colours, branding, preferred date or a design you have in mind." maxLength={3000} /></div>
    <div className="form-action"><button className="button button-primary" type="submit">Open email draft <ArrowUpRight aria-hidden="true" size={18} /></button><p className="form-note">Review and send the enquiry from your email app.</p></div>
    {draft && <div className="draft-result" role="status"><p>Draft prepared. Send it from your email app.</p><div className="draft-actions"><a href={draft.url} className="text-link">Open draft again <ArrowUpRight aria-hidden="true" size={18} /></a><button type="button" className="text-link" onClick={copyDraft}>Copy enquiry</button></div>{copyStatus && <p>{copyStatus}</p>}{copyStatus.startsWith('Copy is unavailable') && <textarea aria-label="Enquiry text to copy" readOnly value={draft.body} />}</div>}
  </form>;
}

export default function ContactPage() {
  return <>
    <div className="container page-intro"><h1 className="display">Let’s dress your team.</h1><p className="lead">A few details are all we need to start the conversation.</p></div>
    <section className="container contact-grid contact-body" aria-label="Request a quotation">
      <div className="contact-summary"><h2 className="section-title">Talk to Q Workwear.</h2><p className="lead">Share what your team needs, and discuss the fit, fabric and finish with us.</p><a className="text-link email-link" href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}<ArrowUpRight aria-hidden="true" /></a><p className="contact-location">Kigali, Rwanda</p>{isWhatsAppAvailable() && <WhatsAppButton label="Enquire on WhatsApp" />}</div>
      <Suspense fallback={<p role="status">Loading enquiry form…</p>}><QuoteForm /></Suspense>
    </section>
    <section className="container section contact-faq" aria-labelledby="faq-title"><h2 id="faq-title" className="section-title">Before you order.</h2><div className="faq-list">{contactPageContent.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>
  </>;
}
