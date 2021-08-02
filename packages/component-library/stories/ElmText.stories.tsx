import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/TextStories.elm").Elm.ElmStories
  .TextStories

loadElmStories(`${CATEGORIES.elm}/Text (deprecated)`, module, compiledElm, [
  "h1",
  "h2",
  "h3",
  "zen-display-0",
  "zen-heading-1",
  "zen-heading-2",
  "zen-heading-3",
  "zen-data-large",
  "zen-data-large-units",
  "zen-data-medium",
  "zen-data-medium-units",
  "zen-data-small",
  "zen-data-small-units",
])
