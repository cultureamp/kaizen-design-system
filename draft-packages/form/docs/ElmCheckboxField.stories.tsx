import { loadElmStories } from "elm-storybook"

const compiledElm = require("../ElmStories/CheckboxFieldStories.elm").Elm
  .ElmStories.CheckboxFieldStories

loadElmStories("CheckboxField (Elm)", module, compiledElm, [
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
