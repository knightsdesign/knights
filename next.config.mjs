/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "picsum.photos",
        pathname: "/**",
        port: "",
        protocol: "https",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

export default withContentlayer(config);
