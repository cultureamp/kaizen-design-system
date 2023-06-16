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
    isActive: false,
  },
} satisfies FiltersState<Values>["filters"]

describe("filtersStateReducer: set_filter_active", () => {
  it("sets a filter to active and adds entry to active filters", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FiltersState<Values>

    expect(
      filtersStateReducer<Values>(state, {
        type: "set_filter_active",
        id: "sugarLevel",
        value: true,
      })
    ).toEqual({
      filters: {
        flavour: stateFilters["flavour"],
        sugarLevel: { ...stateFilters["sugarLevel"], isActive: true },
      },
      activeFilterIds: new Set<keyof Values>(["flavour", "sugarLevel"]),
    })
  })

  it("sets a filter to inactive and removes entry from active filters", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FiltersState<Values>

    expect(
      filtersStateReducer<Values>(state, {
        type: "set_filter_active",
        id: "flavour",
        value: false,
      })
    ).toEqual({
      filters: {
        flavour: { ...stateFilters["flavour"], isActive: false },
        sugarLevel: stateFilters["sugarLevel"],
      },
      activeFilterIds: new Set(),
    })
  })
})
