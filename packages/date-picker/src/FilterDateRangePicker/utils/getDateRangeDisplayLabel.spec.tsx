import React from "react"
import { render } from "@testing-library/react"
import { enAU } from "date-fns/locale"
import { getDateRangeDisplayLabel } from "./getDateRangeDisplayLabel"

const locale = enAU

describe("getDateRangeDisplayLabel", () => {
  it("returns undefined if date range is not defined", () => {
    expect(getDateRangeDisplayLabel(undefined, locale)).toBeUndefined()
  })

  it("returns undefined if date range is partially defined", () => {
    expect(
      getDateRangeDisplayLabel({ from: new Date("2022-05-01") }, locale)
    ).toBeUndefined()
    expect(
      getDateRangeDisplayLabel(
        { from: undefined, to: new Date("2022-05-01") },
        locale
      )
    ).toBeUndefined()
  })

  it("formats valid date range in en-AU text format", () => {
    const { container } = render(
      <div>
        {getDateRangeDisplayLabel(
          { from: new Date("2022-05-01"), to: new Date("2022-11-25") },
          locale
        )}
      </div>
    )
    expect(container).toHaveTextContent("1 May 2022-25 Nov 2022")
  })
})
