import flatmap from "lodash.flatmap"
import kebabCase from "lodash.kebabcase"
import postcssValueParser from "postcss-value-parser"
import { mapLeafsOfObject } from "@kaizen/design-tokens"
import { CSSVariable, KaizenToken } from "../types"
import { normaliseColor } from "./colors"

/**
 * Use this to turn a deeply nested object into a flattened one, where keys are structured like: "level1-level2-level3-leaf" (which are in the form of CSS variable identifiers).
 * json-to-flat-sass does a very similar thing.
 * E.g.
 * Input:
 * ```
 * {
 *    level1: {
 *      level2: {
 *        level3: {
 *          leaf: "some value"
 *        }
 *      }
 *    }
 * }
 * ```
 * ```
 * Output:
 * {
 *    "level1-level2-level3-leaf": "some value"
 * }
 * ```
 */
export const getCSSVarsFromJson = (json: Record<any, any>) => {
  const variables = {} as Record<string, string>

  mapLeafsOfObject(json, (path, value) => {
    const key = path.map(kebabCase).join("-")
    variables[key] = `${value}`
  })
  return variables
}

/* Pass in just the name of a module which is used to import variable.
  E.g. "color" or "color-vars", NOT "@kaizen/design-tokens/sass/color".
  Assumes that the SASS and LESS modules contain the same variables
*/
const getVarsFromKaizenModule = (moduleName: string) => {
  const sassModulePath = `@kaizen/design-tokens/sass/${moduleName}`
  const lessModulePath = `@kaizen/design-tokens/less/${moduleName}`

  let source: any
  try {
    source = require(`@kaizen/design-tokens/tokens/${moduleName}.json`)
  } catch (e) {
    return {
      moduleName,
      variables: {},
      sassModulePath,
      lessModulePath,
    }
  }

  const variables = getCSSVarsFromJson(source)
  return {
    moduleName,
    variables,
    sassModulePath,
    lessModulePath,
  } as const
}

const kaizenTokensByModule = {
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
  Record<string, KaizenToken | undefined>
> = flatmap(Object.values(kaizenTokensByModule), module =>
  Object.entries(module.variables).map(([variableName, value]) => {
    const cssVariable = parseCssVariableValue(value)
    const normalisedColor = normaliseColor(cssVariable?.fallback ?? value)
    return {
      [variableName]: {
        name: variableName,
        value,
        cssVariable,
        moduleName: module.moduleName,
        sassModulePath: module.sassModulePath,
        lessModulePath: module.lessModulePath,
        color: normalisedColor ? normalisedColor : undefined,
      },
    }
  })
).reduce((acc, next) => ({ ...acc, ...next }), {})

/**
 * This is a record of Kaizen CSS variable values -> Kaizen token SCSS variable names.
 * It allows you to find the variable for a value (the inverse of getting the value of a variable).
 * Because colors can be represented in multiple ways, additional keys have been added to here for every variable that holds a color, by running something along the lines of `colorString.to.hex(colorString.get(value).value)`.
 * What this means is, if a value like $color-white holds (a CSS fallback) value of #fff, you will get the additional color of #ffffff, which is what colorString spits out.
 * If it is a color, we also add an extra key to the value object (the KaizenToken): `color: ...` so that they are easily identifiable. You might've had to run colorString.get again otherwise.
 * It looks something like:
 * ```ts
 * {
 *    "#003157": [{name: "$kz-var-color-wisteria-800", color: "#003157", ...}],
 *    "#fff": [{name: "$kz-var-color-white", color: "#ffffff", value: var(--kz-var-color-white, $fff),...}],
 *    "#ffffff": [{name: "$kz-var-color-white", color: "#ffffff", ...}],
 *    "230, 240, 247": [{name: "$kz-var-color-cluny-100-rgb-params", color: undefined, ...}],
 *    "0 0 12px rgba(0, 0, 0, 0.19)": [{name: "$kz-var-shadow-large-box-shadow", color: undefined, ...}],
 *    "400": [{name: "$kz-var-typography-paragraph-intro-lede-font-weight", ...}, {name: "$kz-var-typography-paragraph-body-font-weight", ...}, ...],
 *     "1.5rem": [{name: "$kz-var-spacing-md", ...}]
 * }
 * ```
 */
export const kaizenTokensByValue: Record<string, KaizenToken[] | undefined> =
  (() => {
    const allKaizenTokens = Object.values(kaizenTokensByName).filter(
      <T>(token: T): token is NonNullable<T> => token !== undefined
    )

    const kaizenTokensByValueResult: Record<string, KaizenToken[] | undefined> =
      {}

    // For every Kaizen token, we'd like to add one more keys to the result base on their values.
    // Each key will be a token value like "#524e56" or "1.5rem".
    // We want the values of each key to be an array of Kaizen tokens that contain those values, allowing us to lookup and index Kaizen tokens by their values.
    // The result might look something like `{ "1.5rem": [{name: "spacing-md", ...}] }`
    for (const kaizenToken of allKaizenTokens) {
      const tokenValue = (
        kaizenToken.cssVariable?.fallback ?? kaizenToken.value
      ).toLowerCase()

      const existingTokens = kaizenTokensByValueResult[tokenValue]

      kaizenTokensByValueResult[tokenValue] = existingTokens
        ? [...existingTokens, kaizenToken]
        : [kaizenToken]

      const colorKey = kaizenToken.color
        ? normaliseColor(kaizenToken.color)
        : undefined

      // If the token is a color, lets add another key to the result for it's normalised value.
      // We'd like the indices of the map to contain normalised colors so that they can be looked up in a consistent way.
      if (colorKey) {
        const existingValuesOfColorKey = colorKey
          ? kaizenTokensByValueResult[colorKey]
          : undefined

        kaizenTokensByValueResult[colorKey] = existingValuesOfColorKey
          ? [...existingValuesOfColorKey, kaizenToken]
          : [kaizenToken]
      }
    }
    return kaizenTokensByValueResult
  })()
