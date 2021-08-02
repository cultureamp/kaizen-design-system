import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/TextAreaFieldStories.elm").Elm
  .ElmStories.TextAreaFieldStories

loadElmStories(`${CATEGORIES.elm}/Text Area Field`, module, compiledElm, [
  "Default",
  "Default, Controlled, Prefilled Value",
  "Default, Uncontrolled, Prefilled Value",
  "Default, Description",
  "Default, Error",
  "Default, Error & Description",
  "Default, Reversed",
  "Default, Reversed, Error",
  "Default, Reversed, Error & Description",
])
