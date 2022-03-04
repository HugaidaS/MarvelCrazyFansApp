/** @type {import('next').NextConfig} */
import withPWA from "next-pwa";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = withPWA({
  async redirects() {
    return [
      {
        source: "/",
        destination: "/characters/1",
        permanent: true,
      },
      {
        source: "/characters",
        destination: "/characters/1",
        permanent: true,
      },
    ];
  },
  reactStrictMode: true,
  trailingSlash: true,
  pwa: {
    dest: "public",
    disable: !isProd,
  },
  images: {
    domains: ["i.annihil.us"],
  },
});

export default nextConfig;
