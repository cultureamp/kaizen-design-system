import { loadElmStories } from "elm-storybook"
import Ports from "../KaizenDraft/Select/ports"

const compiledElm = require("../ElmStories/SelectStories.elm").Elm.ElmStories
  .SelectStories

loadElmStories(
  "Elm/Select",
  module,
  compiledElm,
  [
    "Single (Kaizen Site Demo)",
    "Single Searchable",
    "Multi-Select Searchable",
    "Single Clearable",
    "Single Disabled",
    "Single, no placeholder (test case)",
    "Single Clearable, controlHasUnconstrainedHeight",
  ],
  Ports
)
