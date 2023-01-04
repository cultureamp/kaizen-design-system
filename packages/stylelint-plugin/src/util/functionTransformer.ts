// Credits to https://github.com/andyjansson/postcss-functions  (which is using an MIT license)
// Copied and modified so that we have access to the function name within transformer functions.

type Transformer = (functionName: string, ...params: string[]) => string
type FunctionsMap = Record<string, Transformer>
import valueParser from "postcss-value-parser"
const transformString = (str: string, functions: FunctionsMap): string =>
  valueParser.stringify(
    valueParser(str).walk(part => {
      transformNode(part, functions)
    }).nodes
  )

const transformNode = (
  node: valueParser.Node,
  functions: FunctionsMap
): valueParser.Node => {
  if (
    node.type !== "function" ||
    !Object.prototype.hasOwnProperty.call(functions, node.value)
  )
    return node
  const newNode = node as valueParser.Node
  const func = functions[node.value]
  const args = extractArgs(node.nodes, functions)
  const val = func.apply(func, [node.value, ...args])

  newNode.type = "word"
  newNode.value = val
  return newNode
}

const extractArgs = (
  nodes: valueParser.Node[],
  functions: FunctionsMap
): string[] => {
  const values = nodes.map(node => transformNode(node, functions))

  const args = [] as string[]
  const last = values.reduce((prev, node) => {
    if (node.type === "div" && node.value === ",") {
      args.push(prev)
      return ""
    }
    return prev + valueParser.stringify(node)
  }, "")

  if (last) args.push(last)

  return args
}

/**
 * This is the transformer that allows us to do things with function like `add-alpha($kz-color-blah, 80%)`.
 * You give it a value like: `solid 1px darken($kz-color-white, 10%)`, and a map of functions like: `{ darken: (functionName: string, ...params: string[]) => string }`
 * and it will call the transformer function on the functions map if it exists, and replace the function call with your return value.
 * e.g.
 * value: `solid 1px darken($kz-color-white, 10%)`
 * functions: { darken: (functionName, ...params) => params[0] }
 *
 * output: `solid 1px $kz-color-white`
 */
export const transformDecl = (value: string, functions: FunctionsMap): string =>
  transformString(value, functions)
