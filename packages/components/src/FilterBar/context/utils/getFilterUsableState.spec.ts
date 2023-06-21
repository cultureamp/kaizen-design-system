import { FiltersState } from "../types"
import { getFilterUsableState } from "./getFilterUsableState"

type Values = {
  flavour: string
  sugarLevel: number
}

const filtersState = {
  flavour: {
    id: "flavour",
    name: "Flavour",
    isOpen: false,
    isActive: true,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    isOpen: false,
    isRemovable: true,
    isActive: false,
  },
} satisfies FiltersState<Values>

describe("getFilterUsableState()", () => {
  it("returns true when no condition is set", () => {
    expect(getFilterUsableState(filtersState, undefined)).toEqual(true)
  })

  it("correctly calculates usability when defined", () => {
    expect(
      getFilterUsableState(
        filtersState,
        state => state.flavour.name === "Flavour"
      )
    ).toEqual(true)
    expect(
      getFilterUsableState(
        filtersState,
        state => state.flavour.name === "Not Flavour"
      )
    ).toEqual(false)
  })
})
