import type { NextConfig } from "next";
import { readPublicBackendConfig } from "./src/lib/public-config";

// Configuration is optional until M2. Validate it without connecting to a service.
readPublicBackendConfig();

const nextConfig: NextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
