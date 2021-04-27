import { Plugin, PluginCreator } from "postcss"
import { codemodOnAst } from "./codemod"
import { RulesEnabled } from "./types"

type Opts = {
  fix?: boolean
} & RulesEnabled
export const deprecatedTokensPlugin: PluginCreator<Opts> = (
  opts: Opts = {
    importsNoExtraneous: true,
    importsNoUnused: true,
    noDeprecatedTokens: true,
    noInvalidEquations: true,
    noInvalidFunctions: true,
    noTransitiveTokens: true,
    fix: true,
  }
) =>
  ({
    postcssPlugin: "kaizen-deprecated-tokens",
    Root: (root, { result }) => {
      const language = /\.less$/.test(root.source?.input.file || "")
        ? "less"
        : "scss"
      codemodOnAst(root, {
        ...opts,
        language,
        reporter: ({ message, node }) => {
          node.warn(result, message)
        },
      })
    },
  } as Plugin)

deprecatedTokensPlugin.postcss = true
