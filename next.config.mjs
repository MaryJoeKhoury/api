/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["hanzo-dxp-bucket.s3.eu-west-3.amazonaws.com"],
  },
};

export default nextConfig;
