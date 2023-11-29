'use client';

import { useSectionInView } from '@/../lib/hooks';
import SectionHeader from './section-header';

import { Chrono } from 'react-chrono';

import { experienceData } from '@/../lib/data';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Card from './card';
import { CardDetail } from '../../lib/types';
import React from 'react';

const detail: CardDetail = {
  cardTitle: 'Job Title',
  cardSubtitle: 'Company',
  img: '',
  cardDetailedText: 'I worked here',
  date: '',
};

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const ref1 = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref1,
    offset: ['0 1', '2 0'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <section
      className="mx-auto h-[100vh] snap-center overflow-hidden bg-zinc-100 pt-8 text-center leading-8"
      id="experience"
      ref={ref}
    >
      <motion.div ref={ref1} className="" style={{ y }}>
        <SectionHeader>My Work Experience</SectionHeader>

        <motion.div>
          <div className="relative flex">
            {Array(10)
              .fill(1)
              .map((el, i) => (
                <React.Fragment key={i}>
                  <Card {...detail} />
                </React.Fragment>
              ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
