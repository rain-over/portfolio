'use client';

import { useSectionInView } from '@/../lib/hooks';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import SectionHeader from './section-header';

export default function About() {
  const { ref } = useSectionInView('About');
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <motion.section
      className="
      bg-zinc-200 full-bleed h-[100vh] leading-8
      max-w-[45rem] mx-auto   pt-[15vh]
      shadow-zinc-200 snap-center text-center"
      id="about"
      ref={ref}
    >
      <SectionHeader>About Me</SectionHeader>
      <div ref={scrollRef}>
        <p className="se:text-[0.8rem] se:leading-6 text-justify px-3">
          I am a <span className="font-medium">Full-stack Developer</span> with
          a specialization in <span className="font-medium">.NET</span> and a
          decade of experience in Web Development. My expertise extends to being
          a <span className="font-medium"> Frontend Developer</span> with a
          focus on{' '}
          <span className="font-medium">component-based frameworks</span> like{' '}
          <span className="font-medium">Web Components</span> and{' '}
          <span className="font-medium">React</span>. I have a strong background
          in team management, having served as a{' '}
          <span className="font-medium">scrum master</span> and mentor in
          various roles. My experience encompasses diverse working arrangements,
          including{' '}
          <span className="font-medium">multi-project assignments</span>,{' '}
          <span className="font-medium">in-flight project deployments</span>,
          and the ability to work both independently and with teams of varying
          sizes. I am well-versed in the{' '}
          <span className="font-medium">Agile way of working</span>, with a
          particular proficiency in the{' '}
          <span className="font-medium">scrum methodology</span>. Additionally,
          I bring experience in{' '}
          <span className="font-medium">risk management</span>,{' '}
          <span className="font-medium">project documentation</span>, and{' '}
          <span className="font-medium">
            familiarity with common CI/CD and ALM tools
          </span>{' '}
          to the table.
        </p>
      </div>
    </motion.section>
  );
}
