import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Icon (Elm)", module, require("./Icon.stories.elm"), [
  "Meaningful",
  "Presentational",
  "Inherit Size",
])
