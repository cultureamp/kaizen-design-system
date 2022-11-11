import { enUS, enAU } from "date-fns/locale"
import { getFormatDescription } from "./getFormatDescription"

describe("getFormatDescription", () => {
  it("returns the en-AU date format", () => {
    expect(getFormatDescription(enAU)).toEqual("dd/mm/yyyy")
  })

  it("returns the en-US date format", () => {
    expect(getFormatDescription(enUS)).toEqual("mm/dd/yyyy")
  })
})
