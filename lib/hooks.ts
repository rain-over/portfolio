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

export function useMotions() {
  let storage: Storage;
  try {
    storage = window.localStorage;
  } catch (error) {
    console.log(error);
    return;
  }

  const currTimestamp = Date.now();
  const timestamp = JSON.parse(storage.getItem('timestamp') || '1000');

  const timeLimit = 0.05 * 60 * 60 * 1000; // 3 hours

  const hasTimePassed = currTimestamp - timestamp > timeLimit;

  useEffect(() => {
    hasTimePassed
      ? storage.setItem('timestamp', currTimestamp.toString())
      : storage.setItem('timestamp', timestamp.toString());
  }, []);

  console.log('hasTimePassed', hasTimePassed);
  return hasTimePassed;
}

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
