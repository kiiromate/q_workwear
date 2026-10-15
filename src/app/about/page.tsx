import React from 'react';
import { aboutPageContent } from '@/content/pages';
import { Badge } from '@/components/common/Badge';
import { CTASection } from '@/components/home/CTASection';
import { Button } from '@/components/common/Button';
import { Scissors, UserCheck, ShieldCheck, HeartHandshake, MapPin, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'About Q Workwear | Kigali Uniform Tailors',
  description:
    'Learn about Q Workwear in Kigali, Rwanda, co-founded by Quddus (Q) and Tinah. Discover our commitment to durable workwear, local craftsmanship, and reliable delivery.',
};

export default function AboutPage() {
  const { hero, story, founders, craftsmanship } = aboutPageContent;

  return (
    <div className="bg-stone-50/50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-white border-b border-stone-200/80 pt-12 pb-16">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <Badge variant="neutral" size="sm">
              Our Founding Purpose
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              {story.title}
            </h2>

            <div className="space-y-4 text-base text-zinc-600 leading-relaxed">
              {story.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="pt-2">
              <span className="text-xs text-amber-800 bg-amber-50 px-3 py-1.5 rounded-lg border border-amber-200 inline-block">
                Draft narrative for client review — awaiting final quotes from Quddus & Tinah.
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-950 p-8 text-white shadow-xl space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-[#E0483A] text-white flex items-center justify-center font-black text-2xl shadow-sm">
                Q
              </div>

              <h3 className="text-xl sm:text-2xl font-bold">
                Tailored in Rwanda, Built for Business
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed">
                We believe uniforms are a direct reflection of your company&rsquo;s standards. When your team looks sharp and feels comfortable, pride in their work naturally follows.
              </p>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E0483A]" />
                  Kigali Workshop
                </span>
                <span className="text-white font-semibold">Quddus & Tinah</span>
              </div>
            </div>
          </div>
        </div>

        {/* Founders Profiles */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <Badge variant="brand" size="sm" className="mb-2">
              Leadership
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              {founders.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-600">
              {founders.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.leaders.map((leader, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#FDF2F0] text-[#E0483A] flex items-center justify-center font-bold text-xl">
                      {leader.name.charAt(0)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                        {leader.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#E0483A]">
                        {leader.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-stone-100 flex items-center justify-between text-xs text-zinc-500">
                  <span>Q Workwear Kigali</span>
                  <span className="text-[#E0483A] font-semibold">Co-Founder</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Craftsmanship Pillars */}
        <div className="pt-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <Badge variant="brand" size="sm" className="mb-2">
              Our Standards
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Craftsmanship & Production Discipline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {craftsmanship.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-stone-200/90 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-8 h-8 rounded-xl bg-stone-100 text-zinc-800 flex items-center justify-center text-xs font-bold mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-zinc-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}
