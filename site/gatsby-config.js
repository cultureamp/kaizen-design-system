module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
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
