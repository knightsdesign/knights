import type { Metadata } from "next";

import Navbar from "~/app/components/sections/navbar";
import Hero from "~/app/components/sections/hero";
import Showcase from "~/app/components/sections/showcase";
import Footer from "~/app/components/sections/footer";
import CTA from "~/app/components/sections/cta";
import Team from "~/app/components/sections/team";

import { SpraySVG3 } from "~/app/components";

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
