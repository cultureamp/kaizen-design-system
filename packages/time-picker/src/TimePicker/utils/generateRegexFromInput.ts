import { DateSegment } from "@react-stately/datepicker"

export const generateRegexFromInput = (segments: DateSegment[]): RegExp => {
  const regexString = segments
    .map(segment => {
      if (segment.isPlaceholder || segment.type === "literal") {
        if (segment.type === "hour") {
          return ".{1,2}"
        }
        // replaces all placeholder text characters with regex match any characters
        return Array.from(Array(segment.text.length).keys())
          .map(() => ".")
          .join("")
      }

      if (segment.type === "hour") {
        return `${segment.text}[012]?`
      }
      return segment.text
    })
    .join("")

  return new RegExp(`^${regexString}`)
}
