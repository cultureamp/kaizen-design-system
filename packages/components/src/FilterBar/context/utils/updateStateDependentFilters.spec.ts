import { FilterBarState } from "../types"
import { updateStateDependentFilters } from "./updateStateDependentFilters"

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

describe("updateStateDependentFilters()", () => {
  it("does not change the state when a dependency condition is not set", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
      values: {},
    } satisfies FilterBarState<Values>

    const newState = updateStateDependentFilters<Values>(state, {})

    expect(newState).toEqual(state)
  })

  describe("Not usable", () => {
    it("clears an unusable filter with a value", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: {
            ...stateFilters.sugarLevel,
            isUsable: true,
            isUsableWhen: ({ flavour }) => flavour.id !== "flavour",
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour", "sugarLevel"]),
        values: {},
      } satisfies FilterBarState<Values>

      const newState = updateStateDependentFilters<Values>(state, { sugarLevel: 50 })

      expect(newState.filters.sugarLevel.isUsable).toBe(false)
      expect(newState.activeFilterIds).toEqual(new Set(["flavour"]))
      expect(newState.values).toEqual({})
    })
  })

  describe("Usable", () => {
    it("updates the usable state", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: {
            ...stateFilters.sugarLevel,
            isRemovable: true,
            isUsable: false,
            isUsableWhen: ({ flavour }) => flavour.id === "flavour",
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: {},
      } satisfies FilterBarState<Values>

      const newState = updateStateDependentFilters<Values>(state, { sugarLevel: 50 })

      expect(newState.filters.sugarLevel.isUsable).toBe(true)
      expect(newState.activeFilterIds).toEqual(new Set(["flavour"]))
      expect(newState.values).toEqual({ sugarLevel: 50 })
    })
  })
})
