import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"
const compiledElm = require("../ElmStories/TitleBlockStories.elm").Elm
  .ElmStories.TitleBlockStories

loadElmStories(
  `${CATEGORIES.elm}/Title Block (deprecated)`,
  module,
  compiledElm,
  ["Admin, with breadcrumb", "Admin, with navigation buttons", "Reversed"]
)
