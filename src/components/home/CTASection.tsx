import React from 'react';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Button } from '@/components/common/Button';
import { MessageSquareQuote, MapPin, Scissors } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0C0B0A] text-white relative overflow-hidden border-t border-stone-800">
      {/* Tape Ruler Divider Stripe at top */}
      <div className="absolute top-0 left-0 right-0 h-1.5 tape-ruler-amber opacity-90" />
      
      {/* Background radial crimson glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#E0483A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-7">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-900 text-stone-300 text-xs font-mono backdrop-blur-sm border border-stone-800">
          <Scissors className="w-3.5 h-3.5 text-[#E0483A]" />
          <span>KIGALI TAILORING ATELIER • MANAGED BY Q & TINAH</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Outfit Your Workforce with{' '}
          <span className="text-[#E0483A]">Precision Rwandan Craftsmanship</span>
        </h2>

        <p className="text-base sm:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed font-light">
          Request a competitive corporate quotation, review fabric swatches, or schedule on-site sizing fittings for your team across Kigali.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton
            size="lg"
            label="Request Quote on WhatsApp"
            className="w-full sm:w-auto"
          />

          <Button
            variant="outline"
            size="lg"
            href="/contact"
            icon={<MessageSquareQuote className="w-5 h-5 text-stone-300" />}
            className="w-full sm:w-auto bg-stone-900 text-white hover:bg-stone-800 border-stone-700"
          >
            Fittings & Consultations
          </Button>
        </div>

        <div className="pt-6">
          <span className="text-xs font-mono text-stone-500">
            Fittings by appointment in Kigali • Standard turnaround: 14–21 business days
          </span>
        </div>
      </div>
    </section>
  );
}
