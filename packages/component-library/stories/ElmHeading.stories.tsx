import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/HeadingStories.elm").Elm.ElmStories
  .HeadingStories

loadElmStories(`${CATEGORIES.elm}/Heading`, module, compiledElm, [
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
