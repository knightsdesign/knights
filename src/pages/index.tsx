import { type NextPage } from "next";
import * as Section from "~/features/home";

const Home: NextPage = () => {
  return (
    <>
      <Section.SEO />
      <Section.Navbar />
      <Section.Hero />
      <Section.Showcase />
      <Section.CTA />
      <Section.Footer />
    </>
  );
};

export default Home;
