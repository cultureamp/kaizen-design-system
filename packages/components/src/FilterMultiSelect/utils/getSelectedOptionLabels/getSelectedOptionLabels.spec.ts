import { ItemType } from "../../types"
import { getSelectedOptionLabels } from "./getSelectedOptionLabels"

const itemsMock: ItemType[] = [
  {
    label: "option-1-label-mock",
    value: "option-1-value-mock",
  },
  {
    label: "option-2-label-mock",
    value: "option-2-value-mock",
  },
  {
    label: "option-3-label-mock",
    value: "option-3-value-mock",
  },
]
describe("getTruncatedLabels", () => {
  describe("Given keys undefiend", () => {
    it("returns empty array", () => {
      expect(getSelectedOptionLabels(undefined, itemsMock)).toMatchObject([])
    })
  })

  describe("Given items undefiend", () => {
    it("returns empty array", () => {
      expect(getSelectedOptionLabels("all")).toMatchObject([])
    })
  })

  describe("Given two keys and items", () => {
    it("returns the matching labels", () => {
      expect(
        getSelectedOptionLabels(
          new Set(["option-1-value-mock", "option-3-value-mock"]),
          itemsMock
        )
      ).toMatchObject(["option-1-label-mock", "option-3-label-mock"])
    })
  })

  describe("Given 'all' keys and items", () => {
    it("returns the all labels", () => {
      expect(getSelectedOptionLabels("all", itemsMock)).toMatchObject([
        "option-1-label-mock",
        "option-2-label-mock",
        "option-3-label-mock",
      ])
    })
  })
})
