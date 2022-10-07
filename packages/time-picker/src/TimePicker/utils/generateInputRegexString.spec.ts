import { DateSegment } from "@react-stately/datepicker"
import { generateInputRegexString } from "./generateInputRegexString"

const cnLabel = "上午10:00"
const enAMLabel = "1:30 AM"
const enPMLabel = "1:30 PM"

const generateMockENSegments = (
  hour: string | undefined,
  minute: string | undefined,
  dayPeriod: string | undefined
) =>
  [
    {
      type: "hour",
      text: hour ?? "––",
      value: 0,
      minValue: 0,
      maxValue: 11,
      isPlaceholder: !hour,
      placeholder: "––",
      isEditable: true,
    },
    {
      type: "literal",
      text: ":",
      placeholder: null,
    },
    {
      type: "minute",
      text: minute ?? "––",
      value: 0,
      minValue: 0,
      maxValue: 59,
      isPlaceholder: !minute,
      placeholder: "––",
      isEditable: true,
    },
    {
      type: "literal",
      text: " ",
      placeholder: null,
    },
    {
      type: "dayPeriod",
      text: dayPeriod ?? "AM",
      value: 0,
      minValue: 0,
      maxValue: 12,
      isPlaceholder: !dayPeriod,
      placeholder: "AM",
      isEditable: true,
    },
  ] as DateSegment[]

const generateMockCNSegments = (
  dayPeriod: string | undefined,
  hour: string | undefined,
  minute: string | undefined
) =>
  [
    {
      type: "dayPeriod",
      text: dayPeriod ?? "上午",
      value: 0,
      minValue: 0,
      maxValue: 12,
      isPlaceholder: !dayPeriod,
      placeholder: "上午",
      isEditable: true,
    },
    {
      type: "hour",
      text: hour ?? "––",
      value: 0,
      minValue: 0,
      maxValue: 11,
      isPlaceholder: !hour,
      placeholder: "––",
      isEditable: true,
    },
    {
      type: "literal",
      text: ":",
      placeholder: null,
    },
    {
      type: "minute",
      text: minute ?? "––",
      value: 0,
      minValue: 0,
      maxValue: 59,
      isPlaceholder: !minute,
      placeholder: "––",
      isEditable: true,
    },
  ] as DateSegment[]

describe("english locale", () => {
  it("matches a fully typed in type", () => {
    const mockSegments = generateMockENSegments("1", "30", "AM")
    const regexMatch = new RegExp(`^${generateInputRegexString(mockSegments)}`)
    expect(regexMatch.test(enAMLabel)).toBeTruthy()
    expect(regexMatch.test(enPMLabel)).toBeFalsy()
  })
  it("matches a partially typed in time", () => {
    const mockSegments = generateMockENSegments("1", undefined, undefined)
    const regexMatch = new RegExp(`^${generateInputRegexString(mockSegments)}`)
    expect(regexMatch.test(enAMLabel)).toBeTruthy()
    expect(regexMatch.test("12:00 AM")).toBeTruthy()
  })
  it("matches times with no specified time period", () => {
    const mockSegments = generateMockENSegments("1", undefined, undefined)
    const regexMatch = new RegExp(`^${generateInputRegexString(mockSegments)}`)
    expect(regexMatch.test(enAMLabel)).toBeTruthy()
    expect(regexMatch.test(enPMLabel)).toBeTruthy()
  })
  it("matches a time with only minutes typed in", () => {
    const mockSegments = generateMockENSegments("1", "30", "AM")
    const regexMatch = new RegExp(`^${generateInputRegexString(mockSegments)}`)
    expect(regexMatch.test(enAMLabel)).toBeTruthy()
  })
  it("does not match a time in the wrong time period", () => {
    const mockSegments = generateMockENSegments("1", "30", "PM")
    const regexMatch = new RegExp(`^${generateInputRegexString(mockSegments)}`)
    expect(regexMatch.test(enAMLabel)).toBeFalsy()
  })
})

// testing Chinese locale as segments are in different order to any EN locale.
describe("chinese locale", () => {
  it("matches fully typed in time", () => {
    const mockSegments = generateMockCNSegments("上午", "10", "00")
    const regexMatch = new RegExp(`^${generateInputRegexString(mockSegments)}`)
    expect(regexMatch.test(cnLabel)).toBeTruthy()
  })
  it("matches partially typed in time", () => {
    const mockSegments = generateMockCNSegments("上午", undefined, undefined)
    const regexMatch = new RegExp(`^${generateInputRegexString(mockSegments)}`)
    expect(regexMatch.test(cnLabel)).toBeTruthy()
  })
})
