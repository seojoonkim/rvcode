import Hero from "@/components/Hero";
import WhatIs from "@/components/WhatIs";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Preparation from "@/components/Preparation";
import FAQ from "@/components/FAQ";
import Ending from "@/components/Ending";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIs />
      <Projects />
      <Timeline />
      <Preparation />
      <FAQ />
      <Ending />
      <Footer />
    </main>
  );
}
