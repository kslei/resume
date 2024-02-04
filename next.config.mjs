/** @type {import('next').NextConfig} */
const nextConfig = {
  /* output: 'standalone', */
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
