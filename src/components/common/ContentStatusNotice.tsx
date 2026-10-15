import React from 'react';
import Link from 'next/link';
import { Info, Sparkles } from 'lucide-react';

export function ContentStatusNotice() {
  return (
    <aside
      aria-label="Demo status notice"
      className="bg-[#181513] border-b border-stone-800 px-4 py-2 text-xs text-stone-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E0483A] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E0483A]"></span>
          </span>
          <p className="font-light">
            <strong className="font-semibold text-white">Atelier Preview:</strong>{' '}
            Provisional catalogue concepts and draft copy for client review. Contact details & photography will be finalized with Quddus & Tinah.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-[11px] font-mono text-stone-400">
          <Link
            href="/contact"
            className="hover:underline flex items-center gap-1 font-semibold text-[#E0483A]"
          >
            Review Contact Setup →
          </Link>
        </div>
      </div>
    </aside>
  );
}
