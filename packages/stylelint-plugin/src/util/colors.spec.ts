/* eslint-disable jest/consistent-test-it */
import { normaliseColor } from "./colors"
describe("normaliseColor", () => {
  test.each([
    ["#fff", "#ffffff"],
    ["rgb(0, 191, 255)", "#00bfff"],
    ["hsl(195, 100%, 50%)", "#00bfff"],
    ["#00bfff1a", "rgba(0, 191, 255, 0.1)"],
  ])('"%s" is understood to be the same as "%s"', (a, b) => {
    const normalisedA = normaliseColor(a)
    const normalisedB = normaliseColor(b)
    expect(normalisedA).toBeTruthy()
    expect(normalisedB).toBeTruthy()
    expect(normalisedA).toBe(normalisedB)
  })
  test.each([
    ["#00bfff", "rgba(0, 191, 255, 0.1)"],
    ["red", "blue"],
    ["#fff", "black"],
  ])('"%s" is NOT understood to be the same as "%s"', (a, b) => {
    const normalisedA = normaliseColor(a)
    const normalisedB = normaliseColor(b)
    expect(normalisedA).toBeTruthy()
    expect(normalisedB).toBeTruthy()
    expect(normalisedA).not.toBe(normalisedB)
  })

  test.each(["meow", "quack"])('"%s" is not a color', a => {
    expect(normaliseColor(a)).toBeNull()
  })
})
