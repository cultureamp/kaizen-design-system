import { DateSegment } from "@react-stately/datepicker"
import { generateRegexFromInput } from "./generateRegexFromInput"

const generateMockENSegments = (
  hour: string | undefined,
  minute: string | undefined,
  dayPeriod: string | undefined
): DateSegment[] => [
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
    placeholder: "",
    isPlaceholder: true,
    isEditable: false,
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
    placeholder: "",
    isPlaceholder: true,
    isEditable: false,
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
]

const generateMockCNSegments = (
  dayPeriod: string | undefined,
  hour: string | undefined,
  minute: string | undefined
): DateSegment[] => [
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
    placeholder: "",
    isPlaceholder: true,
    isEditable: false,
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
]

describe("english locale", () => {
  it("matches a fully typed in type", () => {
    const mockSegments = generateMockENSegments("1", "30", "AM")
    const regexMatcher = generateRegexFromInput(mockSegments)
    expect(regexMatcher.test("1:30 AM")).toBeTruthy()
    expect(regexMatcher.test("1:30 PM")).toBeFalsy()
  })
  it("matches a partially typed in time", () => {
    const mockSegments = generateMockENSegments("1", undefined, undefined)
    const regexMatcher = generateRegexFromInput(mockSegments)
    expect(regexMatcher.test("1:30 AM")).toBeTruthy()
    expect(regexMatcher.test("12:30 AM")).toBeTruthy()
    expect(regexMatcher.test("1:30 PM")).toBeTruthy()
    expect(regexMatcher.test("12:30 PM")).toBeTruthy()
  })

  it("matches a time with only minutes typed in", () => {
    const mockSegments = generateMockENSegments(undefined, "30", undefined)
    const regexMatcher = generateRegexFromInput(mockSegments)
    expect(regexMatcher.test("12:30 AM")).toBeTruthy()
    expect(regexMatcher.test("1:30 PM")).toBeTruthy()
  })
  it("does not match a time in the wrong time period", () => {
    const mockSegments = generateMockENSegments("1", "30", "PM")
    const regexMatcher = generateRegexFromInput(mockSegments)
    expect(regexMatcher.test("")).toBeFalsy()
  })
})

// testing Chinese locale as segments are in different order to any EN locale.
describe("chinese locale", () => {
  it("matches fully typed in time", () => {
    const mockSegments = generateMockCNSegments("上午", "10", "00")
    const regexMatcher = generateRegexFromInput(mockSegments)
    expect(regexMatcher.test("上午10:00")).toBeTruthy()
  })
  it("matches partially typed in time", () => {
    const mockSegments = generateMockCNSegments("上午", undefined, undefined)
    const regexMatcher = generateRegexFromInput(mockSegments)
    expect(regexMatcher.test("上午10:00")).toBeTruthy()
  })
})
