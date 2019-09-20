exports.resolvableExtensions = () => [".js", ".jsx", ".ts", ".tsx", ".json"]

exports.onCreateWebpackConfig = ({ actions, loaders }) => {
  const babelLoader = loaders.js()
  if (!babelLoader) return
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: babelLoader,
        },
        {
          test: /\.icon\.svg$/,
          use: {
            loader: "svgo-loader",
            options: {
              plugins: [
                { removeTitle: true },
                {
                  convertColors: {
                    currentColor: /black|#000|#000000/,
                  },
                },
              ],
            },
          },
        },
      ],
    },
  })
}

const babelLoaderOptions = {
  presets: ["@babel/preset-typescript", "@babel/preset-react"],
  plugins: [
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-proposal-object-rest-spread",
  ],
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

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const componentReadmeRegex = /\/(?:components|draft\/Kaizen).*\W(\w+)\/README.mdx?$/i

const camelToKebab = string => {
  return string
    .replace(/[\w]([A-Z])/g, char => {
      return char[0] + `-` + char[1]
    })
    .toLowerCase()
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    let slug = ``
    if (componentReadmeRegex.test(node.fileAbsolutePath) === true) {
      const componentName = camelToKebab(
        node.fileAbsolutePath.match(componentReadmeRegex)[1]
      )
      slug = `/components/${componentName}/`
    } else {
      slug = createFilePath({ node, getNode, basePath: `.` })
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

const mapSlugToPage = slug => {
  if (/^\/guidelines/.test(slug))
    return path.resolve(`./src/templates/guidelinePage.tsx`)
  if (/^\/components/.test(slug))
    return path.resolve(`./src/templates/componentPage.tsx`)
  return path.resolve(`./src/templates/genericPage.tsx`)
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      allMdx {
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
    result.data.allMdx.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: mapSlugToPage(node.fields.slug),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}
