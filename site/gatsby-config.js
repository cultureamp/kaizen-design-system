module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    "gatsby-plugin-svg-sprite",
  ],
}
