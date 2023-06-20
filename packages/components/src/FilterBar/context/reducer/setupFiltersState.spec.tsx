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
    expect(setupFiltersState<Values>(filters, {})).toEqual({
      filters: {
        flavour: { id: "flavour", name: "Flavour", isOpen: false },
        sugarLevel: {
          id: "sugarLevel",
          name: "Sugar Level",
          isRemovable: true,
          isOpen: false,
        },
      },
      activeFilterIds: new Set(["flavour"]),
    })
  })

  it("sets removable filters with a value to active", () => {
    const state = setupFiltersState<Values>(filters, {
      sugarLevel: 50,
    })
    expect(state.activeFilterIds).toEqual(new Set(["flavour", "sugarLevel"]))
  })
})
