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

export const cssVariableThemeNamespace = "kz-var" as const
/**
 * This function will convert the leaf values of a theme to a value like `var(--parent1key-parent2key-leafkey)` - a CSS variable with an identifier that represents it's hierarchy within the object you provided.
 * One caveat though: if a key is suffixed with `-default` it will leave the value in place. This was implemented for consumer regression purposes, i.e. so that consumers had a fallback when CSS variables weren't feasible.
 * Example:
 * ```
 * {
 *  varkz: {
 *      color: {
 *          wisteria: "#ff0011"
 *      }
 *  }
 * }
 * ```
 * Transforms into:
 * ```
 * {
 *  varkz: {
 *      color: {
 *          wisteria: "var(--kz-color-wisteria)"
 *      }
 *  }
 * }
 * ```
 */

export const makeCSSVariableTheme = (theme: Theme) =>
  mapLeafsOfObject({ [cssVariableThemeNamespace]: theme }, (path, value) =>
    path[path.length - 1].endsWith("-default")
      ? value
      : objectPathToCssVarReference(path)
  )

/**
 * Use this to generate an object containing `${key}: value`, `${key}-default: value`, and `${key}-rgb-params: rgb(r, g, b)` if the value is a color.
 * This is for augmenting a CSS variable to support our solution to regression issues with using CSS variables instead of concrete values.
 */
export const augmentCssVariable = (
  key: string,
  value: unknown,
  {
    augmentWithDefault = true,
    augmentWithRgbParams = true,
  }: {
    augmentWithDefault?: boolean
    augmentWithRgbParams?: boolean
  } = {}
) => {
  const colorRgb = typeof value === "string" ? colorString.get.rgb(value) : null

  return {
    [key]: `${value}`,
    ...(augmentWithDefault && { [`${key}-default`]: `${value}` }),
    ...(colorRgb &&
      augmentWithRgbParams && {
        [`${key}-rgb-params`]: colorRgb.slice(0, 3).join(", "),
      }),
  }
}

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
  let cssVariables = {} as Record<string, string>

  // Shamelessly using a map function like a forEach
  mapLeafsOfObject(object, (path, value) => {
    // Key will be `--kz-color-blah`
    const key = objectPathToCssVarIdentifier(path)
    const cssVariablesOfToken = augmentCssVariable(key, value, {
      augmentWithDefault: false,
    })
    cssVariables = {
      ...cssVariables,
      ...cssVariablesOfToken,
    }
  })
  return cssVariables
}
