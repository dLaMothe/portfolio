/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "/carina-portfolio" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/carina-portfolio" : "",
};

module.exports = nextConfig;
