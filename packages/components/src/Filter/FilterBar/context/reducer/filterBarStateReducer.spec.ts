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
    isRemovable: false,
    isOpen: false,
    isUsable: true,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    isRemovable: false,
    isOpen: false,
    isUsable: true,
  },
} satisfies FilterBarState<Values>["filters"]

describe("filterBarStateReducer", () => {
  describe("filterBarStateReducer: complete_update_values", () => {
    it("sets hasUpdatedValues to false", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: {},
        dependentFilterIds: new Set(),
        hasUpdatedValues: true,
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "complete_update_values",
      })

      expect(newState.hasUpdatedValues).toBe(false)
    })
  })

  describe("filterBarStateReducer: activate_filter", () => {
    it("sets a filter to active", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: {},
        dependentFilterIds: new Set(),
        hasUpdatedValues: false,
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
    it("sets a filter to inactive and clears value", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { flavour: "jasmine" },
        dependentFilterIds: new Set(),
        hasUpdatedValues: false,
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "deactivate_filter",
        id: "flavour",
      })

      expect(newState.activeFilterIds).toEqual(new Set())
      expect(newState.values.flavour).toBeUndefined()
      expect(newState.hasUpdatedValues).toBe(true)
    })
  })
})
