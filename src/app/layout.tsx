// defaults
import Header from '@/components/header';
import type { Metadata } from 'next';
import './globals.css';

import ActiveSectionContextProvider from '@/../context/active-section-context';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';

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
    <html lang="en" className="!scroll-smooth snap-proximity snap-y">
      <body className={`${inter.className} text-gray-950 relative`}>
        <div className="bg-[#fbe2e3] absolute top-[15rem] -z-10 right-0 h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-black"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <ActiveSectionContextProvider>
          <Header />

          {children}
          <Footer />
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
