import React, { useMemo, useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'motion/react';

interface AnimatedCharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function AnimatedChar({ char, progress, range }: AnimatedCharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedText({ text, className = '', style }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const { words, totalChars } = useMemo(() => {
    const splitWords = text.split(' ');
    let charCount = 0;
    const mapped = splitWords.map((word, wordIdx) => {
      const chars = word.split('').map((ch) => {
        const idx = charCount;
        charCount += 1;
        return { ch, idx };
      });
      if (wordIdx < splitWords.length - 1) {
        charCount += 1;
      }
      return chars;
    });
    return { words: mapped, totalChars: Math.max(1, charCount) };
  }, [text]);

  return (
    <p ref={containerRef} className={className} style={style}>
      {words.map((wordChars, wIdx) => (
        <React.Fragment key={wIdx}>
          <span className="inline-block whitespace-nowrap">
            {wordChars.map(({ ch, idx }) => {
              const start = idx / totalChars;
              const end = Math.min(1, start + 1 / totalChars);
              return (
                <AnimatedChar
                  key={idx}
                  char={ch}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
          {wIdx < words.length - 1 ? ' ' : null}
        </React.Fragment>
      ))}
    </p>
  );
}
