import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("TextField (Elm)", module, require("./TextFieldStories.elm"), [
  "Default",
  "Default, Controlled, Prefilled Value",
  "Default, Uncontrolled, Prefilled Value",
  "Default /w icon",
  "Default /w string description",
  "Default /w html description",
])
