import React from 'react';
import { motion } from 'motion/react';

type MotionTag = keyof React.JSX.IntrinsicElements;

const motionComponentCache = new Map<MotionTag, React.ComponentType<Record<string, unknown>>>();

function getMotionComponent(tag: MotionTag) {
  let cached = motionComponentCache.get(tag);
  if (!cached) {
    cached = motion.create(tag as React.ElementType) as React.ComponentType<Record<string, unknown>>;
    motionComponentCache.set(tag, cached);
  }
  return cached;
}

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  style?: React.CSSProperties;
  as?: MotionTag;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  style,
  as = 'div',
}: FadeInProps) {
  const Component = getMotionComponent(as);

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
    >
      {children}
    </Component>
  );
}
