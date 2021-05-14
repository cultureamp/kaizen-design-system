import { Node, Root } from "postcss"
import type { WordNode } from "postcss-value-parser"

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

export type StylelintPluginOptions = {
  /** Allows the codemod to apply fixes using stylelint. Warning: Some inconsistent changes may occur */
  allowFixing?: boolean
  /** Report on and remove unused kaizen imports */
  unusedImports?: boolean
}

export type KaizenToken = {
  name: string
  sassModulePath: string
  lessModulePath: string
  value: string
  moduleName: string
  cssVariable: CSSVariable | null
  deprecated: boolean
  // Will contain a HEX (possibly with an alpha channel) color if the value (or CSS fallback) contains any valid color.
  color: string | null
}

export type CSSVariable = {
  identifier: string
  fallback?: string
}

/**
 *  This type represents a variable within a stylesheet, and is tied to either SCSS or LESS
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
 * This represents a Variable, but one that definitely holds a KaizenToken, and a parsed WordNode (variableNode)
 */
export type ParsedKaizenVariable = Variable & {
  kaizenToken: KaizenToken
}

export type StyleLintRuleFunction = (
  stylesheetNode: Root,
  options: Options
) => void
export type StyleLintRule = {
  name: string
  ruleFunction: StyleLintRuleFunction
}

export type RulesEnabled = {
  importsNoUnused: boolean
  importsNoExtraneous: boolean
  noInvalidEquations: boolean
  noInvalidFunctions: boolean
  noDeprecatedTokens: boolean
  noTransitiveTokens: boolean
}

export const allRulesEnabled: RulesEnabled = {
  noDeprecatedTokens: true,
  noInvalidEquations: true,
  importsNoExtraneous: true,
  importsNoUnused: true,
  noInvalidFunctions: true,
  noTransitiveTokens: true,
}
