import { Root } from "postcss"
import { importsNoExtraneousRule } from "./rules/imports-no-extraneous"
import { importsNoUnusedRule } from "./rules/imports-no-unused"
import { noDeprecatedTokensRule } from "./rules/no-deprecated-tokens"
import { noInvalidEquationsRule } from "./rules/no-invalid-equations"
import { noInvalidFunctionsRule } from "./rules/no-invalid-functions"
import { Options } from "./types"
import { getParser } from "./utils"

type CodemodOptions = Options & {
  removeUnusedImports?: boolean
}
/**
 * Run the codemod on a stylesheet AST (postcss Root)
 */
export const codemodOnAst = (stylesheetNode: Root, options: CodemodOptions) => {
  noInvalidEquationsRule(stylesheetNode, options)
  noInvalidFunctionsRule(stylesheetNode, options)
  noDeprecatedTokensRule(stylesheetNode, options)
  importsNoExtraneousRule(stylesheetNode, options)
  if (options.removeUnusedImports) importsNoUnusedRule(stylesheetNode, options)

  return stylesheetNode
}

/**
 * Allows you to run the codemod on source file content
 */
export const codemodOnSource = (
  styleSheetSource: string,
  options: CodemodOptions
) => codemodOnAst(getParser(options.language).parse(styleSheetSource), options)
