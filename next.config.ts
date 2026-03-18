import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "www.murangaseal.com",
      //   pathname: "**",
      // },
      {
        protocol: "https",
        hostname: "icons8.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        pathname: "**",
      },
    ],
  },
};

export default withPayload(withPayload(nextConfig))
