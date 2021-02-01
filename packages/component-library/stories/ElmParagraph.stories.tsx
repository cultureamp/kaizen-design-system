import { loadElmStories } from "@cultureamp/elm-storybook"
const compiledElm = require("../ElmStories/ParagraphStories.elm").Elm.ElmStories
  .ParagraphStories

loadElmStories("Paragraph (Elm)", module, compiledElm, [
  "IntroLede",
  "Body",
  "Body Dark Reduced Opacity",
  "Body Positive",
  "Body Negative",
  "Small",
  "ExtraSmall",
])
