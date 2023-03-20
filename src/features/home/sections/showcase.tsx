"use client";

import { BlackBox } from "~/features/home/components";

const Showcase = () => {
  return (
    <section className="flex w-full items-center bg-white">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <p className="text-2xl font-medium tracking-tighter text-black sm:text-4xl">
          Showcase
        </p>

        <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-3">
          <figure>
            <div className="h-80 w-full">
              <BlackBox />
            </div>

            <p className="mt-5 text-lg font-medium leading-6 text-black">
              Pink dreams
            </p>
            <p className="mt-3 text-base text-gray-500">
              Your design portfolio website shouldn’t just be a portfolio, it
              should also be a sales tool.
            </p>
            <div className="justify-left mt-10 flex gap-3">
              <a
                className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                href="#"
              >
                <span>Read more</span>
              </a>{" "}
            </div>
          </figure>
          <figure>
            <div className="h-80 w-full">
              <BlackBox />
            </div>

            <p className="mt-5 text-lg font-medium leading-6 text-black">
              Lavender ender
            </p>
            <p className="mt-3 text-base text-gray-500">
              Your design portfolio website shouldn’t just be a portfolio, it
              should also be a sales tool.
            </p>
            <div className="justify-left mt-10 flex gap-3">
              <a
                className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                href="#"
              >
                <span>Read more</span>
              </a>{" "}
            </div>
          </figure>
          <figure>
            <div className="h-80 w-full">
              <BlackBox />
            </div>

            <p className="mt-5 text-lg font-medium leading-6 text-black">
              Smurf life
            </p>
            <p className="mt-3 text-base text-gray-500">
              Your design portfolio website shouldn’t just be a portfolio, it
              should also be a sales tool.
            </p>
            <div className="justify-left mt-10 flex gap-3">
              <a
                className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                href="#"
              >
                <span>Read more</span>
              </a>{" "}
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
