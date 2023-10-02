import Header from '@/components/header';

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { format } from 'path';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RNVR | Portfolio Demo',
  description: 'Personal Portfolio Demo with React and Next JS.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-amber-100 text-gray-950 relative h-[5000px]`}
      >
        <div className="bg-[#b5c8cc] -z-10 blur-[2rem] opacity-40 absolute w-[100%] h-[15rem] top-0"></div>
        <div className="bg-[#ffffff] -z-10 blur-[2rem] opacity-10 absolute w-[100%] h-[7rem] top-[2rem]"></div>
        <div className="bg-[#fbab67] -z-10 blur-[6rem] opacity-40 absolute w-[100%] h-[14rem] top-[14rem]"></div>
        {/* <div className="bg-[#d4b6aa] -z-10 blur-[1rem] opacity-50 absolute w-[100%] h-[7rem] top-[21rem]"></div> */}
        {/* <div className="bg-[#6d5f66] -z-10 blur-[2rem] opacity-50 absolute w-[100%] h-[7rem] top-[28rem]"></div>
        <div className="bg-[#594544] -z-10 blur-[2rem] opacity-50 absolute w-[100%] h-[7rem] top-[35rem]"></div> */}
        {/* <div className="bg-[#775f25] -z-10 blur-[2rem] opacity-50 fixed  w-[100%] top-[42rem] bottom-0"></div> */}
        {/* <div className="bg-[#d78c2f] -z-[9] fixed rounded-full w-[1rem] top-[20rem] right-[8rem] bottom-0"></div> */}

        <div className="bg-[#ffffff] -z-[9] blur-[1.5rem] absolute rounded-full w-[8rem] h-[8rem] top-[13rem] right-[5rem]"></div>
        <div className="bg-[#ecd343] -z-[9] blur-[1rem] opacity-40 fixed rounded-full w-[0.5rem] top-[20rem] right-[8rem] bottom-[-1rem]"></div>

        <Header />
        {/* <div className="bg-[#9d43d1] absolute -z-10 top-[-6rem] right-[11rem] h-[32rem] w-[32rem] blur-[35rem] sm:w-[69rem]"></div>
        <div className="bg-[#dbd7fb] absolute -z-10 top-[30rem] left-[-35remrem] h-[32rem] rounded-full w-[32rem] blur-[15rem] sm:w-[69rem]"></div> */}
        <div className="absolute -z-10 top-[30rem] left-[-35remrem] h-[32rem] rounded-full w-[32rem] blur-[15rem] sm:w-[69rem]"></div>
        {children}
      </body>
    </html>
  );
}
