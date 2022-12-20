import kebab from "lodash.kebabcase"

/**
 * Given an object path (an array of strings) and a value, return a CSS var() function that represents it.
 *
 * Example:
 *  Input:
 *      path: [color, wisteria, 100]
 *      value: #f0f1f4
 *
 *  Output:
 *      "var(--color-wisteria-100, #f0f1f4)"
 *
 */
export const objectPathToCssVarFunction = (
  path: string[],
  value: unknown
): string => `var(${objectPathToCssVarIdentifier(path)}, ${value})`

/**
 * Given an object path (an array of strings), return a CSS variable identifier.
 *
 * Example:
 *      Input: [color, wisteria, 100]
 *
 *      Output: "--color-wisteria-100"
 */
export const objectPathToCssVarIdentifier = (path: string[]): string =>
  `--${path.map(kebab).join("-")}`
