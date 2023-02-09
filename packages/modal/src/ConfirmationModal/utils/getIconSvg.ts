import exclamationIcon from "@kaizen/component-library/icons/exclamation-white.icon.svg"
import informationIcon from "@kaizen/component-library/icons/information-white.icon.svg"
import successIcon from "@kaizen/component-library/icons/success-white.icon.svg"
import { HeaderMood } from "../../types"

export const getIconSvg = (
  mood: HeaderMood
): {
  id: string
  viewBox: string
} => {
  switch (mood) {
    case "cautionary":
      return exclamationIcon

    case "informative":
      return informationIcon

    case "negative":
      return exclamationIcon

    case "positive":
      return successIcon

    case "assertive":
      return exclamationIcon
  }
}
