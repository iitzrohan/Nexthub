/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        hostname: "*.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
