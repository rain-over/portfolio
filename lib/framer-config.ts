import { AnimationProps } from 'framer-motion';
import { useMotions } from './hooks';

export const animate = (animate: AnimationProps['animate']) =>
  useMotions() ? animate : {};

export const transition = () => (useMotions() ? {} : { delay: 0, duration: 0 });
