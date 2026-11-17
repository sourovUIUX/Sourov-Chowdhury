import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface InteractivePortraitProps {
  src: string;
  alt: string;
}

export default function InteractivePortrait({ src, alt }: InteractivePortraitProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 140, damping: 18, mass: 0.6 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-10, 10]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [10, -10]);
  const translateX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const translateY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(Math.max(-0.5, Math.min(0.5, nx)));
    mouseY.set(Math.max(-0.5, Math.min(0.5, ny)));
  };

  const handlePointerLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="relative w-full select-none cursor-grab active:cursor-grabbing"
      style={{ perspective: '900px' }}
    >
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.18}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{
          rotateX,
          rotateY,
          x: translateX,
          y: translateY,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
        className="relative w-full"
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="block w-full h-auto object-contain select-none pointer-events-none"
          style={{
            filter: 'drop-shadow(0 24px 48px rgba(0, 0, 0, 0.65))',
            maskImage: 'linear-gradient(to bottom, #000000 82%, transparent 100%)',
            WebkitMaskImage:
              'linear-gradient(to bottom, #000000 82%, transparent 100%)',
          }}
        />
      </motion.div>
    </div>
  );
}
