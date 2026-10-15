'use client';

import React, { useState } from 'react';
import { MessageCircle, ExternalLink, AlertCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppUrl } from '@/lib/whatsapp';
import { Button, ButtonProps } from '@/components/common/Button';
import { siteConfig } from '@/content/site';

interface WhatsAppButtonProps {
  message?: string;
  label?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  className?: string;
  showIcon?: boolean;
}

export function WhatsAppButton({
  message = 'Hello Q Workwear, I would like to request a quotation for custom uniforms.',
  label = 'Enquire on WhatsApp',
  variant = 'whatsapp',
  size = 'md',
  className,
  showIcon = true,
}: WhatsAppButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const { url, isVerified } = buildWhatsAppUrl(message);

  const handleClick = (e: React.MouseEvent) => {
    if (!isVerified) {
      e.preventDefault();
      setShowModal(true);
    }
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        href={url}
        external={isVerified}
        onClick={handleClick}
        icon={showIcon ? <MessageCircle className="w-4 h-4" /> : undefined}
        className={className}
      >
        {label}
      </Button>

      {/* Safety Notice Modal for unverified demo state */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md p-6 bg-white rounded-3xl shadow-2xl border border-stone-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900">
                  Client WhatsApp Pending Verification
                </h3>
                <p className="text-xs text-zinc-500">Q Workwear Demo Mode</p>
              </div>
            </div>

            <p className="text-sm text-zinc-600 mb-4 leading-relaxed">
              In this preview version, direct WhatsApp messaging is paused until founders Quddus and Tinah provide their official business WhatsApp line.
            </p>

            <div className="p-3.5 mb-5 bg-stone-50 rounded-xl border border-stone-200 text-xs text-zinc-700">
              <span className="font-semibold block text-zinc-900 mb-1">
                Prefilled WhatsApp Payload:
              </span>
              <p className="italic text-zinc-600 font-mono">
                &ldquo;{message}&rdquo;
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5">
              <Button
                variant="primary"
                size="md"
                href={`/contact?intent=quote&draft=${encodeURIComponent(message)}`}
                className="w-full sm:flex-1"
                onClick={() => setShowModal(false)}
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Go to Contact Page
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => setShowModal(false)}
                className="w-full sm:w-auto"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
