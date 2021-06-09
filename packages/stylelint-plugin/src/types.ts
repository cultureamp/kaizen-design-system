import { Node, Root } from "postcss"
import type { WordNode } from "postcss-value-parser"

export type RuleDefinition = {
  name: string
  ruleFunction: (stylesheetNode: Root, options: Options) => void
}

export type Reporter = (opts: {
  message: string
  node: Node
  autofixAvailable: boolean
}) => void
export type Language = "scss" | "less"

export type Options = {
  language: "scss" | "less"
  fix?: boolean
  reporter: Reporter
}

export type KaizenToken = {
  name: string
  sassModulePath: string
  lessModulePath: string
  value: string
  moduleName: string
  cssVariable?: CSSVariable
  deprecated: boolean
}

export type CSSVariable = {
  identifier: string
  fallback?: string
}

/**
 *  This type represents a variable within a stylesheet, and is tied to either SCSS or LESS.
 */
export type Variable = {
  name: string
  nameWithPrefix: string
  prefix: "$" | "@"
  kaizenToken?: KaizenToken
  interpolated?: boolean
  negated?: boolean
  node: WordNode
}

/**
 * This represents a Variable, but one that definitely holds a KaizenToken, and a parsed WordNode (variableNode).
 * We use the terminology "Variable" and "Token" to distinguish between a stylesheet construct and a Kaizen theme field (token) respectively
 */
export type ParsedKaizenVariable = Variable & {
  kaizenToken: KaizenToken
}
