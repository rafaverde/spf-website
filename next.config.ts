import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const wpUploadHosts = [
  { hostname: "app.spf.com.uy", port: "" },
  { hostname: "www.app.spf.com.uy", port: "" },
  { hostname: "spf.com.uy", port: "" },
  { hostname: "www.spf.com.uy", port: "" },
  { hostname: "spf.com.uy", port: "8890" },
  { hostname: "www.spf.com.uy", port: "8890" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      ...wpUploadHosts.flatMap(({ hostname, port }) => [
        {
          protocol: "https" as const,
          hostname,
          port,
          pathname: "/wp-content/uploads/**",
        },
        {
          protocol: "http" as const,
          hostname,
          port,
          pathname: "/wp-content/uploads/**",
        },
      ]),
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
