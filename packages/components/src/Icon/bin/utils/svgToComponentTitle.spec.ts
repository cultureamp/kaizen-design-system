import { svgToComponentTitle } from "./svgToComponentTitle"

describe("svgToComponentTitle", () => {
  it("converts kebab case to pascal case, and replaces .icon with Icon", () => {
    const original = "academy.icon"
    const expected = "AcademyIcon"
    expect(svgToComponentTitle(original)).toEqual(expected)
  })

  it("handles multiple dashes in kebab case", () => {
    const original = "action-off-white.icon"
    const expected = "ActionOffWhiteIcon"
    expect(svgToComponentTitle(original)).toEqual(expected)
  })
})
