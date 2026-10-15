import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/common/Button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-stone-50/50 px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-lg">
        <div className="w-16 h-16 rounded-2xl bg-[#FDF2F0] text-[#E0483A] flex items-center justify-center font-black text-2xl mx-auto">
          404
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
          Page Not Found
        </h1>

        <p className="text-sm text-zinc-600 leading-relaxed">
          The workwear page or uniform catalogue resource you are looking for does not exist or has been relocated.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="primary"
            size="md"
            href="/"
            icon={<Home className="w-4 h-4" />}
          >
            Return Home
          </Button>
          <Button
            variant="outline"
            size="md"
            href="/products"
          >
            View Catalogue
          </Button>
        </div>
      </div>
    </div>
  );
}
