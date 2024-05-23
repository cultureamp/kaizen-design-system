import path from "path"
import virtual from "@rollup/plugin-virtual"
import * as acorn from "acorn"
import { rollup } from "rollup"

export async function check(input) {
  const resolved = path.resolve(input)

  const bundle = await rollup({
    input: "__agadoo__",
    plugins: [
      virtual({
        __agadoo__: `import ${JSON.stringify(resolved)}`,
      }),
    ],
    onwarn: (warning, handle) => {
      if (warning.code !== "EMPTY_BUNDLE") handle(warning)
    },
  })

  const result = await bundle.generate({
    format: "esm",
  })

  const { code } = result.output[0]

  const ast = acorn.parse(code, {
    ecmaVersion: 11,
    sourceType: "module",
  })

  const nodes = ast.body.filter(node => node.type !== "ImportDeclaration")

  console.log(code)

  return {
    shaken: nodes.length === 0,
  }
}
