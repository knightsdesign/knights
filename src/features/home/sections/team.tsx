"use client";

import Image from "next/image";
import {
  SiBlender,
  SiThreedotjs,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPrisma,
} from "react-icons/si";

const Team = () => {
  return (
    <section>
      <div className="mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <div className="mb-12 md:pr-12 lg:pr-24">
          <h2 className="text-4xl text-black">Our team</h2>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"
            >
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <Image
                    className="h-16 w-16 rounded-full object-cover grayscale filter lg:h-20 lg:w-20"
                    src="/amr.png"
                    width={100}
                    height={100}
                    alt="Profile picture of Amr"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black">
                      Amr Hossam
                    </h3>
                    <p className="text-base text-gray-500">
                      Handsome model that 3D models
                    </p>
                    <div className="flex h-8 gap-4">
                      <SiTypescript className="h-8 w-8" />
                      <SiBlender className="h-8 w-8" />
                      <SiThreedotjs className="h-8 w-8" />
                      <SiReact className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-4 lg:space-x-6">
                  <Image
                    className="h-16 w-16 rounded-full object-cover grayscale filter lg:h-20 lg:w-20"
                    src="/kevin.png"
                    width={100}
                    height={100}
                    alt="Profile picture of Kevin"
                  />
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium leading-6 text-black">
                      Kevin Nguyen
                    </h3>
                    <p className="text-base text-gray-500">
                      Fully-stacked in the wrong places
                    </p>
                    <div className="flex h-8 gap-4">
                      <SiTypescript className="h-8 w-8" />
                      <SiNextdotjs className="h-8 w-8" />
                      <SiTailwindcss className="h-8 w-8" />
                      <SiPrisma className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
