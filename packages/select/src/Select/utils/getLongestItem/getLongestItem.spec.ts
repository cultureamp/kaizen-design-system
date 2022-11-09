import { ItemType } from "../../types"
import { getLongestItem } from "./getLongestItem"

const singleItems: ItemType[] = [
  { label: "Front-End", value: "id-fe" },
  { label: "Back-End", value: "id-be" },
  { label: "SRE", value: "id-sre" },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
  { label: "SuperlongItem", value: "id-long" },
  { label: "SuperSameItem", value: "id-same" },
]

const singleItemsOne: ItemType[] = [
  { label: "Front-End", value: "id-fe" },
  { label: "Back-End", value: "id-be" },
  { label: "SRE", value: "id-sre" },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
  { label: "SuperlongItem", value: "id-long" },
]

describe("getLongestItem", () => {
  it("returns the longest string", () => {
    expect(getLongestItem(singleItemsOne)).toEqual("SuperlongItem")
  })
  it("returns one longest string when there are 2 of the same length", () => {
    expect(getLongestItem(singleItems)).toEqual("SuperSameItem")
  })
})
