import { getAllTimeOptions } from "./getAllTimeOptions"

describe("right time increments", () => {
  it("generates the right time increments for 5 minutes", () => {
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 5 }))
    ).toContain("12:05")
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 5 }))
    ).toContain("12:10")
  })
  it("generates the right time increments for 15 minutes", () => {
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 15 }))
    ).toContain("12:15")
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 15 }))
    ).toContain("12:45")
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 30 }))
    ).not.toContain("12:10")
  })
  it("generates the right time increments for 30 minutes", () => {
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 30 }))
    ).toContain("12:00")
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 30 }))
    ).toContain("12:30")
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 30 }))
    ).not.toContain("12:15")
  })
  it("generates the right time increments for 60 minutes", () => {
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 60 }))
    ).toContain("12:00")
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 60 }))
    ).not.toContain("12:30")
    expect(
      Object.keys(getAllTimeOptions({ locale: "en-GB", increments: 60 }))
    ).toContain("01:00")
  })
})
