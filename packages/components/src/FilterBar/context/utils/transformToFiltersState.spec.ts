import { FilterBarState } from "../types"
import { transformToFiltersState } from "./transformToFiltersState"

type Values = {
  flavour: string
  sugarLevel: number
}

const stateFilters = {
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
} satisfies FilterBarState<Values>["filters"]

describe("transformToFiltersState()", () => {
  it("returns args compatible with dependent filter conditions", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
      values: {},
    } satisfies FilterBarState<Values>

    const filtersState = transformToFiltersState<Values>(state, {
      flavour: "jasmine",
    })

    expect(filtersState.flavour).toEqual({
      id: "flavour",
      name: "Flavour",
      isActive: true,
      value: "jasmine",
    })
    expect(filtersState.sugarLevel).toEqual({
      id: "sugarLevel",
      name: "Sugar Level",
      isActive: false,
      value: undefined,
    })
  })
})
