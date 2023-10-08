'use client';

import Image from 'next/image';

import {
  Transition,
  delay,
  easeIn,
  easeInOut,
  easeOut,
  motion,
  spring,
  stagger,
  useAnimate,
  useMotionValue,
  useTransform,
} from 'framer-motion';
import {
  FaFileDownload,
  FaGithubSquare,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { FiDownload, FiMail } from 'react-icons/fi';

import { useSectionInView } from '@/../lib/hooks';
import profile from '@/../public/profile_photo.png';
import Link from 'next/link';
import { Radley } from 'next/font/google';
import { useEffect, useState } from 'react';
import { blob } from 'stream/consumers';
import { Console } from 'console';

type JustifyContentProperty = 'center' | 'space-around';

const transition: Transition = {
  type: 'spring',
  // stiffness: 500,
  damping: 30,
  duration: 3,
};

const flexDirectionValues: React.CSSProperties['flexDirection'][] = [
  'column',
  'row',
  'row-reverse',
  'column-reverse',
];

// const justifyContentValues: JustifyContentProperty = [
//   'center',
//   'space-between',
// ];

const radley = Radley({ subsets: ['latin'], weight: '400' });
const radley_i = Radley({
  style: ['italic'],
  subsets: ['latin'],
  weight: '400',
});

const show = {
  opacity: 1,
  display: 'block',
};

const hide = {
  opacity: 0,
  transitionEnd: {
    display: 'none',
  },
};

export default function Intro() {
  const [flexDirection, setFlexDirection] = useState<
    React.CSSProperties['flexDirection']
  >(flexDirectionValues[0]);
  const [justifyContent, setJustifyContent] =
    useState<JustifyContentProperty>('center');
  const [width, setWidth] = useState('');

  const change = () => {
    console.log('change');
    setJustifyContent('space-around');
    // setFlexDirection(flexDirectionValues[1]);
    // setWidth('1200px');
  };

  const { ref } = useSectionInView('Home');
  const name: Array<String> = "I'm Rain   ".split('');

  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  function handleMouse(event: any) {
    console.log('handleMouse');
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  }

  return (
    <section
      className="
     bg-slate-200
      flex flex-row items-center justify-center
      h-[100vh] w-full 
      border-2 mx-auto
      relative"
      id="home"
      ref={ref}
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
          opacity: 0.1,
          // transitionEnd: { display: 'none' },
        }}
        transition={{ delay: 1, duration: 0.8 }}
        // onAnimationComplete={() => change()}
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
      <motion.div
        className="intro-content items-center flex flex-row w-[1200px]"
        style={{ justifyContent }}
      >
        <motion.div layout transition={transition}>
          <motion.div
            // className="text-[5rem]"
            initial={{ fontSize: '5rem' }}
            animate={{ fontSize: '2rem' }}
            transition={{ delay: 3.3, duration: 1 }}
            // onAnimationComplete={() => change()}
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
                  onAnimationComplete={() => i === name.length - 1 && change()}
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
                transition={{ ...transition, delay: 5 }}
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
            className="circle-face"
            style={{}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3.5, duration: 2 }}
          >
            <motion.span
              initial={{ opacity: 0, y: -100 }}
              style={{
                backgroundImage: `url('@/../profile_photo.png')`,
              }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 5, duration: 1 }}
              // style="background-image:url(https://i.stack.imgur.com/bdZeE.png);"
            ></motion.span>
          </motion.span>
          <motion.div>
            {/* <Image
              alt="profile picture"
              className="border-4 border-black border-opacity-5
            rounded-full shadow-xl w-[20rem]"
              priority={true}
              src={profile}
              quality={100}
            ></Image> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
