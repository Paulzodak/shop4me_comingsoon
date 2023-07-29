/** @type {import('next').NextConfig} */
// const withVideos = require("next-videos");
const nextConfig = {
  // experimental: {
  //   unstable_runtimeJS: false,
  // },
  reactStrictMode: false,
  swcMinify: true,
  env: {
    BACKEND_BASE_URL: process.env.BACKEND_BASE_URL || "http://localhost:4000",
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
      "https://unsplash.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxs8cpeae/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = {
  // ...withVideos(),

  ...nextConfig,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
// module.exports = [nextConfig, withVideos];

// const withVideos = require("next-videos");

// module.exports = video = withVideos();
