import { FilterBarState } from "../types"
import { checkShouldUpdateValues } from "./checkShouldUpdateValues"

type Values = {
  flavour: string
  sugarLevel: number
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
    sugarLevel: {
      id: "sugarLevel",
      name: "Sugar Level",
      isOpen: false,
      isRemovable: true,
      isUsable: true,
    },
  },
  activeFilterIds: new Set<keyof Values>(["flavour"]),
  values: {},
  dependentFilterIds: new Set(),
} satisfies FilterBarState<Values>

describe("checkShouldUpdateValues()", () => {
  it("is true when the values do not match", () => {
    const result = checkShouldUpdateValues<Values>(
      { ...state, values: { flavour: "jasmine" } },
      { flavour: "jasmine", sugarLevel: 50 }
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
})
