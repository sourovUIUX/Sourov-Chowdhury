import React from 'react';
import FadeIn from './FadeIn';

const EXPERIENCE_ITEMS = [
  {
    number: '01',
    name: 'Product Designer & Project Coordinator',
    meta: 'Opedia Technologies Ltd. · Jan 2024 – Present · Dhaka, Bangladesh',
    description:
      'Own end-to-end design and delivery for 200+ client projects across web, mobile, and enterprise platforms. Lead a 20+ cross-functional team under Agile and Waterfall methodologies, reducing average turnaround by 20%.',
  },
  {
    number: '02',
    name: 'Senior UI/UX Designer',
    meta: 'Opedia Technologies Ltd. · Sep 2022 – Dec 2023',
    description:
      'Designed UI/UX for 150+ websites, mobile apps, and web applications. Promoted within 6 months and led a team of 10 across design, interactive prototyping, MVP delivery, and direct client communication.',
  },
  {
    number: '03',
    name: 'UI/UX Designer',
    meta: 'Opedia Technologies Ltd. · Mar 2022 – Aug 2022',
    description:
      'Built core craft in wireframing, prototyping, and user research in Figma on live client briefs from day one, running usability tests on early prototypes that shaped production releases.',
  },
  {
    number: '04',
    name: 'Skills, Tools & AI Workflows',
    meta: 'Design · Management · Tooling',
    description:
      'UI/UX Design, User Research, Information Architecture, Design Systems, Usability Testing, Agile & Waterfall Leadership. Tooling: Figma, Framer, Lovable, Adobe Photoshop, Illustrator, Claude & ChatGPT.',
  },
  {
    number: '05',
    name: 'Awards & Education',
    meta: '2023–2025 Honors · B.Sc. in CSE',
    description:
      '3 consecutive annual awards at Opedia Technologies Ltd. (Best Employee 2023, The Multitask Master 2024, Client Success Maestro 2025). B.Sc. in Computer Science & Engineering, Daffodil International University (2021).',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="experience"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Experience
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {EXPERIENCE_ITEMS.map((item, i) => (
          <FadeIn key={item.number} delay={i * 0.1}>
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-12 md:gap-16 py-8 sm:py-10 md:py-12"
              style={{
                borderBottom:
                  i < EXPERIENCE_ITEMS.length - 1
                    ? '1px solid rgba(12, 12, 12, 0.15)'
                    : 'none',
              }}
            >
              <span
                className="font-black leading-none text-[#0C0C0C] shrink-0 tabular-nums"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {item.number}
              </span>

              <div className="flex flex-col gap-1.5 sm:gap-2.5">
                <span className="text-xs sm:text-sm font-medium uppercase tracking-widest text-[#0C0C0C]/55">
                  {item.meta}
                </span>
                <h3
                  className="font-medium uppercase text-[#0C0C0C] leading-tight"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]"
                  style={{
                    fontSize: 'clamp(0.85rem, 1.5vw, 1.2rem)',
                    opacity: 0.65,
                  }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
