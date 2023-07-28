const { WebpackPlugin } = require("@cultureamp/i18n-react-intl/webpack-plugin");

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@kaizen/components"],
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    // Important: return the modified config

    config.plugins.push(new WebpackPlugin({ distDir: "./.next/locales" }));
    return config;
  },
};
