import { createRange } from "./createRange"

describe("createRange", () => {
  it("should return an array between the two arguments passed in", async () => {
    const expectedResult = [1, 2, 3, 4, 5]

    expect(createRange(1, 5)).toEqual(expectedResult)
  })
})
