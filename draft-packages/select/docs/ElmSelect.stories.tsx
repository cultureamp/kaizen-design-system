import { loadElmStories } from "elm-storybook"
import Ports from "../KaizenDraft/Select/ports"

const compiledElm = require("../ElmStories/SelectStories.elm").Elm.ElmStories
  .SelectStories

loadElmStories(
  "Select (Elm)",
  module,
  compiledElm,
  ["Single (Kaizen Site Demo)", "Single Searchable", "Multi-Select Searchable"],
  Ports
)
