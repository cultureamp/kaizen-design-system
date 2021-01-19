import { calculateMenuTop } from "./DropdownMenu"

describe("calculateMenuTop", () => {
  const newMenuRect = (): ClientRect => ({
    width: 170,
    height: 425,
    top: 70,
    right: 170,
    bottom: 500,
    left: 0,
  })
  const newButtonsRect = (top: number): ClientRect => {
    const height = 42
    return {
      width: 170,
      height,
      top,
      right: 170,
      bottom: top + height,
      left: 0,
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
