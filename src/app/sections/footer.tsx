import { Github, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sand-1">
      <div className="mx-auto max-w-7xl overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
        <div className="mt-8 flex justify-center space-x-6">
          <span className="m-auto inline-flex w-full justify-center gap-3 md:w-auto md:justify-start">
            <a className="h-6 w-6 text-sand-12 transition hover:text-blue-7">
              <span className="sr-only">github</span>
              <Github
                className="md hydrated h-5 w-5"
                name="logo-github"
                role="img"
                aria-label="logo github"
              />
            </a>
            <a className="h-6 w-6 text-sand-12 transition hover:text-blue-7">
              <span className="sr-only">twitter</span>
              <Twitter
                className="md hydrated h-5 w-5"
                name="logo-twitter"
                role="img"
                aria-label="logo twitter"
              />
            </a>
          </span>
        </div>
        <p className="mt-8 text-center">
          <span className="mx-auto mt-2 text-sm text-sand-11">
            Copyright © 2022
            <span className="mx-2 text-blue-9 ">@knightsdesignstudio</span>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
