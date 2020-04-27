import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Select (Elm)", module, require("./SelectStories.elm"), [
  "Single (Kaizen Site Demo)",
  "Single Searchable",
  "Multi-Select Searchable",
])
