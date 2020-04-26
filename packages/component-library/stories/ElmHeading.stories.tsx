import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Heading (Elm)", module, require("./Heading.stories.elm"), [
  "Display0",
  "Heading1",
  "Heading2",
  "Heading3",
  "Heading4",
  "Heading5",
  "Heading6",
  "HeadingWithDataAttr",
  "HeadingWithCustomClass",
  "HeadingWithPositiveColor",
])
