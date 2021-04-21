// Credits to https://github.com/andyjansson/postcss-functions  (which is using an MIT license)
// Copied and modified to suit us

type Transformer = (functionName: string, ...params: string[]) => string
type FunctionsMap = Record<string, Transformer>
import * as postcss from "postcss"
import valueParser from "postcss-value-parser"
const transformString = (str: string, functions: FunctionsMap) =>
  valueParser.stringify(
    valueParser(str).walk(part => {
      transformNode(part, functions)
    }).nodes
  )

const transformNode = (node: valueParser.Node, functions: FunctionsMap) => {
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

const extractArgs = (nodes: valueParser.Node[], functions: FunctionsMap) => {
  const values = nodes.map(node => transformNode(node, functions))

  const args = []
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

export const transformDecl = (
  node: postcss.Declaration,
  functions: FunctionsMap
) => {
  const value = transformString(node.value, functions)
  node.value = value
  return node
}
