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

describe("filterBarStateReducer: update_values", () => {
  describe("Removable filters", () => {
    it("adds a removable filter with a value to active filters", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: { ...stateFilters.sugarLevel, isRemovable: true },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: {},
      } satisfies FilterBarState<Values>

      const newState = filterBarStateReducer<Values>(state, {
        type: "update_values",
        values: { sugarLevel: 50 },
      })

      expect(newState.activeFilterIds).toEqual(
        new Set(["flavour", "sugarLevel"])
      )
      expect(newState.values).toEqual({ sugarLevel: 50 })
    })
  })

  describe("Dependent filters", () => {
    describe("Not usable", () => {
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

        expect(newState.filters.sugarLevel.isUsable).toBe(false)
        expect(newState.activeFilterIds).toEqual(new Set(["flavour"]))
        expect(newState.values).toEqual({})
      })
    })

    describe("Usable", () => {
      it("activates a non-removable usable filter", () => {
        const state = {
          filters: {
            flavour: stateFilters.flavour,
            sugarLevel: {
              ...stateFilters.sugarLevel,
              isUsableWhen: ({ flavour }) => flavour.value !== undefined,
            },
          },
          activeFilterIds: new Set<keyof Values>(["flavour"]),
          values: {},
        } satisfies FilterBarState<Values>

        const newState = filterBarStateReducer<Values>(state, {
          type: "update_values",
          values: { flavour: "jasmine", sugarLevel: 50 },
        })

        expect(newState.filters.sugarLevel.isUsable).toBe(true)
        expect(newState.activeFilterIds).toEqual(
          new Set(["flavour", "sugarLevel"])
        )
        expect(newState.values).toEqual({ flavour: "jasmine", sugarLevel: 50 })
      })

      it("does not activate a removable filter without a value", () => {
        const state = {
          filters: {
            flavour: stateFilters.flavour,
            sugarLevel: {
              ...stateFilters.sugarLevel,
              isRemovable: true,
              isUsableWhen: ({ flavour }) => flavour.value !== undefined,
            },
          },
          activeFilterIds: new Set<keyof Values>(["flavour"]),
          values: {},
        } satisfies FilterBarState<Values>

        const newState = filterBarStateReducer<Values>(state, {
          type: "update_values",
          values: { flavour: "jasmine" },
        })

        expect(newState.filters.sugarLevel.isUsable).toBe(true)
        expect(newState.activeFilterIds).toEqual(new Set(["flavour"]))
        expect(newState.values).toEqual({ flavour: "jasmine" })
      })

      it("activates a removable filter with a value", () => {
        const state = {
          filters: {
            flavour: stateFilters.flavour,
            sugarLevel: {
              ...stateFilters.sugarLevel,
              isRemovable: true,
              isUsableWhen: ({ flavour }) => flavour.value !== undefined,
            },
          },
          activeFilterIds: new Set<keyof Values>(["flavour"]),
          values: {},
        } satisfies FilterBarState<Values>

        const newState = filterBarStateReducer<Values>(state, {
          type: "update_values",
          values: { flavour: "jasmine", sugarLevel: 50 },
        })

        expect(newState.filters.sugarLevel.isUsable).toBe(true)
        expect(newState.activeFilterIds).toEqual(
          new Set(["flavour", "sugarLevel"])
        )
        expect(newState.values).toEqual({ flavour: "jasmine", sugarLevel: 50 })
      })
    })
  })
})
