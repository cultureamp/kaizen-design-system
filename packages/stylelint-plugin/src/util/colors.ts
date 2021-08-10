import Color from "color"

/**
 * Normalises a color string to a common representation.
 * Use this for making comparisons between color strings.
 * For example: `normaliseColor("#fff") === normaliseColor("#ffffff")` will be true.
 *
 * @param color a string representation of a color, which can be in any kind of format like `#fff`, `blue`, `rgba(200, 60, 60, 0.3)`, `hsl(195, 100%, 50%)` etc. See https://www.npmjs.com/package/color.
 * @returns a string representation of the color (at the time of writing, it is a hex string), or null if the string you passed in wasn't a color.
 */
export function normaliseColor(color: string): string | null {
  try {
    const parsedColor = Color(color)
    return parsedColor.hex().toLowerCase()
  } catch (e) {
    // Color("blah") will throw if the string is not a color.
    return null
  }
}
