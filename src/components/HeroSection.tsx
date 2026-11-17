import React from 'react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';
import InteractivePortrait from './InteractivePortrait';

interface HeroSectionProps {
  onContactClick: () => void;
}

export default function HeroSection({ onContactClick }: HeroSectionProps) {
  return (
    <section
      className="h-screen w-full flex flex-col justify-between relative bg-[#0C0C0C]"
      style={{ overflowX: 'clip' }}
    >
      {/* Navbar (Price removed per user request) */}
      <FadeIn delay={0} y={-20} className="relative z-20">
        <nav
          aria-label="Primary"
          className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8"
        >
          <a
            href="#about"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#experience"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <button
            type="button"
            onClick={onContactClick}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 whitespace-nowrap shrink-0 cursor-pointer bg-transparent border-0"
          >
            Contact
          </button>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="overflow-hidden relative z-0 px-2 sm:px-4">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[11.5vw] sm:text-[13vw] md:text-[14vw] lg:text-[14.8vw] mt-6 sm:mt-4 md:-mt-4 text-center select-none">
            Hi, i&apos;m sourov
          </h1>
        </FadeIn>
      </div>

      {/* 3D Character Portrait */}
      <div className="hero-portrait-wrap">
        <FadeIn delay={0.6} y={30}>
          <InteractivePortrait
            src="/assets/aistudio/011_69d70d56.png"
            alt="Sourov Chowdhury — 3D Character Portrait"
          />
        </FadeIn>
      </div>

      {/* Bottom Bar */}
      <div className="mt-auto relative z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
            style={{ fontSize: 'clamp(0.75rem, 1.35vw, 1.35rem)' }}
          >
            product designer &amp; project coordinator leading 200+ digital products
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
}
