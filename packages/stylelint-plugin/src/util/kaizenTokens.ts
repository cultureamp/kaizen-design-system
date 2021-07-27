import { Utils } from "@kaizen/design-tokens"
import flatmap from "lodash.flatmap"
import kebabCase from "lodash.kebabcase"
import postcssValueParser from "postcss-value-parser"
import {
  CSSVariable,
  CurrentKaizenToken,
  DeprecatedKaizenToken,
  RemovedKaizenToken,
} from "../types"

const getVarsFromJson = (json: Record<any, any>) => {
  const variables = {} as Record<string, string>

  // Shamelessly using a map function like a forEach
  Utils.mapLeafsOfObject(json, (path, value) => {
    const key = path.map(kebabCase).join("-")
    variables[key] = `${value}`
  })
  return variables
}

/* import fetch from "node-fetch"
import { name } from "../../package.json"
const cacheDir = findCacheDir({ name })
 */

/* Pass in just the name of a module which is used to import variable.
  E.g. "color" or "color-vars", NOT "@kaizen/design-tokens/sass/color".
  Assumes that the SASS and LESS modules contain the same variables
*/
const getVarsFromKaizenModule = (moduleName: string) => {
  const sassModulePath = `@kaizen/design-tokens/sass/${moduleName}`
  const lessModulePath = `@kaizen/design-tokens/less/${moduleName}`
  const source = require(`@kaizen/design-tokens/tokens/${moduleName}.json`)

  const variables = getVarsFromJson(source)
  return {
    moduleName,
    variables,
    sassModulePath,
    lessModulePath,
  } as const
}

export const kaizenTokensByModule = {
  color: getVarsFromKaizenModule("color"),
  colorVars: getVarsFromKaizenModule("color-vars"),
  animation: getVarsFromKaizenModule("animation"),
  animationVars: getVarsFromKaizenModule("animation-vars"),
  border: getVarsFromKaizenModule("border"),
  borderVars: getVarsFromKaizenModule("border-vars"),
  layout: getVarsFromKaizenModule("layout"),
  layoutVars: getVarsFromKaizenModule("layout-vars"),
  shadow: getVarsFromKaizenModule("shadow"),
  shadowVars: getVarsFromKaizenModule("shadow-vars"),
  spacing: getVarsFromKaizenModule("spacing"),
  spacingVars: getVarsFromKaizenModule("spacing-vars"),
  typography: getVarsFromKaizenModule("typography"),
  typographyVars: getVarsFromKaizenModule("typography-vars"),
  variableIdentifiers: getVarsFromKaizenModule("variable-identifiers"),
}

const parseCssVariableValue = (value: string): CSSVariable | undefined => {
  const parsedValue = postcssValueParser(value)
  const firstNode = parsedValue.nodes[0]
  if (firstNode?.type === "function" && firstNode.value === "var") {
    const parameterNodes = firstNode.nodes

    // Identifier should be something like: "--kz-var"
    const identifier = parameterNodes[0].value
    const firstDividerIndex = parameterNodes.findIndex(
      node => node.type === "div"
    )

    // If there are no fall back values (i.e. there is no comma)
    if (firstDividerIndex < 0) {
      return {
        identifier,
      }
    }

    const firstNodeAfterDivider = parameterNodes[firstDividerIndex + 1]

    if (firstNodeAfterDivider) {
      return {
        identifier,
        fallback: postcssValueParser.stringify(
          parameterNodes.slice(firstDividerIndex + 1)
        ),
      }
    }
  }
  return undefined
}

/**
 * A map/database of kaizen token name -> RemovedKaizenToken.
 * E.g.
 *  - `removedKaizenTokensByName["kz-var-color-white"] -> { name: "kz-var-color-white", value: "#FFFFFF", cssVariable: { identifier: "...", fallback: "#FFFFFF" }, ...}`
 *  - `removedKaizenTokensByName["color-white"] -> undefined`
 *  - `removedKaizenTokensByName["something-else"] -> undefined`
 *
 * Those examples may change depending on what exists in `generated/removedTokens.json` which is generated at build time, sourced from a prior version of design-tokens
 */
export const removedKaizenTokensByName: Readonly<
  Record<string, RemovedKaizenToken | undefined>
> = Object.entries(
  getVarsFromJson(require("../../generated/removedTokens.json"))
).reduce(
  (accumulatedResult, [variableName, variableValue]) => ({
    ...accumulatedResult,
    [variableName]: {
      value: variableValue,
      deprecated: true,
      removed: true,
      name: variableName,
      cssVariable: parseCssVariableValue(variableValue),
    } as RemovedKaizenToken,
  }),
  {}
)

/**
 * The list of rules that will be applied to determine deprecation and potential replacements for tokens from design-tokens v2.
 * Ensure that any pattern on the left side represents a token that is deprecated (i.e `pattern.test(tokenName) === true` means deprecated)
 * Also please ensure that idempotency is preserved when applying rules.
 * I.e. if you applied every rule once on a string, you would get the same result if you re-ran the rules again.
 * We want idempotency because, otherwise, applying each rule on a token won't always return a non-deprecated token (because of the first constraint)
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

export const isKaizenTokenDeprecatedOrRemoved = (tokenName: string) => {
  let anyV2RuleMatched = false

  version2DeprecationRules.forEach(([pattern]) => {
    anyV2RuleMatched = anyV2RuleMatched || pattern.test(tokenName)
  })
  return anyV2RuleMatched || tokenName in removedKaizenTokensByName
}

/**
 * A nifty map of kaizen token variable -> information about the variable.
 * Looks something like:
 * {
 *    "kz-var-color-wisteria-800": { name: "kz-var-color-wisteria-800", value: "var(--kz-var-color-wisteria-800, #ff0011)", cssVariable: { identifier: "--kz-var-color-wisteria-800", fallback: "#ff0011" }, ... },
 *    "kz-color-wisteria-800": { name: "kz-var-color-wisteria-800", value: "#ff0011", cssVariable: undefined, ...},
 *    ...
 *    "kz-you-get-the-point": {...}
 * }
 */
export const kaizenTokensByName: Readonly<
  Record<string, CurrentKaizenToken | DeprecatedKaizenToken | undefined>
> = flatmap(Object.values(kaizenTokensByModule), module =>
  Object.entries(module.variables).map(([variableName, value]) => {
    const cssVariable = parseCssVariableValue(value)

    return {
      [variableName]: {
        name: variableName,
        value,
        cssVariable,
        moduleName: module.moduleName,
        sassModulePath: module.sassModulePath,
        lessModulePath: module.lessModulePath,
        deprecated: isKaizenTokenDeprecatedOrRemoved(variableName),
        removed: false,
      } as CurrentKaizenToken | DeprecatedKaizenToken,
    }
  })
).reduce((acc, next) => ({ ...acc, ...next }), {})

/**
 * Given a token name, such as "kz-var-color-wisteria-100", get the desired replacement for it, if it is deprecated and a repacement exists.
 * Undefined is returned if the token isn't deprecated, a token isn't found for the name that is passed, or there is no replacement.
 * Note: if there is no replacement, that doesn't necessarily mean a token isn't deprecated - however, if there IS a replacement, then it certainly is deprecated.
 * Use {@link isKaizenTokenDeprecatedOrRemoved} for testing whether a token is deprecated.
 */
export const getReplacementForDeprecatedOrRemovedToken = (
  tokenName: string
): CurrentKaizenToken | undefined => {
  let replacementToken = tokenName
  let terminated = false
  version2DeprecationRules.forEach(renameRule => {
    if (terminated) return

    const [pattern, replacement, isTerminal] = renameRule
    if (replacement !== undefined)
      replacementToken = replacementToken.replace(pattern, replacement)
    if (pattern.test(replacementToken) && isTerminal) {
      terminated = true
    }
  })

  if (replacementToken !== tokenName) {
    return kaizenTokensByName[replacementToken]
  }
  return undefined
}
