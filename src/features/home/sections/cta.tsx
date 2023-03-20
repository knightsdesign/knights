"use client";

const CTA = () => {
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

export default CTA;
