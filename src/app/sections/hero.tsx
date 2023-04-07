"use client";

import { BlackBox, linkButton } from "~/components";

const Hero = () => {
  return (
    <section className="relative flex h-full min-h-screen w-full items-center bg-transparent">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <div className="relative m-auto flex-col items-start align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative m-auto items-center gap-12 md:order-first lg:inline-flex">
              <div className="max-w-xl text-center lg:text-left">
                <div className="prose prose-sand">
                  <p className="text-2xl font-medium tracking-tighter text-sand-12 sm:text-4xl">
                    Creative Design Agency
                  </p>
                  <p className="mt-4 max-w-xl whitespace-pre text-base tracking-tight text-sand-10">
                    {`Most chess pieces take 10 minutes to build.\nExcept the knight which takes 2 hours.\nWe build knights quality web apps`}
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    className={linkButton()}
                    href="mailto:contact@knightsdesign.studio"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="order-first mt-12 block aspect-square w-full lg:mt-0">
              <BlackBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
