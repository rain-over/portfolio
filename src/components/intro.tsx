'use client';

import { Transition, circOut, motion } from 'framer-motion';

import { useMotions, useSectionInView } from '@/../lib/hooks';
import { Radley } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

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

  const transition: Transition = useMotions() ? {} : { delay: 0, duration: 0 };

  const springTransition: Transition = {
    type: 'spring',
    // stiffness: 500,
    damping: 30,
    duration: 3,
    ...transition,
  };

  return (
    <section
      className="bg-slate-200 flex flex-row h-[100vh] 
      items-center justify-center relative snap-center w-full"
      id="home"
      ref={ref}
    >
      <motion.div
        className="absolute bg-black h-full hidden sm:block w-full"
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        }}
        transition={{
          delay: 1.2,
          duration: 2,
          ease: 'easeOut',
          ...transition,
        }}
      ></motion.div>
      <motion.div
        className={`absolute`}
        animate={{ opacity: 0 }}
        transition={{ delay: 1, duration: 0.8, ...transition }}
      >
        <motion.div
          className="origin-bottom-right rotate-[15deg] text-[5rem] z-[1]"
          animate={{
            rotate: [15, 10, 15, 5],
          }}
          transition={{ duration: 0.8, ...transition }}
        >
          <span>👋</span>
        </motion.div>
      </motion.div>
      <div
        className="flex flex-col-reverse items-center h-[670px] md:h-[300px] ml-5 w-[1200px] md:flex-row lg:mx-0"
        style={{ justifyContent }}
      >
        <motion.div layout transition={{ springTransition }}>
          <motion.div
            initial={{ fontSize: '5rem' }}
            animate={{ fontSize: '2rem' }}
            transition={{ delay: 3.3, duration: 1, ...transition }}
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
                className="font-bold inline-block text-[3rem]"
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
                I've been doing web development for nearly a{' '}
                <span className="font-medium">decade</span>. <br />I have built
                web apps with multiple tech stacks and right now, <br />
                my focused on <span className="font-medium ">
                  .NET Core
                </span>{' '}
                and <span className="font-medium ">React (Next.js)</span>.
              </motion.span>
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col font-medium gap-2 items-center md:flex-row mt-10 sm:justify-start text-lg"
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
              className="active:scale-105 bg-white flex focus:scale-110 gap-2 
                  hover:scale-110 items-center outline-none px-5 py-1 rounded-full shadow-sm transition"
              href="#contact"
            >
              <FiMail /> Contact me
            </Link>
            <a
              className="active:scale-105 bg-white flex focus:scale-110 gap-2 
                  hover:scale-110 items-center outline-none px-5 py-1 rounded-full shadow-sm transition"
              download
              href="/CV.pdf"
            >
              <FiDownload /> Download CV
            </a>
            <div className="flex flex-row gap-2">
              <a
                className="active:scale-105 bg-white flex focus:scale-110 hover:scale-110 items-center 
                    outline-none px-2 py-2 rounded-full shadow-sm text-[1.35rem] text-gray-700 transition"
                href="https://github.com/rain-over"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
              <a
                className="active:scale-105 bg-white flex focus:scale-110 hover:scale-110 items-center 
                    outline-none px-2 py-2 rounded-full shadow-sm text-[1.35rem] text-gray-700 transition"
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
            className=" bg-white border-4 border-solid border-white h-[250px] 
                inline-block mt-[30px] relative rounded-[50%] w-[250px]"
            style={{}}
            initial={{ opacity: 0, overflow: 'hidden' }}
            animate={{ opacity: 1, overflow: 'visible' }}
            transition={{ delay: 4.5, duration: 1, ...transition }}
          >
            <motion.span
              className="bg-bottom bg-no-repeat bg-[size:340px] inline-block h-[290px] 
                  mt-[-48px] ml-[1px] rounded-b-[242px] w-[240px]"
              initial={{ opacity: 0, y: 100 }}
              style={{
                backgroundImage: `url('@/../profile_photo.png')`,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 5,
                duration: 1,
                ease: circOut,
                ...transition,
              }}
            ></motion.span>
            <motion.span
              className="profile-cover"
              animate={{ opacity: 0 }}
              transition={{ delay: 7 }}
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
    </section>
  );
}
