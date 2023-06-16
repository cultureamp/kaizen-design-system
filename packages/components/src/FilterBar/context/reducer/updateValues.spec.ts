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

describe("filtersStateReducer: update_values", () => {
  it("updates pre-existing values", () => {
    const state = {
      filters: stateFilters,
      activeFilters: new Map().set("flavour", stateFilters["flavour"]),
    } satisfies FiltersState<Values>

    const newFilters = {
      flavour: { ...stateFilters["flavour"], value: "chocolate" },
      sugarLevel: stateFilters["sugarLevel"],
    } satisfies FiltersState<Values>["filters"]

    expect(
      filtersStateReducer<Values>(state, {
        type: "update_values",
        values: { flavour: "chocolate" },
      })
    ).toEqual({
      filters: newFilters,
      activeFilters: new Map().set("flavour", newFilters["flavour"]),
    })
  })

  it("sets removable filters with a value to active", () => {
    const state = {
      filters: stateFilters,
      activeFilters: new Map().set("flavour", stateFilters["flavour"]),
    } satisfies FiltersState<Values>

    const newFilters = {
      flavour: stateFilters["flavour"],
      sugarLevel: { ...stateFilters["sugarLevel"], value: 50 },
    } satisfies FiltersState<Values>["filters"]

    expect(
      filtersStateReducer<Values>(state, {
        type: "update_values",
        values: { sugarLevel: 50 },
      })
    ).toEqual({
      filters: newFilters,
      activeFilters: new Map()
        .set("flavour", newFilters["flavour"])
        .set("sugarLevel", newFilters["sugarLevel"]),
    })
  })
})
