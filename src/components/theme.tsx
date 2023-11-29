'use client';

import { useTheme } from '@/../context/theme-context';
import { IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

const MotionIconButton = motion(IconButton);

export default function Theme() {
  const { theme, toggleTheme } = useTheme();
  const transition = {
    type: "spring",
    stiffness: 200,
    damping: 10
  }
  const whileTap = { scale: 0.95, rotate: 15 };
  const mainButton = {
    open: { rotate: 90 },
    closed: { rotate: 0 },
  };

  const varia = {
    initial: { rotate: 45 },
    animate: { rotate: 0, transition }
  };

  return (
    // <button
    //   className=" flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-full 
    //     border border-gray-200 bg-white transition-all hover:shadow-sm 
    //     hover:shadow-neutral-900 dark:border-gray-700 dark:bg-neutral-900  dark:text-white"
    //   onClick={toggleTheme}
    // >
    //   {/* {theme === 'light' ? (
    //     <MdLightMode size={30}></MdLightMode>
    //   ) : (
    //     <MdDarkMode size={30} />
    //   )} */}
   
    // </button>\
    <MotionIconButton
      onClick={toggleTheme}
      className=" flex h-[3.4rem] w-[3.4rem] min-w-[3.4rem] items-center 
        justify-center rounded-full text-[1.5rem]  
         border border-gray-200 bg-white transition-all 
        dark:border-gray-700 dark:bg-neutral-900  dark:text-gray-400"
      icon={theme === 'light' ? <MdLightMode  className="" /> : <MdDarkMode />}
      
      variants={mainButton}
      animate={theme === 'light' ? 'open' : 'closed'}
    // variant="solid"
  />
  );
}
