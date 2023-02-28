/* eslint-disable import/no-extraneous-dependencies */
import fs from "fs"
import path from "path"
import postcss from "postcss"
import postcssModules from "postcss-modules"

export default {
  name: "css-module",
  setup(build): void {
    build.onResolve({ filter: /\.module\.css$/, namespace: "file" }, args => ({
      path: `${args.path}#css-module`,
      namespace: "css-module",
      pluginData: {
        pathDir: path.join(args.resolveDir, args.path),
      },
    }))
    build.onLoad(
      { filter: /#css-module$/, namespace: "css-module" },
      async args => {
        const { pluginData } = args as {
          pluginData: { pathDir: string }
        }

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
      args => ({
        path: path.join(args.resolveDir, args.path, "#css-module-data"),
        namespace: "css-module",
        pluginData: args.pluginData as { css: string },
      })
    )
    build.onLoad(
      { filter: /#css-module-data$/, namespace: "css-module" },
      args => {
        const contents = (args.pluginData as { css: string }).css

        return {
          contents,
          loader: "css",
        }
      }
    )
  },
}
