import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/HeadingStories.elm").Elm.ElmStories
  .HeadingStories

loadElmStories("Heading (Elm)", module, compiledElm, [
  "Display0",
  "Heading1",
  "Heading2",
  "Heading3",
  "Heading4",
  "Heading5",
  "Heading6",
  "HeadingWithDataAttr",
  "HeadingWithCustomClass",
  "HeadingWithPositiveColor",
])
