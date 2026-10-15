import React from 'react';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import { Button } from '@/components/common/Button';
import { MessageSquareQuote, MapPin, Sparkles } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#E0483A]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-white/90 text-xs font-semibold backdrop-blur-sm border border-white/10">
          <MapPin className="w-3.5 h-3.5 text-[#E0483A]" />
          <span>Kigali, Rwanda • Direct Consultations with Q & Tinah</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
          Ready to Outfit Your Workforce with{' '}
          <span className="text-[#E0483A]">Precision Rwandan Tailoring?</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Request a competitive corporate quotation, review fabric swatches, or schedule on-site sizing for your team in Kigali today.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <WhatsAppButton
            size="lg"
            label="Request Quote on WhatsApp"
            className="w-full sm:w-auto"
          />

          <Button
            variant="outline"
            size="lg"
            href="/contact"
            icon={<MessageSquareQuote className="w-5 h-5 text-zinc-800" />}
            className="w-full sm:w-auto bg-white text-zinc-950 hover:bg-stone-100 border-none"
          >
            Contact & Fittings
          </Button>
        </div>
      </div>
    </section>
  );
}
