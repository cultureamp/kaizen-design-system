/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs"
import path from "path"
import postcss from "postcss"
import postcssModules from "postcss-modules"

type ArgsType = {
  resolveDir: string
  path: string
  pluginData: { css?: string; pathDir: string }
}

export default {
  name: "css-module",
  setup(build): void {
    build.onResolve(
      { filter: /\.module\.css$/, namespace: "file" },
      (args: ArgsType) => ({
        path: `${args.path}#css-module`,
        namespace: "css-module",
        pluginData: {
          pathDir: path.join(args.resolveDir, args.path),
        },
      })
    )
    build.onLoad(
      { filter: /#css-module$/, namespace: "css-module" },
      async ({ pluginData }: ArgsType) => {
        const source = await fs.promises.readFile(pluginData.pathDir, "utf8")

        let cssModule = {}
        const result = await postcss([
          postcssModules({
            getJSON(_, json) {
              cssModule = json
            },
          }),
        ]).process(source, { from: pluginData.pathDir })

        return {
          pluginData: { css: result.css },
          contents: `import "${
            pluginData.pathDir
          }"; export default ${JSON.stringify(cssModule)}`,
        }
      }
    )
    build.onResolve(
      { filter: /\.module\.css$/, namespace: "css-module" },
      (args: ArgsType) => ({
        path: path.join(args.resolveDir, args.path, "#css-module-data"),
        namespace: "css-module",
        pluginData: args.pluginData,
      })
    )
    build.onLoad(
      { filter: /#css-module-data$/, namespace: "css-module" },
      (args: ArgsType) => {
        const contents = args.pluginData.css

        return {
          contents,
          loader: "css",
        }
      }
    )
  },
}
