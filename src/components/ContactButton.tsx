import React from 'react';
import Magnet from './Magnet';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function ContactButton({ onClick, className = '' }: ContactButtonProps) {
  return (
    <Magnet padding={60} magnetStrength={3.5}>
      <button
        type="button"
        onClick={onClick}
        className={`contact-btn rounded-full cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-white font-medium uppercase tracking-widest text-xs sm:text-sm md:text-base whitespace-nowrap shrink-0 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#D7E2EA] ${className}`}
      >
        Contact Me
      </button>
    </Magnet>
  );
}
