import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Tooltip (Elm)", module, require("./TooltipStories.elm"), [
  "Default - Below",
  "Default - Above",
])
