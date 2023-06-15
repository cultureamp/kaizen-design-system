import React from "react"
import { FiltersState } from "../types"
import { getInactiveFilters } from "./getInactiveFilters"

type Values = {
  flavour: string
  sugarLevel: number
}

const filters = {
  flavour: {
    id: "flavour",
    name: "Flavour",
    Component: <div />,
    isOpen: false,
    isRemovable: false,
    isActive: true,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    Component: <div />,
    isOpen: false,
    isRemovable: true,
    isActive: false,
  },
} satisfies FiltersState<Values>["filters"]

const activeFilters = new Map()
activeFilters.set("flavour", filters["flavour"])

const state = {
  filters,
  activeFilters,
} satisfies FiltersState<Values>

describe("getInactiveFilters()", () => {
  it("only fetches inactive filters", () => {
    expect(getInactiveFilters<Values>(state)).toEqual([filters.sugarLevel])
  })
})
