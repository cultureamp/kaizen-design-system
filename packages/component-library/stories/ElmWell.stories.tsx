import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Well (Elm)", module, require("./Well.stories.elm"), [
  "Default with solid border",
  "Default with dashed border",
  "Default without border",
  "Default with no margin",
  "Positive",
  "Negative",
  "Informative",
  "Cautionary",
  "Informative with dashed border",
])
