import React from "react"
import { Filters } from "../types"
import { filtersStateReducer, setupFiltersState } from "./filtersStateReducer"
import { FiltersState } from "./types"

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

const initialStateFilters = {
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

const initialStateActiveFilters = new Map()
initialStateActiveFilters.set("flavour", initialStateFilters["flavour"])

const initialState = {
  filters: initialStateFilters,
  activeFilters: initialStateActiveFilters,
} satisfies FiltersState<Values>

describe("setupFiltersState", () => {
  it("sets up the base state correctly", () => {
    expect(setupFiltersState<Values>(filters)).toEqual(initialState)
  })
})

describe("filtersStateReducer", () => {
  it("updates values", () => {
    const newFilters = {
      flavour: { ...initialStateFilters["flavour"], value: "chocolate" },
      sugarLevel: { ...initialStateFilters["sugarLevel"], value: 50 },
    }

    const newActiveFilters = new Map()
    newActiveFilters.set("flavour", newFilters["flavour"])

    expect(
      filtersStateReducer<Values>(initialState, {
        type: "update_values",
        values: { flavour: "chocolate", sugarLevel: 50 },
      })
    ).toEqual({
      filters: newFilters,
      activeFilters: newActiveFilters,
    })
  })

  it("updates state of a single filter", () => {
    const newFilters = {
      flavour: { ...initialStateFilters["flavour"], isOpen: true },
      sugarLevel: initialStateFilters["sugarLevel"],
    }

    const newActiveFilters = new Map()
    newActiveFilters.set("flavour", newFilters["flavour"])

    expect(
      filtersStateReducer<Values>(initialState, {
        type: "update_single_filter",
        id: "flavour",
        data: { isOpen: true },
      })
    ).toEqual({
      filters: newFilters,
      activeFilters: newActiveFilters,
    })
  })
})
