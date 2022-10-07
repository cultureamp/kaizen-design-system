import { DateSegment } from "@react-stately/datepicker"

export const generateInputRegexString = (segments: DateSegment[]) =>
  segments
    .map(segment => {
      if (segment.isPlaceholder || segment.isPlaceholder === undefined) {
        // replaces all placeholder text characters with regex match any characters
        return Array.from(Array(segment.text.length).keys())
          .map(() => ".")
          .join("")
      } else {
        return segment.text
      }
    })
    .join("")
