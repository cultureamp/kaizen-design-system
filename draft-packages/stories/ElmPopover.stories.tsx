import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Popover (Elm)", module, require("./PopoverStories.elm"), [
  "Default",
  "Informative",
  "Positive",
  "Negative",
  "Cautionary",
  "Dismissible",
  "Arrow above",
  "Arrow start",
  "Arrow end",
])
