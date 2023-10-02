'use client';

import { useSectionInView } from '@/../lib/hooks';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from './section-header';
import { useRef } from 'react';

export default function About() {
  const { ref } = useSectionInView('About');
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="h-[100vh] mb-28 mx-auto max-w-[45rem] text-center leading-8 scroll-mt-28 sm:mb-40 "
      id="about"
      initial={{ opacity: 0, y: 100 }}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <div ref={scrollRef}>
        <p>
          I am a <span className="font-medium">Senior Full-stack Engineer</span>{' '}
          with a specialization in <span className="font-medium">.NET</span> and
          a decade of experience in Web Development. My expertise extends to
          being a <span className="font-medium">Senior Frontend Engineer</span>
          with a focus on{' '}
          <span className="font-medium">
            component-based frameworks
          </span> like <span className="font-medium">Web Components</span> and
          <span className="font-medium">React</span>. I have a strong background
          in team management, having served as a scrum master and mentor in
          various roles. My experience encompasses diverse working arrangements,
          including multi-project assignments, in-flight project deployments,
          and the ability to work both independently and with teams of varying
          sizes. I am well-versed in the Agile way of working, with a particular
          proficiency in the scrum methodology. Additionally, I bring experience
          in risk management, project documentation, and familiarity with common
          CI/CD and ALM tools to the table.
        </p>
      </div>
    </motion.section>
  );
}
