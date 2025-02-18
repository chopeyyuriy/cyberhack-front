import createMDX from "@next/mdx";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const withMDX = createMDX({});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  images: {
    domains: ["127.0.0.1", "cyberhack.pro", "test16.dkl-logistics.org.ua"],
  },
  remotePatterns: [
    // {
    //   protocol: "https",
    //   hostname: "cyberhack.pro",
    //   port: "",
    //   pathname: "/storage/**",
    // },
    {
      protocol: "https",
      hostname: "test16.dkl-logistics.org.ua",
      port: "",
      pathname: "/storage/**",
    },
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default withMDX(withNextIntl(nextConfig));
