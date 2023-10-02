import AboutMe from '@/components/about';
import Intro from '@/components/intro';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="">
      <Intro />
      <AboutMe />
      <Skills />
    </main>
  );
}
