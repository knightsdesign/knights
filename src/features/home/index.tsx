import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import {
  MenuIcon,
  GithubIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";

import { BlackBox } from "./components/box";
import { SpraySVG, SpraySVG2 } from "./components/svg";

export const SEO = () => {
  return (
    <Head>
      <title>Knights</title>
      <meta name="description" content="Built with love" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto w-full border-b bg-white 2xl:max-w-7xl">
      <div className="relative mx-auto flex w-full flex-col bg-white p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <Link
            className="text-lg uppercase tracking-tight text-black focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <span className="uppecase focus:ring-0 lg:text-lg">knights</span>
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:text-black focus:outline-none md:hidden"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
        <nav
          className={
            open
              ? "flex flex-grow flex-col py-10 md:flex md:flex-row md:justify-center lg:py-0"
              : "hidden"
          }
        >
          <ul className="list-none space-y-2 md:inline-flex md:items-center md:space-y-0">
            <li>
              <a
                href="#"
                className="border-b-2 border-transparent px-2 py-8 text-sm text-gray-500 hover:border-blue-500 hover:text-blue-600 md:px-3 lg:px-6"
              >
                All
                <span className="hidden lg:inline">courses</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-b-2 border-transparent px-2 py-8 text-sm text-gray-500 hover:border-blue-500 hover:text-blue-600 md:px-3 lg:px-6"
              >
                New courses
              </a>
            </li>
            <li>
              <a
                href="#"
                className="border-b-2 border-transparent px-2 py-8 text-sm text-gray-500 hover:border-blue-500 hover:text-blue-600 md:px-3 lg:px-6"
              >
                Free
                <span className="hidden lg:inline">Courses</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export const Hero = () => {
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

export const Showcase = () => {
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

export const CTA = () => {
  return (
    <section>
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-xl text-center lg:p-10">
          <div>
            <p className="text-2xl font-medium tracking-tighter text-black sm:text-4xl">
              👋 &nbsp; Come say hi!
            </p>
            <p className="mt-4 max-w-xl text-base tracking-tight text-gray-600">
              Questions? Crazy ideas? Just want to chat? Please do!
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:justify-center">
            <a
              href="#"
              className="inline-flex w-full items-center justify-center rounded-xl border-2 border-black bg-black px-6 py-3 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Next.js
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Remix
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Svelte
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Alpine.js
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Tailwind
            </a>
          </div>

          <div className="px-5 py-2">
            <a href="#" className="text-sm text-gray-500 hover:text-blue-600">
              Partners
            </a>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <span className="m-auto inline-flex w-full justify-center gap-3 md:w-auto md:justify-start">
            <a className="h-6 w-6 fill-black transition hover:text-blue-500">
              <span className="sr-only">github</span>
              <GithubIcon
                className="md hydrated h-5 w-5"
                name="logo-github"
                role="img"
                aria-label="logo github"
              />
            </a>
            <a className="h-6 w-6 fill-black transition hover:text-blue-500">
              <span className="sr-only">twitter</span>
              <TwitterIcon
                className="md hydrated h-5 w-5"
                name="logo-twitter"
                role="img"
                aria-label="logo twitter"
              />
            </a>
            <a className="h-6 w-6 fill-black transition hover:text-blue-500">
              <span className="sr-only">Instagram</span>
              <InstagramIcon
                className="md hydrated h-5 w-5"
                name="logo-instagram"
                role="img"
                aria-label="logo instagram"
              />
            </a>
            <a className="h-6 w-6 fill-black transition hover:text-blue-500">
              <span className="sr-only">Linkedin</span>
              <LinkedinIcon
                className="md hydrated h-5 w-5"
                name="logo-linkedin"
                role="img"
                aria-label="logo linkedin"
              />
            </a>
          </span>
        </div>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-gray-500">
            Copyright © 2020 - 2021
            <a
              href="https://unwrapped.design"
              className="mx-2 text-blue-500 hover:text-gray-500"
              rel="noopener noreferrer"
            >
              @unwrappedHQ
            </a>
            .Since 2020
          </span>
        </p>
      </div>
    </footer>
  );
};
