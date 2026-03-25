import { type DeepMapObjectLeafs } from '../types'
import { addExtraThemeEntries } from './addExtraThemeEntries'
import { objectPathToCssVarFunction } from './cssVariables'
import { mapLeafsOfObject } from './mapLeafsOfObject'

/**
 * Given a Theme (the source of truth), add extra properties (like `-id` suffixed keys) and
 * convert the leaf values to CSS variables like `var(--parent1key-parent2key-leafkey)`.
 *
 * Example:
 * ```
 * {
 *    color: {
 *        purple: {
 *          100: "oklch(93.30% 0.0210 313.83)"
 *        }
 *    }
 * }
 * ```
 * Transforms into:
 * ```
 * {
 *    color: {
 *        purple: {
 *          100: "var(--color-purple-100, oklch(93.30% 0.0210 313.83))",
 *          "100-id": "--color-purple-100"
 *        }
 *    }
 * }
 * ```
 *
 * See {@link addExtraThemeEntries} for how these extra entries are added.
 */
export function makeCSSVariableTheme<ThemeType extends Record<string | number, unknown>>(
  theme: ThemeType,
  printValue = objectPathToCssVarFunction,
): DeepMapObjectLeafs<ThemeType, string> {
  const augmentedTheme: Record<string, unknown> = {}

  const mapper = (leafPath: string[], value: unknown): void => {
    const leafKey = leafPath[leafPath.length - 1]
    const pathWithoutLast = leafPath.slice(0, leafPath.length - 1)
    const leafObject = pathWithoutLast.reduce(
      (child, segment) => (child[segment] ?? (child[segment] = {})) as Record<string, unknown>,
      augmentedTheme as Record<string, unknown>,
    )
    if (!leafKey) {
      throw new Error('leafKey is undefined')
    }
    const cssVariablesOfToken = addExtraThemeEntries(leafPath, leafKey, value, printValue, {
      augmentWithId: true,
    })
    Object.assign(leafObject, cssVariablesOfToken)
  }

  mapLeafsOfObject(theme, mapper)

  return augmentedTheme as DeepMapObjectLeafs<ThemeType, string>
}
