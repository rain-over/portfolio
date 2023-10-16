// defaults
import Header from '@/components/header';
import type { Metadata } from 'next';
import './globals.css';

import ActiveSectionContextProvider from '@/../context/active-section-context';
import Footer from '@/components/footer';
import { Inter } from 'next/font/google';
import ThemeContextProvider from '@/../context/theme-context';

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
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} relative text-gray-950`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />

            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
