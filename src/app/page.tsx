import type { Metadata } from "next";

import Navbar from "~/app/sections/navbar";
import Hero from "~/app/sections/hero";
import Showcase from "~/app/sections/showcase";
import Footer from "~/app/sections/footer";
import CTA from "~/app/sections/cta";
import Team from "~/app/sections/team";

import { SpraySVG } from "~/components";

export const metadata: Metadata = {
  title: "Knights",
  description: "Creative Web Agency",
};

export default function HomePage() {
  return (
    <>
      <div className="relative mx-auto mb-12 w-full bg-sand-1 2xl:max-w-7xl">
        <div className="absolute left-0 top-0">
          <SpraySVG />
        </div>
        <Navbar />
        <Hero />
      </div>
      {/*
      <Showcase />
			*/}
      <Team />
      <CTA />
      <Footer />
    </>
  );
}
