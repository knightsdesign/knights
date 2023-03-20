"use client";

import { linkButton } from "../components";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "~/ui/dialog";

const DialogContactForm = () => {
  return (
    <Dialog>
      <DialogTrigger className={linkButton()}>Contact us</DialogTrigger>
      <DialogContent className="lg:max-w-7xl">
        <DialogTitle>{`Let's get started!`}</DialogTitle>
        <div className="relative flex max-h-full justify-center overflow-hidden md:px-12 lg:px-0">
          <div className="relative z-10 flex flex-1 flex-col bg-white px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28 lg:py-24">
            <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
              <div className="flex flex-col">
                <div>
                  <p className="mt-2 text-sm text-gray-500">
                    Complete the details below so I can process your request and
                    then schedule a time to discuss your goals.
                  </p>
                </div>
              </div>
              <form>
                <input autoComplete="false" name="hidden" className="hidden" />
                <input name="_redirect" type="hidden" value="#" />
                <div className="mt-4 space-y-6">
                  <div>
                    <label
                      className="mb-3 block text-sm font-medium text-gray-600"
                      htmlFor="name"
                    >
                      First name
                    </label>
                    <input
                      className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      placeholder="Your name"
                      style={{
                        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABHklEQVQ4EaVTO26DQBD1ohQWaS2lg9JybZ+AK7hNwx2oIoVf4UPQ0Lj1FdKktevIpel8AKNUkDcWMxpgSaIEaTVv3sx7uztiTdu2s/98DywOw3Dued4Who/M2aIx5lZV1aEsy0+qiwHELyi+Ytl0PQ69SxAxkWIA4RMRTdNsKE59juMcuZd6xIAFeZ6fGCdJ8kY4y7KAuTRNGd7jyEBXsdOPE3a0QGPsniOnnYMO67LgSQN9T41F2QGrQRRFCwyzoIF2qyBuKKbcOgPXdVeY9rMWgNsjf9ccYesJhk3f5dYT1HX9gR0LLQR30TnjkUEcx2uIuS4RnI+aj6sJR0AM8AaumPaM/rRehyWhXqbFAA9kh3/8/NvHxAYGAsZ/il8IalkCLBfNVAAAAABJRU5ErkJggg==")`,
                        backgroundRepeat: "no-repeat",
                        backgroundAttachment: "scroll",
                        backgroundSize: "16px 18px",
                        backgroundPosition: "98% 50%",
                      }}
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      className="mb-3 block text-sm font-medium text-gray-600"
                      htmlFor="company"
                    >
                      What is the name of your company / organisation?
                    </label>
                    <input
                      className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      placeholder="Company name"
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      className="mb-3 block text-sm font-medium text-gray-600"
                      htmlFor="email"
                    >
                      How shall we contact you?
                    </label>
                    <input
                      className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      placeholder="email@example.com"
                      autoComplete="off"
                      type="email"
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        className="mb-3 block text-sm font-medium text-gray-600"
                        htmlFor="message"
                      >
                        Project details
                      </label>
                      <div className="mt-1">
                        <textarea
                          className="block w-full appearance-none rounded-xl border border-gray-200 bg-white px-6 py-3 text-black placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                          placeholder="What are you working on?"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <button
                      className="nline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black"
                      type="submit"
                    >
                      Submit your request
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="hidden bg-white sm:contents lg:relative lg:block lg:flex-1">
            <div className="absolute inset-0 h-full w-full bg-white object-cover">
              <Image
                className="h-auto w-full bg-gray-200 object-center"
                src="https://d33wubrfki0l68.cloudfront.net/64c901dbc4b16388ef27646a320ad9c1441594df/236fd/images/placeholders/rectangle2.svg"
                alt=""
                width="1310"
                height="873"
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogContactForm;
