const { resolve } = require("path")

module.exports = {
  siteMetadata: {
    title: `Kaizen Design System`,
    author: `Culture Amp`,
    description: `Culture Amp’s design system.`,
    siteUrl: `http://cultureamp.design/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: resolve(__dirname, `docs`),
        name: `docs`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: resolve(
          __dirname,
          `../node_modules/@cultureamp/kaizen-component-library/icons`
        ),
        name: `icons`,
      },
    },
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 9,
        cssLoaderOptions: {
          modules: true,
        },
      },
    },
    `gatsby-plugin-svg-sprite`,
  ],
}
