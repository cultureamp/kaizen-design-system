import colorString from "color-string"
import { objectPathToCssVarIdentifier } from "~components/KaizenProvider/subcomponents/ThemeProvider/utils/cssVariables"

/**
 * Use this to generate an object containing `${key}: value`, `${key}-rgb: r, g, b`, and/or `${key}-id: --color-blah-XXX`.
 * This is for adding extra neighbouring properties to a theme.
 * For example:
 *  Input:
 *    path: [color, purple, 100]
 *    key: 100
 *    value: #f0f1f4
 *    printValue: (path, v) => `var(--some-key, ${v})`
 *    options: {augmentWithId: true}
 *
 *  Output: {
 *    "100": "var(--some-key, #f0f1f4)",
 *    "100-rgb": "var(--some-key, 240, 241, 244)",
 *    "100-id": "--color-purple-100"
 *    "100-rgb-id": "--color-purple-100-rgb"
 *  }
 */
export const addExtraThemeEntries = (
  path: string[],
  key: string,
  value: unknown,
  printValue: <I>(path: string[], value: I) => string,
  {
    augmentWithId,
  }: {
    /** Setting this to true will add `${key}-id` and ${key}-rgb-id` */
    augmentWithId: boolean
  }
): Record<string, string> => {
  const colorRgb = typeof value === "string" ? colorString.get.rgb(value) : null
  const result = {
    [key]: printValue(path, value),
  }

  // Add the -rgb key containing the RGB triple of the color (if it is a color)
  if (colorRgb) {
    // If the value is a color, always convert to lowercase
    result[key] = printValue(path, value).toLowerCase()

    const rgbPath = [...path, "rgb"]
    const rgbTriple = printValue(rgbPath, colorRgb.slice(0, 3).join(", "))
    result[`${key}-rgb`] = rgbTriple
    if (augmentWithId) {
      result[`${key}-rgb-id`] = objectPathToCssVarIdentifier(rgbPath)
    }
  }
  if (augmentWithId) {
    result[`${key}-id`] = objectPathToCssVarIdentifier(path)
  }

  return result
}
