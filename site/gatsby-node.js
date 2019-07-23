const { babelLoaderOptions, extensions } = require("@kaizen/webpack")

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  const babelLoader = loaders.js()
  if (!babelLoader) return
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: babelLoader,
        },
      ],
    },
  })
}

exports.onCreateBabelConfig = ({ actions }, options) => {
  const { presets, plugins } = babelLoaderOptions
  presets.forEach(preset => {
    actions.setBabelPreset({ name: require.resolve(preset), options })
  })
  plugins.forEach(plugin => {
    actions.setBabelPlugin({ name: require.resolve(plugin), options })
  })
}

exports.resolvableExtensions = () => extensions

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/genericPage.tsx`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
