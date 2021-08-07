// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: { url: "/", static: false },
    src: { url: "/" },
  },
  plugins: [
    /* ... */
    [
      "@snowpack/plugin-sass",
      "@snowpack/plugin-postcss",
      {
        native: true,
        compilerOptions: {
          style: "compressed",
        },
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
    //baseUrl: ' ck'
    out: "./build",
  },
};
