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

describe("filterBarStateReducer: update_values", () => {
  describe("Removable filters", () => {
    it("adds a removable filter with a value to active filters", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: { ...stateFilters.sugarLevel, isRemovable: true },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { sugarLevel: 50 },
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "update_values",
        values: { sugarLevel: 50 },
      })

      expect(newState.activeFilterIds).toEqual(
        new Set(["flavour", "sugarLevel"])
      )
    })
  })

  describe("Dependent filters", () => {
    it("clears an unusable filter with a value", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: {
            ...stateFilters.sugarLevel,
            isUsableWhen: ({ flavour }) => flavour.value !== undefined,
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { sugarLevel: 50 },
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "update_values",
        values: { sugarLevel: 50 },
      })

      expect(newState.filters.sugarLevel.isUsable).toEqual(false)
      expect(newState.activeFilterIds).toEqual(new Set(["flavour"]))
      expect(newState.values).toEqual({})
    })
  })
})
