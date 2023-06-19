import React from "react"
import { Filters } from "../../types"
import { baseFilterAttributes } from "./__testdata"
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
    expect(setupFiltersState<Values>(filters)).toEqual({
      filters: {
        flavour: {
          ...baseFilterAttributes,
          id: "flavour",
          name: "Flavour",
          Component: <div />,
        },
        sugarLevel: {
          ...baseFilterAttributes,
          id: "sugarLevel",
          name: "Sugar Level",
          Component: <div />,
          isRemovable: true,
          isActive: false,
        },
      },
      activeFilterIds: new Set(["flavour"]),
    })
  })
})
