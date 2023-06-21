import React from "react"
import { Filters } from "../../types"
import { getMappedFilters } from "./getMappedFilters"

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

describe("getMappedFilters()", () => {
  it("sets up the base state correctly", () => {
    expect(getMappedFilters<Values>(filters)).toEqual({
      flavour: { id: "flavour", name: "Flavour", Component: <div /> },
      sugarLevel: {
        id: "sugarLevel",
        name: "Sugar Level",
        Component: <div />,
        isRemovable: true,
      },
    })
  })
})
