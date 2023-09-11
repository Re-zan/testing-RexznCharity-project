/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cached.imagescaler.hbpl.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.letsroam.com",
      },
      {
        protocol: "https",
        hostname: "www.socialtables.com",
      },
      {
        protocol: "https",
        hostname: "blog.logox.co.uk",
      },
      {
        protocol: "https",
        hostname: "media.istockphoto.com",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
