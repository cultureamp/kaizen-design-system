import { DateSegment } from "@react-stately/datepicker"
import { TimeOption } from "../types"

export const doesOptionMatchInput = (
  segments: DateSegment[],
  option: string
): boolean => {
  const regexString = segments
    .map(segment => {
      if (segment.isPlaceholder || segment.type === "literal") {
        if (segment.type === "hour") {
          return ".{1,2}"
        }
        // replaces all placeholder text characters with regex match any characters
        return `.{${segment.text.length}}`
      }

      if (segment.type === "hour") {
        return `${segment.text}[012]?`
      }
      return segment.text
    })
    .join("")
  const regexMatcher = new RegExp(`^${regexString}`)
  return regexMatcher.test(option)
}
export const generateFilteredTimeOptions = (
  allOptions: Record<string, TimeOption>,
  segments: DateSegment[]
) =>
  Object.keys(allOptions).reduce((filteredOptions, optionKey) => {
    if (doesOptionMatchInput(segments, optionKey)) {
      return { ...filteredOptions, [optionKey]: allOptions[optionKey] }
    }
    return filteredOptions
  }, {} as Record<string, TimeOption>)
