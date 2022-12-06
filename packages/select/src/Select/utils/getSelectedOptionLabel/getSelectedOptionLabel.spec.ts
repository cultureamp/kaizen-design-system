import { ItemType } from "../../types"
import { getSelectedOptionLabel } from "./getSelectedOptionLabel"

export const singleMockItems: ItemType[] = [
  { label: "Front-End", value: "id-fe" },
  { label: "Back-End", value: "id-be" },
  { label: "SRE", value: "id-sre" },
  { label: "Dev-ops", value: "id-devops" },
  { label: "Others", value: "id-others" },
  { label: "SuperlongItem", value: "id-long" },
  { label: "SuperSameItem", value: "id-same" },
]

describe("getSelectedOptionLabel", () => {
  it("returns the selected key's label", () => {
    expect(getSelectedOptionLabel("id-sre", singleMockItems)).toEqual("SRE")
  })

  it("returns null if given key is invalid", () => {
    expect(getSelectedOptionLabel("invalid", singleMockItems)).toEqual(null)
  })

  it("returns null if key is undefined", () => {
    expect(getSelectedOptionLabel(undefined, singleMockItems)).toEqual(null)
  })

  it("returns null if items is undefined", () => {
    expect(getSelectedOptionLabel("id-sre", undefined)).toEqual(null)
  })
})
