import colorString from "color-string"
import camelToKebab from "lodash.kebabcase"
import { DeepMapObjectLeafs, Theme } from "./types"

/**
 * This allows you to map the leaf nodes of an object, and you're provided the path to that leaf as well as the value as parameters to your mapper function.
 * This function was build to support mapping theme values to their respective CSS variable identifiers.
 * For example:
 * ```ts
 * mapLeafsOfObject({
 *  one: {
 *    two: 4
 *  }
 * }, (path, value) => `${path.join(".")}: ${value}`)
 * ```
 * Results in:
 * ```
 * {
 *    one: {
 *      two: "one.two: 4"
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

const objectPathToCssVarIdentifier = (path: string[]) =>
  `--${path.map(camelToKebab).join("-")}`

export const objectPathToCssVarReference = (path: string[]) =>
  `var(${objectPathToCssVarIdentifier(path)})`

/**
 * This function will convert the leaf values of a theme to a value like `var(--parent1key-parent2key-leafkey)` - a CSS variable with an identifier that represents it's hierarchy within the object you provided.
 * One caveat though: if a key is suffixed with `-default` it will leave the value in place. This was implemented for consumer regression purposes, i.e. so that consumers had a fallback when CSS variables weren't feasible.
 * Example:
 * ```
 * {
 *  kz: {
 *      color: {
 *          wisteria: "#ff0011"
 *      }
 *  }
 * }
 * ```
 * Transforms into:
 * ```
 * {
 *  kz: {
 *      color: {
 *          wisteria: "var(--kz-color-wisteria)"
 *      }
 *  }
 * }
 * ```
 */

export const makeCSSVariableTheme = (theme: Theme) =>
  mapLeafsOfObject({ kz: theme }, (path, value) =>
    path[path.length - 1].endsWith("-default")
      ? value
      : objectPathToCssVarReference(path)
  )

const rgbParamsKeySuffix = "-rgb-params"

/**
 * This function will convert an object/theme to a list of CSS variable key-value pairs, that can be used by element.style.setProperty.
 *
 * For example:
 * ```
 * {
 *   kz: {
 *      color: {
 *        whatever: {
 *          100: "#ff0022"
 *        }
 *      }
 *    }
 * }
 * ```
 * transforms into:
 * ```
 * {
 *  "--kz-color-whatever-100": "#ff0022"
 * }
 * ```
 */
export const flattenObjectToCSSVariables = (
  object: Record<string | number, unknown>
) => {
  const cssVariables = {} as Record<string, string>

  // Shamelessly using a map function like a forEach
  mapLeafsOfObject(object, (path, value) => {
    const key = objectPathToCssVarIdentifier(path)
    cssVariables[key] = `${value}`
    const colorRgb =
      typeof value === "string" ? colorString.get.rgb(value) : null
    if (colorRgb) {
      cssVariables[`${key}${rgbParamsKeySuffix}`] = colorRgb
        .slice(0, 3)
        .join(", ")
    }
  })
  return cssVariables
}

/**
 * WIP: Need a better name. Writing this as a solution to the add-alpha problem - we need to have additional tokens that reference variables, which contain a triple (R, G, B).
 * This triple can then be used within the CSS [runtime] function as a CSS variable, e.g. `rgba(var(--kz-color-wisteria-800-rgb))`.
 * Also adds extra keys as leaf siblings, named`${key}-default`, containing the value within the theme provided as the parameter.
 */
/* export const addExtraTokensForRGBColors = (
  theme: Theme
): Record<string, unknown> => {} */

export const augmentThemeWithRGBTripletsAndDefaults = (theme: Theme): Theme => {
  const augmentedTheme: Record<string, unknown> = {}
  mapLeafsOfObject(theme, (path, value) => {
    const leafKey = path[path.length - 1]
    const pathWithoutLast = path.slice(0, path.length - 1)
    const leafObject = pathWithoutLast.reduce(
      (child, segment) =>
        (child[segment] || (child[segment] = {})) as Record<string, unknown>,
      augmentedTheme as Record<string, unknown>
    )
    leafObject[leafKey] = value
    leafObject[`${leafKey}-default`] = value
    const colorRgb =
      typeof value === "string" ? colorString.get.rgb(value) : null
    if (colorRgb) {
      leafObject[`${leafKey}${rgbParamsKeySuffix}`] = colorRgb
        .slice(0, 3)
        .join(", ")
    }
  })
  return augmentedTheme as Theme
}
