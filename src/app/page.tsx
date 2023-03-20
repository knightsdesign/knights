import type { Metadata } from "next";

import Navbar from "~/features/home/sections/navbar";
import Hero from "~/features/home/sections/hero";
import Showcase from "~/features/home/sections/showcase";
import Footer from "~/features/home/sections/footer";
import CTA from "~/features/home/sections/cta";
import Team from "~/features/home/sections/team";

import { SpraySVG3 } from "~/features/home/components";

export const metadata: Metadata = {
  title: "Knights",
  description: "Creative Web Agency",
};

export default function HomePage() {
  return (
    <>
      <div className="relative mx-auto mb-12 w-full bg-sand-1 2xl:max-w-7xl">
        <div className="absolute left-0 top-0">
          <SpraySVG3 />
        </div>
        <Navbar />
        <Hero />
      </div>
      <Showcase />
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
