import React from "react"
import { Filters } from "../../types"
import { getInactiveFilters } from "./getInactiveFilters"

type Values = {
  flavour: string
  sugarLevel: number
}

const filters = [
  {
    id: "flavour",
    name: "Flavour",
    Component: <div />,
  },
  {
    id: "sugarLevel",
    name: "Sugar Level",
    Component: <div />,
    isRemovable: true,
  },
] satisfies Filters<Values>

const activeFilterIds = new Set<keyof Values>(["flavour"])

describe("getInactiveFilters()", () => {
  it("only fetches inactive filters", () => {
    expect(getInactiveFilters<Values>(filters, activeFilterIds)).toEqual([
      {
        id: "sugarLevel",
        name: "Sugar Level",
        Component: <div />,
        isRemovable: true,
      },
    ])
  })
})
