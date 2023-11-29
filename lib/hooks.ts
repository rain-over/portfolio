import { useActiveSectionContext } from '@/../context/active-section-context';
import { MotionValue, useTransform } from 'framer-motion';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { SectionName } from './types';

export function useSectionInView(section: SectionName, threshold = 0.65) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    console.log({ inView, section });
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(section);
    }
  }, [inView, setActiveSection, timeOfLastClick, section]);

  return { ref, inView };
}

export const useMotions = () => {
  let hasTimePassed = false;
  // let timestamp = 1000;
  // try {
  //   timestamp = JSON.parse(
  //     typeof localStorage !== undefined
  //       ? localStorage.getItem('timestamp') || '1000'
  //       : '1000'
  //   );
  // } catch (error) {
  //   console.log('useMotions', error);
  // }
  // const currTimestamp = Date.now();

  // const timeLimit = 0.25 * 60 * 60 * 1000; // 3 hours

  // const hasTimePassed = currTimestamp - timestamp > timeLimit;

  // useEffect(() => {
  //   if (typeof localStorage !== undefined) {
  //     hasTimePassed
  //       ? localStorage.setItem('timestamp', currTimestamp.toString())
  //       : localStorage.setItem('timestamp', timestamp.toString());
  //   }
  // }, []);
  // console.log('use Motion', hasTimePassed);
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

export function useRefScrollProgress(watch?: unknown) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const offsetTop = rect.top + scrollTop - window.innerHeight;

    const documentHeight = document.body.clientHeight - window.innerHeight;

    setStart(offsetTop / documentHeight);
    setEnd((offsetTop + window.innerHeight + rect.height) / documentHeight);
  }, [watch]);

  return { ref, start, end };
}

export function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;
    console.log([start / pageHeight, end / pageHeight]);
    setPosition([start / pageHeight, end / pageHeight]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(position);
  return { position };
}
