import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Preparation from "@/components/Preparation";
import FAQ from "@/components/FAQ";
import Ending from "@/components/Ending";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionDivider variant="lime" />
      <WhatIs />
      <SectionDivider variant="blue" />
      <Projects />
      <SectionDivider variant="red" />
      <Timeline />
      <SectionDivider variant="mixed" />
      <Preparation />
      <SectionDivider variant="blue" />
      <FAQ />
      <SectionDivider variant="lime" />
      <Ending />
      <Footer />
    </main>
  );
}
