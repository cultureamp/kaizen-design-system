import { GridFractions } from "../types"

export const convertFractionToString = (fraction: GridFractions): string => {
  switch (fraction) {
    case "1/8":
      return "eighth"
    case "1/4":
      return "quarter"
    case "1/2":
      return "half"
    default:
      return fraction
  }
}
