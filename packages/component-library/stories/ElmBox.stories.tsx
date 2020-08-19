import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Box (Elm)", module, require("./Box.stories.elm"), [
  "Box Default",
  "Box With Margin",
  "Box With Padding",
  "Box With X And Y Padding",
])
