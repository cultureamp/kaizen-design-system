import { Root } from "postcss"
import { lintImports } from "./linters/lintImports"
import { lintTokens } from "./linters/lintTokens"
import { Options } from "./types"
import { getParser } from "./utils"

/**
 * Run the codemod on a stylesheet AST (postcss Root)
 */
export const codemodOnAst = (stylesheetNode: Root, options: Options) => {
  const { unmigratables, migrated } = lintTokens(stylesheetNode, options)

  lintImports(stylesheetNode, options)

  return { stylesheet: stylesheetNode, unmigratables, migrated }
}

/**
 * Allows you to run the codemod on source file content
 */
export const codemodOnSource = (
  styleSheetSource: string,
  options: Options = {
    language: "scss",
    reporter: () => {
      // Noop reporter
    },
  }
) => codemodOnAst(getParser(options.language).parse(styleSheetSource), options)
