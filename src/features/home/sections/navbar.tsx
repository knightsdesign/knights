"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  console.log({ open });

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
            <Menu className="h-6 w-6" />
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

export default Navbar;
