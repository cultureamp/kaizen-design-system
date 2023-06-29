import { FilterBarState } from "../types"
import { getFilterConditionalArgs } from "./getFilterConditionalArgs"

type Values = {
  flavour: string
  sugarLevel: number
}

const stateFilters = {
  flavour: {
    id: "flavour",
    name: "Flavour",
    isRemovable: false,
    isOpen: false,
    isUsable: true,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    isOpen: false,
    isRemovable: true,
    isUsable: true,
  },
} satisfies FilterBarState<Values>["filters"]

describe("getFilterConditionalArgs()", () => {
  it("returns args compatible with dependent filter conditions", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
      values: {},
      dependentFilterIds: new Set(),
    } satisfies FilterBarState<Values>

    const usableArgs = getFilterConditionalArgs<Values>(state, {
      flavour: "jasmine",
    })

    expect(usableArgs.flavour).toEqual({
      id: "flavour",
      name: "Flavour",
      isActive: true,
      value: "jasmine",
    })
    expect(usableArgs.sugarLevel).toEqual({
      id: "sugarLevel",
      name: "Sugar Level",
      isActive: false,
      value: undefined,
    })
  })
})
