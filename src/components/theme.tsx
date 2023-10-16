'use client';

import { useTheme } from '@/../context/theme-context';
import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

import { MdLightMode, MdDarkMode } from 'react-icons/md';

export default function Theme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className=" flex h-[3.4rem] w-[3.4rem] items-center justify-center rounded-full border 
        border-gray-200 bg-white transition-all dark:border-gray-700 dark:bg-neutral-900 dark:text-white"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <MdLightMode /> : <MdDarkMode />}
    </button>
  );
}
