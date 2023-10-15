import { useActiveSectionContext } from '@/../context/active-section-context';
import { MotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

export function useSectionInView(section: SectionName, threshold = 0.65) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]);

  return { ref };
}

export const useMotions = () => {
  let timestamp = 1000;
  try {
    timestamp = JSON.parse(localStorage?.getItem('timestamp') || '1000');
  } catch (error) {
    console.log('useMotions', error);
  }
  const currTimestamp = Date.now();

  const timeLimit = 0.25 * 60 * 60 * 1000; // 3 hours

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    hasTimePassed
      ? localStorage.setItem('timestamp', currTimestamp.toString())
      : localStorage.setItem('timestamp', timestamp.toString());
  }, []);

  console.log('hasTimePassed', hasTimePassed);
  return hasTimePassed;
};

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Don't forget to remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
