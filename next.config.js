/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // ✅ Make Next output a static site to ./out (for Cloudflare Pages "Static HTML Export")
  output: "export",

  // ✅ next/image optimization doesn't work with pure static export unless you disable it
  images: {
    unoptimized: true,
    domains: ["lh3.googleusercontent.com", "vercel.com"],
  },

  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/precedent",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
