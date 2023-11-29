import { motion } from 'framer-motion';
import { CardDetail } from '../../lib/types';

export default function Card({
  cardTitle,
  cardSubtitle,
  img,
  cardDetailedText,
  date,
}: CardDetail) {
  return (
    <motion.div className="items flex h-[400px] w-[80vh] content-center rounded-lg border border-neutral-950">
      <div>{date}</div>
      <div>{cardDetailedText}</div>
      <div>{cardSubtitle}</div>
      <div>{cardTitle}</div>
    </motion.div>
  );
}
