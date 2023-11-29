'use client';

import SectionHeader from './section-header';

import { currentTech, skillsData } from '@/../lib/data';
import clsx from 'clsx';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useSectionInView } from '@/../lib/hooks';
import { useRef } from 'react';

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
  const { ref, inView } = useSectionInView('Skills');
  const ref1 = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref1,
    offset: ['0 1', '2 0'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const y1 = useTransform(scrollY, [0, 400], [0, 150]);

  return (
    <motion.section
      className="mx-auto h-[100vh] max-w-[45rem] snap-center overflow-hidden bg-white pt-8 text-center dark:bg-cyan-950"
      id="skills"
      ref={ref}
      style={{}}
    >
      <motion.div></motion.div>
      <motion.div
        ref={ref1}
        className=""
        style={{ y }}
        // transition={{ ease: easeInOut }}
      >
        <SectionHeader>My skills</SectionHeader>

        <ul className="text-gray-80 0 flex flex-wrap justify-center gap-2 text-lg">
          {skillsData.map((skill, index) => (
            <motion.li
              className={clsx(
                'borderBlack rounded-xl bg-white px-5 py-3 shadow-sm se:px-3 se:py-1',
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
      </motion.div>
    </motion.section>
  );
}
