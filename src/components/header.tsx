'use client';

import { links } from '@/../lib/data';
import { motion } from 'framer-motion';

import { useActiveSectionContext } from '@/../context/active-section-context';
import clsx from 'clsx';
import Link from 'next/link';

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        // className="fixed right-0  top-0
        //   h-[4.5rem] w-full
        //   rounded-none border border-white border-opacity-40
        //   backdrop-blur-[1rem] bg-white bg-opacity-80 shadow-lg shadow-black/[0.03]
        //   sm:h-[3.25rem] sm:right-[1rem] sm:rounded-full sm:top-6 sm:w-[34rem]"
        className="bg-amber-50 bg-opacity-80 fixed right-0  top-0 
        h-[4.5rem] w-full 
        sm:rounded-full
        sm:h-[3.25rem] sm:right-[1rem] sm:top-6 sm:w-[34rem]"
        initial={{ y: -100, opacity: 0 }}
      ></motion.div>
      <nav
        className="flex flex-wrap items-center justify-center 
          fixed left-0 right-0 top-[0.15rem] h-[4rem] py-1 w-full
          text-[0.9rem]
          sm:h-[initial] sm:left-[auto] sm:right-[1rem] sm:top-[1.6rem] sm:py-0  sm:text-[1rem] sm:w-[34rem]
          transform"
      >
        <ul
          className="flex flex-wrap gap-y-1 items-baseline justify-center
          font-medium
          sm:flex-nowrap sm:gap-5 sm-w-[initial]"
        >
          {links.map((link) => (
            <motion.li
              animate={{ y: 0, opacity: 1 }}
              className={clsx(
                'group flex  items-center justify-center h-[initial] relative sm:h-3/4 text-gray-500',
                {
                  'text-gray-950': activeSection === link.name,
                }
              )}
              initial={{ y: -100, opacity: 0 }}
              key={link.hash}
            >
              <Link
                className="flex items-center justify-center outline-none
                  px-3 py-1  w-full
                  focus:scale-105
                  sm:py-3"
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name); // set active section on scroll
                  setTimeOfLastClick(Date.now()); // fix jumpy nav highlight on section jumps
                }}
              >
                {link.name}
              </Link>
              {activeSection === link.name && (
                <motion.span
                  className="absolute bottom-0 right-0 h-0 w-full border-b-2 border-gray-500"
                  layoutId="activeSection"
                  transition={{
                    type: 'spring',
                    stiffness: 480,
                    damping: 30,
                  }}
                ></motion.span>
              )}
              {/* <span
                className={clsx(
                  'ease absolute bottom-0 left-0 h-0 border-b-2 border-gray-500 transition-all duration-200 group-hover:w-full w-0 ',
                  {
                    'border-red-700 w-full': activeSection === link.name,
                  }
                )}
              ></span> */}
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
