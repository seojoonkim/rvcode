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
      <SectionDivider />
      <WhatIs />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Timeline />
      <SectionDivider />
      <Preparation />
      <SectionDivider />
      <FAQ />
      <SectionDivider />
      <Ending />
      <Footer />
    </main>
  );
}
