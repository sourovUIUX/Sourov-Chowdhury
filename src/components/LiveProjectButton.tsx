import React from 'react';
import Magnet from './Magnet';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
}

export default function LiveProjectButton({ onClick, className = '' }: LiveProjectButtonProps) {
  return (
    <Magnet padding={50} magnetStrength={4}>
      <button
        type="button"
        onClick={onClick}
        className={`rounded-full cursor-pointer border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base whitespace-nowrap shrink-0 transition-colors duration-200 hover:bg-[#D7E2EA]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7E2EA] ${className}`}
      >
        Live Project
      </button>
    </Magnet>
  );
}
