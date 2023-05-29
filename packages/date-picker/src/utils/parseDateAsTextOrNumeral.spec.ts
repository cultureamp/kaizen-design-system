import { enAU } from "date-fns/locale"
import { parseDateAsTextOrNumeral } from "./parseDateAsTextOrNumeral"

describe("parseDateAsTextOrNumeral()", () => {
  describe("given a text date", () => {
    it("returns a valid date", () => {
      const parsedDate = parseDateAsTextOrNumeral("1 May 2025", enAU)
      expect(parsedDate.toString()).toEqual(
        "Thu May 01 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
      )
    })
  })

  describe("given a numeral date", () => {
    it("returns a valid date", () => {
      const parsedDate = parseDateAsTextOrNumeral("1/5/2025", enAU)
      expect(parsedDate.toString()).toEqual(
        "Thu May 01 2025 00:00:00 GMT+0000 (Coordinated Universal Time)"
      )
    })
  })

  describe("given a non date string", () => {
    it("returns an invalid date", () => {
      const parsedDate = parseDateAsTextOrNumeral("🥔", enAU)
      expect(parsedDate.toString()).toEqual("Invalid Date")
    })
  })
})
