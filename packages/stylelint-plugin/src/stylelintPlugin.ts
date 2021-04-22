import stylelint from "stylelint"
import { codemodOnAst } from "./codemod"
export const ruleName = "kaizen/deprecated-tokens"

type SecondaryOptions = {
  /** Allows the codemod to apply fixes using stylelint. Warning: Some inconsistent changes may occur */
  allowFixing?: boolean
  /** Report on and remove unused kaizen imports */
  unusedImports?: boolean
}

export default stylelint.createPlugin(
  ruleName,
  (primary, secondary: SecondaryOptions | undefined, context) => (
    root,
    result
  ) => {
    if (root?.source) {
      const language = /\.less$/.test(root.source.input.from) ? "less" : "scss"
      codemodOnAst(root, {
        // Until the codemod is designed to expect a different AST (e.g. some LESS variables come up as AtRules when run with stylelint), we don't support autofixing using stylelint.
        // You can still run the codemod using the CLI.
        // fix: context?.fix,
        fix: Boolean(secondary?.allowFixing && context?.fix),
        language,
        removeUnusedImports: Boolean(secondary?.unusedImports),
        reporter: ({ message, node }) =>
          stylelint.utils.report({
            ruleName,
            message,
            node,
            result,
          }),
      })
    }
  }
)
