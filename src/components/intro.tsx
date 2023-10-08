'use client';

import { MotionConfig, Transition, circOut, motion } from 'framer-motion';
// import motion from './motion';

import { useSectionInView } from '@/../lib/hooks';
import { Radley } from 'next/font/google';
import Link from 'next/link';
import { useState } from 'react';

import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';

type JustifyContentProperty = 'center' | 'space-around';

const name: Array<String> = "I'm Rain   ".split('');
const radley = Radley({ subsets: ['latin'], weight: '400' });
const radley_i = Radley({
  style: ['italic'],
  subsets: ['latin'],
  weight: '400',
});
const transition: Transition = {
  type: 'spring',
  // stiffness: 500,
  damping: 30,
  duration: 3,
};

export default function Intro() {
  const [justifyContent, setJustifyContent] =
    useState<JustifyContentProperty>('center');
  const { ref } = useSectionInView('Home');

  return (
    <section
      className="
     bg-slate-200
      flex flex-row items-center justify-center
      h-[100vh] w-full 
      relative"
      id="home"
      ref={ref}
    >
      <MotionConfig
      // transition={{ duration: 0.1, delay: 0.1 }}
      // reducedMotion="always"
      >
        <motion.div
          className="absolute bg-black w-full h-full"
          initial={{ display: 'block', opacity: 1 }}
          animate={{
            opacity: 0,
            transitionEnd: {
              display: 'none',
            },
          }}
          transition={{ delay: 1.2, duration: 2, ease: 'easeOut' }}
        ></motion.div>
        <motion.div
          className="absolute"
          animate={{
            opacity: 0,
          }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="text-[5rem] z-[1] origin-bottom-right rotate-[15deg]"
            animate={{
              rotate: [15, 10, 15, 5],
            }}
            transition={{ duration: 0.8 }}
          >
            <span>👋</span>
          </motion.div>
        </motion.div>
        <div
          className="intro-content items-center flex flex-row h-[300px] w-[1200px]"
          style={{ justifyContent }}
        >
          <motion.div layout transition={transition}>
            <motion.div
              initial={{ fontSize: '5rem' }}
              animate={{ fontSize: '2rem' }}
              transition={{ delay: 3.3, duration: 1 }}
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
                  className="inline-block font-bold text-[3rem]"
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transition, delay: 4 }}
                >
                  Full Stack Developer
                </motion.span>{' '}
                <br />
                <motion.span
                  className="inline-block"
                  initial={{ opacity: 0, y: 150 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ ...transition, delay: 4.5 }}
                >
                  I've been doing web development for nearly a{' '}
                  <span className="font-medium">decade</span>. <br />I have
                  built web apps with multiple tech stacks and right now, <br />
                  my focused on <span className="font-medium ">
                    .NET Core
                  </span>{' '}
                  and <span className="font-medium ">React (Next.js)</span>.
                </motion.span>
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col font-medium items-center gap-2 mt-10 text-lg sm:flex-row sm:justify-start"
              initial={{ opacity: 0, y: 150 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...transition, delay: 5, duration: 0.7 }}
            >
              <Link
                className="active:scale-105 bg-white flex focus:scale-110 hover:scale-110 items-center gap-2 outline-none px-5 py-1 rounded-full shadow-sm transition"
                href="#contact"
              >
                <FiMail /> Contact me
              </Link>
              <a
                className="active:scale-105 bg-white flex focus:scale-110 hover:scale-110 items-center  gap-2  outline-none px-5 py-1 rounded-full shadow-sm transition"
                download
                href="/CV.pdf"
              >
                <FiDownload /> Download CV
              </a>
              <a
                className="active:scale-105 bg-white flex focus:scale-110 hover:scale-110 items-center outline-none px-2 py-2 rounded-full shadow-sm text-[1.35rem] text-gray-700 transition"
                href="https://github.com/rain-over"
                target="_blank"
              >
                <FaGithubSquare />
              </a>
              <a
                className="active:scale-105 bg-white flex focus:scale-110 hover:scale-110 items-center outline-none px-2 py-2 rounded-full shadow-sm text-[1.35rem] text-gray-700 transition"
                href="https://linkedin.com/rain-over"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="overflow-hidden text-center"
            initial={{ width: 0 }}
            animate={{
              width: '300px',
            }}
            transition={{ delay: 3.2 }}
          >
            <motion.span
              className="inline-block border-4 border-solid border-white bg-white rounded-[50%] w-[250px] h-[250px] mt-[30px]"
              style={{}}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4.5, duration: 1 }}
            >
              <motion.span
                className="inline-block w-[240px] h-[290px] mt-[-48px] ml-[1px] bg-bottom bg-no-repeat bg-[size:340px]"
                initial={{ opacity: 0, y: -100, borderRadius: 0 }}
                style={{
                  backgroundImage: `url('@/../profile_photo.png')`,
                }}
                animate={{ opacity: 1, y: 0, borderRadius: '0 0 242px 242px' }}
                transition={{
                  delay: 5,
                  duration: 0.7,
                  ease: circOut,
                }}
              ></motion.span>
            </motion.span>
          </motion.div>
        </div>
        <Link href="#about" className="absolute bottom-4">
          <motion.svg
            className=" motion-reduce:animate-bounce "
            fill="#334155"
            height="100"
            viewBox="0 0 24 24"
            width="100"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6 }}
          >
            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
            <path d="M0-.75h24v24H0z" fill="none" />
          </motion.svg>{' '}
        </Link>
      </MotionConfig>
    </section>
  );
}
