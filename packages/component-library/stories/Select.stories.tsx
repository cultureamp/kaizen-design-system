import { loadElmStories } from "@cultureamp/elm-storybook"
import * as React from "react"

loadElmStories("Select (Elm)", module, require("./SelectStories.elm"), [
  "Single",
  "Single Searchable",
  "Multi-Select Searchable",
])
