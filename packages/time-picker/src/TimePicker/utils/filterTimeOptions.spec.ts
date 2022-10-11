import { DateSegment } from "@react-stately/datepicker"
import { generateFilteredTimeOptions } from "./filterTimeOptions"
import { getAllTimeOptions } from "./getAllTimeOptions"

const generateMockEnglishInputs = (
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

const allOptions = getAllTimeOptions({ locale: "en-US" })

describe.only("english locale", () => {
  it("matches a fully typed in type", () => {
    // Mocks segments that would be created based on user input
    const mockSegments = generateMockEnglishInputs("1", "30", "AM")
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).toContain("1:30 AM")
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).not.toContain("1:30 PM")
  })
  it("matches a partially typed in time", () => {
    const mockSegments = generateMockEnglishInputs("1", undefined, undefined)
    //       const regexMatcher = generateRegexFromInput(mockSegments)
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).toContain("1:30 AM")

    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).toContain("12:30 AM")
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).toContain("1:30 PM")
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).toContain("12:30 PM")
  })

  it("matches a time with only minutes typed in", () => {
    const mockSegments = generateMockEnglishInputs(undefined, "30", undefined)
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).toContain("12:30 AM")
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).toContain("1:30 PM")
  })
  it("does not match a time in the wrong time period", () => {
    const mockSegments = generateMockEnglishInputs("1", "30", "PM")
    expect(
      Object.keys(generateFilteredTimeOptions(allOptions, mockSegments))
    ).not.toContain("1:30 AM")
  })
})

const allChineseOptions = getAllTimeOptions({ locale: "en-US" })
const generateMockChineseInput = (
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
// testing Chinese locale as segments are in different order to any EN locale.
describe("chinese locale", () => {
  it("matches fully typed in time", () => {
    const mockSegments = generateMockChineseInput("上午", "10", "00")
    expect(
      Object.keys(generateFilteredTimeOptions(allChineseOptions, mockSegments))
    ).toContain("上午10:00")
  })
  it("matches partially typed in time", () => {
    const mockSegments = generateMockChineseInput("上午", undefined, undefined)
    expect(
      Object.keys(generateFilteredTimeOptions(allChineseOptions, mockSegments))
    ).toContain("上午10:00")
  })
})
