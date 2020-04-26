import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Text (Elm)", module, require("./TextStories.elm"), [
  "h1",
  "h2",
  "h3",
  "zen-display-0",
  "zen-heading-1",
  "zen-heading-3",
  "zen-heading-3",
  "zen-data-large",
  "zen-data-large-units",
  "zen-data-medium",
  "zen-data-medium-units",
  "zen-data-small",
  "zen-data-small-units",
])
