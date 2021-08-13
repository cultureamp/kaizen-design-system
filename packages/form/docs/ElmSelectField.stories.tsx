import { loadElmStories } from "elm-storybook"
import Ports from "@kaizen/select/KaizenDraft/Select/ports"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/SelectFieldStories.elm").Elm
  .ElmStories.SelectFieldStories

loadElmStories(
  `${CATEGORIES.elm}/Select Field`,
  module,
  compiledElm,
  ["Single", "Single Disabled", "Multi-Select"],
  Ports
)
