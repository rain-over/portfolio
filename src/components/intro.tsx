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
import profile from '@/../public/profile.png';
import Link from 'next/link';
import { Radley } from 'next/font/google';
import { useEffect, useState } from 'react';
import { blob } from 'stream/consumers';

const transition: Transition = {
  type: 'tween',
  ease: 'easeIn',
  // duration: 5,
  // stiffness: 50,
  // damping: 20,
  // mass: 0.8,
};

const flexDirectionValues: React.CSSProperties['flexDirection'][] = [
  'column',
  'row',
  'row-reverse',
  'column-reverse',
];

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
  const [width, setWidth] = useState('');

  const change = () => {
    setFlexDirection(flexDirectionValues[1]);
    setWidth('1200px');
  };
  const { ref } = useSectionInView('Home');
  const name = "I'm Rain";

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
        className="items-center flex justify-between"
        layout
        transition={transition}
        style={{ flexDirection, width }}
      >
        <motion.div
          animate={{
            opacity: 0,
            transitionEnd: { display: 'none' },
          }}
          transition={{ delay: 4 }}
          onAnimationComplete={() => change()}
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
        <div>
          <motion.div
            // className="text-[5rem]"
            initial={{ fontSize: '5rem' }}
            animate={{ fontSize: '2rem' }}
            transition={{ delay: 5, duration: 1 }}
          >
            <span className={`${radley_i.className}`}>Hello</span>,{' '}
            <span className="sr-only">I'm Rain</span>
            <span aria-hidden>
              {name.split('').map((c, i) => (
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
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5 }}
          >
            <p>
              <span className="font-bold text-[3rem]">Full Stack Engineer</span>{' '}
              <br />
              I've been doing web development for nearly a{' '}
              <span className="font-bold">decade</span>. <br />I have built web
              apps with multiple tech stacks and right now, <br />
              I'm focused on{' '}
              <span className="font-medium ">React (Next.js)</span> and{' '}
              <span className="font-medium ">.NET Core</span>.
            </p>
          </motion.div>
        </div>
        <motion.div
        // style={{
        //   width: 400,
        //   height: 400,
        //   display: 'flex',
        //   placeItems: 'center',
        //   placeContent: 'center',
        //   borderRadius: 30,
        //   backgroundColor: 'rgba(255, 255, 255, 0.05)',
        //   perspective: 400,
        // }}
        // onMouseOver={handleMouse}
        >
          <motion.div
            initial={{ opacity: 1 }}
            // style={{
            //   width: 150,
            //   height: 150,
            //   borderRadius: 30,
            //   backgroundColor: '#fff',
            //   rotateX,
            //   rotateY,
            // }}
          >
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
