import { loadElmStories } from "elm-storybook"
import Ports from "@kaizen/draft-select/KaizenDraft/Select/ports"

const compiledElm = require("../ElmStories/SelectFieldStories.elm").Elm
  .ElmStories.SelectFieldStories

loadElmStories(
  "SelectField (Elm)",
  module,
  compiledElm,
  ["Single", "Multi-Select"],
  Ports
)
