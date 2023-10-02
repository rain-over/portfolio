'use client';

import React, { useEffect } from 'react';
import SectionHeader from './section-header';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '../../context/active-section-context';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) {
      setActiveSection('About');
    }
  }, [inView, setActiveSection]);

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      className="h-[100vh] mb-28 mx-auto max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      ref={ref}
      transition={{ delay: 0.175 }}
    >
      <SectionHeader>About Me</SectionHeader>
      <p>
        I am a <span className="font-medium">Senior Full-stack Engineer</span>{' '}
        with a specialization in <span className="font-medium">.NET</span> and a
        decade of experience in Web Development. My expertise extends to being a{' '}
        <span className="font-medium">Senior Frontend Engineer</span>
        with a focus on{' '}
        <span className="font-medium">
          component-based frameworks
        </span> like <span className="font-medium">Web Components</span> and
        <span className="font-medium">React</span>. I have a strong background
        in team management, having served as a scrum master and mentor in
        various roles. My experience encompasses diverse working arrangements,
        including multi-project assignments, in-flight project deployments, and
        the ability to work both independently and with teams of varying sizes.
        I am well-versed in the Agile way of working, with a particular
        proficiency in the scrum methodology. Additionally, I bring experience
        in risk management, project documentation, and familiarity with common
        CI/CD and ALM tools to the table.
      </p>
    </motion.section>
  );
}
