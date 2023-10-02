import AboutMe from '@/components/about';
import Contact from '@/components/contact';
import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="">
      <Intro />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
