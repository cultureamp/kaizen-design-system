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
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    isOpen: false,
  },
} satisfies FilterBarState<Values>["filters"]

describe("filterBarStateReducer", () => {
  describe("filterBarStateReducer: activate_filter", () => {
    it("sets a filter to active and adds entry to active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
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

  describe("filterBarStateReducer: activate_filters_with_values", () => {
    it("sets a filter to active and adds entry to active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(),
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "activate_filters_with_values",
        values: {
          flavour: "jasmine",
          sugarLevel: 50,
        },
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
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "deactivate_filter",
        id: "flavour",
      })

      expect(newState.activeFilterIds).toEqual(new Set())
    })
  })

  describe("filterBarStateReducer: deactivate_filters", () => {
    it("sets all removable filters to inactive", () => {
      const state = {
        filters: {
          flavour: {
            id: "flavour",
            name: "Flavour",
            isOpen: false,
          },
          sugarLevel: {
            id: "sugarLevel",
            name: "Sugar Level",
            isOpen: false,
            isRemovable: true,
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour", "sugarLevel"]),
      } satisfies FilterBarState<Values>

      const onValuesChange = jest.fn<void, [Partial<Values>]>()

      const newState = filterBarStateReducer<Values>(state, {
        type: "deactivate_filters",
        onValuesChange,
      })

      expect(newState.activeFilterIds).toEqual(
        new Set<keyof Values>(["flavour"])
      )
      expect(onValuesChange).toHaveBeenCalledWith({})
    })
  })
})
