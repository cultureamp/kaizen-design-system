import { loadElmStories } from "elm-storybook"
import { CATEGORIES } from "../../../storybook/constants"

const compiledElm = require("../ElmStories/CheckboxFieldStories.elm").Elm
  .ElmStories.CheckboxFieldStories

loadElmStories(`${CATEGORIES.elm}/Checkbox Field`, module, compiledElm, [
  "On",
  "Mixed",
  "Off",
  "Disabled + on",
  "Disabled + mixed",
  "Disabled + off",
  "with bottom margin",
  "without bottom margin",
  "with description",
  "with description + reversed",
  "On + reversed",
  "Disabled, on + reversed",
  "Disabled, off + reversed",
  "Disabled, mixed + reversed",
  "On + reversed",
  "Off + reversed",
  "Mixed + reversed",
  "Error",
  "Error, Reversed",
])
