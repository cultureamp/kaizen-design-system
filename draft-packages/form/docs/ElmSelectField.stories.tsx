import { loadElmStories } from "@cultureamp/elm-storybook"
import Ports from "@kaizen/draft-select/KaizenDraft/Select/ports"

loadElmStories(
  "SelectField (Elm)",
  module,
  require("./SelectFieldStories.elm"),
  ["Single", "Multi-Select"],
  Ports
)
