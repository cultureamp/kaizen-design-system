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
  it("updates state of a single filter", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
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

  describe("Active state", () => {
    it("sets a filter to active and adds entry to active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FiltersState<Values>

      expect(
        filtersStateReducer<Values>(state, {
          type: "update_single_filter",
          id: "sugarLevel",
          data: { isActive: true },
        })
      ).toEqual({
        filters: {
          flavour: stateFilters["flavour"],
          sugarLevel: { ...stateFilters["sugarLevel"], isActive: true },
        },
        activeFilterIds: new Set<keyof Values>(["flavour", "sugarLevel"]),
      })
    })

    it("sets a filter to inactive and removes entry from active filters", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FiltersState<Values>

      expect(
        filtersStateReducer<Values>(state, {
          type: "update_single_filter",
          id: "flavour",
          data: { isActive: false },
        })
      ).toEqual({
        filters: {
          flavour: { ...stateFilters["flavour"], isActive: false },
          sugarLevel: stateFilters["sugarLevel"],
        },
        activeFilterIds: new Set(),
      })
    })

    it("does not change active state if not defined", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      } satisfies FiltersState<Values>

      expect(
        filtersStateReducer<Values>(state, {
          type: "update_single_filter",
          id: "flavour",
          data: { value: "jasmine" },
        })
      ).toEqual({
        filters: {
          flavour: { ...stateFilters["flavour"], value: "jasmine" },
          sugarLevel: stateFilters["sugarLevel"],
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      })

      expect(
        filtersStateReducer<Values>(state, {
          type: "update_single_filter",
          id: "sugarLevel",
          data: { value: 50 },
        })
      ).toEqual({
        filters: {
          flavour: stateFilters["flavour"],
          sugarLevel: { ...stateFilters["sugarLevel"], value: 50 },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
      })
    })
  })
})
