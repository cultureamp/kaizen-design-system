import tinycolor from "tinycolor2"

/**
 * Normalises a color string to a common representation.
 * Use this for making comparisons between color strings.
 * For example: `normaliseColor("#fff") === normaliseColor("#ffffff")` will be true.
 *
 * @param color a string representation of a color, which can be in any kind of format like `#fff`, `blue`, `rgba(200, 60, 60, 0.3)`, `hsl(195, 100%, 50%)` etc. See https://www.npmjs.com/package/tinycolor2.
 * @returns a string representation of the color (at the time of writing, it is a hex or rgba string), or null if the string you passed in wasn't a color.
 */
export function normaliseColor(color: string): string | null {
  const parsedColor = tinycolor(color)
  if (!parsedColor.isValid()) return null

  // If alpha is less than 1, we should stringify as rgba so that the alpha channel isn't lost.
  // Otherwise we should use hex.
  const isTransparent = parsedColor.getAlpha() < 1
  return parsedColor.toString(isTransparent ? "rgb" : "hex").toLowerCase()
}
