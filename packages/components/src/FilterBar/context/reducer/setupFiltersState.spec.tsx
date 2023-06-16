import React from "react"
import { Filters } from "../../types"
import { FiltersState } from "../types"
import { baseFilterAttributes } from "./__testdata"
import { setupFiltersState } from "./filtersStateReducer"

type Values = {
  flavour: string
  sugarLevel: number
}

const mockFilters = [
  { id: "flavour", name: "Flavour", Component: <div /> },
  {
    id: "sugarLevel",
    name: "Sugar Level",
    Component: <div />,
    isRemovable: true,
  },
] satisfies Filters<Values>

const mockStateFilters = {
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
} satisfies FiltersState<Values>["filters"]

const mockStateActiveFilters = new Map()
mockStateActiveFilters.set("flavour", mockStateFilters["flavour"])

const mockState = {
  filters: mockStateFilters,
  activeFilters: mockStateActiveFilters,
} satisfies FiltersState<Values>

describe("setupFiltersState", () => {
  it("sets up the base state correctly", () => {
    expect(setupFiltersState<Values>(mockFilters)).toEqual(mockState)
  })
})
