import { enUS, enAU } from "date-fns/locale"
import { formatDescriptionInputFormat } from "./formatDescriptionInputFormat"

describe("formatDescriptionInputFormat", () => {
  it("returns the en-AU date format", () => {
    expect(formatDescriptionInputFormat(enAU)).toEqual("dd/mm/yyyy")
  })

  it("returns the en-US date format", () => {
    expect(formatDescriptionInputFormat(enUS)).toEqual("mm/dd/yyyy")
  })
})
