import { GridFractions } from "../Box"

export const convertFractionToString = (fraction: GridFractions): string => {
  switch (fraction) {
    case 0:
    default:
      return "0"
    case 0.25:
      return "0-point-25"
    case 0.5:
      return "0-point-5"
    case 0.75:
      return "0-point-75"
    case 1:
      return "1"
    case 1.25:
      return "1-point-25"
    case 1.5:
      return "1-point-5"
    case 1.75:
      return "1-point-75"
    case 2:
      return "2"
    case 2.5:
      return "2-point-5"
    case 3:
      return "3"
    case 3.5:
      return "3-point-5"
    case 4:
      return "4"
  }
}
