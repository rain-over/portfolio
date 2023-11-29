'use client';

import { useSectionInView } from '@/../lib/hooks';
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { about } from '../../lib/data';
import SectionHeader from './section-header';

export default function About() {
  const { ref } = useSectionInView('About');
  const ref1 = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref1,
    offset: ['0 1', '2 0'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 500]);

  return (
    <motion.section
      className="full-bleed 
      relative mx-auto h-[100vh] max-w-[45rem]
      overflow-hidden bg-zinc-100 pt-8
      text-center leading-8 shadow-zinc-100 dark:bg-neutral-950 dark:text-white"
      id="about"
      ref={ref}
    >
      <motion.div
        ref={ref1}
        className=""
        style={{ y }}
        transition={{ ease: easeInOut }}
      >
        <SectionHeader>About Me</SectionHeader>
        <div ref={scrollRef} className="sm:text-xl">
          <p
            aria-hidden
            className="readable px-3 indent-1 se:text-[0.8rem] se:leading-6"
          >
            {about.split(' ').map((w, i) => (
              <span key={i}>{w}</span>
            ))}
          </p>
          <p className="sr-only">{about}</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
