// Call the pre-build script -- used for validation, setup, etc.
import "./pre-build"

import { resolve } from "path"
import { Loader, RuleSetRule as Rule } from "webpack"

const babel: Rule = {
  test: /\.(j|t)sx?$/,
  loader: require.resolve("babel-loader"),
  options: require("../package.json").babel,
}

const stylePreprocessors: Loader[] = [
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

const styles: Rule = {
  test: /\.s?css$/,
  use: [
    {
      loader: "style-loader",
    },
    {
      loader: "css-loader",
      options: {
        importLoaders: stylePreprocessors.length,
        sourceMap: true,
        modules: {
          localIdentName: "[folder]-[name]__[local]--[hash:base64:5]",
        },
      },
    },
    ...stylePreprocessors,
  ],
}

const svgs: Rule = {
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

const svgIcons: Rule = {
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

const elm: Rule = {
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
              // "author/project" is the default value if no "name" field is
              // specified in elm.json. If we want to allow setting the name
              // field in our workspaces, we'll need to update the plugin to
              // support multiple possible package names.
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
        debug: false,
        cwd: resolve(__dirname, ".."),
        pathToElm: resolve(__dirname, "../node_modules/.bin/elm"),
      },
    },
  ],
}

const storybookSource: Rule = {
  test: /\.tsx?$/,
  include: resolve(__dirname, "../packages/component-library"),
  use: [
    {
      loader: require.resolve("ts-loader"),
      options: {
        reportFiles: [
          "!**/component-library/**/*.{ts,tsx}",
          "**/component-library/Heading/**/*.{ts,tsx}",
          "**/component-library/Paragraph/**/*.{ts,tsx}",
          // @TODO - there's a heck of a lot of files with type errors
          // as these are addressed, they should be added to reportFiles
          // until we reach full TS coverage
        ],
        // compilerOptions: { noEmit: true },
      },
    },
    {
      loader: require.resolve("react-docgen-typescript-loader"),
    },
  ],
}

const removeSvgFromTest = (rule: Rule): Rule => {
  if (rule.test && rule.test.toString().includes("svg")) {
    const test = rule.test
      .toString()
      .replace("svg|", "")
      .replace(/\//g, "")
    return { ...rule, test: new RegExp(test) }
  } else {
    return rule
  }
}

const excludeExternalModules = (rule: Rule): Rule => ({
  exclude: /node_modules\/(?!(\@kaizen|\@cultureamp)).*/,
  ...rule,
})

export default ({ config }) => {
  // Storybook's base config applies file-loader to svgs
  config.module.rules = config.module.rules.map(removeSvgFromTest)

  // Required for the storysource storybook addon
  config.module.rules.push(storybookSource)

  config.module.rules.push(
    ...[babel, styles, svgs, svgIcons, elm].map(excludeExternalModules)
  )

  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
