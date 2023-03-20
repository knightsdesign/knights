"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { cva } from "cva";

const link = cva(
  "border-b-2 border-transparent py-1 text-sm text-sand-11 hover:border-blue-9 hover:text-blue-9"
);

const container = cva(
  "absolute z-50 mx-auto flex w-full flex-col p-5 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
);

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className={container()}>
      <div className="flex flex-row items-center justify-between lg:justify-start">
        <Link
          className="text-lg uppercase tracking-tight text-sand-12 focus:outline-none focus:ring lg:text-2xl"
          href="/"
        >
          <span className="uppecase focus:ring-0 lg:text-lg">knights</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-sand-12 focus:text-sand-12 focus:outline-none md:hidden"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>
      <nav className={`${open ? "flex" : "hidden"} flex-grow flex-col py-4 `}>
        <ul className="list-none space-y-2 md:inline-flex md:items-center md:gap-x-8 md:space-y-0 ">
          <li>
            <a href="#showcase" className={link()}>
              Showcase
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
