import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

export interface ProjectItem {
  number: string;
  name: string;
  category: string;
  col1Images: [string, string];
  col2Image: string;
  summary: string;
  deliverables: string[];
  linksLabel?: string;
}

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    number: '01',
    name: 'Samvin',
    category: 'Medical Technology · Client',
    col1Images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
    ],
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    summary:
      'Medical technology website for surgical imaging, robotics, and spine surgery solutions. Designed for clinical precision, clear product architecture, and effortless surgeon-facing navigation.',
    deliverables: ['UI/UX Design', 'Information Architecture', 'Figma Prototype'],
    linksLabel: 'Live · Figma',
  },
  {
    number: '02',
    name: 'WeAreSMS',
    category: 'B2B SaaS Platform · Client',
    col1Images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    ],
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    summary:
      'WeAreSMS is a B2B messaging and marketing automation SaaS platform built for campaign orchestration, audience segmentation, and real-time delivery analytics.',
    deliverables: ['SaaS Product Design', 'Design System', 'Dashboard UX'],
    linksLabel: 'Live · Figma',
  },
  {
    number: '03',
    name: 'EasyTax',
    category: 'FinTech Web App · Product',
    col1Images: [
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    ],
    col2Image:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    summary:
      'A business finance web app for tracking invoices, expenses, bank accounts, and projects across multiple currencies, featuring granular team roles and an integrated AI chatbot.',
    deliverables: ['Web App UX', 'Multi-Currency UI', 'AI Chatbot Flows'],
    linksLabel: 'Figma',
  },
];

export const MORE_PROJECTS: ProjectItem[] = [
  {
    number: '04',
    name: 'Skinnify',
    category: 'B2C Activewear · Live',
    col1Images: FEATURED_PROJECTS[0].col1Images,
    col2Image: FEATURED_PROJECTS[0].col2Image,
    summary:
      'B2C activewear e-commerce brand specializing in fitness-focused clothing, designed around clean visual merchandising and high-converting checkout flows.',
    deliverables: ['E-Commerce UX', 'Brand Storefront', 'Mobile Responsive'],
    linksLabel: 'Live',
  },
  {
    number: '05',
    name: 'Shirun Heavy',
    category: 'B2B Export · Live · Figma',
    col1Images: FEATURED_PROJECTS[1].col1Images,
    col2Image: FEATURED_PROJECTS[1].col2Image,
    summary:
      'B2B website for exporting used concrete pump trucks from China to international buyers, simplifying heavy-machinery inspection specs and global inquiry workflows.',
    deliverables: ['B2B Web Design', 'Catalog UX', 'Lead Funnel'],
    linksLabel: 'Live · Figma',
  },
  {
    number: '06',
    name: 'NexFlightAero',
    category: 'Aviation · Live',
    col1Images: FEATURED_PROJECTS[2].col1Images,
    col2Image: FEATURED_PROJECTS[2].col2Image,
    summary:
      'Private jet charter landing page engineered for FIFA World Cup 2026 travelers, pairing editorial luxury aesthetics with rapid route-inquiry booking.',
    deliverables: ['Landing Page', 'Charter Inquiry UX', 'Visual Direction'],
    linksLabel: 'Live',
  },
  {
    number: '07',
    name: 'GymProLuxe',
    category: 'Mobile App · Play Store · Figma',
    col1Images: FEATURED_PROJECTS[0].col1Images,
    col2Image: FEATURED_PROJECTS[0].col2Image,
    summary:
      'Mobile fitness app with guided workout programs, intuitive exercise progression, and clean daily session tracking shipped to Google Play Store.',
    deliverables: ['Mobile App UI/UX', 'Workout Flows', 'Design System'],
    linksLabel: 'Play Store · Figma',
  },
  {
    number: '08',
    name: '5 AM',
    category: 'AI Fitness App · Figma',
    col1Images: FEATURED_PROJECTS[1].col1Images,
    col2Image: FEATURED_PROJECTS[1].col2Image,
    summary:
      'AI-powered fitness app that tracks workouts, runs, and nutrition while coaching user form and progress with adaptive feedback.',
    deliverables: ['AI Coaching UX', 'iOS / Android UI', 'Interactive Prototype'],
    linksLabel: 'Figma',
  },
];

interface StickyProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  onSelectProject: (project: ProjectItem) => void;
}

function StickyProjectCard({
  project,
  index,
  totalCards,
  progress,
  onSelectProject,
}: StickyProjectCardProps) {
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const start = index * (1 / totalCards);
  const scale = useTransform(progress, [start, 1], [1, targetScale]);

  return (
    <div className="h-[85vh] flex items-start justify-center sticky top-24 md:top-32">
      <motion.article
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="relative w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 origin-top"
      >
        {/* Top Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#D7E2EA] tabular-nums shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                {project.category}
              </span>
              <h3
                className="font-medium uppercase text-[#D7E2EA] leading-tight"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton onClick={() => onSelectProject(project)} />
        </div>

        {/* Bottom Row: Two-column image grid (40% / 60%) */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3 sm:gap-4 md:gap-6 items-stretch">
          <div className="md:col-span-4 flex flex-col gap-3 sm:gap-4 md:gap-6">
            <img
              src={project.col1Images[0]}
              alt={`${project.name} detail 1`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <img
              src={project.col1Images[1]}
              alt={`${project.name} detail 2`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="md:col-span-6">
            <img
              src={project.col2Image}
              alt={`${project.name} showcase`}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="w-full h-full min-h-[200px] object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px] bg-[#161616]"
            />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div ref={containerRef} className="relative pb-12 sm:pb-20">
        {FEATURED_PROJECTS.map((project, index) => (
          <StickyProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={FEATURED_PROJECTS.length}
            progress={scrollYProgress}
            onSelectProject={onSelectProject}
          />
        ))}
      </div>

      {/* Additional Selected Projects from Resume */}
      <div className="max-w-6xl mx-auto pt-12 sm:pt-16 border-t border-[#D7E2EA]/15">
        <FadeIn delay={0} y={20}>
          <p className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 mb-8">
            More Selected Works
          </p>
        </FadeIn>
        <div className="divide-y divide-[#D7E2EA]/15">
          {MORE_PROJECTS.map((item, idx) => (
            <FadeIn key={item.number} delay={idx * 0.06} y={20}>
              <button
                type="button"
                onClick={() => onSelectProject(item)}
                className="w-full py-6 sm:py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-left group cursor-pointer bg-transparent border-0"
              >
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-xl sm:text-3xl font-black text-[#D7E2EA]/40 group-hover:text-[#D7E2EA] transition-colors tabular-nums">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-medium uppercase text-[#D7E2EA] group-hover:opacity-80 transition-opacity">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#D7E2EA]/55 mt-1 max-w-xl font-light">
                      {item.summary}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#D7E2EA]/70 shrink-0 pl-9 sm:pl-0">
                  <span>{item.linksLabel}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
