import { FilterBarState } from "../types"
import { getInactiveFilters } from "./getInactiveFilters"

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

describe("getInactiveFilters()", () => {
  it("only fetches inactive filters", () => {
    const state = {
      filters: stateFilters,
      activeFilterIds: new Set<keyof Values>(["flavour"]),
      values: {},
      dependentFilterIds: new Set(),
      hasUpdatedValues: false,
    } satisfies FilterBarState<Values>

    expect(getInactiveFilters<Values>(state)).toEqual([
      {
        id: "sugarLevel",
        name: "Sugar Level",
        isOpen: false,
        isRemovable: true,
        isUsable: true,
      },
    ])
  })

  it("fetches only usable inactive filters", () => {
    const state = {
      filters: {
        flavour: stateFilters["flavour"],
        sugarLevel: {
          id: "sugarLevel",
          name: "Sugar Level",
          isRemovable: false,
          isOpen: false,
          isUsable: false,
          isUsableWhen: () => false,
        },
      },
      activeFilterIds: new Set<keyof Values>(),
      values: {},
      dependentFilterIds: new Set<keyof Values>(["sugarLevel"]),
      hasUpdatedValues: false,
    } satisfies FilterBarState<Values>

    expect(getInactiveFilters<Values>(state)).toEqual([stateFilters.flavour])
  })
})
