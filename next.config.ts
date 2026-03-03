import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.app.spf.com.uy",
        port: "",
        pathname: "/wp-content/uploads/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "www.app.spf.com.uy",
        port: "",
        pathname: "/wp-content/uploads/**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
        search: "",
      },
      {
        protocol: "http",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
