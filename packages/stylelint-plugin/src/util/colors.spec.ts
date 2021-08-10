import { normaliseColor } from "./colors"
describe("normaliseColor", () => {
  test.each([
    ["#fff", "#ffffff"],
    ["rgb(0, 191, 255)", "#00bfff"],
    ["hsl(195, 100%, 50%)", "#00bfff"],
    ["#00bfff", "hwb(195, 0%, 0%)"],
  ])('"%s" is understood to be the same as "%s"', (a, b) => {
    const normalisedA = normaliseColor(a)
    const normalisedB = normaliseColor(b)
    expect(normalisedA).toBeTruthy()
    expect(normalisedB).toBeTruthy()
    expect(normalisedA).toBe(normalisedB)
  })

  test.each(["meow", "quack"])('"%s" is not a color', a => {
    expect(normaliseColor(a)).toBeNull()
  })
})
