import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Divider (Elm)", module, require("./Divider.stories.elm"), [
  "Default",
  "Canvas",
  "Canvas (Reversed)",
  "Content",
  "Content (Reversed)",
])
