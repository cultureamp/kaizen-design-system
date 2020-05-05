import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("TextField (Elm)", module, require("./TextFieldStories.elm"), [
  "Default",
  "Default /w icon",
])
