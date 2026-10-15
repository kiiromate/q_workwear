import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', href, external, icon, iconPosition = 'left', className, children, disabled, onClick, ...props }: ButtonProps) {
  const classes = cn('button', `button-${variant === 'whatsapp' ? 'primary' : variant}`, size === 'lg' && 'px-7 min-h-14', className);
  const content = <>{iconPosition === 'left' && icon}<span>{children}</span>{iconPosition === 'right' && icon}</>;
  if (href && disabled) return <span className={classes} aria-disabled="true">{content}</span>;
  if (href && external) return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}>{content}</a>;
  if (href) return <Link href={href} className={classes} onClick={onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}>{content}</Link>;
  return <button type="button" className={classes} disabled={disabled} onClick={onClick} {...props}>{content}</button>;
}
