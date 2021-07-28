import { loadElmStories } from "elm-storybook"
const compiledElm = require("../ElmStories/ParagraphStories.elm").Elm.ElmStories
  .ParagraphStories

loadElmStories("Elm/Paragraph", module, compiledElm, [
  "IntroLede",
  "Body",
  "Body Dark Reduced Opacity",
  "Body Positive",
  "Body Negative",
  "Small",
  "ExtraSmall",
])
