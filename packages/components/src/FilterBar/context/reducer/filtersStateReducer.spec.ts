import { FilterBarState } from "../types"
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

describe("filtersStateReducer", () => {
  describe("filtersStateReducer: activate_filter", () => {
    it("sets a filter to active and adds entry to active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FilterBarState<Values>

      const newState = filtersStateReducer<Values>(state, {
        type: "activate_filter",
        id: "sugarLevel",
      })

      expect(newState.activeFilterIds).toEqual(
        new Set(["flavour", "sugarLevel"])
      )
    })
  })

  describe("filtersStateReducer: deactivate_filter", () => {
    it("sets a filter to inactive and removes entry from active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FilterBarState<Values>

      const newState = filtersStateReducer<Values>(state, {
        type: "deactivate_filter",
        id: "flavour",
      })

      expect(newState.activeFilterIds).toEqual(new Set())
    })
  })
})
