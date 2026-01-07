import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    px-8 py-4 rounded-2xl font-semibold text-base
    transition-all duration-300
    focus:outline-none focus:ring-4 focus:ring-purple-500/50
    disabled:opacity-50 disabled:cursor-not-allowed
    inline-block text-center
    relative overflow-hidden
    transform-gpu
  `;

  const variants = {
    primary: `
      bg-gradient-to-r from-purple-600 to-blue-600
      hover:from-purple-500 hover:to-blue-500
      text-white shadow-lg shadow-purple-500/30
      hover:shadow-2xl hover:shadow-purple-500/50
      hover:scale-105 hover:-translate-y-1
      active:scale-95
      before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0
      before:translate-x-[-100%] hover:before:translate-x-[100%]
      before:transition-transform before:duration-700
    `,
    secondary: `
      bg-white/10 backdrop-blur-sm border border-white/20
      hover:bg-white/20 hover:border-white/30
      text-white hover:scale-105 hover:-translate-y-1
      active:scale-95
      hover:shadow-lg hover:shadow-white/10
    `,
    outline: `
      border-2 border-white/30 bg-transparent
      hover:bg-white/10 hover:border-white/50
      text-white hover:scale-105 hover:-translate-y-1
      active:scale-95
    `,
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
