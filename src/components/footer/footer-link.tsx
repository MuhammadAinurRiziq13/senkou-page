import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

interface FooterLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function FooterLink({
  children,
  className,
  ...props
}: FooterLinkProps) {
  return (
    <Link
      className={`hover:text-white transition-colors ${className || ''}`}
      {...props}
    >
      {children}
    </Link>
  );
}
