import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/ziadelkady20-blip/el-mas3ody/main/images/**",
      },
    ],
  },
};

export default nextConfig;
