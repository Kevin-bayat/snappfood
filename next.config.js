const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const moduleExports = {
  eslint: {
    dirs: [
      "_api",
      "components",
      "containers",
      "pages",
      "shared",
      "store",
      "hoc",
    ],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.snappfood.ir",
      },
      {
        protocol: "https",
        hostname: "**.zoodfood.com",
      },
    ],
  },
};

module.exports = moduleExports;
