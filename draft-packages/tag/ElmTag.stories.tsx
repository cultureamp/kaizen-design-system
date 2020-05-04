import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Tag (Elm)", module, require("./TagStories.elm"), [
  "Default - Medium",
  "Default - Small",
  "Sentiment - Positive",
  "Sentiment - Neutral",
  "Sentiment - Negative",
  "Sentiment - None",
  "Validation - Positive",
  "Validation - Informative",
  "Validation - Negative",
  "Validation - Cautionary",
  "Truncated",
  "Truncated - Dismissible",
  "Inline",
  "Inline - Dismissible",
  "Status - Live",
  "Status - Draft",
  "Status - Closed",
  "Status - Action",
])
