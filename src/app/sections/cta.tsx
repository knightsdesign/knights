"use client";

import { linkButton } from "~/components";

const CTA = () => {
  return (
    <section id="contact-us">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-12 md:px-12 lg:px-16">
        <div className="mx-auto max-w-xl text-center lg:p-10">
          <div>
            <p className="text-2xl font-medium tracking-tighter text-sand-12 sm:text-4xl">
              👋 &nbsp; Come say hi!
            </p>
            <p className="mt-4 max-w-xl text-base tracking-tight text-sand-11">
              Questions? Crazy ideas? Just want to chat? Please do!
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row lg:justify-center">
            <a
              className={linkButton()}
              href="mailto:contact@knightsdesign.studio"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CTA;
