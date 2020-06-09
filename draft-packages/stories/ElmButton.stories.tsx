import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Button (Zen) (Elm)", module, require("./Button.stories.elm"), [
  "Default",
  "Primary",
  "Secondary",
  "Destructive",
  "Destructive w/ Icon",
  "Secondary Destructive",
  "Secondary Destructive w/ Icon",
])
