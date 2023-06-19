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

describe("filtersStateReducer: update_single_filter", () => {
  it("returns the full state structure when updating a single filter", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FiltersState<Values>

    const newState = filtersStateReducer<Values>(state, {
      type: "update_single_filter",
      id: "flavour",
      data: {},
    })

    expect(newState).toEqual(state)
  })

  it("updates state of a single filter", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
    } satisfies FiltersState<Values>

    expect(state.filters.flavour.isOpen).toBe(false)

    const newState = filtersStateReducer<Values>(state, {
      type: "update_single_filter",
      id: "flavour",
      data: { isOpen: true },
    })

    expect(newState.filters.flavour.isOpen).toBe(true)
  })

  describe("Active state", () => {
    it("sets a filter to active and adds entry to active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FiltersState<Values>

      expect(state.filters.sugarLevel.isActive).toBe(false)

      const newState = filtersStateReducer<Values>(state, {
        type: "update_single_filter",
        id: "sugarLevel",
        data: { isActive: true },
      })

      expect(newState.filters.sugarLevel.isActive).toBe(true)
      expect(newState.activeFilterIds).toEqual(
        new Set(["flavour", "sugarLevel"])
      )
    })

    it("sets a filter to inactive and removes entry from active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FiltersState<Values>

      expect(state.filters.flavour.isActive).toBe(true)

      const newState = filtersStateReducer<Values>(state, {
        type: "update_single_filter",
        id: "flavour",
        data: { isActive: false },
      })

      expect(newState.filters.flavour.isActive).toBe(false)
      expect(newState.activeFilterIds).toEqual(new Set())
    })

    it("does not change active state if not defined", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FiltersState<Values>

      const newStateFlavour = filtersStateReducer<Values>(state, {
        type: "update_single_filter",
        id: "flavour",
        data: { value: "jasmine" },
      })

      expect(newStateFlavour.filters.flavour.value).toBe("jasmine")
      expect(newStateFlavour.activeFilterIds).toEqual(new Set(["flavour"]))

      const newStateSugarLevel = filtersStateReducer<Values>(state, {
        type: "update_single_filter",
        id: "sugarLevel",
        data: { value: 50 },
      })

      expect(newStateSugarLevel.filters.sugarLevel.value).toBe(50)
      expect(newStateSugarLevel.activeFilterIds).toEqual(new Set(["flavour"]))
    })
  })
})
