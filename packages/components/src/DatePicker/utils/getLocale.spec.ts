import { enAU } from "date-fns/locale"
import { getLocale } from "./getLocale"

describe("getLocale", () => {
  it("retrieves fallback value when passed an unsupported locale", () => {
    expect(getLocale("invalid")).toEqual(enAU)
  })
})
