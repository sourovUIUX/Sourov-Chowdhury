import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 32,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-40 h-[2px] origin-left pointer-events-none"
      style={{
        scaleX,
        willChange: 'transform',
        background: 'linear-gradient(90deg, #646973 0%, #BBCCD7 65%, #D7E2EA 100%)',
      }}
    />
  );
}
