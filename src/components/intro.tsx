'use client';

import {
  Transition,
  circOut,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

import { useMotions, useSectionInView } from '@/../lib/hooks';
import { Radley } from 'next/font/google';
import Link from 'next/link';
import { useRef, useState } from 'react';

import { JustifyContentProperty } from '@/../lib/types';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';

const name: Array<String> = "I'm Rain   ".split('');
const radley = Radley({ subsets: ['latin'], weight: '400' });
const radley_i = Radley({
  style: ['italic'],
  subsets: ['latin'],
  weight: '400',
});

export default function Intro() {
  const [justifyContent, setJustifyContent] =
    useState<JustifyContentProperty>('center');
  const { ref } = useSectionInView('Home');
  const ref1 = useRef(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: ref1,
    offset: ['start start', 'end start'],
    //["start start", "end end"], //default
    /* 1. 0 starts at first view, increase to start when more of section is in view
      2. set to 1 starts within section view
      3. set to 2 so it end further from section view
      4. set to 0, increasing reverses end
    */
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 600]);
  const y1 = useTransform(scrollY, [0, 1000], [0, 450]);
  const transition: Transition = useMotions() ? {} : { delay: 0, duration: 0 };
  const springTransition: Transition = {
    type: 'spring',
    damping: 30,
    duration: 3,
    ...transition,
  };

  return (
    <motion.section
      className="relative flex h-[100vh] w-full snap-center flex-row items-center 
        justify-center overflow-hidden bg-white  dark:bg-neutral-900"
      id="home"
      ref={ref}
    >
      <motion.div
        className="relative flex h-[100vh] w-full snap-center flex-row items-center 
        justify-center"
        style={{ y }}
        ref={ref1}
      >
        <motion.div
          className="absolute h-full w-full bg-black dark:bg-white sm:block"
          initial={{ y: 0 }}
          animate={{
            y: '-100vh',
            transitionEnd: {
              display: 'none',
            },
          }}
          transition={{
            delay: 1.2,
            duration: 1,
            ease: 'easeOut',
            ...transition,
          }}
        ></motion.div>
        <motion.div
          className={`absolute ${useMotions() ? 'block' : 'hidden'}`}
          animate={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.8, ...transition }}
        >
          <motion.div
            className="z-[1] origin-bottom-right rotate-[15deg] text-[5rem]"
            animate={{
              rotate: [15, 10, 15, 5],
            }}
            transition={{ duration: 0.8, ...transition }}
          >
            <span>👋</span>
          </motion.div>
        </motion.div>
        <div
          className="ml-5 flex h-[670px] w-[1200px] flex-col-reverse items-center 
          dark:text-white md:h-[300px] md:flex-row lg:mx-0"
          style={{ justifyContent }}
        >
          <motion.div layout transition={{ springTransition }}>
            <motion.div
              initial={{ fontSize: '5rem' }}
              animate={{ fontSize: '2rem' }}
              transition={{ delay: 3.3, duration: 0.3, ...transition }}
            >
              <span className={`${radley_i.className}`}>Hello</span>,{' '}
              <span className="sr-only">I'm Rain</span>
              <span aria-hidden>
                {name.map((c, i) => (
                  <motion.span
                    className={`${radley.className} inline-block whitespace-pre`}
                    key={i}
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 2.2 + (i < 3 ? 0 : i) / 10,
                      duration: 0.01,
                      ...transition,
                    }}
                    onAnimationComplete={() =>
                      i === name.length - 1 && setJustifyContent('space-around')
                    }
                  >
                    {c}
                  </motion.span>
                ))}
              </span>
            </motion.div>
            <motion.div>
              <p>
                <motion.span
                  className="inline-block text-[3rem] font-bold"
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...springTransition,
                    delay: 4,
                    ...transition,
                  }}
                >
                  Full Stack Developer
                </motion.span>{' '}
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    ...springTransition,
                    delay: 4.5,
                    ...transition,
                  }}
                >
                  I've been in web development for nearly a{' '}
                  <span className="font-medium">decade</span>. <br />I have
                  built multiple web apps with different tech stacks, and right
                  now <br />I am focused on{' '}
                  <span className="font-medium ">.NET Core</span> and{' '}
                  <span className="font-medium ">React (Next.js)</span>.
                </motion.span>
              </p>
            </motion.div>
            <motion.div
              className="mt-10 flex flex-col items-center gap-2 text-lg font-medium 
              sm:justify-start md:flex-row"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ...springTransition,
                delay: 5,
                duration: 0.7,
                ...transition,
              }}
            >
              <Link
                className="flex items-center gap-2 rounded-full bg-white  px-5 py-1 
                text-gray-700 shadow-sm outline-none transition hover:scale-110 
                focus:scale-110 active:scale-105"
                href="#contact"
              >
                <FiMail /> Contact me
              </Link>
              <a
                className="flex items-center gap-2 rounded-full bg-white px-5 py-1 
                text-gray-700 shadow-sm outline-none transition hover:scale-110 
                focus:scale-110 active:scale-105"
                download
                href="/CV.pdf"
              >
                <FiDownload /> Download CV
              </a>
              <div className="flex flex-row gap-2">
                <a
                  className="flex items-center rounded-full bg-white px-2 py-2 
                  text-[1.35rem] text-gray-700 shadow-sm outline-none transition 
                  hover:scale-110 focus:scale-110 active:scale-105"
                  href="https://github.com/rain-over"
                  target="_blank"
                >
                  <FaGithubSquare />
                </a>
                <a
                  className="flex items-center rounded-full bg-white px-2 py-2 
                  text-[1.35rem] text-gray-700 shadow-sm outline-none transition 
                  hover:scale-110 focus:scale-110 active:scale-105"
                  href="https://linkedin.com/rain-over"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden overflow-hidden text-center xs:block short:hidden"
            initial={{ width: 0 }}
            animate={{
              width: '300px',
            }}
            transition={{ delay: 3.2, ...transition }}
          >
            <motion.span
              className=" relative mt-[30px] inline-block h-[250px] w-[250px] 
              rounded-[50%] border-4 border-solid border-neutral-800 bg-neutral-800"
              style={{}}
              initial={{ opacity: 0, overflow: 'hidden' }}
              animate={{ opacity: 1, overflow: 'visible' }}
              transition={{ delay: 4.5, duration: 1, ...transition }}
            >
              <motion.span
                className="ml-[1px] mt-[-48px] inline-block h-[290px] w-[240px] 
                  rounded-b-[242px] bg-[size:340px] bg-bottom bg-no-repeat"
                initial={{ opacity: 0, y: 100 }}
                style={{
                  backgroundImage: `url('@/../profile_photo.png')`,
                  y: y1,
                }}
                animate={{ opacity: [0, 1, 1, 1], y: [100, 0] }}
                transition={{
                  delay: 5,
                  duration: 1.5,
                  ease: circOut,
                  ...transition,
                }}
                layout="position"
              ></motion.span>
              <motion.span
                className="profile-cover"
                // animate={{ opacity: 0 }}
                // transition={{ delay: 7, ...transition }}
              ></motion.span>
            </motion.span>
          </motion.div>
        </div>
        <Link href="#about" className="absolute bottom-1">
          <motion.svg
            className="motion-reduce:animate-bounce "
            fill="#334155"
            height="90"
            viewBox="0 0 24 24"
            width="90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6, ...transition }}
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
            <path d="M0-.75h24v24H0z" fill="none" />
          </motion.svg>{' '}
        </Link>
      </motion.div>
    </motion.section>
  );
}
