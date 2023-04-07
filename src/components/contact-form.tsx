"use client";

import { cva } from "cva";

import { linkButton } from "../components";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "~/ui/dialog";

const input = cva(
  "block w-full appearance-none rounded border border-sand-10 bg-sand-1 px-6 py-3 text-sand-12 placeholder:text-sand-10 focus:border-blue-9 focus:outline-none focus:ring-blue-9 sm:text-sm"
);

const DialogContactForm = () => {
  return (
    <Dialog>
      <DialogTrigger className={linkButton()}>Contact us</DialogTrigger>
      <DialogContent className="relative p-0 lg:max-w-7xl">
        <DialogClose />
        <div className="relative flex max-h-full justify-center overflow-hidden md:px-12 lg:px-0">
          <div className="relative z-10 flex flex-1 flex-col bg-sand-1 px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28 lg:py-24">
            <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
              <div className="flex flex-col">
                <div>
                  <p className="mt-2 text-sm text-sand-12">
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
                      className="mb-3 block text-sm font-medium text-sand-12"
                      htmlFor="name"
                    >
                      First name
                    </label>
                    <input className={input()} placeholder="Your name" />
                  </div>
                  <div className="col-span-full">
                    <label
                      className="mb-3 block text-sm font-medium text-sand-12"
                      htmlFor="company"
                    >
                      What is the name of your company / organisation?
                    </label>
                    <input className={input()} placeholder="Company name" />
                  </div>
                  <div className="col-span-full">
                    <label
                      className="mb-3 block text-sm font-medium text-sand-12"
                      htmlFor="email"
                    >
                      How shall we contact you?
                    </label>
                    <input
                      className={input()}
                      placeholder="email@example.com"
                      autoComplete="off"
                      type="email"
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        className="mb-3 block text-sm font-medium text-sand-12"
                        htmlFor="message"
                      >
                        Project details
                      </label>
                      <div className="mt-1">
                        <textarea
                          className={input()}
                          placeholder="What are you working on?"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-span-full">
                    <button
                      className={linkButton({ className: "inline w-full" })}
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
            <div className="absolute inset-0 h-full w-full bg-sand-1 object-cover"></div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DialogContactForm;
