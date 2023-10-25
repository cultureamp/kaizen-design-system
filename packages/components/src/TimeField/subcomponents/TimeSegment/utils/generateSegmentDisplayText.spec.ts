import { generateSegmentDisplayText } from "./generateSegmentDisplayText"

describe("generateSegmentDisplayText()", () => {
  it("displays dashes if is placeholder but not a day period", () =>
    expect(
      generateSegmentDisplayText({
        isPlaceholder: true,
        type: "hour",
        text: "2",
        isEditable: true,
        placeholder: "--",
      })
    ).toBe("--"))

  it("displays the time when it is not a placeholder", () =>
    expect(
      generateSegmentDisplayText({
        isPlaceholder: false,
        type: "hour",
        text: "2",
        isEditable: true,
        placeholder: "--",
      })
    ).toBe("2"))

  it("displays the day period text when it is a placeholder", () =>
    expect(
      generateSegmentDisplayText({
        isPlaceholder: true,
        type: "dayPeriod",
        text: "AM",
        isEditable: true,
        placeholder: "AM",
      })
    ).toBe("AM"))
})
