import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/LoadingPlaceholderStories.elm").Elm
  .ElmStories.LoadingPlaceholderStories

loadElmStories(`${CATEGORIES.elm}/Loading Placeholder`, module, compiledElm, [
  "Default, Multiple",
  "Default, Multiple, Inline",
  "Default, Multiple, Variable width",
  "Default, Multiple, Variable width, Centered",
  "Default, Multiple, Combined block and inline",
  "Default, Without bottom margin",
  "Default, Inherit baseline",
  "Heading",
  "Reversed, Default",
  "In the wild",
])
