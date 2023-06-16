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
  },
} satisfies FiltersState<Values>["filters"]

describe("filtersStateReducer: update_single_filter", () => {
  it("updates state of a single filter", () => {
    const state = {
      filters: stateFilters,
      activeFilters: new Map()
        .set("flavour", stateFilters["flavour"])
        .set("sugarLevel", stateFilters["sugarLevel"]),
    } satisfies FiltersState<Values>

    const newFilters = {
      flavour: { ...stateFilters["flavour"], isOpen: true },
      sugarLevel: stateFilters["sugarLevel"],
    } satisfies FiltersState<Values>["filters"]

    expect(
      filtersStateReducer<Values>(state, {
        type: "update_single_filter",
        id: "flavour",
        data: { isOpen: true },
      })
    ).toEqual({
      filters: newFilters,
      activeFilters: new Map()
        .set("flavour", newFilters["flavour"])
        .set("sugarLevel", newFilters["sugarLevel"]),
    })
  })
})
