const { resolve } = require("path")

module.exports = {
  pathPrefix: process.env.KAIZEN_BASE_PATH || "/",
  siteMetadata: {
    title: `Kaizen Design System`,
    author: `Culture Amp`,
    description: `Culture Amp’s design system.`,
    siteUrl: `http://cultureamp.design/`,
  },
  plugins: [
    `gatsby-plugin-force-trailing-slashes`,
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
        path: resolve(__dirname, `src/components/images`),
        name: `images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: resolve(`../packages/component-library/icons`),
        name: `icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: resolve(`../packages/component-library/components`),
        name: `components`,
        ignore: [
          `**/*.ts`,
          `**/*.tsx`,
          `**/*.elm`,
          `**/*.scss`,
          `**/*.snap`,
          `**/*.png`,
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: resolve(`../packages/component-library/draft`),
        name: `draftComponents`,
        ignore: [
          `**/*.ts`,
          `**/*.tsx`,
          `**/*.elm`,
          `**/*.scss`,
          `**/*.snap`,
          `**/*.png`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: require.resolve(`./src/plugins/autolink-headers`),
          },
        ],
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 9,
        sassRuleModulesTest: /^(?!(.*normalize\.css$)).+\.s?css$/,
        cssLoaderOptions: {
          camelCase: false,
          modules: true,
        },
      },
    },
    `gatsby-plugin-svg-sprite`,
  ],
}
