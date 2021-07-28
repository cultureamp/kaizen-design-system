import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/HeadingStories.elm").Elm.ElmStories
  .HeadingStories

loadElmStories("Elm/Heading", module, compiledElm, [
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
