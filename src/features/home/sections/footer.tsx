import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
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
              <Github
                className="md hydrated h-5 w-5"
                name="logo-github"
                role="img"
                aria-label="logo github"
              />
            </a>
            <a className="h-6 w-6 fill-black transition hover:text-blue-500">
              <span className="sr-only">twitter</span>
              <Twitter
                className="md hydrated h-5 w-5"
                name="logo-twitter"
                role="img"
                aria-label="logo twitter"
              />
            </a>
            <a className="h-6 w-6 fill-black transition hover:text-blue-500">
              <span className="sr-only">Instagram</span>
              <Instagram
                className="md hydrated h-5 w-5"
                name="logo-instagram"
                role="img"
                aria-label="logo instagram"
              />
            </a>
            <a className="h-6 w-6 fill-black transition hover:text-blue-500">
              <span className="sr-only">Linkedin</span>
              <Linkedin
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
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
