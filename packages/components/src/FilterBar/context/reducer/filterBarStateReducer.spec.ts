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

describe("filterBarStateReducer", () => {
  describe("filterBarStateReducer: activate_filter", () => {
    it("sets a filter to active and adds entry to active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: {},
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "activate_filter",
        id: "sugarLevel",
      })

      expect(newState.activeFilterIds).toEqual(
        new Set(["flavour", "sugarLevel"])
      )
    })
  })

  describe("filterBarStateReducer: deactivate_filter", () => {
    it("sets a filter to inactive and removes entry from active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { flavour: "jasmine" },
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "deactivate_filter",
        id: "flavour",
      })

      expect(newState.activeFilterIds).toEqual(new Set())
      expect(newState.values.flavour).toBeUndefined()
    })
  })
})
