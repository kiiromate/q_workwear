'use client';

import React, { useState } from 'react';
import { contactPageContent } from '@/content/pages';
import { siteConfig } from '@/content/site';
import { Button } from '@/components/common/Button';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';
import {
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  ChevronUp,
  Scissors,
  CheckCircle2,
} from 'lucide-react';

export default function ContactPage() {
  const { hero, consultationNote, faqs } = contactPageContent;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-[#12100E] min-h-screen text-stone-200 pb-20">
      
      {/* Tape Ruler Top Accent */}
      <div className="h-1.5 tape-ruler-amber opacity-90" />

      {/* Header */}
      <div className="bg-[#161412] border-b border-stone-800 pt-14 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-800 text-stone-300 text-xs font-mono mb-3 border border-stone-700">
              <Scissors className="w-3.5 h-3.5 text-[#E0483A]" />
              <span>DIRECT ATELIER CONSULTATIONS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-base sm:text-lg text-stone-400 font-light leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        
        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* WhatsApp Card */}
          <div className="bg-[#1A1816] rounded-3xl p-7 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-80" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7]/10 text-[#25D366] flex items-center justify-center mb-5 border border-[#25D366]/30">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                WhatsApp Inquiries
              </h3>
              <p className="text-xs text-stone-400 font-light mb-4">
                Fastest channel to share sketches, photos, and request quotations.
              </p>
              <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 text-xs font-mono text-stone-300 mb-4">
                <span className="block text-[#E0483A] text-[10px] uppercase mb-0.5">Direct Chat:</span>
                <span>Quddus & Tinah</span>
              </div>
            </div>

            <div className="pt-2">
              <WhatsAppButton
                label="Message on WhatsApp"
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Voice Phone Card */}
          <div className="bg-[#1A1816] rounded-3xl p-7 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-80" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-[#E0483A] flex items-center justify-center mb-5 border border-stone-800">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Voice Telephone
              </h3>
              <p className="text-xs text-stone-400 font-light mb-4">
                Speak directly regarding commercial tenders or urgent uniform schedules.
              </p>
              <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 text-xs font-mono text-stone-400 mb-4">
                <span className="block text-stone-500 text-[10px] uppercase mb-0.5">Calling Line:</span>
                <span>
                  {siteConfig.contact.isPhoneVerified
                    ? siteConfig.contact.phone
                    : 'Pending client confirmation'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href={`tel:${siteConfig.contact.phone}`}
                disabled={!siteConfig.contact.isPhoneVerified}
                className="w-full justify-center bg-stone-900 text-stone-300 border-stone-700 hover:text-white"
              >
                {siteConfig.contact.isPhoneVerified ? 'Call Studio' : 'Phone Pending'}
              </Button>
            </div>
          </div>

          {/* Email Inquiries Card */}
          <div className="bg-[#1A1816] rounded-3xl p-7 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-80" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-[#E0483A] flex items-center justify-center mb-5 border border-stone-800">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Corporate Email
              </h3>
              <p className="text-xs text-stone-400 font-light mb-4">
                Submit formal RFPs, bill of quantities (BOQ), or artwork files.
              </p>
              <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 text-xs font-mono text-stone-300 mb-4">
                <span className="block text-stone-500 text-[10px] uppercase mb-0.5">Official Inquiries:</span>
                <span>{siteConfig.contact.email}</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href={`mailto:${siteConfig.contact.email}?subject=Corporate%20Uniform%20Quotation%20Request`}
                className="w-full justify-center bg-stone-900 text-stone-300 border-stone-700 hover:text-white"
              >
                Send Email
              </Button>
            </div>
          </div>

          {/* Workshop Location Card */}
          <div className="bg-[#1A1816] rounded-3xl p-7 border border-stone-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-80" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-[#E0483A] flex items-center justify-center mb-5 border border-stone-800">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Kigali Fittings
              </h3>
              <p className="text-xs text-stone-400 font-light mb-4">
                Fabric swatch inspections and on-site sizing sessions across Kigali.
              </p>
              <div className="p-3.5 bg-stone-900 rounded-xl border border-stone-800 text-xs font-mono text-stone-300 mb-4">
                <span className="block text-stone-500 text-[10px] uppercase mb-0.5">Operating Hours:</span>
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href="#inquiry"
                className="w-full justify-center bg-stone-900 text-stone-300 border-stone-700 hover:text-white"
              >
                Fitting Guidelines
              </Button>
            </div>
          </div>

        </div>

        {/* What to Prepare Section */}
        <div id="inquiry" className="bg-[#1A1816] rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-2xl relative overflow-hidden">
          <div className="h-1 tape-ruler-amber absolute top-0 left-0 right-0 opacity-80" />

          <div className="max-w-3xl space-y-4 pt-2">
            <span className="inline-block px-3 py-1 rounded bg-[#E0483A]/15 text-[#E0483A] text-xs font-mono font-bold">
              QUOTATION PREPARATION GUIDE
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {consultationNote.title}
            </h2>
            <p className="text-sm sm:text-base text-stone-400 font-light leading-relaxed">
              To provide you with the most accurate pricing tier and production schedule, having the following details ready when contacting Quddus and Tinah is very helpful:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              {consultationNote.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3.5 rounded-2xl bg-stone-900 border border-stone-800 text-xs font-mono text-stone-300">
                  <span className="text-[#E0483A] font-bold font-mono">▸</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-5 flex flex-col sm:flex-row gap-4">
              <WhatsAppButton
                size="md"
                label="Start WhatsApp Quote Request"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded bg-stone-800 text-stone-300 text-xs font-mono mb-2 border border-stone-700">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Uniform Orders & Production FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-[#1A1816] rounded-2xl border border-stone-800 shadow-md overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-white hover:text-[#E0483A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-stone-500">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#E0483A]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-stone-300 font-light leading-relaxed border-t border-stone-800/80">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
