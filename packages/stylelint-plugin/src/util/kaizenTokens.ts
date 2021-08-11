import { Utils } from "@kaizen/design-tokens"
import flatmap from "lodash.flatmap"
import kebabCase from "lodash.kebabcase"
import postcssValueParser from "postcss-value-parser"
import { CSSVariable, KaizenToken } from "../types"

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

  Utils.mapLeafsOfObject(json, (path, value) => {
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
    return {
      [variableName]: {
        name: variableName,
        value,
        cssVariable,
        moduleName: module.moduleName,
        sassModulePath: module.sassModulePath,
        lessModulePath: module.lessModulePath,
      },
    }
  })
).reduce((acc, next) => ({ ...acc, ...next }), {})
