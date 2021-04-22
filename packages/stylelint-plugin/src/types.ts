import { Node } from "postcss"
import type { WordNode } from "postcss-value-parser"

export type Reporter = (opts: { message: string; node: Node }) => void
export type Language = "scss" | "less"

export type Options = {
  language: "scss" | "less"
  fix?: boolean
  reporter: Reporter
  removeUnusedImports?: boolean
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
  cssVariable?: CSSVariable
}

export type CSSVariable = {
  identifier: string
  fallback?: string
}

export type Variable = {
  name: string
  nameWithPrefix: string
  prefix: "$" | "@"
  kaizenToken?: KaizenToken
  interpolated?: boolean
}

export type ParsedKaizenVariable = Variable & {
  kaizenToken: KaizenToken
  variableNode: WordNode
}
