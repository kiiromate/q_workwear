import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="quote-section section" aria-labelledby="quote-title">
      <div className="container quote-inner">
        <h2 id="quote-title" className="section-title">Let’s dress your team.</h2>
        <Link className="button" href="/contact">Request a quote <ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
