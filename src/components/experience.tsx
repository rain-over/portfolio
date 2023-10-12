'use client';

import { useSectionInView } from '@/../lib/hooks';
import SectionHeader from './section-header';

import { Chrono } from 'react-chrono';

import { experienceData } from '@/../lib/data';

export default function Experience() {
  const { ref } = useSectionInView('Experience');

  return (
    <section
      className="bg-neutral-200 h-[100vh] leading-8 mx-auto pt-[15vh] snap-center text-center"
      id="experience"
      ref={ref}
    >
      <SectionHeader>My Work Experience</SectionHeader>

      <Chrono
        items={experienceData}
        mode="VERTICAL_ALTERNATING"
        mediaSettings={{ align: 'center', fit: 'contain' }}
        theme={{
          primary: '#ffffff', //line
          secondary: '#6b7280', // selected timeline bg
          cardBgColor: '#ffffff',
          cardForeColor: 'red',
          titleColor: '#030712',
          titleColorActive: '#ffffff',
        }}
      />
    </section>
  );
}
