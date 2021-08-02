import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/TagStories.elm").Elm.ElmStories
  .TagStories

loadElmStories(`${CATEGORIES.elm}/Tag`, module, compiledElm, [
  "Default - Medium",
  "Default - Small",
  "Sentiment - Positive",
  "Sentiment - Neutral",
  "Sentiment - Negative",
  "Sentiment - None",
  "Validation - Positive",
  "Validation - Informative",
  "Validation - Negative",
  "Validation - Cautionary",
  "Truncated",
  "Truncated - Dismissible",
  "Inline",
  "Inline - Dismissible",
  "Status - Live",
  "Status - Draft",
  "Status - Closed",
  "Status - Action",
  "Medium - Allow Text Wrapping",
  "Small - Allow Text Wrapping",
])
