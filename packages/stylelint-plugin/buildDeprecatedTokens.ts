#!/usr/bin/env yarn ts-node

/**
 * Use this script to generate a file containing tokens from a previous version of `@kaizen/design-token`.
 * This allows the stylelint plugin to pick up old tokens, and recommend replacements.
 */

import fs from "fs"
import path from "path"
import merge from "lodash.merge"
import fetch from "node-fetch"
import { format } from "prettier"
import { KaizenToken } from "./src/types"
import { getCSSVarsFromJson, kaizenTokensByName } from "./src/util/kaizenTokens"

// Changing this version will change which unsupported/non-existent tokens the stylelint plugin knows about
const version = "2.9.3"

const fetchDesignTokensJsonFile = (fileName: string): Promise<unknown> =>
  fetch(`https://unpkg.com/@kaizen/design-tokens@${version}/${fileName}`).then(
    r => r.json()
  )

/**
 * The list of rules that will be applied to determine deprecation and potential replacements for tokens from design-tokens v2.
 * Ensure that any pattern on the left side represents a token that is deprecated (i.e `pattern.test(tokenName) === true` means deprecated)
 * Also please ensure that if you applied every rule once on a string, you would get the same result if you re-ran the rules again on the first return value.
 * We want this constraint because, otherwise, applying each rule on a token won't always return a non-deprecated token (because of the first constraint)
 * Order of the rules matters.
 *
 * The last value in the triple is a boolean that represents whether the rules should terminate at that rule, if it tests true.
 *
 */
export const version2DeprecationRules: Array<[RegExp, string?, boolean?]> = [
  // If a token has the literal "deprecated" we label it as deprecated without an automatic replacement, and don't apply any further rules.
  [/deprecated/, undefined, true],
  [/color-wisteria/, "color-purple"],
  [/color-cluny/, "color-blue"],
  [/color-yuzu/, "color-yellow"],
  [/color-coral/, "color-red"],
  [/color-seedling/, "color-green"],
  [/color-peach/, "color-orange"],
  [/color-stone/, "color-gray-100"],
  [/color-ash/, "color-gray-300"],
  [/color-iron/, "color-gray-500"],
  [/color-slate/, "color-gray-600"],
  [/-rgb-params$/, "-rgb"],
  [/kz-var-id-(.*)/, "$1-id", true],
  [/kz-(var-)?/, "", true],
]

/**
 * Given a token name, such as "kz-var-color-wisteria-100", get the desired replacement for it, if it is deprecated and a repacement exists.
 * Undefined is returned if the token isn't deprecated, a token isn't found for the name that is passed, or there is no replacement.
 * Note: if there is no replacement, that doesn't necessarily mean a token isn't deprecated - however, if there IS a replacement, then it certainly is deprecated.
 * Use {@link isKaizenTokenDeprecated} for testing whether a token is deprecated.
 */
function getReplacementForDeprecatedOrRemovedToken(tokenName: string): {
  replacement: KaizenToken | undefined
  deprecated: boolean
} {
  let replacementToken = tokenName
  let matchedAny = false
  for (const renameRule of version2DeprecationRules) {
    const [pattern, replacement, isTerminal] = renameRule

    if (pattern.test(replacementToken)) {
      matchedAny = true
      if (replacement !== undefined)
        replacementToken = replacementToken.replace(pattern, replacement)
      if (isTerminal) {
        break
      }
    }
  }
  if (matchedAny) {
    if (replacementToken !== tokenName) {
      return {
        replacement: kaizenTokensByName[replacementToken],
        deprecated: true,
      }
    }
    return {
      deprecated: true,
      replacement: undefined,
    }
  } else {
    return {
      replacement: undefined,
      deprecated: false,
    }
  }
}

const run = async (): Promise<void> => {
  const deprecatedTokens = merge(
    await fetchDesignTokensJsonFile("tokens/color.json"),
    await fetchDesignTokensJsonFile("tokens/color-vars.json"),
    await fetchDesignTokensJsonFile("tokens/animation.json"),
    await fetchDesignTokensJsonFile("tokens/animation-vars.json"),
    await fetchDesignTokensJsonFile("tokens/border.json"),
    await fetchDesignTokensJsonFile("tokens/border-vars.json"),
    await fetchDesignTokensJsonFile("tokens/layout.json"),
    await fetchDesignTokensJsonFile("tokens/layout-vars.json"),
    await fetchDesignTokensJsonFile("tokens/shadow.json"),
    await fetchDesignTokensJsonFile("tokens/shadow-vars.json"),
    await fetchDesignTokensJsonFile("tokens/spacing.json"),
    await fetchDesignTokensJsonFile("tokens/spacing-vars.json"),
    await fetchDesignTokensJsonFile("tokens/typography.json"),
    await fetchDesignTokensJsonFile("tokens/typography-vars.json"),
    await fetchDesignTokensJsonFile("tokens/variable-identifiers.json")
  )

  const deprecatedTokenKeys = Object.keys(getCSSVarsFromJson(deprecatedTokens))
    .map(key => {
      const replacementResult = getReplacementForDeprecatedOrRemovedToken(key)

      // We don't care about variables that aren't deprecated
      if (!replacementResult.deprecated) return undefined

      return [key, replacementResult.replacement?.name]
    })
    .filter(n => n !== undefined)
  fs.writeFileSync(
    path.resolve(__dirname, "deprecatedTokens.ts"),
    format(
      `
// AUTOGENERATED BY ${path.basename(__filename)}
export const deprecatedTokenReplacements = new Map(${JSON.stringify(
        deprecatedTokenKeys
      )})`,
      { parser: "typescript" }
    )
  )
}

run()
