import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("RadioField (Elm)", module, require("./RadioFieldStories.elm"), [
  "Interactive",
  "Unselected disabled",
  "Unselected default",
  "Selected default",
  "Selected disabled",
  "RTL",
])
