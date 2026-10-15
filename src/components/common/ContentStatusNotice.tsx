import React from 'react';
import Link from 'next/link';
import { Info, Sparkles } from 'lucide-react';

export function ContentStatusNotice() {
  return (
    <aside
      aria-label="Demo status notice"
      className="bg-amber-50/90 border-b border-amber-200/80 px-4 py-2 text-xs text-amber-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
          </span>
          <p>
            <strong className="font-semibold">Local Client Demo:</strong>{' '}
            Provisional catalogue concepts and draft copy for client review. Contact details & photography will be finalized with Quddus & Tinah.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 text-[11px] font-medium text-amber-800">
          <Link
            href="/contact"
            className="hover:underline flex items-center gap-1 font-semibold text-amber-950"
          >
            Review Contact Setup →
          </Link>
        </div>
      </div>
    </aside>
  );
}
