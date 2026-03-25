import { objectPathToCssVarIdentifier } from './cssVariables'

/**
 * Use this to generate an object containing `${key}: value` and/or `${key}-id: --color-blah-XXX`.
 * This is for adding extra neighbouring properties to a theme.
 *
 * Note: RGB variants (-rgb) have been removed. Use OKLCH with alpha channel instead:
 * - Before: rgba($color-purple-800-rgb, 0.7)
 * - After: oklch(from $color-purple-950 l c h / 0.7)
 *
 * For example:
 *  Input:
 *    path: [color, purple, 100]
 *    key: 100
 *    value: oklch(93.30% 0.0210 313.83)
 *    printValue: (path, v) => `var(--some-key, ${v})`
 *    options: {augmentWithId: true}
 *
 *  Output: {
 *    "100": "var(--some-key, oklch(93.30% 0.0210 313.83))",
 *    "100-id": "--color-purple-100"
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
    /** Setting this to true will add `${key}-id` */
    augmentWithId: boolean
  },
): Record<string, string> => {
  const result = {
    [key]: printValue(path, value),
  }

  if (augmentWithId) {
    result[`${key}-id`] = objectPathToCssVarIdentifier(path)
  }

  return result
}
