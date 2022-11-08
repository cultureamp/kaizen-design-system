import { ItemType } from "../../types"
import { getLongestItem } from "./getLongestItem"

export const singleItems: ItemType[] = [
  { label: "Front-End", value: "id-fe" },
  { label: "Back-End", value: "id-be" },
  { label: "SRE", value: "id-sre" },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
  { label: "SuperlongItem", value: "id-long" },
]

describe("getLongestItem", () => {
  it("only contains selected disabled dates", () => {
    expect(getLongestItem(singleItems)).toEqual("SuperlongItem")
  })
})
