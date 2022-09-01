import { getTruncatedLabels } from "./getTruncatedLabel"

const CHAR_LIMIT = 100

const getMockOptionLabels = (count: number): string[] =>
  Array.from(Array(count).keys()).map(item => `option${item + 1}-label-mock`)

describe("getTruncatedLabels", () => {
  describe("Given 3 selected labels", () => {
    it("shows all the option labels", () => {
      expect(getTruncatedLabels(getMockOptionLabels(3), CHAR_LIMIT)).toContain(
        "option1-label-mock, option2-label-mock, option3-label-mock"
      )
    })
  })

  describe("Given 4 selected labels", () => {
    it("shows only the first 3 option labels", () => {
      const result = getTruncatedLabels(getMockOptionLabels(4), CHAR_LIMIT)
      expect(result).toContain(
        "option1-label-mock, option2-label-mock, option3-label-mock"
      )

      expect(result).not.toContain("option4-label-mock")
    })

    it("shows +1 more", () => {
      const result = getTruncatedLabels(getMockOptionLabels(4), CHAR_LIMIT)
      expect(result).toContain("+1 more")
    })
  })

  describe("Given 6 selected labels", () => {
    it("shows +3 more", () => {
      const result = getTruncatedLabels(getMockOptionLabels(6), CHAR_LIMIT)
      expect(result).toContain("+3 more")
    })
  })
})
