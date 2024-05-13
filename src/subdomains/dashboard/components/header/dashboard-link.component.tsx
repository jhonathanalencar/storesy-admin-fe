'use client';

import type { ComponentProps } from 'react';
import Link, { type LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';

type DashboardLinkProps = ComponentProps<'a'> & LinkProps;

export function DashboardLink({
  href,
  children,
  className,
  ...rest
}: DashboardLinkProps) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={twMerge(
        'flex items-center gap-1 rounded-full px-3 py-1.5 transition-colors duration-200',
        className,
        pathname === href ? 'bg-zinc-700' : null,
        pathname !== href ? 'hover:bg-white/10' : null
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
