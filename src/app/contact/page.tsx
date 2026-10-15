'use client';

import React, { useState } from 'react';
import { contactPageContent } from '@/content/pages';
import { siteConfig } from '@/content/site';
import { Badge } from '@/components/common/Badge';
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
  AlertCircle,
  CheckCircle2,
  CalendarCheck,
} from 'lucide-react';

export default function ContactPage() {
  const { hero, consultationNote, faqs } = contactPageContent;
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-stone-200/80 pt-12 pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="brand" size="md" className="mb-3">
              {hero.badge}
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight mb-4">
              {hero.title}
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#DCFCE7] text-[#166534] flex items-center justify-center mb-5">
                <MessageCircle className="w-6 h-6 text-[#25D366]" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                WhatsApp Inquiries
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Fastest way to send photos, ask questions, and request quotes.
              </p>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-zinc-600 mb-4">
                <span className="font-semibold block text-zinc-900 mb-0.5">
                  Direct Founder Chat:
                </span>
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
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-zinc-800 flex items-center justify-center mb-5">
                <Phone className="w-6 h-6 text-[#E0483A]" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                Direct Telephone
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Speak directly regarding commercial tenders or urgent uniform schedules.
              </p>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-zinc-600 mb-4">
                <span className="font-semibold block text-zinc-900 mb-0.5">
                  Voice Calling Line:
                </span>
                <span className="font-mono text-zinc-500">
                  {siteConfig.contact.isPhoneVerified
                    ? siteConfig.contact.phone
                    : 'Pending client verification'}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href={`tel:${siteConfig.contact.phone}`}
                disabled={!siteConfig.contact.isPhoneVerified}
                className="w-full justify-center"
              >
                {siteConfig.contact.isPhoneVerified ? 'Call Studio' : 'Phone Pending'}
              </Button>
            </div>
          </div>

          {/* Email Inquiries Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-zinc-800 flex items-center justify-center mb-5">
                <Mail className="w-6 h-6 text-[#E0483A]" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                Corporate Email
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Send formal RFPs, bill of quantities (BOQ), or artwork files.
              </p>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-zinc-600 mb-4">
                <span className="font-semibold block text-zinc-900 mb-0.5">
                  Official Email:
                </span>
                <span className="font-mono text-zinc-700">
                  {siteConfig.contact.email}
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href={`mailto:${siteConfig.contact.email}?subject=Corporate%20Uniform%20Quotation%20Request`}
                className="w-full justify-center"
              >
                Send Email
              </Button>
            </div>
          </div>

          {/* Workshop Location Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-stone-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-stone-100 text-zinc-800 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6 text-[#E0483A]" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-1">
                Kigali Fittings
              </h3>
              <p className="text-xs text-zinc-500 mb-4">
                Consultations, fabric swatch inspections, and on-site sizing sessions.
              </p>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/70 text-xs text-zinc-600 mb-4">
                <span className="font-semibold block text-zinc-900 mb-0.5">
                  Location & Hours:
                </span>
                <span>Kigali, Rwanda</span>
                <span className="block text-zinc-500 text-[11px] mt-0.5">
                  Mon – Sat: 8:00 AM – 6:00 PM
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="outline"
                size="md"
                href="#inquiry"
                className="w-full justify-center"
              >
                Schedule Fitting
              </Button>
            </div>
          </div>
        </div>

        {/* What to Prepare Section */}
        <div id="inquiry" className="bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-md">
          <div className="max-w-3xl space-y-4">
            <Badge variant="brand" size="sm">
              Quotation Preparation
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900">
              {consultationNote.title}
            </h2>
            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              To provide you with the most accurate pricing tier and production schedule, having the following details ready when contacting Quddus and Tinah is very helpful:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {consultationNote.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-2xl bg-stone-50 border border-stone-200/70 text-xs text-zinc-700">
                  <CheckCircle2 className="w-4 h-4 text-[#E0483A] shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <WhatsAppButton
                size="md"
                label="Start WhatsApp Quote Request"
              />
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Badge variant="brand" size="sm" className="mb-2">
              Frequently Asked Questions
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Common Questions About Uniform Orders
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-stone-200/90 shadow-xs overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-zinc-900 hover:text-[#E0483A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A]"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="shrink-0 text-zinc-400">
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#E0483A]" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-stone-100">
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
