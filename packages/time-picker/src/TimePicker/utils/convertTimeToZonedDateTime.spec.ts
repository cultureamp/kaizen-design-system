import { now, ZonedDateTime } from "@internationalized/date"
import { convertTimeToZonedDateTime } from "./convertTimeToZonedDateTime"

const TIME_ZONE = "Australia/Melbourne"

describe("convertTimeToZonedDateTime", () => {
  it("returns expected ZonedDateTime when the date is defined", () => {
    const result = convertTimeToZonedDateTime({
      date: new Date("2022-01-08"),
      timeZone: TIME_ZONE,
      hour: 4,
      minutes: 56,
    })
    const expectedResult = new ZonedDateTime(
      2022,
      1,
      8,
      "Australia/Melbourne",
      now(TIME_ZONE).offset,
      4,
      56
    )

    expect(result).toStrictEqual(expectedResult)
    expect(result.toString()).toStrictEqual(
      "2022-01-08T04:56:00+10:00[Australia/Melbourne]"
    )
  })

  it("returns expected ZonedDateTime when the date is undefined", () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()
    const result = convertTimeToZonedDateTime({
      timeZone: TIME_ZONE,
      hour: 4,
      minutes: 56,
    })

    const expectedResult = new ZonedDateTime(
      year,
      month,
      day,
      TIME_ZONE,
      now(TIME_ZONE).offset,
      4,
      56
    )

    expect(result).toStrictEqual(expectedResult)
    expect(result.toString()).toStrictEqual(
      `${year}-0${month}-${day}T04:56:00+10:00[Australia/Melbourne]`
    )
  })

  it("returns expected ZonedDateTime when supplied with a different timezone to browser", () => {
    expect(
      convertTimeToZonedDateTime({
        date: new Date("2022-01-08"),
        timeZone: "Europe/Berlin",
        hour: 4,
        minutes: 56,
      })
        .toDate()
        .toISOString()
    ).toEqual("2022-01-08T02:56:00.000Z")
  })
})
