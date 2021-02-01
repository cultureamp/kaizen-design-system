import { loadElmStories } from "@cultureamp/elm-storybook"
const compiledElm = require("../ElmStories/WellStories.elm").Elm.ElmStories
  .WellStories

loadElmStories("Well (Elm)", module, compiledElm, [
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
