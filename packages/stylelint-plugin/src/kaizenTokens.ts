import fs from "fs"
import flatmap from "lodash.flatmap"
import postcssValueParser, { WordNode } from "postcss-value-parser"
import colorString from "color-string"
import { CSSVariable, KaizenToken, Variable } from "./types"
import { getParser } from "./utils"
import { isVariable } from "./variableUtils"
import { sassInterpolationPattern } from "./patterns"
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

const deprecatedModuleNames = new Set([
  "color",
  "animation",
  "border",
  // Layout is allowed to be used for now. If that changes, uncomment the next line.
  // "layout",
  "shadow",
  "spacing",
  "typography",
])

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
    const cssVariable = parseCssVariableValue(value) || null
    const parsedColor = colorString.get(cssVariable?.fallback ?? value)

    return {
      [variableName]: {
        name: variableName,
        value,
        deprecated: deprecatedModuleNames.has(module.moduleName),
        cssVariable,
        moduleName: module.moduleName,
        sassModulePath: module.sassModulePath,
        lessModulePath: module.lessModulePath,
        color: parsedColor
          ? colorString.to.hex(parsedColor.value).toLowerCase()
          : null,
      },
    }
  })
).reduce((acc, next) => ({ ...acc, ...next }), {})

/**
 * A list of all KaizenTokens {@link KaizenToken}
 */
export const kaizenTokensList = Object.values(
  kaizenTokensByName
) as KaizenToken[]

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

/**
 * This is a record of Kaizen CSS variable values -> Kaizen token SCSS variable names.
 * It allows you to find the variable for a value (the inverse of getting the value of a variable).
 * Because colors can be represented in multiple ways, additional keys have been added to here for every variable that holds a color, by running something along the lines of `colorString.to.hex(colorString.get(value).value)`.
 * What this means is, if a value like $kz-var-color-white holds (a CSS fallback) value of $fff, you will get the additional color of $ffffff, which is what colorString spits out.
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
 *    // You get the point
 * }
 * ```
 */
export const inverseKaizenTokens = kaizenTokensList.reduce((acc, token) => {
  const key = (token.cssVariable?.fallback ?? token.value).toLowerCase()
  const existingValues = acc[key]
  const existingNewColorValues = token.color
    ? acc[token.color.toLowerCase()]
    : undefined
  return {
    ...acc,
    [key]: existingValues ? [...existingValues, token] : [token],
    ...(token.color && {
      [token.color.toLowerCase()]: existingNewColorValues
        ? [...existingNewColorValues, token]
        : [token],
    }),
  }
}, {} as Record<string, KaizenToken[] | undefined>)

/*
  Given a postcss-value-parser WordNode, return either a Variable or null. The variable will contain a kaizenToken if there is a matchine one.
*/
export const parseVariable = (node: WordNode): Variable | null => {
  // I wish postcss-value-parser was just a bit better at knowing how to handle a few more tokens like negating a variable or string interpolation.
  // It doesn't seem to be built directly for SASS or LESS, but it mostly works with them.
  // In order to get around this (mostly), we detect a few edge cases in this function.

  const interpolated = sassInterpolationPattern.test(node.value)
  const valueWithoutInterpolation = node.value.replace(
    sassInterpolationPattern,
    "$1"
  )
  const negated = valueWithoutInterpolation[0] === "-"
  const cleanedValue = negated
    ? valueWithoutInterpolation.slice(1)
    : valueWithoutInterpolation
  const firstChar = cleanedValue[0]
  if (firstChar === "@" || firstChar === "$") {
    const name = cleanedValue.substr(1)
    return {
      name,
      nameWithPrefix: cleanedValue,
      prefix: firstChar,
      kaizenToken: kaizenTokensByName[name],
      interpolated,
      negated,
      node,
    }
  }
  // Not a variable
  return null
}

/**
 * Given a Variable (which represents an instance of a variable within a Stylesheet), return a copy of it but replaces with a KaizenToken of your choice.
 */
export const replaceTokenInVariable = (
  variable: Variable,
  replacementToken: KaizenToken
) => {
  const nameWithPrefix = `${variable.prefix}${variable.name}`
  return {
    ...variable,
    node: { ...variable.node, value: nameWithPrefix },
    name: replacementToken.name,
    nameWithPrefix,
    kaizenToken: replacementToken,
  }
}

export const getReplacementForDeprecatedToken = (token: KaizenToken) =>
  kaizenTokensByName[token.name.replace("kz", "kz-var")]

// Contains a regex of all kaizen tokens that are exposed in SASS and LESS.
// Will look like: `(@|\$)(kz-color-wisteria-100|kz-color-wisteria-200|...|kz-var-color-wisteria-800|...|kz-var-spacing-md|...)`
export const kaizenTokenPattern = new RegExp(
  `(@|\\$)(${Object.keys(kaizenTokensByName).join("|")})`
)

export const isKaizenTokenVariable = (value: string) =>
  entireLineKaizenTokenPattern.test(value)

// Same as above but doesn't do partial matches within a line
export const entireLineKaizenTokenPattern = new RegExp(
  `^${kaizenTokenPattern.source}$`
)
