"use client";

import Link from "next/link";
import { BlackBox } from "~/features/home/components";
import { allShowcasePosts } from "contentlayer/generated";

const Showcase = () => {
  const blogPosts = allShowcasePosts;
  return (
    <section id="showcase" className="flex w-full items-center bg-sand-1">
      <div className="relative mx-auto w-full max-w-7xl items-center px-5 py-24 md:px-12 lg:px-16">
        <p className="text-2xl font-medium tracking-tighter text-sand-12 sm:text-4xl">
          Showcase
        </p>

        <div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-3">
          {blogPosts.map((blog) => (
            <figure key={blog._id}>
              <div className="h-40 w-full sm:h-80">
                <BlackBox />
              </div>

              <p className="mt-5 text-lg font-medium leading-6 text-sand-12">
                {blog.title}
              </p>
              <p className="mt-3 text-base text-gray-500">{blog.summary}</p>
              <div className="justify-left mt-10 flex gap-3">
                <Link
                  className="inline-flex items-center justify-center text-sm font-semibold text-sand-12 duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600"
                  href={blog.slug}
                >
                  <span>Read more</span>
                </Link>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
