import { loadElmStories } from "@cultureamp/elm-storybook"
import Ports from "@kaizen/draft-select/KaizenDraft/Select/ports"

loadElmStories(
  "Select (Elm)",
  module,
  require("./SelectStories.elm"),
  ["Single (Kaizen Site Demo)", "Single Searchable", "Multi-Select Searchable"],
  Ports
)
