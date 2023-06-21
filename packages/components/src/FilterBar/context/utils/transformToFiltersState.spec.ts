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
  it("extends state with inActive and value", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FilterBarState<Values>

    const filtersState = transformToFiltersState<Values>(state, {
      flavour: "jasmine",
    })

    expect(filtersState.flavour).toEqual({
      id: "flavour",
      name: "Flavour",
      isOpen: false,
      isUsable: true,
      isActive: true,
      value: "jasmine",
    })
    expect(filtersState.sugarLevel).toEqual({
      id: "sugarLevel",
      name: "Sugar Level",
      isOpen: false,
      isRemovable: true,
      isUsable: true,
      isActive: false,
      value: undefined,
    })
  })
})
