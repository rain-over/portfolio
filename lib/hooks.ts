import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/../context/active-section-context';
import { useEffect } from 'react';
import { SectionName } from './types';

export function useSectionInView(section: SectionName, threshold = 0.75) {
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
