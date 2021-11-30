import { calculateMenuTop } from "./DropdownMenu"

describe("calculateMenuTop", () => {
  // Note `new DOMRect()` doesn't work in Jest's node environment. So we're mocking it manually.
  const newMenuRect = (): DOMRect => ({
    x: 0,
    left: 0,
    y: 70,
    top: 70,
    width: 170,
    height: 425,
    right: 170,
    bottom: 500,
    toJSON: () => "",
  })
  const newButtonsRect = (top: number): DOMRect => {
    const height = 42
    return {
      x: 0,
      left: 0,
      y: top,
      top,
      width: 170,
      height,
      right: 170,
      bottom: top + height,
      toJSON: () => "",
    }
  }

  it(
    "returns the css `top` value required for the dropdown menu, " +
      "when there is enough room below the SplitButtons",
    () => {
      const result = calculateMenuTop(newButtonsRect(32), newMenuRect(), 500)
      expect(result).toEqual(44) // ie. show the menu below the split buttons
    }
  )

  it(
    "returns the css `top` value required for the dropdown menu, " +
      "when there is not enough room below the SplitButtons, but enough room above",
    () => {
      const result = calculateMenuTop(newButtonsRect(459), newMenuRect(), 500)
      expect(result).toEqual(-427) // ie. show the menu above the split buttons
    }
  )

  it(
    "returns the css `top` value required for the dropdown menu, " +
      "when there is not enough room below or above the SplitButtons",
    () => {
      const result = calculateMenuTop(newButtonsRect(315), newMenuRect(), 500)
      expect(result).toEqual(44) // ie. show the menu below the split buttons
    }
  )
})
