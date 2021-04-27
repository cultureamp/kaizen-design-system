import { Root } from "postcss"
import { importsNoExtraneousRule } from "./rules/imports-no-extraneous"
import { importsNoUnusedRule } from "./rules/imports-no-unused"
import { noDeprecatedTokensRule } from "./rules/no-deprecated-tokens"
import { noInvalidEquationsRule } from "./rules/no-invalid-equations"
import { noInvalidFunctionsRule } from "./rules/no-invalid-functions"
import { noTransitiveTokensRule } from "./rules/no-transitive-tokens"
import { Options, RulesEnabled } from "./types"
import { getParser } from "./utils"

type CodemodOptions = Options & RulesEnabled
/**
 * Run the codemod on a stylesheet AST (postcss Root)
 */
export const codemodOnAst = (stylesheetNode: Root, options: CodemodOptions) => {
  options.noTransitiveTokens && noTransitiveTokensRule(stylesheetNode, options)
  options.noInvalidEquations && noInvalidEquationsRule(stylesheetNode, options)
  options.noInvalidFunctions && noInvalidFunctionsRule(stylesheetNode, options)
  options.noDeprecatedTokens && noDeprecatedTokensRule(stylesheetNode, options)
  options.importsNoExtraneous &&
    importsNoExtraneousRule(stylesheetNode, options)
  options.importsNoUnused && importsNoUnusedRule(stylesheetNode, options)

  return stylesheetNode
}

/**
 * Allows you to run the codemod on source file content
 */
export const codemodOnSource = (
  styleSheetSource: string,
  options: CodemodOptions
) => codemodOnAst(getParser(options.language).parse(styleSheetSource), options)
