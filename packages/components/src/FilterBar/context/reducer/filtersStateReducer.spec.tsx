import React from "react"
import { Filters } from "../../types"
import { FiltersState } from "../types"
import { filtersStateReducer, setupFiltersState } from "./filtersStateReducer"

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

describe("filtersStateReducer", () => {
  it("updates values", () => {
    const filters = {
      flavour: { ...mockStateFilters["flavour"], value: "chocolate" },
      sugarLevel: { ...mockStateFilters["sugarLevel"], value: 50 },
    } satisfies FiltersState<Values>["filters"]

    const activeFilters = new Map()
    activeFilters.set("flavour", filters["flavour"])

    expect(
      filtersStateReducer<Values>(mockState, {
        type: "update_values",
        values: { flavour: "chocolate", sugarLevel: 50 },
      })
    ).toEqual({ filters, activeFilters })
  })

  it("updates state of a single filter", () => {
    const filters = {
      flavour: { ...mockStateFilters["flavour"], isOpen: true },
      sugarLevel: mockStateFilters["sugarLevel"],
    } satisfies FiltersState<Values>["filters"]

    const activeFilters = new Map()
    activeFilters.set("flavour", filters["flavour"])

    expect(
      filtersStateReducer<Values>(mockState, {
        type: "update_single_filter",
        id: "flavour",
        data: { isOpen: true },
      })
    ).toEqual({ filters, activeFilters })
  })

  it("sets a filter to active", () => {
    const filters = {
      flavour: mockStateFilters["flavour"],
      sugarLevel: { ...mockStateFilters["sugarLevel"], isActive: true },
    } satisfies FiltersState<Values>["filters"]

    const activeFilters = new Map(mockStateActiveFilters)
    activeFilters.set("sugarLevel", filters["sugarLevel"])

    expect(
      filtersStateReducer<Values>(mockState, {
        type: "set_filter_active",
        id: "sugarLevel",
      })
    ).toEqual({ filters, activeFilters })
  })
})
