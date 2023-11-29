import AboutMe from '@/components/about';
import Contact from '@/components/contact';
// import Experience from '@/components/experience';
import Intro from '@/components/intro';
import Skills from '@/components/skills';
import Timeline from '@/components/timeline';

export default function Home() {
  return (
    <main className="">
      <Intro />
      <AboutMe />
      <Skills />
      <Timeline />
      {/* <Experience /> */}
      <Contact />
    </main>
  );
}
