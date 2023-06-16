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
      activeFilterIds: new Set<keyof Values>(["flavour", "sugarLevel"]),
    } satisfies FiltersState<Values>

    expect(
      filtersStateReducer<Values>(state, {
        type: "update_single_filter",
        id: "flavour",
        data: { isOpen: true },
      })
    ).toEqual({
      ...state,
      filters: {
        flavour: { ...stateFilters["flavour"], isOpen: true },
        sugarLevel: stateFilters["sugarLevel"],
      },
    })
  })
})
