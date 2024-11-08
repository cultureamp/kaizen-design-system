import { calculatePercentage } from "./calculatePercentage"

describe("calculatePercentage", () => {
  it("returns a percentile of the value and max provided", async () => {
    const expectedResult = 50

    expect(calculatePercentage({ value: 2, max: 4 })).toEqual(expectedResult)
  })
})
