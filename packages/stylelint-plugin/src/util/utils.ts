import type * as postcss from "postcss"
import postcssLess from "postcss-less"
import postcssScss from "postcss-scss"
import { Language } from "../types"

export const getLanguageFromFilePath = (filePath: string): Language =>
  /\.less$/.test(filePath) ? "less" : "scss"

/**
 * This type is here for the purpose of fixing incorrect external library types within `postcss-less` and `postcss-scss`.
 * The only difference is the change from `parse: postcss.Parser` to `parse: postcss.Parser<postcss.Root>`.
 * We have opened PRs in each respective project, and are awaiting approval:
 *
 * https://github.com/DefinitelyTyped/DefinitelyTyped/pull/58082
 * https://github.com/postcss/postcss-scss/pull/135
 *
 * It is used as the asserted return type in {@link getParser}, and should be un-asserted (taken out) once fixed at the source (within the external repositories)
 */
type ParserAndStringifier = {
  parse: postcss.Parser<postcss.Root>
  stringify: postcss.Stringifier
}
export const getParser = (language: Language): ParserAndStringifier =>
  (language === "scss" ? postcssScss : postcssLess) as ParserAndStringifier

export const variablePrefixForLanguage = (language: Language): "@" | "$" =>
  language === "less" ? "@" : "$"
