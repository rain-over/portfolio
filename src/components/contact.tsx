'use client';

import { sendEmail } from '@/../actions/sendEmail';
import { useSectionInView } from '@/../lib/hooks';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import SectionHeader from './section-header';
import SubmitBtn from './submit-btn';

export default function Contact() {
  const { ref } = useSectionInView('Contact');

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="bg-stone-200 h-[100vh] leading-8 mb-28 max-w-[45rem] mx-auto pt-[15vh] sm:mb-40 snap-center text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeader>Contact me</SectionHeader>

      <form
        className="mt-10 flex flex-col text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 bg-white bg-opacity-80 focus:bg-opacity-100 transition-all outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
      <p className="text-gray-700 mt-10">
        or directly at{' '}
        <a className="underline" href="mailto:raino.ver.0.1.0@gmail.com">
          raino.ver.0.1.0@gmail.com
        </a>
        .
      </p>
    </motion.section>
  );
}
