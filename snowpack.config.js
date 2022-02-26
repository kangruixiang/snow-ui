// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const tailwindConfig = require("./tailwind.config");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: ["@snowpack/plugin-svelte", ["@snowpack/plugin-postcss"]],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js",
  },
  buildOptions: {
    out: "docs",
  },
};
