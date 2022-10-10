import { getAllTimeOptions } from "./getAllTimeOptions"

it("generates the right time increments", () => {
  expect(Object.keys(getAllTimeOptions({ locale: "en-GB" }))).toContain("12:00")
  expect(Object.keys(getAllTimeOptions({ locale: "en-GB" }))).toContain("12:30")
  expect(
    Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 15 }))
  ).toContain("12:15")
  expect(
    Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 15 }))
  ).toContain("12:45")
})
