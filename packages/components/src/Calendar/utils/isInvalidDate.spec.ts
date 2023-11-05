import { parse } from "date-fns"
import { DateFormat } from "../enums"
import { isInvalidDate } from "./isInvalidDate"

describe("isInvalidDate", () => {
  describe("when given a numeral date format", () => {
    it("is not invalid when given a valid numeral date", () => {
      const parsedDate = parse("02/01/2022", DateFormat.Numeral, new Date())
      expect(isInvalidDate(parsedDate)).toEqual(false)
    })

    it("is invalid when given a non-existent date", () => {
      const parsedDate = parse("13/01/2022", DateFormat.Numeral, new Date())
      expect(isInvalidDate(parsedDate)).toEqual(true)
    })

    it("is invalid when given a text formatted date", () => {
      const parsedDate = parse("May 4, 2022", DateFormat.Numeral, new Date())
      expect(isInvalidDate(parsedDate)).toEqual(true)
    })
  })

  describe("when given a text date format", () => {
    it("is not invalid when given a valid text date", () => {
      const parsedDate = parse("May 4, 2022", DateFormat.Text, new Date())
      expect(isInvalidDate(parsedDate)).toEqual(false)
    })

    it("is invalid when given a non-existent date", () => {
      const parsedDate = parse("May 40, 2022", DateFormat.Text, new Date())
      expect(isInvalidDate(parsedDate)).toEqual(true)
    })

    it("is invalid when given a numeral formatted date", () => {
      const parsedDate = parse("02/01/2022", DateFormat.Text, new Date())
      expect(isInvalidDate(parsedDate)).toEqual(true)
    })
  })
})
