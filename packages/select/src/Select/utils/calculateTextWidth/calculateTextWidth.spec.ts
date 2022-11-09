import { calculateTextWidth } from "./calculateTextWidth"

const dummyText1 = "Front-End Text"
const dummyText2 = "Berechnung"

describe("calculateTextWidth", () => {
  it("returns the longest string", () => {
    expect(calculateTextWidth(dummyText1)).toEqual(500)
  })
  it("returns one longest string when there are 2 of the same length", () => {
    expect(calculateTextWidth(dummyText2)).toEqual(200)
  })
})
