import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../src/ElmStories/ProgressBarStories.elm").Elm
  .ElmStories.ProgressBarStories

loadElmStories(`${CATEGORIES.elm}/ProgressBar`, module, compiledElm, [
  "Positive",
  "Informative",
  "Negative",
  "Cautionary",
])
