'use client';

import { links } from '@/../lib/data';
import { motion } from 'framer-motion';

import { useActiveSectionContext } from '@/../context/active-section-context';
import { AlignItemsProperty } from '@/../lib/types';
import { debounce } from '@/../lib/utils';
import clsx from 'clsx';
import { Nunito, Radley } from 'next/font/google';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import Theme from './theme';

const radley = Radley({ subsets: ['latin'], weight: '400' });
const nunito = Nunito({ weight: '700', subsets: ['latin'] });
export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [visible, setVisible] = useState(false);
  const [alignItems, setAlignItems] =
    useState<AlignItemsProperty>('flex-start');

  const handleScroll = useMemo(
    () =>
      debounce(() => {
        const currentScrollPos = window.scrollY;

        setVisible(window.scrollY > 0);
        setAlignItems(window.scrollY > 0 ? 'flex-end' : 'flex-start');
      }, 300),
    []
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    console.log('visible', visible, window.scrollY > 0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [visible, handleScroll]);

  return (
    <header className={`relative z-[999]`}>
      <div
        className="pointer-events-none fixed -top-[4rem] flex h-[8rem]  w-full 
          items-end justify-center"
        style={{ alignItems }}
      >
        <motion.div
          className="flex w-[90%] justify-between rounded-full border 
          border-gray-200 bg-white bg-opacity-70 text-gray-500 shadow-sm 
          dark:border-gray-600 dark:bg-neutral-900 dark:bg-opacity-70 
          dark:text-gray-300"
          layout
          transition={{
            type: 'spring',
            damping: 30,
            duration: 0.3,
            stiffness: 400,
            mass: 1,
          }}
        >
          <div
            className="m-[1px] flex h-[3.4rem] w-[3.4rem] items-center justify-center 
              rounded-full border-[1px] border-gray-200 bg-white 
              dark:border-gray-700  dark:bg-neutral-900"
          >
            <h1 className={`${nunito.className} text-lg font-bold `}>
              {'{rnvr}'}
            </h1>
          </div>
          <div className="pointer-events-auto mr-[1px] flex items-center justify-end">
            <nav
              className=" left-0 right-0 flex h-[3.5rem] w-full flex-wrap 
                items-center justify-center py-1 text-[0.9rem] sm:left-[auto] 
                sm:right-[1rem] sm:w-[34rem] sm:py-0  sm:text-[1rem]"
            >
              <ul
                className="flex flex-wrap items-center justify-center gap-y-1 
                  font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5"
              >
                {links.map((link) => (
                  <motion.li
                    animate={{ y: 0, opacity: 1 }}
                    className={clsx(
                      `group relative  flex h-[initial] items-center justify-center 
                      hover:scale-50  hover:text-black dark:hover:text-white`,
                      {
                        'scale-50 text-black dark:text-white':
                          activeSection === link.name,
                      }
                    )}
                    initial={{ y: -100, opacity: 0 }}
                    key={link.hash}
                  >
                    <Link
                      className="flex w-full items-center justify-center
                        px-3 py-1  outline-none
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
                        className="absolute bottom-0 right-0 h-0 w-full border-b-2 
                          border-gray-950 dark:border-white"
                        layoutId="activeSection"
                        transition={{
                          type: 'spring',
                          stiffness: 480,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </motion.li>
                ))}
              </ul>
            </nav>
            <Theme />
          </div>
        </motion.div>
      </div>
    </header>
  );
}
