import { ItemType } from "../../types"
import { getSelectedOptionKeys } from "./getSelectedOptionKeys"

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
      expect(getSelectedOptionKeys(undefined, itemsMock)).toMatchObject([])
    })
  })

  describe("Given items undefiend", () => {
    it("returns empty array", () => {
      expect(getSelectedOptionKeys("all")).toMatchObject([])
    })
  })

  describe("Given two keys and items", () => {
    it("returns the matching labels", () => {
      expect(
        getSelectedOptionKeys(
          new Set(["option-1-value-mock", "option-3-value-mock"]),
          itemsMock
        )
      ).toMatchObject(["option-1-value-mock", "option-3-value-mock"])
    })
  })

  describe("Given 'all' keys and items", () => {
    it("returns the all labels", () => {
      expect(getSelectedOptionKeys("all", itemsMock)).toMatchObject([
        "option-1-value-mock",
        "option-2-value-mock",
        "option-3-value-mock",
      ])
    })
  })
})
