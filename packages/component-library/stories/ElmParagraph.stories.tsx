import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"
const compiledElm = require("../ElmStories/ParagraphStories.elm").Elm.ElmStories
  .ParagraphStories

loadElmStories(`${CATEGORIES.elm}/Paragraph`, module, compiledElm, [
  "IntroLede",
  "Body",
  "Body Dark Reduced Opacity",
  "Body Positive",
  "Body Negative",
  "Small",
  "ExtraSmall",
])
