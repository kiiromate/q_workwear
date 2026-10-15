import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'full' | 'mark';
  theme?: 'light' | 'dark' | 'brand';
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Logo({
  variant = 'full',
  theme = 'light',
  className = '',
  href = '/',
  onClick,
}: LogoProps) {
  // Theme color mapping:
  // light: On light background (Brand red emblem + Dark slate text)
  // dark: On dark background (White emblem + White text)
  // brand: On brand red background (White emblem + White text)
  const isDark = theme === 'dark' || theme === 'brand';

  const content = (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Brand Mark Emblem */}
      <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-sm bg-[#E0483A] shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-7 h-7 text-white"
          fill="currentColor"
          aria-hidden="true"
        >
          {/* Stylized Q from client brand logo */}
          <path
            d="M50 16 C31 16 16 31 16 50 C16 67 29 81 46 83.5 L46 72 C35 70 27 61 27 50 C27 37 37 27 50 27 C63 27 73 37 73 50 C73 57 70 63 65 67 L73 75 C80 69 84 60 84 50 C84 31 69 16 50 16 Z"
            fill="currentColor"
          />
          {/* Inner counter break and diagonal tail */}
          <path
            d="M56 46 L76 76 L66 84 L48 57 Z"
            fill="currentColor"
          />
          {/* Flowing bottom tailoring / ribbon wave underline */}
          <path
            d="M20 86 C32 86 38 80 50 80 C62 80 68 86 80 86 C84 86 87 85 90 83 L90 77 C87 79 84 80 80 80 C68 80 62 74 50 74 C38 74 32 80 20 80 C16 80 13 79 10 77 L10 83 C13 85 16 86 20 86 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Typography Wordmark */}
      {variant === 'full' && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-black text-xl sm:text-2xl tracking-tight ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}
          >
            Q WORKWEAR
          </span>
          <span
            className={`text-[9px] sm:text-[10px] font-semibold tracking-[0.25em] uppercase ${
              isDark ? 'text-zinc-400' : 'text-zinc-500'
            }`}
          >
            Tailoring • Kigali, Rwanda
          </span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} className="inline-flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0483A] rounded-lg">
        {content}
      </Link>
    );
  }

  return content;
}
