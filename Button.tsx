import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
}

export default function Button({ variant = 'primary', icon, children, className = '', ...props }: ButtonProps) {
  const base = variant === 'primary' ? 'btn-primary' : variant === 'secondary' ? 'btn-secondary' : 'inline-flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors';
  return (
    <button className={`${base} ${className}`} {...props}>
      {icon}
      {children}
    </button>
  );
}
