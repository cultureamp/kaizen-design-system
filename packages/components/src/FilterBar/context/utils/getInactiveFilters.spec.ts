import { FilterBarState } from "../types"
import { getInactiveFilters } from "./getInactiveFilters"

type Values = {
  flavour: string
  sugarLevel: number
}

const filters = {
  flavour: {
    id: "flavour",
    name: "Flavour",
    isOpen: false,
    isRemovable: false,
  },
  sugarLevel: {
    id: "sugarLevel",
    name: "Sugar Level",
    isOpen: false,
    isRemovable: true,
  },
} satisfies FilterBarState<Values>["filters"]

const state = {
  filters,
  activeFilterIds: new Set<keyof Values>(["flavour"]),
} satisfies FilterBarState<Values>

describe("getInactiveFilters()", () => {
  it("only fetches inactive filters", () => {
    expect(getInactiveFilters<Values>(state)).toEqual([filters.sugarLevel])
  })
})
