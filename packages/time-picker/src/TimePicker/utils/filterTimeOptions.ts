import { DateSegment } from "@react-stately/datepicker"
import { TimeOption } from "../types"
import { generateRegexFromInput } from "./generateRegexFromInput"

export const generateFilteredTimeOptions = (
  allOptions: Record<string, TimeOption>,
  segments: DateSegment[]
) =>
  Object.keys(allOptions).reduce((filteredOptions, optionKey) => {
    if (generateRegexFromInput(segments).test(optionKey)) {
      filteredOptions[optionKey] = allOptions[optionKey]
    }
    return filteredOptions
  }, {} as Record<string, TimeOption>)
