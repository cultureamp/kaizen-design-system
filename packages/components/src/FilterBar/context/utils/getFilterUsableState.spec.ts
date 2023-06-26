import { FilterBarUsableArgs } from "../../types"
import { getFilterUsableState } from "./getFilterUsableState"

type Values = {
  flavour: string
  sugarLevel: number
}

const isUsableWhenArgs = {
  flavour: {
    id: "flavour",
    name: "Flavour",
    isActive: true,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    isActive: false,
  },
} satisfies FilterBarUsableArgs<Values>

describe("getFilterUsableState()", () => {
  it("returns true when no condition is set", () => {
    expect(getFilterUsableState(isUsableWhenArgs, undefined)).toEqual(true)
  })

  it("correctly calculates usability when defined", () => {
    expect(
      getFilterUsableState(
        isUsableWhenArgs,
        state => state.flavour.name === "Flavour"
      )
    ).toEqual(true)
    expect(
      getFilterUsableState(
        isUsableWhenArgs,
        state => state.flavour.name === "Not Flavour"
      )
    ).toEqual(false)
  })
})
