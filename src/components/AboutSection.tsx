import React from 'react';
import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

interface AboutSectionProps {
  onContactClick: () => void;
}

const ABOUT_TEXT =
  'Product designer and project coordinator with 4+ years of experience designing web applications, mobile apps, and SaaS platforms. Based in Dhaka, I have led 200+ client projects and a cross-functional team of 20+ designers and developers. Let’s build something impactful together!';

export default function AboutSection({ onContactClick }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 bg-[#0C0C0C] overflow-hidden"
    >
      {/* Top-left decorative 3D image: Moon icon */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-left decorative 3D image: 3D object */}
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain"
        />
      </FadeIn>

      {/* Top-right decorative 3D image: Lego icon */}
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain"
        />
      </FadeIn>

      {/* Bottom-right decorative 3D image: 3D group */}
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none select-none"
      >
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain"
        />
      </FadeIn>

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn delay={0} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              About me
            </h2>
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[580px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <ContactButton onClick={onContactClick} />
      </div>
    </section>
  );
}
