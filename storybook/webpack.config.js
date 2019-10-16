const { resolve } = require("path")

const extensions = [".ts", ".tsx"]

const excludeExternalModules = rule => ({
  exclude: /node_modules\/(?!(\@cultureamp|\@kaizen)).*/,
  ...rule,
})

const babelRule = {
  test: /\.(j|t)sx?$/,
  use: [
    {
      loader: require.resolve("babel-loader"),
      options: require("../package.json").babel,
    },
  ],
}

const imagesRule = {
  test: [/\.jpe?g$/, /\.png$/],
  loader: "file-loader",
  options: {
    name: "[name].[hash:8].[ext]",
  },
}

const preprocessorLoaders = [
  {
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      plugins: () => [
        require("postcss-flexbugs-fixes"),
        require("postcss-preset-env")({
          autoprefixer: { flexbox: "no-2009" },
          stage: 3,
        }),
      ],
    },
  },
  {
    loader: "sass-loader",
    options: {
      sourceMap: true,
    },
  },
]

const stylesRule = {
  test: /\.s?css$/,
  use: [
    "style-loader",
    {
      loader: "css-loader",
      options: {
        importLoaders: preprocessorLoaders.length,
        sourceMap: true,
        modules: {
          localIdentName: "[folder]-[name]__[local]--[hash:base64:5]",
        },
      },
    },
    ...preprocessorLoaders,
  ],
}

const svgRule = {
  test: /\.svg$/,
  use: [
    {
      loader: "svg-sprite-loader",
      options: {
        symbolId: "ca-icon-[name]",
      },
    },
  ],
}

const svgIconRule = {
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
}

const elmRule = {
  test: /\.elm$/,
  exclude: [/elm-stuff/, /node_modules/],
  use: [
    {
      loader: "babel-loader",
      options: {
        plugins: [
          "module:elm-css-modules-plugin",
          ["module:babel-elm-assets-plugin", {}, "assets-plugin-generic"],
          [
            "module:babel-elm-assets-plugin",
            {
              // "author/project" is the default value if no "name" field is specified in elm.json.
              // If we want to allow setting the name field in our workspaces, we'll need to update
              // the plugin to support multiple possible package names.
              package: "author/project",
              module: "Icon.SvgAsset",
              function: "svgAsset",
            },
            "assets-plugin-svg",
          ],
        ],
      },
    },
    {
      loader: "elm-hot-webpack-loader",
    },
    {
      loader: "elm-webpack-loader",
      options: {
        cwd: resolve(__dirname, ".."),
        pathToElm: resolve(__dirname, "../node_modules/.bin/elm"),
      },
    },
  ],
}

const rules = [
  babelRule,
  stylesRule,
  imagesRule,
  svgRule,
  svgIconRule,
  elmRule,
].map(excludeExternalModules)

const removeSvgFromTest = rule => {
  if (rule.test.toString().includes("svg")) {
    const test = rule.test
      .toString()
      .replace("svg|", "")
      .replace(/\//g, "")
    return { ...rule, test: new RegExp(test) }
  } else {
    return rule
  }
}

module.exports = ({ config }) => {
  // Storybook's base config applies file-loader to svgs
  config.module.rules = config.module.rules.map(removeSvgFromTest)
  config.module.rules.push(...rules)
  config.resolve.extensions.push(...extensions)
  return config
}
