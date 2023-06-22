import React from "react"
import { Filters } from "../../types"
import { setupFiltersState } from "./setupFiltersState"

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

describe("setupFiltersState()", () => {
  it("sets up the base state correctly", () => {
    expect(
      setupFiltersState<Values>(filters, {
        flavour: "jasmine",
      })
    ).toEqual({
      filters: {
        flavour: {
          id: "flavour",
          name: "Flavour",
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
      activeFilterIds: new Set(["flavour"]),
      values: { flavour: "jasmine" },
    })
  })

  it("sets removable filters with a value to active", () => {
    const state = setupFiltersState<Values>(filters, {
      sugarLevel: 50,
    })
    expect(state.activeFilterIds).toEqual(new Set(["flavour", "sugarLevel"]))
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

    it("is not usable if it does not meet its set condition", () => {
      const state = setupFiltersState<Values>(filtersDependent, {})
      expect(state.filters.sugarLevel.isUsable).toBe(false)
      expect(state.activeFilterIds).toEqual(new Set(["flavour"]))
    })

    it("does not set value if the filter is not usable", () => {
      const state = setupFiltersState<Values>(filtersDependent, {
        sugarLevel: 50,
      })
      expect(state.filters.sugarLevel.isUsable).toBe(false)
      expect(state.values.sugarLevel).not.toBeDefined()
    })
  })
})
