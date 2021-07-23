import colorString from "color-string"
import camelToKebab from "lodash.kebabcase"
import { heartColorNamePattern, zenColorNamePattern } from "./patterns"
import { DeepMapObjectLeafs } from "./types"

const version3VariableAugmentations = {
  augmentWithId: true,
  augmentWithRgbParams: false,
  augmentWithRgb: true,
}

const version2VariableAugmentations = {
  augmentWithId: false,
  augmentWithRgb: false,
  augmentWithRgbParams: true,
}
/**
 * This allows you to map the leaf nodes of an object, and you're provided the path to that leaf as well as the value as parameters to your mapper function.
 * This function was build to support mapping theme values to their respective CSS variable identifiers.
 * For example:
 * ```ts
 * mapLeafsOfObject({
 *  one: {
 *    two: 4
 *  }
 * }, (path, value) => value + 7)
 * ```
 * Results in:
 * ```
 * {
 *    one: {
 *      two: 11
 *    }
 * }
 * ```
 */
export const mapLeafsOfObject = <
  Obj extends Record<string | number, unknown>,
  Value
>(
  object: Obj,
  mapper: (pathToLeaf: string[], value: unknown) => Value
): DeepMapObjectLeafs<Obj, Value> => {
  const recurser = <O extends Record<string | number, unknown>>(
    currentPath: string[],
    obj: O
  ): DeepMapObjectLeafs<O, Value> => {
    const handleEntry = (key: string, value: unknown) => {
      const pathToKey = [...currentPath, key]
      if (typeof value === "object" && value !== null && value !== undefined) {
        return recurser(pathToKey, value as Record<string | number, unknown>)
      }
      return mapper(pathToKey, value)
    }
    return Object.entries(obj).reduce(
      (acc, [nextKey, nextValue]) => ({
        ...acc,
        [nextKey]: handleEntry(nextKey, nextValue),
      }),
      {} as DeepMapObjectLeafs<O, Value>
    )
  }
  return recurser([], object)
}

export const objectPathToCssVarIdentifier = (path: string[]) =>
  `--${path.map(camelToKebab).join("-")}`

export const objectPathToCssVarReference = (path: string[], value: unknown) =>
  `var(${objectPathToCssVarIdentifier(path)}, ${value})`

/** @deprecated we are transitioning to not using a top level namespace anymore */
export const cssVariableThemeNamespace = "kz-var" as const

/**
 * This function will convert an object/theme to a list of CSS variable key-value pairs, that can be used by element.style.setProperty.
 *
 * For example:
 * ```
 * {
 *      color: {
 *        whatever: {
 *          100: "#ff0022"
 *        }
 *      }
 * }
 * ```
 * transforms into:
 * ```
 * {
 *  "--color-whatever-100": "#ff0022"
 * }
 * ```
 */
export const flattenObjectToCSSVariables = (
  object: Record<string | number, unknown>
) => {
  let cssVariables = {} as Record<string, string>

  // Shamelessly using a map function like a forEach
  mapLeafsOfObject(object, (path, value) => {
    const version3 = !path[0].includes("kz")
    if (version3) {
      // If the key is part of version 3, ignore any zen color names
      if (path[0] === "color" && zenColorNamePattern.test(path[1])) return
    } else {
      // If not, ignore any heart color names
      if (path[1] === "color" && heartColorNamePattern.test(path[2])) return
    }
    // Key will be `--color-blah`
    const key = objectPathToCssVarIdentifier(path)
    const cssVariablesOfToken = augmentCssVariable(
      path,
      key,
      value,
      (_, v) => `${v}`,
      version3
        ? { ...version3VariableAugmentations, augmentWithId: false }
        : { ...version2VariableAugmentations, augmentWithId: false }
    )
    cssVariables = {
      ...cssVariables,
      ...cssVariablesOfToken,
    }
  })
  return cssVariables
}

/**
 * This function could use a new name during a breaking change
 *
 * Given a Theme (which is the source of truth and doesn't contain any computed properties), add extra necessary properties to the tree such as `-rgb` suffixed keys with R, G, B triple values, and
 * convert the leaf values of a theme to a value like `var(--parent1key-parent2key-leafkey)` - a CSS variable with an identifier that represents it's hierarchy.
 * Example:
 * ```
 * {
 *    color: {
 *        wisteria: "#ff0011"
 *    }
 * }
 * ```
 * Transforms into:
 * ```
 * {
 *    color: {
 *        wisteria: "var(--color-wisteria)"
 *    }
 *    kz-var: {
 *        color: {
 *            wisteria: "var(--kz-var-color-wisteria)"
 *        }
 *    }
 * }
 * ```
 */

export const makeCSSVariableTheme = <
  ThemeType extends Record<string | number, unknown>
>(
  theme: ThemeType,
  printValue = objectPathToCssVarReference
) => {
  const augmentedTheme: Record<string, unknown> = {}
  const mapper = (leafPath: string[], value: unknown) => {
    // We can automatically tell whether we want to produce version 3 variables by looking at the top level namespace
    const version3 = !leafPath[0].includes("kz")

    if (version3) {
      // If the key is part of version 3, ignore any zen color names
      if (leafPath[0] === "color" && zenColorNamePattern.test(leafPath[1]))
        return
    } else {
      // If not, ignore any heart color names
      if (leafPath[1] === "color" && heartColorNamePattern.test(leafPath[2]))
        return
    }
    const leafKey = leafPath[leafPath.length - 1]
    const pathWithoutLast = leafPath.slice(0, leafPath.length - 1)
    const leafObject = pathWithoutLast.reduce(
      (child, segment) =>
        (child[segment] || (child[segment] = {})) as Record<string, unknown>,
      augmentedTheme as Record<string, unknown>
    )
    const cssVariablesOfToken = augmentCssVariable(
      leafPath,
      leafKey,
      value,
      printValue,
      version3 ? version3VariableAugmentations : version2VariableAugmentations
    )
    Object.assign(leafObject, cssVariablesOfToken)
  }

  // Until we remove the deprecated namespace, we expose and augment both, to delay the breaking change.
  mapLeafsOfObject(theme, mapper)
  mapLeafsOfObject({ [cssVariableThemeNamespace]: theme }, mapper)

  return augmentedTheme as DeepMapObjectLeafs<ThemeType, string> & {
    [cssVariableThemeNamespace]: DeepMapObjectLeafs<ThemeType, string>
  }
}

/**
 * Choose a better name during a breaking change
 *
 * Make a map of CSS variables -> values in a consistent way.
 * Use this to, for example, create a CSS file that declares each theme variable on the `:root` pseudo element.
 * Example output:
 * ```
 * {
 *    ...
 *    "--theme-key": "zen",
 *    "--color-wisteria-800": "#3537a4"
 *    ...
 * }
 * ```
 */
export const makeCSSVariablesOfTheme = (
  theme: Record<string | number, unknown>
) =>
  flattenObjectToCSSVariables({
    ...theme,
    [cssVariableThemeNamespace]: theme,
  })

/**
 * Use this to generate an object containing `${key}: value`, `${key}-rgb: r, g, b`, and/or `${key}-id: --color-blah-XXX`.
 * This is for adding extra neighbouring properties to a theme.
 * For example:
 *  Input:
 *    path: [color, purple, 100]
 *    key: 100
 *    value: #f0f1f4
 *    printValue: (path, v) => `var(--some-key, ${v})`
 *    options: {augmentWithRgbParams: true, augmentWithId: true}
 *
 *  Output: {
 *    "100": "var(--some-key, #f0f1f4)",
 *    "100-rgb": "var(--some-key, 240, 241, 244)",
 *    "100-id": "--color-purple-100"
 *  }
 */
// Rename to augmentThemeKeyValue during breaking change.
export const augmentCssVariable = (
  path: string[],
  key: string,
  value: unknown,
  printValue: <I>(path: string[], value: I) => string,
  {
    augmentWithRgbParams = true,
    augmentWithRgb = true,
    augmentWithId = true,
  }: {
    augmentWithRgbParams?: boolean
    augmentWithRgb?: boolean
    augmentWithId?: boolean
  } = {}
) => {
  const colorRgb = typeof value === "string" ? colorString.get.rgb(value) : null
  const result = {
    [key]: printValue(path, value),
  }

  // Add the -rgb key containing the RGB triple of the color (if it is a color)
  if (colorRgb) {
    // If the value is a color, always convert to lowercase
    result[key] = printValue(path, value).toLowerCase()

    if (augmentWithRgb) {
      const rgbPath = [...path, "rgb"]
      const rgbTriple = printValue(rgbPath, colorRgb.slice(0, 3).join(", "))
      result[`${key}-rgb`] = rgbTriple
      if (augmentWithId) {
        result[`${key}-rgb-id`] = objectPathToCssVarIdentifier(rgbPath)
      }
    }

    // DEPRECATED - REMOVE IN THE NEXT BREAKING CHANGE
    if (augmentWithRgbParams) {
      const rgbParamsPath = [...path, "rgb-params"]
      const rgbTriple = printValue(
        rgbParamsPath,
        colorRgb.slice(0, 3).join(", ")
      )
      result[`${key}-rgb-params`] = rgbTriple
    }
  }

  if (augmentWithId) {
    result[`${key}-id`] = objectPathToCssVarIdentifier(path)
  }

  return result
}
