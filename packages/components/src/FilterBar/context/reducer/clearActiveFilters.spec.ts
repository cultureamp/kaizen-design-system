import { FiltersState } from "../types"
import { baseFilterAttributes } from "./__testdata"
import { filtersStateReducer } from "./filtersStateReducer"

type Values = {
  flavour: string
  sugarLevel: number
}

const stateFilters = {
  flavour: {
    ...baseFilterAttributes,
    id: "flavour",
    name: "Flavour",
  },
  sugarLevel: {
    ...baseFilterAttributes,
    id: "sugarLevel",
    name: "Sugar Level",
    isRemovable: true,
    isActive: true,
  },
} satisfies FiltersState<Values>["filters"]

describe("filtersStateReducer: clear_all_filters", () => {
  it("sets all removable filters to inactive", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour", "sugarLevel"]),
    } satisfies FiltersState<Values>

    const newState = filtersStateReducer<Values>(state, {
      type: "clear_active_filters",
    })

    expect(newState.filters).toEqual({
      flavour: stateFilters["flavour"],
      sugarLevel: { ...stateFilters["sugarLevel"], isActive: false },
    })
    expect(newState.activeFilterIds).toEqual(new Set<keyof Values>(["flavour"]))
  })
})
