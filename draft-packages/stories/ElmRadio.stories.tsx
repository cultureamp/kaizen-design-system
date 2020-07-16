import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Radio (Elm)", module, require("./RadioStories.elm"), [
  "Interactive",
  "Unselected disabled",
  "Unselected default",
  "Selected default",
  "Selected disabled",
  "RTL",
])
