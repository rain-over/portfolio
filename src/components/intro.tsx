'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';
import { FaFileDownload, FaGithubSquare } from 'react-icons/fa';

import { useSectionInView } from '@/../lib/hooks';
import profile from '@/../public/profile.jpg';
import Link from 'next/link';

export default function intro() {
  const { ref } = useSectionInView('Home');

  return (
    <section
      className="flex flex-col h-[100vh] items-center 
      lg:flex-row lg:justify-around"
      id="home"
    >
      <motion.div
        animate={{ x: 0, opacity: 1 }}
        className="max-w-[40rem] mb-12 mt-28"
        initial={{ x: -50, opacity: 0 }}
        ref={ref}
        transition={{
          type: 'spring',
          stiffness: 125,
          delay: 0.1,
          duration: 1,
        }}
      >
        <h1 className="text-3xl font-[700] mb-4">Hello,</h1>
        <p className="leading-[2rem] text-[1.2rem]">
          <span className="font-bold">I'm Rain. </span>I'm a{' '}
          <span className="font-bold">full-stack</span> Engineer, and I've been
          doing web development for nearly{' '}
          <span className="font-bold">10 years</span>. I enjoy building websites
          and apps and right now, I'm really into{' '}
          <span className="font-medium underline">React (Next.js)</span> and{' '}
          <span className="font-medium underline">.NET Core</span>.
        </p>
        <div className="flex flex-col font-medium items-center gap-2 mt-10 text-lg sm:flex-row sm:justify-start">
          <Link
            className="active:scale-105 bg-amber-50 flex focus:scale-110 hover:scale-110 items-center gap-3 outline-none px-7 py-2 rounded-full shadow-sm transition"
            href="#contact"
          >
            Contact me
          </Link>
          <a
            className="active:scale-105 bg-amber-50 flex focus:scale-110 hover:scale-110 items-center outline-none px-7 py-2 rounded-full shadow-sm transition"
            download
            href="/CV.pdf"
          >
            Download CV
            <span className="text-[0.9rem]">
              <FaFileDownload />
            </span>
          </a>
          <a
            className="active:scale-105 bg-amber-50 flex focus:scale-110 hover:scale-110 items-center outline-none px-3 py-3 rounded-full shadow-sm text-[1.35rem] text-gray-700 transition"
            href="https://github.com/rain-over"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0 }}
        transition={{
          type: 'tween',
          duration: 0.3,
        }}
      >
        <Image
          alt="profile picture"
          className="border-4 border-black border-opacity-5
            rounded-full shadow-xl w-[20rem]"
          priority={true}
          src={profile}
        ></Image>
      </motion.div>
    </section>
  );
}
