import type { Metadata } from "next";

import Navbar from "~/features/home/sections/navbar";
import Hero from "~/features/home/sections/hero";
import Showcase from "~/features/home/sections/showcase";
import Footer from "~/features/home/sections/footer";
import CTA from "~/features/home/sections/cta";

export const metadata: Metadata = {
  title: "Knights",
  description: "Creative Web Agency",
};

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Showcase />
      <CTA />
      <Footer />
    </>
  );
}
