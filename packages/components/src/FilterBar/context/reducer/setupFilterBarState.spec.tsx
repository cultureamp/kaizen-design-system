import React from "react"
import { Filters } from "../../types"
import { setupFilterBarState } from "./setupFilterBarState"

type Values = {
  flavour: string
  sugarLevel: number
}

const filters = [
  { id: "flavour", name: "Flavour", Component: <div /> },
  {
    id: "sugarLevel",
    name: "Sugar Level",
    Component: <div />,
    isRemovable: true,
  },
] satisfies Filters<Values>

describe("setupFilterBarState()", () => {
  it("sets up the base state correctly", () => {
    expect(setupFilterBarState<Values>(filters)).toEqual({
      filters: {
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
          isRemovable: true,
          isOpen: false,
          isUsable: true,
        },
      },
      activeFilterIds: new Set(),
      values: null,
      dependentFilterIds: new Set<keyof Values>(),
    })
  })

  describe("Dependent filters", () => {
    const filtersDependent = [
      { id: "flavour", name: "Flavour", Component: <div /> },
      {
        id: "sugarLevel",
        name: "Sugar Level",
        Component: <div />,
        isUsableWhen: state => state.flavour.value !== undefined,
      },
    ] satisfies Filters<Values>

    it("correctly sets up base for dependent filters", () => {
      const state = setupFilterBarState<Values>(filtersDependent)
      expect(state.filters.sugarLevel.isUsable).toBe(null)
      expect(state.dependentFilterIds).toEqual(new Set(["sugarLevel"]))
    })
  })
})
