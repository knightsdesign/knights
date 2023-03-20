"use client";

import { SpraySVG2, BlackBox } from "~/features/home/components";

const Hero = () => {
  return (
    <section className="relative flex w-full items-center bg-white">
      <div className="absolute left-0 top-0">
        <SpraySVG2 />
      </div>
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <div className="relative m-auto flex-col items-start align-middle">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
            <div className="relative m-auto items-center gap-12 md:order-first lg:inline-flex">
              <div className="max-w-xl text-center lg:text-left">
                <div>
                  <p className="text-2xl font-medium tracking-tighter text-black sm:text-4xl">
                    Creative Design Agency
                  </p>
                  <p className="mt-4 max-w-xl text-base tracking-tight text-gray-600">
                    {`Most chess pieces take 10 minutes to build. The knight takes at least 2 hours. That's how we design and build.`}
                  </p>
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-xl border-2 border-black bg-black px-6 py-3 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
                  >
                    Contact us
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
