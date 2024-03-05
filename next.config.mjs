/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        hostname: "daisyui.com",
      },
    ],
  },
};

export default nextConfig;
