import { getTruncatedLabels } from "./getTruncatedLabel"

const firstLabel = "optionhas11"
const secondLabel = "optionwith12"
const thirdLabel = "optioncontains16"

const labels = [firstLabel, secondLabel, thirdLabel]

describe("getTruncatedLabels", () => {
  describe("With only one label", () => {
    it("Always shows on its own, regardless of character limit", () => {
      const limit = 5
      const longLabel = "My super long label with a lot of characters"
      const withOnlyOneLabel = [longLabel]
      expect(getTruncatedLabels(withOnlyOneLabel, limit)).toEqual(longLabel)
    })
  })
  describe("When the first label exceeds the character limit", () => {
    it("Always shows", () => {
      const limit = 5
      const longLabel = "My super long label with a lot of characters"
      const withLongFirstLabel = [longLabel, secondLabel]
      expect(getTruncatedLabels(withLongFirstLabel, limit)).toEqual(
        `${longLabel} + 1 more`
      )
    })
  })
  describe("With all labels combined less than character limit", () => {
    it("Shows all labels, connected with commas", () => {
      const limit = 100
      expect(getTruncatedLabels(labels, limit)).toEqual(
        `${firstLabel}, ${secondLabel}, ${thirdLabel}`
      )
    })
  })
  describe("With last label exceeding character limit", () => {
    it("Replaces last item with '+1 more'", () => {
      const limit = 25
      expect(getTruncatedLabels(labels, limit)).toEqual(
        `${firstLabel}, ${secondLabel} + 1 more`
      )
    })
  })
  describe("With last two labels exceeding character limit", () => {
    it("Replaces last two items with '+2 more'", () => {
      const limit = 20
      expect(getTruncatedLabels(labels, limit)).toEqual(
        `${firstLabel} + 2 more`
      )
    })
  })
})
