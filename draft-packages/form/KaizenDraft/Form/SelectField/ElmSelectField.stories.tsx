import { loadElmStories } from "@cultureamp/elm-storybook"
import Ports from "../../ports"

loadElmStories(
  "SelectField (Elm)",
  module,
  require("./SelectFieldStories.elm"),
  ["Single", "Multi-Select"],
  Ports
)
