import fs from "fs"
import flatmap from "lodash.flatmap"
import postcssValueParser from "postcss-value-parser"
import { CSSVariable, KaizenToken } from "./types"
import { getParser } from "./utils"
import { isVariable } from "./variableUtils"
const scssParser = getParser("scss")

/* Pass in just the name of a module which is used to import variable.
  E.g. "color" or "color-vars", NOT "@kaizen/design-tokens/sass/color".
  Assumes that the SASS and LESS modules contain the same variables
*/
const getVarsFromKaizenModule = (moduleName: string) => {
  const sassModulePath = `@kaizen/design-tokens/sass/${moduleName}`
  const lessModulePath = `@kaizen/design-tokens/less/${moduleName}`
  const source = fs
    .readFileSync(require.resolve(sassModulePath + ".scss"))
    .toString()
  const root = scssParser.parse(source)
  const variables = {} as Record<string, string>
  root.walkDecls(decl => {
    if (isVariable(decl)) {
      variables[decl.prop.substr(1)] = decl.value
    }
  })
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
        deprecated: !cssVariable,
        cssVariable,
        moduleName: module.moduleName,
        sassModulePath: module.sassModulePath,
        lessModulePath: module.lessModulePath,
      },
    }
  })
).reduce((acc, next) => ({ ...acc, ...next }), {})

/** I know this is a long name but it's hard to describe otherwise.
 It is a map of kaizen token sass variables ({"$kz-color-wisteria-800": "blah"}), but it also contains the concrete values of any CSS variable tokens, rather than their actual values.
 I.e. values like { "$kz-var-color-wisteria-800": "#blah" } rather than { "$kz-var-color-wisteria-800": "var(blah)" }
 */
export const kaizenTokensSassVariablesWithInlineCSSVariableValues = Object.entries(
  kaizenTokensByName
).reduce(
  (acc, [key, value]) =>
    !value
      ? acc
      : {
          ...acc,
          [`$${key}`]: value?.cssVariable
            ? value.cssVariable.fallback
            : value?.value,
        },
  {} as Record<string, string | undefined>
)

export const deprecatedSassFunctionsSource = `
$black: #000;
$white: #fff;
@function add-tint($color, $percentage) {
  @return mix($white, $color, $percentage);
}

@function add-shade($color, $percentage) {
  @return mix($black, $color, $percentage);
}

@function add-alpha($color, $percentage) {
  $decimal: $percentage / 100%;
  $inverse: 1 - $decimal;
  @return transparentize($color, $inverse);
}
`
