export * from "./box";
export * from "./svg";
import { cva } from "cva";

export const linkButton = cva(
  "inline-flex w-full items-center justify-center rounded-xl border-2 border-black bg-black px-6 py-3 text-center text-white duration-200 hover:border-black hover:bg-transparent hover:text-sand-12 focus:outline-none focus-visible:outline-black focus-visible:ring-black lg:w-auto"
);
