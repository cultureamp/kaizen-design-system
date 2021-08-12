import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"
const compiledElm = require("../ElmStories/WellStories.elm").Elm.ElmStories
  .WellStories

loadElmStories(`${CATEGORIES.elm}/Well`, module, compiledElm, [
  "Default with solid border",
  "Default with dashed border",
  "Default without border",
  "Default with no margin",
  "Positive",
  "Negative",
  "Informative",
  "Cautionary",
  "Informative with dashed border",
])
