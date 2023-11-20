import { FilterBarState } from "../types"
import { checkShouldUpdateValues } from "./checkShouldUpdateValues"

type Values = {
  flavour: string
  toppings: string[]
}

const state = {
  filters: {
    flavour: {
      id: "flavour",
      name: "Flavour",
      isRemovable: false,
      isOpen: false,
      isUsable: true,
    },
    toppings: {
      id: "toppings",
      name: "Toppings",
      isOpen: false,
      isRemovable: true,
      isUsable: true,
    },
  },
  activeFilterIds: new Set<keyof Values>(["flavour"]),
  values: {},
  dependentFilterIds: new Set(),
  hasUpdatedValues: false,
} satisfies FilterBarState<Values>

describe("checkShouldUpdateValues()", () => {
  it("is true when the values do not match", () => {
    const result = checkShouldUpdateValues<Values>(
      { ...state, values: { flavour: "jasmine" } },
      { flavour: "jasmine", toppings: ["pearls"] }
    )

    expect(result).toBe(true)
  })

  it("is false when the values match", () => {
    const result = checkShouldUpdateValues<Values>(
      { ...state, values: { flavour: "jasmine" } },
      { flavour: "jasmine" }
    )

    expect(result).toBe(false)
  })

  describe("Arrays", () => {
    it("is true when the array values do not match", () => {
      const result = checkShouldUpdateValues<Values>(
        { ...state, values: { toppings: ["pearls"] } },
        { toppings: ["jelly"] }
      )

      expect(result).toBe(true)
    })

    it("is false when the array values match", () => {
      const result = checkShouldUpdateValues<Values>(
        { ...state, values: { toppings: ["pearls"] } },
        { toppings: ["pearls"] }
      )

      expect(result).toBe(false)
    })
  })
})
