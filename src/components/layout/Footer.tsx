import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle, Heart, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/common/Logo';
import { siteConfig } from '@/content/site';
import { categories } from '@/content/catalog';
import { WhatsAppButton } from '@/components/common/WhatsAppButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-16 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-zinc-800">
          {/* Brand & Overview */}
          <div className="lg:col-span-4 space-y-5">
            <Logo theme="dark" />
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Custom workwear and uniform tailoring in Kigali, Rwanda. Founded and managed by Quddus and Tinah, crafting durable, professional attire for corporate, hospitality, industrial, and promotional teams.
            </p>

            <div className="pt-2">
              <WhatsAppButton
                label="Chat on WhatsApp"
                size="md"
                className="w-full sm:w-auto"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 translate-y-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-[#E0483A]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalogue Categories */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Workwear Categories
            </h3>
            <ul className="space-y-2.5 text-sm">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-zinc-400 hover:text-white transition-colors block"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Kigali Workshop */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-bold text-white uppercase tracking-wider">
              Kigali Workshop & Contact
            </h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#E0483A] shrink-0 mt-0.5" />
                <span>
                  Kigali, Rwanda
                  <span className="block text-xs text-zinc-500">
                    Fittings & consultations by appointment
                  </span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-[#E0483A] shrink-0" />
                <span>Mon – Sat: 8:00 AM – 6:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#E0483A] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {currentYear} Q Workwear. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-zinc-400">
            <span>Tailored with pride in Kigali by</span>
            <span className="font-semibold text-white">Q & Tinah</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
