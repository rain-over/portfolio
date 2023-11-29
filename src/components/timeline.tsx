'use client';
import { useElementViewportPosition, useSectionInView } from '@/../lib/hooks';
import {
  MotionProps,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { throttle } from 'throttle-debounce-ts';
import { experienceData } from '../../lib/data';
import SectionHeader from './section-header';

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: '#FFFFFF' },
    partial: { backgroundColor: '#808080' },
  },
  initial: 'partial',
  whileInView: 'full',
  viewport: { amount: 1 },
};

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { ref } = useSectionInView('Experience');
  const { position } = useElementViewportPosition(containerRef);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress, scrollY } = useScroll({});
  const { scrollYProgress: yprog } = useScroll({
    target: containerRef,
    offset: ['.3 1', '.65 0'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const x = useTransform(scrollYProgress, position, [
    1200,
    carouselEndPosition - 500,
  ]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;
        console.log(-newPosition);
        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} id="experience" className="h-max bg-zinc-100">
      <div ref={ref} className="" style={{ height: '300vh' }}>
        <div
          ref={ref}
          className="sticky top-0 flex h-[100vh] w-[100%] flex-col items-start 
            justify-center overflow-hidden"
        >
          <SectionHeader>My Timeline</SectionHeader>
          <motion.div ref={carouselRef} className="flex gap-48" style={{ x }}>
            {experienceData.map((item, i) => (
              <motion.div
                {...slideAnimation}
                key={i}
                style={{
                  backgroundImage: `url('@/../images/${item.img}')`,
                }}
                className="flex h-96 w-[300px] flex-col 
                  rounded-lg bg-[#808080] bg-right-top bg-no-repeat p-5 sm:w-[70vw]"
                data-bg={item.img}
              >
                <div className="card-bg h-full w-full ">
                  <div className="mb-4 text-4xl">{item.cardTitle}</div>
                  <div className="mb-2 text-2xl">{item.cardSubtitle}</div>

                  <div className="w-full xl:w-[30vw]">
                    {item.cardDetailedText}
                  </div>

                  <div>{item.date}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="absolute bottom-0 h-[10px] w-[100%] bg-black"
            style={{ scale: yprog }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
