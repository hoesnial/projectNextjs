/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rmgzlqoeeijptytqzwse.supabase.co",
      },
    ],
  },
};

export default nextConfig;
