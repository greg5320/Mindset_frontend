import type { NextConfig } from "next";

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/clients",
        destination: "http://localhost:8000/api/clients/",
      },
    ]
  },
}

export default nextConfig;
