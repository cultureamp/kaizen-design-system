import { FilterBarState } from "../types"
import { updateDependentFilters } from "./updateDependentFilters"

const sugarLevelIsUsableWhen = jest.fn(
  state => state.flavour.value !== undefined
)

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
    isUsableWhen: sugarLevelIsUsableWhen,
  },
} satisfies FilterBarState<Values>["filters"]

describe("updateDependentFilters()", () => {
  afterEach(() => {
    sugarLevelIsUsableWhen.mockClear()
  })

  it("returns unchanged state if there are no dependent filters", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
      values: { flavour: "jasmine" },
      dependentFilterIds: new Set(),
      hasUpdatedValues: false,
    } satisfies FilterBarState<Values>

    const newState = updateDependentFilters<Values>(state)

    expect(sugarLevelIsUsableWhen).not.toHaveBeenCalled()
    expect(newState).toEqual(state)
  })

  it("does not update a dependent filter if the usable state has not changed", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
      values: { flavour: "jasmine" },
      dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
      hasUpdatedValues: false,
    } satisfies FilterBarState<Values>

    const newState = updateDependentFilters<Values>(state)

    expect(sugarLevelIsUsableWhen).toBeCalledTimes(1)
    expect(sugarLevelIsUsableWhen).toHaveReturnedWith(
      stateFilters.sugarLevel.isUsable
    )
    expect(newState).toEqual(state)
  })

  it("checks dependent filters again if a change has occurred (for multi-level dependencies)", () => {
    const state = {
      filters: {
        flavour: stateFilters.flavour,
        sugarLevel: {
          ...stateFilters.sugarLevel,
          isUsable: false,
        },
      },
      activeFilterIds: new Set<keyof Values>(["flavour"]),
      values: { flavour: "jasmine" },
      dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
      hasUpdatedValues: false,
    } satisfies FilterBarState<Values>

    updateDependentFilters<Values>(state)
    expect(sugarLevelIsUsableWhen).toBeCalledTimes(2)
    expect(sugarLevelIsUsableWhen).toHaveReturnedWith(true)
  })

  describe("Update to usable", () => {
    it("updates the filter usable state", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: {
            ...stateFilters.sugarLevel,
            isUsable: false,
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { flavour: "jasmine" },
        dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
        hasUpdatedValues: false,
      } satisfies FilterBarState<Values>

      const newState = updateDependentFilters<Values>(state)
      expect(newState.filters.sugarLevel.isUsable).toBe(true)
    })

    it("activates the filter if it is not removable", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: {
            ...stateFilters.sugarLevel,
            isUsable: false,
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { flavour: "jasmine" },
        dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
        hasUpdatedValues: false,
      } satisfies FilterBarState<Values>

      const newState = updateDependentFilters<Values>(state)
      expect(newState.activeFilterIds).toEqual(
        new Set(["flavour", "sugarLevel"])
      )
    })

    it("activates the filter if it is removable but has a value", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: {
            ...stateFilters.sugarLevel,
            isUsable: false,
            isRemovable: true,
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { flavour: "jasmine", sugarLevel: 50 },
        dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
        hasUpdatedValues: false,
      } satisfies FilterBarState<Values>

      const newState = updateDependentFilters<Values>(state)
      expect(newState.activeFilterIds).toEqual(
        new Set(["flavour", "sugarLevel"])
      )
    })

    it("does not activate the filter if it is removable without a value", () => {
      const state = {
        filters: {
          flavour: stateFilters.flavour,
          sugarLevel: {
            ...stateFilters.sugarLevel,
            isUsable: false,
            isRemovable: true,
          },
        },
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { flavour: "jasmine" },
        dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
        hasUpdatedValues: false,
      } satisfies FilterBarState<Values>

      const newState = updateDependentFilters<Values>(state)
      expect(newState.activeFilterIds).toEqual(new Set(["flavour"]))
    })
  })

  describe("Update to unusable", () => {
    it("updates the filter usable state and clears the value", () => {
      const state = {
        filters: stateFilters,
        activeFilterIds: new Set<keyof Values>(["flavour"]),
        values: { sugarLevel: 50 },
        dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
        hasUpdatedValues: false,
      } satisfies FilterBarState<Values>

      const newState = updateDependentFilters<Values>(state)
      expect(newState.filters.sugarLevel.isUsable).toBe(false)
      expect(newState.values).toEqual({})
      expect(newState.hasUpdatedValues).toBe(true)
    })
  })
})
