import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/TextFieldStories.elm").Elm.ElmStories
  .TextFieldStories

loadElmStories(`${CATEGORIES.elm}/Text Field`, module, compiledElm, [
  "Default",
  "Default, Controlled, Prefilled Value",
  "Default, Uncontrolled, Prefilled Value",
  "Default /w icon",
  "Default /w string description",
  "Default /w html description",
])
