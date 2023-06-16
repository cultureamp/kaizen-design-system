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
      activeFilters: new Map().set("flavour", stateFilters["flavour"]),
    } satisfies FiltersState<Values>

    const newFilters = {
      flavour: stateFilters["flavour"],
      sugarLevel: { ...stateFilters["sugarLevel"], isActive: true },
    } satisfies FiltersState<Values>["filters"]

    expect(
      filtersStateReducer<Values>(state, {
        type: "set_filter_active",
        id: "sugarLevel",
        value: true,
      })
    ).toEqual({
      filters: newFilters,
      activeFilters: new Map()
        .set("flavour", newFilters["flavour"])
        .set("sugarLevel", newFilters["sugarLevel"]),
    })
  })

  it("sets a filter to inactive and removes entry from active filters", () => {
    const state = {
      filters: stateFilters,
      activeFilters: new Map().set("flavour", stateFilters["flavour"]),
    } satisfies FiltersState<Values>

    const newFilters = {
      flavour: { ...stateFilters["flavour"], isActive: false },
      sugarLevel: stateFilters["sugarLevel"],
    } satisfies FiltersState<Values>["filters"]

    expect(
      filtersStateReducer<Values>(state, {
        type: "set_filter_active",
        id: "flavour",
        value: false,
      })
    ).toEqual({ filters: newFilters, activeFilters: new Map() })
  })
})
