import { loadElmStories } from "elm-storybook"
import Ports from "@kaizen/draft-select/KaizenDraft/Select/ports"

const compiledElm = require("../ElmStories/SelectFieldStories.elm").Elm
  .ElmStories.SelectFieldStories

loadElmStories(
  "Elm/Select Field",
  module,
  compiledElm,
  ["Single", "Single Disabled", "Multi-Select"],
  Ports
)
