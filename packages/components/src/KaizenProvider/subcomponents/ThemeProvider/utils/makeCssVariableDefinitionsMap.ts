import { addExtraThemeEntries } from "./addExtraThemeEntries"
import { objectPathToCssVarIdentifier } from "./cssVariables"
import { mapLeafsOfObject } from "./mapLeafsOfObject"

/**

 * Make a map of CSS variables -> values in a consistent way.
 * Use this to, for example, create a CSS file that declares each theme variable on the `:root` pseudo element.
 * Or for example when you're defining CSS variables using `rootElement.style.setProperty` within ThemeManager.
 *
 * It is paramount that this function defines every variable that {@link makeCssVariableTheme} expects to be defined.
 * Otherwise, it's possible that a CSS variable token (something that looks like var(--color-purple-100-rgb)) won't have a matching defined
 * CSS variable like `--color-purple-100-rgb: 123, 123, 123;`
 *
 *
 * For example:
 * Input:
 * ```
 * {
 *      color: {
 *        whatever: {
 *          100: "#ff0022"
 *        }
 *      }
 * }
 * ```
 * Output:
 * ```
 * {
 *  "--color-whatever-100": "#ff0022"
 * }
 */
export function makeCssVariableDefinitionsMap(
  theme: Record<string | number, unknown>
): Record<string, string> {
  let accumulatedCssVariables = {} as Record<string, string>

  // Shamelessly using a map function like a forEach
  mapLeafsOfObject(theme, (path, value) => {
    // Key will be `--color-blah`
    const key = objectPathToCssVarIdentifier(path)
    const nextCssVariables = addExtraThemeEntries(
      path,
      key,
      value,
      (_, v) => `${v}`,
      { augmentWithId: false }
    )
    accumulatedCssVariables = {
      ...accumulatedCssVariables,
      ...nextCssVariables,
    }
  })
  return accumulatedCssVariables
}
