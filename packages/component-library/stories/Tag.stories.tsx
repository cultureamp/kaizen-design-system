import * as React from "react"

import { loadElmStories } from "@cultureamp/elm-storybook"
import { Tag } from "@cultureamp/kaizen-component-library/draft"

loadElmStories("Tag (Elm)", module, require("./TagStories.elm"), [
  "Default - Medium",
  "Default - Small",
  "Default - Dismissible",
  "Validation - Medium, Cautionary, Dismissible",
  "Validation - Small, Cautionary, Dismissible",
  "Validation - Medium, Cautionary, Dismissible, Truncated",
  "Validation - Small, Cautionary, Dismissible, Truncated",
  "Validation - Medium, Negative, Dismissible, Truncated",
])
