import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Empêche Turbopack de remonter jusqu'à un éventuel lockfile parent.
  turbopack: { root: import.meta.dirname },
  poweredByHeader: false,
};

export default nextConfig;
