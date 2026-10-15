import React from 'react';
import { Badge } from '@/components/common/Badge';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'left',
  action,
  className,
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={cn(
        'flex flex-col gap-3 mb-10 sm:mb-12',
        isCenter ? 'items-center text-center' : 'items-start text-left',
        action && 'md:flex-row md:items-end md:justify-between',
        className
      )}
    >
      <div className={cn('max-w-2xl', isCenter && 'mx-auto')}>
        {badge && (
          <div className="mb-3">
            <Badge variant="brand" size="sm">
              {badge}
            </Badge>
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-zinc-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {action && <div className="mt-4 md:mt-0 shrink-0">{action}</div>}
    </div>
  );
}
