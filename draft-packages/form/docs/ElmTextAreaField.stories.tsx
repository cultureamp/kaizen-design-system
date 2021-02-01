import { loadElmStories } from "@cultureamp/elm-storybook"

const compiledElm = require("../ElmStories/TextAreaFieldStories.elm").Elm
  .ElmStories.TextAreaFieldStories

loadElmStories("TextAreaField (Elm)", module, compiledElm, [
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
