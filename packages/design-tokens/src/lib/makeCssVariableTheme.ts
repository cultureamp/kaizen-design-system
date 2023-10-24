import { DeepMapObjectLeafs } from "../types"
import { addExtraThemeEntries } from "./addExtraThemeEntries"
import { objectPathToCssVarFunction } from "./cssVariables"
import { mapLeafsOfObject } from "./mapLeafsOfObject"

/**
 * This function could use a new name during a breaking change
 *
 * Given a Theme (which is the source of truth and doesn't contain any computed properties), add extra necessary properties to the tree such as `-rgb` suffixed keys with R, G, B triple values, and
 * convert the leaf values of a theme to a value like `var(--parent1key-parent2key-leafkey)` - a CSS variable with an identifier that represents it's hierarchy.
 *
 * Example:
 * ```
 * {
 *    color: {
 *        purple: {
 *          100: "#f0f1f4"
 *        }
 *    }
 * }
 * ```
 * Transforms into:
 * ```
 * {
 *    color: {
 *        purple: {
 *          100: "var(--color-purple-100, "#f0f1f4")",
 *          "100-rgb": "var(--color-purple-100-rgb, 240, 241, 244)",
 *          "100-id": "--color-purple-100",
 *          "100-rgb-id": "--color-purple-100-rgb"
 *        }
 *    }
 * }
 * ```
 *
 * See {@link addExtraThemeEntries} for how these extra entries are added.
 */
/**
 * @deprecated Not needed if you are using `KaizenProvider` from `@kaizen/components` or `defaultPreset` from next-services.
 */
export function makeCSSVariableTheme<
  ThemeType extends Record<string | number, unknown>,
>(
  theme: ThemeType,
  printValue = objectPathToCssVarFunction
): DeepMapObjectLeafs<ThemeType, string> {
  const augmentedTheme: Record<string, unknown> = {}

  const mapper = (leafPath: string[], value: unknown): void => {
    const leafKey = leafPath[leafPath.length - 1]
    const pathWithoutLast = leafPath.slice(0, leafPath.length - 1)
    const leafObject = pathWithoutLast.reduce(
      (child, segment) =>
        (child[segment] || (child[segment] = {})) as Record<string, unknown>,
      augmentedTheme as Record<string, unknown>
    )
    if (!leafKey) {
      throw new Error("leafKey is undefined")
    }
    const cssVariablesOfToken = addExtraThemeEntries(
      leafPath,
      leafKey,
      value,
      printValue,
      { augmentWithId: true }
    )
    Object.assign(leafObject, cssVariablesOfToken)
  }

  mapLeafsOfObject(theme, mapper)

  return augmentedTheme as DeepMapObjectLeafs<ThemeType, string>
}
