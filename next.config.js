/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.slingacademy.com",
        port: "",
        pathname: "/public/sample-photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
