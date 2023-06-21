import { FilterBarState } from "../types"
import { filterBarStateReducer } from "./filterBarStateReducer"

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
    isUsable: true,
  },
} satisfies FilterBarState<Values>["filters"]

describe("filterBarStateReducer: update_single_filter", () => {
  it("returns all filters when updating a single filter", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FilterBarState<Values>

    const newState = filterBarStateReducer<Values>(state, {
      type: "update_single_filter",
      id: "flavour",
      data: {},
    })

    expect(newState.filters).toEqual(stateFilters)
  })

  it("updates state of a single filter", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FilterBarState<Values>

    expect(state.filters.flavour.isOpen).toBe(false)

    const newState = filterBarStateReducer<Values>(state, {
      type: "update_single_filter",
      id: "flavour",
      data: { isOpen: true },
    })

    expect(newState.filters.flavour.isOpen).toBe(true)
  })
})
