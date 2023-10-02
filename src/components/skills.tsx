'use client';

import SectionHeader from './section-header';

import { skillsData } from '@/../lib/data';
import clsx from 'clsx';
import { useSectionInView } from '../../lib/hooks';

export default function Skills() {
  const { ref } = useSectionInView('Skills');
  const currentTech: string[] = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind',
    'Git',
    'Tailwind',
    'Framer Motion',
    'HTML',
    'CSS',
  ];

  return (
    <section
      className="h-[100vh] max-w-[45rem] mb-28 mx-auto scroll-mt-28 text-center  sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeader>My skills</SectionHeader>

      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <li
            className={clsx('bg-white borderBlack rounded-xl px-5 py-3', {
              'border border-green-700': currentTech.includes(skill),
            })}
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
