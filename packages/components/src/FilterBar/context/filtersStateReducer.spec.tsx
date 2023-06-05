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
  { id: "sugarLevel", name: "Sugar Level", Component: <div /> },
] satisfies Filters<Values>

const initialState = {
  flavour: {
    id: "flavour",
    name: "Flavour",
    Component: <div />,
    isOpen: false,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    Component: <div />,
    isOpen: false,
  },
} satisfies FiltersState<Values>

describe("setupFiltersState", () => {
  it("updates values", () => {
    expect(setupFiltersState<Values>(filters)).toEqual(initialState)
  })
})

describe("filtersStateReducer", () => {
  it("updates values", () => {
    expect(
      filtersStateReducer<Values>(initialState, {
        type: "update_values",
        values: { flavour: "chocolate", sugarLevel: 50 },
      })
    ).toEqual({
      flavour: { ...initialState["flavour"], value: "chocolate" },
      sugarLevel: { ...initialState["sugarLevel"], value: 50 },
    })
  })

  it("updates state of a single filter", () => {
    expect(
      filtersStateReducer<Values>(initialState, {
        type: "update_single",
        id: "flavour",
        data: { isOpen: true },
      })
    ).toEqual({
      flavour: { ...initialState["flavour"], isOpen: true },
      sugarLevel: initialState["sugarLevel"],
    })
  })
})
