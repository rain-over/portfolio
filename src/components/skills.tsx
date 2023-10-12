'use client';

import SectionHeader from './section-header';

import { skillsData } from '@/../lib/data';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useSectionInView } from '../../lib/hooks';

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
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.009 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills');

  return (
    <section
      className="h-[100vh] max-w-[45rem] mb-28 mx-auto pt-[15vh] sm:mb-40 snap-center text-center"
      id="skills"
      ref={ref}
    >
      <SectionHeader>My skills</SectionHeader>

      <ul className="flex flex-wrap gap-2 justify-center text-gray-80 text-lg 0">
        {skillsData.map((skill, index) => (
          <motion.li
            className={clsx(
              'bg-white borderBlack rounded-xl px-5 py-3 shadow-sm se:px-3 se:py-1',
              {
                'border border-green-700': currentTech.includes(skill),
              }
            )}
            custom={index}
            initial="initial"
            key={index}
            variants={fadeInAnimationVariants}
            whileInView="animate"
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
