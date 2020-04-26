import { loadElmStories } from "@cultureamp/elm-storybook"

loadElmStories("Paragraph (Elm)", module, require("./Paragraph.stories.elm"), [
  "IntroLede",
  "Body",
  "Body Dark Reduced Opacity",
  "Body Positive",
  "Body Negative",
  "Small",
  "ExtraSmall",
])
