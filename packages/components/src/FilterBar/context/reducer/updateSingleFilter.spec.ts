import { FilterBarState } from "../types"
// import { baseFilterAttributes } from "./__testdata"
import { filtersStateReducer } from "./filtersStateReducer"

type Values = {
  flavour: string
  sugarLevel: number
}

const stateFilters = {
  flavour: {
    id: "flavour",
    name: "Flavour",
    isOpen: false,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    isOpen: false,
  },
} satisfies FilterBarState<Values>["filters"]

describe("filtersStateReducer: update_single_filter", () => {
  it("returns all filters when updating a single filter", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FilterBarState<Values>

    const newState = filtersStateReducer<Values>(state, {
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

    const newState = filtersStateReducer<Values>(state, {
      type: "update_single_filter",
      id: "flavour",
      data: { isOpen: true },
    })

    expect(newState.filters.flavour.isOpen).toBe(true)
  })
})
